import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Divider, Tag, Badge, Icon, Popover, Row, Col } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { startCase } from 'lodash'
import moment from 'moment';
//import 'moment-timezone';
import {isEmpty} from 'lodash'

export default ({transactions, profile}) => {
  const PopOverContent = (
    <div>
      Listanhan ng transaction sa loob ng tatlong buwan
    </div>
  )
  const Title = (
    <div>
      Transaction History
      <Popover placement="right" title="Titolo" content={PopOverContent} trigger="click">
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
    <QueueAnim type={['bottom', 'top']} delay="500" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0" style={{marginTop:'50px'}}>
        <Row type="flex" justify="center">
          <Col className="" xs={23} sm={23} md={20} lg={18} xl={16}>
            <Card
              hoverable
              style={{cursor:'default '}}
              title={Title}>
              <List
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
                  return(
                    <List.Item actions={[Status(item.status)]}>
                      <Link style={{color:'rgba(0,0,0,.65)'}}  to={`/${PageRoute()}/transactions/${item.no}`}>
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
                    </Link>
                  </List.Item>)
                }}/>
            </Card>
          </Col>
        </Row>
      </div>
    </QueueAnim>
  )
}