import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Divider, Tag, Badge, Icon,Popover } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { startCase } from 'lodash'
import moment from 'moment'
//import 'moment-timezone';
import {isEmpty} from 'lodash'

export default ({transactions, profile}) => {
  const PopOverContent = (
    <div>
      <Badge status="success" text="Completed"/>
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
      Recent activity
      <Popover placement="right" title="Trasaction Status Legend" content={PopOverContent} trigger="click">
        <Icon type="info-circle-o" style={{marginLeft:'5px'}}/>
      </Popover>
    </div>
  )
  const Status = (status) => {
    switch(status){
      case 'pending'://0
        return <Tag color="blue">Payment pending</Tag>
      case 'completed'://1
        return <Tag color="green">Completed</Tag>
      case 'cancelled'://2
        return <Tag>Cancelled</Tag>
      case 'expired'://3
        return <Tag>Expired</Tag>
      case 'processing'://4
        return <Tag color="blue">Verifying your payment</Tag>
      case 'rejected'://5
        return <Tag color="orange">Payment Rejected</Tag>
      default:
        //
    }
  }
  const BadgeStatus = (status) => {
    switch(status){
      case 'pending':
        return 'processing'
      case 'completed':
        return 'success'
      case 'cancelled':
        return 'default'
      case 'expired':
        return 'default'
      case 'processing':
        return 'processing'
      case 'rejected':
        return 'warning'
      default:
        //
    }
  }
  return(
    <QueueAnim type={['bottom', 'top']} delay="1000" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Card
          hoverable
          extra={<Link to='/client/history' >View History</Link>}
          style={{cursor:'default '}}
          title={Title}>
          <List
            size="small"
            itemLayout="horizontal"
            dataSource={transactions}
            pagination={{
              size:"small",
              showQuickJumper:false,
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 10
            }}
            renderItem={ item => {
              const PageRoute = () => {
                if(item.type === 'cashIn'){
                  return 'cash-in'
                }else{
                 return item.type 
                }
              }
              return(<Link to={`/${PageRoute()}/transactions/${item.no}`}>
                <List.Item style={{color:'rgba(0,0,0,.65)'}} actions={[Status(item.status)]}>
                  <div>
                    <Badge status={BadgeStatus(item.status)} />
                    {moment(item.createdAt).format('MMM D')}<Divider type="vertical"/>
                    {moment(item.createdAt).format('h:mma')}<Divider type="vertical"/>
                    {item.type === 'cashIn' && item.entryType === 'debit' && <span>{startCase(item.type)} via {item.outletName}</span>}
                    {item.type === 'transfer' && item.entryType === 'debit' && <span>Recieved from {item.sourceAccount}</span>}
                    {item.type === 'transfer' && item.entryType === 'credit' && <span>Transfer to {item.targetAccount}</span>}
                    {item.type === 'payment' && item.entryType === 'credit' && <span>Payment to {!isEmpty(item.metadata) ? item.metadata.store.name : 'Merchant'}</span>}
                    (<span style={{color:'#999999'}}>{item.currency}{item.amount}
                        <span>
                          {item.type === 'cashIn' ? '+'+item.currency + parseFloat(item.totalFee).toFixed(2): ''}
                          {item.type === 'transfer' && item.sourceAccount === profile.account ? '+'+item.currency +item.totalFee : ''}
                        </span>
                    </span>)
                  </div>
                </List.Item>
              </Link>)
            }}/>
        </Card>
      </div>
    </QueueAnim>
  )
}

