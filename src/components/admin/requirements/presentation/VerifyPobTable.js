import React from 'react'
import { Table, Card, Row, Col, Divider, Button, Tag } from 'antd'

export default ({record, accept, decline}) => {
  const columns = [
    { title: 'Client', dataIndex: 'individual.firstName', key: 'client' },
    { title: 'Birthdate', dataIndex: 'individual.birthDate', key: 'birthdate' },
    { title: 'Date Requested', dataIndex: 'createdAt', key: 'requested' },
    { title: '', dataIndex: '', width: 100, key: 'accept', render: (text, record) =>
      { return record.status === 'accepted'
        ? <Tag color="green">Accepted</Tag>
        : <Button data-id={record.id} onClick={ accept } size="small" type="primary" disabled={record.status ==='rejected'}>Accept</Button>
      }
    },
    { title: '', dataIndex: '', width: 100, key: 'decline', render: (text, record) =>
      { return record.status === 'rejected'
        ? <Tag color="red">Rejected</Tag>
        : <Button data-id={record.id} onClick={ decline } size="small" disabled={record.status ==='accepted'}>reject</Button>
      }
    }
  ];
  return(
    <Table
      title={() => (
      <div>
        <h1>Verify Proof of billing</h1>
      </div>)}
      rowKey="id"
      columns={columns}
      dataSource={record}
      expandedRowRender={record => {
        let Photos = JSON.parse(record.payload)
        return (
          <Row>
            <Col span={12}>
              <Row>
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
                <p>First Name: {record.individual.firstName}</p>
                <p>Last Name: {record.individual.lastName}</p>
                <p>Birthdate: {record.individual.birthDate}</p>
                <p>Phone: +{record.individual.phone}</p>
                <Divider/>
                {record.individual.completeAddress !== null ?
                  <div>
                    <p>Street: {record.individual.completeAddress.street}</p>
                    <p>City: {record.individual.completeAddress.city}</p>
                    <p>Country: {record.individual.completeAddress.country}</p>
                    <p>Region: {record.individual.completeAddress.region}</p>
                  </div> : ''}
              </Card>
            </Col>
          </Row>
        )
      }}
    />
  )
}
