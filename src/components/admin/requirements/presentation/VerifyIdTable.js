import React from 'react'
import { Table, Card, Row, Col, Collapse, Button, Tag } from 'antd'
import Moment from 'react-moment'
//import { isEmpty } from 'lodash'

export default ({record, accept, showRejectForm}) => {
  const columns = [
    { title: 'Client', dataIndex: 'individual.firstName', key: 'client' },
    { title: 'Birthdate', dataIndex: 'individual.birthDate', key: 'birthdate',  render:(text,record)=> <Moment format="MMMM D, Y" date={record.individual.birthDate}/>  },
    { title: 'Date Requested', dataIndex: 'createdAt', key: 'requested', render:(text,record)=> <Moment format="MMMM D, Y h:mm A" date={record.createdAt}/> },
    { title: '', dataIndex: '', width: 100, key: 'accept', render: (text, record) =>
      { return record.status === 'accepted'
        ? <Tag color="green">Accepted</Tag>
        : <Button data-id={record.id} onClick={ accept } size="small" type="primary" disabled={record.status ==='rejected'}>Accept</Button>
      }
    },
    { title: '', dataIndex: '', width: 100, key: 'decline', render: (text, record) =>
      { return record.status === 'rejected'
        ? <Tag color="red">Rejected</Tag>
        : <Button data-id={record.id} onClick={ showRejectForm } size="small" disabled={record.status ==='accepted'}>Reject</Button>
      }
    }
  ];
  return(
    <Table
      title={() => (
      <div>
        <h1>Verify Photo <span style={{fontSize:'14px'}}>Selfie while holding valid ID</span></h1>
      </div>)}
      rowKey="id"
      columns={columns}
      dataSource={record}
      //onExpand={(expanded, record) => handleSelected(record.individual.user)}
      expandedRowRender={record => {
        console.log(record)
        let Photos = record.content
        let User = record.metadata
        let Address = record.individual.completeAddress
       
        return (
          <Row gutter={5}>
            <Col span={12}>
              <Row gutter={5}>
                {Photos.files.map((photo, index)=>(
                  <Col key={index} span={12}>
                    <Card hoverable>
                      <img alt={photo.url} src={photo.url} style={{width:'100%'}}/>
                      <p>{photo.name}</p>
                    </Card>
                  </Col>
                ))}
                </Row>
            </Col>
            <Col span={12}>
              <Card>
                <Collapse bordered={false} defaultActiveKey={['1', '2']}>
                  <Collapse.Panel header="ID Information" key="1">
                    <p>ID Type: {Photos.idType}</p>
                    <p>ID Number: {Photos.idNo}</p>
                  </Collapse.Panel>
                  <Collapse.Panel header="User Information" key="2">
                    <p>First Name: {User.firstName}</p>
                    <p>Last Name: {User.lastName}</p>
                    <p>Middle Name: {User.middleName}</p>
                    <p>Birthdate: {User.birthDate}</p>
                    <p>Email: {User.email}</p>
                    <p>Phone: +{User.phone}</p>
                  </Collapse.Panel>
                  <Collapse.Panel header="User Address" key="3">
                    <p>Country: {Address.country}</p>
                    <p>Province: {Address.province}</p>
                    <p>City: {Address.city}</p>
                    <p>Street: {Address.street}</p>
                  </Collapse.Panel>
                </Collapse>
              </Card>
            </Col>
          </Row>
        )
      }}
    />
  )
}
