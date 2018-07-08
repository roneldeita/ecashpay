import React from 'react'
import { Table, Card, Row, Col, Divider, Button, Tag } from 'antd'
import Moment from 'react-moment'
import { isEmpty } from 'lodash'

export default ({record, accept, reject}) => {
  console.log(record)
  const columns = [
    { title: 'Transaction Number', dataIndex: 'transaction.no', key: 'transaction_no' },
    { title: 'Payment via', dataIndex: 'transaction.outletName', key: 'payment' },
    { title: 'Payment Posted on', dataIndex: 'createdAt', key: 'requested', render:(text,record)=> <Moment format="MMMM D, Y h:mm A" date={record.createdAt}/> },
    { title: '', dataIndex: '', width: 100, key: 'accept', render: (text, record) =>
      { return record.status === 1
        ? <Tag color="green">Accepted</Tag>
        : <Button data-id={record.id} onClick={ accept } size="small" type="primary" disabled={record.status ===2}>Accept</Button>
      }
    },
    { title: '', dataIndex: '', width: 100, key: 'decline', render: (text, record) =>
      { return record.status === 2
        ? <Tag color="red">For Reupload</Tag>
        : <Button data-id={record.id} onClick={ reject } size="small" disabled={record.status ===1}>Don't match</Button>
      }
    }
  ];
  return(
    <Table
      title={() => (
      <div>
        <h1>Cash In <span style={{fontSize:'14px'}}>/ payments</span></h1>
      </div>)}
      rowKey="id"
      columns={columns}
      loading={isEmpty(record)}
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
                <p>Transaction No: {record.transaction.no}</p>
                <p>Category: {record.transaction.outletCategory}</p>
                <p>Via: {record.transaction.outletName}</p>
                <p>Transaction Date: {record.transaction.createdAt}</p>
                <Divider/>
                <p>Currency: {record.transaction.currency}</p>
                <p>Amount: {record.transaction.amount}</p>
              </Card>
            </Col>
          </Row>
        )
      }}
    />
  )
}
