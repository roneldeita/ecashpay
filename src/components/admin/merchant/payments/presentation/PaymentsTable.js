import React from 'react'
import { Table, Card, Row, Col, Divider, Button, Tag } from 'antd'
import Moment from 'react-moment'

export default ({record, accept, decline}) => {
  console.log(record)
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
        <h1>Payments <span style={{fontSize:'14px'}}>verification</span></h1>
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
              <Card>
                <p>Contact: {record.contact}</p>
                <p>Website: {record.website}</p>
                <Divider/>
                <p>Street: {record.completeAddress.street}</p>
                <p>City: {record.completeAddress.city}</p>
                <p>Region / Province / State: {record.completeAddress.region}</p>
                <p>Country: {record.completeAddress.country}</p>
                <p>Zip Code: {record.completeAddress.zip}</p>
                {/*<p>Transaction No: {record.transaction.no}</p>
                <p>Category: {record.transaction.outletCategory}</p>
                <p>Via: {record.transaction.outletName}</p>
                <p>Transaction Date: {record.transaction.createdAt}</p>
                <Divider/>
                <p>Currency: {record.transaction.currency}</p>
                <p>Amount: {record.transaction.amount}</p>*/}
              </Card>
            </Col>
          </Row>
        )
      }}
    />
  )
}
