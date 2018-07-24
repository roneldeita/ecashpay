import React from 'react'
import { Table, Card, Row, Col, Divider, Button, Tag } from 'antd'
import Moment from 'react-moment'

export default ({record, accept, decline, selected, handleSelected}) => {
  const columns = [
    { title: 'Merchant Name', dataIndex: 'name', key: 'name' },
    { title: 'Created at', dataIndex: 'createdAt', key: 'createdat', render:(text,record)=> <Moment format="MMMM D, Y h:mm A" date={record.createdAt}/> },
    { title: '', dataIndex: '', width: 100, key: 'accept', render: (text, record) =>
      { return record.status === 'completed'
        ? <Tag color="green">Accepted</Tag>
        : <Button data-id={record.id} onClick={ accept } size="small" type="primary" disabled={record.status === 'rejected'}>Accept</Button>
      }
    },
    { title: '', dataIndex: '', width: 100, key: 'decline', render: (text, record) =>
      { return record.status === 'rejected'
        ? <Tag color="red">For Reupload</Tag>
        : <Button data-id={record.id} onClick={ decline } size="small" disabled={record.status === 'completed'}>Reject</Button>
      }
    }
  ];
  return(
    <Table
      title={() => (
      <div>
        <h1>Merchant <span style={{fontSize:'14px'}}>New Accounts</span></h1>
      </div>)}
      rowKey="id"
      columns={columns}
      dataSource={record}
      onExpand={(expanded, record) => handleSelected(record.user)}
      expandedRowRender={record => {
        let Photos = JSON.parse(record.payload)
        return (
          <Row gutter={10}>
            <Col span={12}>
              <Row>
                {Photos.files.map((file, index)=>(
                  <Col key={index} span={12}>
                    <Card hoverable>
                      <img alt={file.url} src={file.url} style={{width:'100%'}}/>
                      <p>{file.name}</p>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col span={12}>
              <Card title={record.name}>
                <Divider orientation="left">Contact Details</Divider>
                <p>Email: {selected.email}</p>
                <p>Contact: {record.contact}</p>
                <p>Website: {record.website}</p>
                <Divider orientation="left">Address</Divider>
                <p>Street: {record.completeAddress.street}</p>
                <p>City: {record.completeAddress.city}</p>
                <p>Region / Province / State: {record.completeAddress.region}</p>
                <p>Country: {record.completeAddress.country}</p>
                <p>Zip Code: {record.completeAddress.zip}</p>
              </Card>
            </Col>
          </Row>
        )
      }}
    />
  )
}
