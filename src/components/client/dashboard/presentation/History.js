import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Divider, Tag, Badge, Icon,Popover } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { startCase } from 'lodash'
import Moment from 'react-moment';
//import 'moment-timezone';
//import {isEmpty} from 'lodash'

export default ({transactions}) => {
  const PopOverContent = (
    <div>
      <Badge status="success" text="Completed" />
      <br />
      <Badge status="processing" text="Verifying/Pending Payment" />
      <br />
      <Badge status="default" text="Canceled/Expired" />
      <br />
      <Badge status="warning" text="Payment Rejected" />
    </div>
  )
  const Title = (
    <div>
      Transaction History
      <Popover placement="top" title="Trasaction Status Legend" content={PopOverContent} trigger="click">
        <Icon type="info-circle-o" style={{marginLeft:'5px'}}/>
      </Popover>
    </div>
  )
  const Status = (status) => {
    switch(status){
      case 0:
        return <Tag color="blue">Payment pending</Tag>
      case 1:
        return 'Completed'
      case 2:
        return <Tag>Canceled</Tag>
      case 3:
        return <Tag>Expired</Tag>
      case 4:
        return <Tag color="blue">Verifying your payment</Tag>
      case 5:
        return <Tag color="orange">Payment Rejected</Tag>
      default:
        //
    }
  }
  const BadgeStatus = (status) => {
    switch(status){
      case 0:
        return 'processing'
      case 1:
        return 'success'
      case 2:
        return 'default'
      case 3:
        return 'default'
      case 4:
        return 'processing'
      case 5:
        return 'warning'
      default:
        //
    }
  }
  return(
    <QueueAnim type={['bottom', 'top']} delay="400" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Card
          hoverable
          style={{cursor:'default '}}
          title={Title}>
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={transactions}
            pagination={{
              size:"small",
              showQuickJumper:true,
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 10
            }}
            renderItem={ item => (
              <List.Item actions={[<Link to={`/client/transactions/${item.no}`}>{Status(item.status)}</Link>]}>
                <div>
                  <Badge status={BadgeStatus(item.status)} /><Moment format="MMM D" date={item.createdAt} style={{fontSize:'20px'}}/>
                  <Divider type="vertical"/>
                  {startCase(item.type)} via {item.outletName} - <span style={{color:'#999999'}}>{item.currency}</span>{item.totalAmount}
                </div>
              </List.Item>
            )}/>
        </Card>
      </div>
    </QueueAnim>
  )
}
