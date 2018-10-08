import React from 'react'
import { Table, Card, Row, Col, Collapse, Dropdown,Menu } from 'antd'
import { capitalize } from 'lodash'
import moment from 'moment'

export default ({record, handleAction}) => {
  const columns = [
    { title: 'Client', dataIndex: 'individual.firstName', key: 'client' },
    { title: 'Date Requested', dataIndex: 'createdAt', key: 'requested', render:(text,record)=> moment(record.createdAt).format('MMMM D, Y h:mm A')},
    { title: '', dataIndex: '', width: 100, key: 'action', render: (text, record) =>
      {
        const menu = (
          <Menu onClick={handleAction}>
            <Menu.Item data-status='accepted' data-id={record.id}>
              <a>Accept</a>
            </Menu.Item>
            <Menu.Item data-status='expired' data-id={record.id}>
              <a>Set as expired</a>
            </Menu.Item>
            <Menu.Item data-status='forVerification' data-id={record.id}>
              <a>For further verification</a>
            </Menu.Item>
          </Menu>
        );
        return record.status === 'pending' && record.content.status === 'pending' &&
        <Dropdown.Button overlay={menu}>Pending</Dropdown.Button>
      }
    },
    { title: 'Status', dataIndex: '', width: 100, key: 'reschedule', render: (text, record) =>
      { return record.status }
    },
    { title: 'FtfStatus', dataIndex: '', width: 100, key: 'accept', render: (text, record) =>
      { return record.content.status}
    }
    // ,
    // { title: '', dataIndex: '', width: 100, key: 'decline', render: (text, record) =>
    //   { return record.status === 'rejected'
    //     ? <Tag color="red">Rejected</Tag>
    //     : <Button data-id={record.id} onClick={ showRejectForm } size="small" disabled={record.status ==='accepted' || record.status ==='reschedule'}>Reject</Button>
    //   }
    // }
  ];
  return(
    <Table
      title={() => (
      <div>
        <h1>Face-to-face Verification <span style={{fontSize:'14px'}}>Validate user via video call</span></h1>
      </div>)}
      rowKey="id"
      columns={columns}
      dataSource={record}
      //onExpand={(expanded, record) => handleSelected(record.individual.user)}
      expandedRowRender={record => {
        console.log(record)
        let Content = record.content
        let User = record.metadata
       
        return (
          <Row gutter={5}>
            <Col span={24}>
              <Card>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                  <Collapse.Panel header="Application Information" key="1">
                    <p>Application: {capitalize(Content.application)}</p>
                    <p>{capitalize(Content.accessType)} : {Content.accessDetails}</p>
                    <p>
                      Schedule: {moment(Content.date).format('MMMM Do YYYY')}
                      {' from '+moment(new Date(Content.date+' '+Content.timeStart)).format('hh:mm a')}
                      {' to '+moment(new Date(Content.date+' '+Content.timeEnd)).format('hh:mm a')}
                    </p>
                  </Collapse.Panel>
                  <Collapse.Panel header="User Information" key="2">
                    <p>First Name: {User.firstName}</p>
                    <p>Last Name: {User.lastName}</p>
                    <p>Middle Name: {User.middleName}</p>
                    <p>Birthdate: {User.birthDate}</p>
                    <p>Email: {User.email}</p>
                    <p>Phone: +{User.phone}</p>
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
