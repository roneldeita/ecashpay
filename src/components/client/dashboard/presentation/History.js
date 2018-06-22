import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Divider, Tag, Badge, Icon,Popover } from 'antd'
import { startCase } from 'lodash'
import Moment from 'react-moment';
//import 'moment-timezone';

export default ({transactions}) => {
  const PopOverContent = (
    <div>
      <Badge status="success" text="Completed" />
      <br />
      <Badge status="processing" text="Pending" />
      <br />
      <Badge status="default" text="Cancelled" />
      <br />
      <Badge status="error" text="Expired" />
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
  return(
    <Card title={Title}>
      <List
        size="small"
        itemLayout="horizontal"
        dataSource={transactions}
        renderItem={ item => (
          <List.Item actions={[<Link to={`/client/transactions/${item.no}`}><Tag>{item.status === 0 ? 'Payment Pending' : 'status'}</Tag></Link>]}>
            <div>
              <Badge status="processing" /><Moment format="MMM D" date={item.createdAt} style={{fontSize:'20px'}}/>
              <Divider type="vertical"/>
              {startCase(item.type)} via {item.outletName} - {item.amount}
            </div>
          </List.Item>
        )}/>
    </Card>
  )
}
