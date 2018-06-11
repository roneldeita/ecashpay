import React from 'react'
import { Table, Card, Row, Col, Divider, Button, Tag } from 'antd'
export default ({record, accept, decline}) => {
  console.log(record)
  const columns = [
    { title: 'Client', dataIndex: 'profile.firstName', key: 'client' },
    { title: 'Birthdate', dataIndex: 'profile.birthDate', key: 'birthdate' },
    { title: 'Date Requested', dataIndex: 'createdAt', key: 'requested' },
    { title: '', dataIndex: '', width: 100, key: 'accept', render: (text, record) =>
      { return record.status === 1
        ? <Tag color="green">Accepted</Tag>
        : <Button data-id={record.id} onClick={ accept } type="primary" ghost>Accept</Button>
      }
    },
    { title: '', dataIndex: '', width: 100, key: 'decline', render: record => <Button disabled onClick={decline}>Decline</Button> },
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
                <p>First Name: {record.profile.firstName}</p>
                <p>Last Name: {record.profile.lastName}</p>
                <p>Birthdate: {record.profile.birthDate}</p>
                <p>Phone: +{record.profile.phone}</p>
                <Divider/>
                <p>Address 1: {record.profile.completeAddress.address1}</p>
                <p>Address 2: {record.profile.completeAddress.address2}</p>
                <p>City: {record.profile.completeAddress.city}</p>
                <p>Country: {record.profile.completeAddress.country}</p>
                <p>Region: {record.profile.completeAddress.region}</p>
              </Card>
            </Col>
          </Row>
        )
      }}
    />
  )
}
