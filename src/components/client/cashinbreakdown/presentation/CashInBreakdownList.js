import React from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Divider, Row, Col } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { startCase } from 'lodash'
import moment from 'moment';
//import 'moment-timezone';
import {isEmpty} from 'lodash'

export default ({transactions, profile}) => {
 
  return(
    <QueueAnim type={['bottom', 'top']} delay="500" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0" style={{marginTop:'50px'}}>
        <Row type="flex" justify="center">
          <Col className="" xs={23} sm={23} md={18} lg={16} xl={14}>
            <Card
              hoverable
              style={{cursor:'default '}}
              title="Cash In Breakdown">
              <List
                size="small"
                dataSource={transactions}
                renderItem={ item => {
                  const PageRoute = () => {
                    if(item.type === 'cashIn'){
                      return 'cash-in'
                    }else{
                    return item.type 
                    }
                  }
                  return(
                    <List.Item style={{color:'rgba(0,0,0,.65)'}}>
                      <List.Item.Meta
                        title={
                          <Link to={`/${PageRoute()}/transactions/${item.no}`}>
                            <div>
                              {item.type === 'cashIn' && item.entryType === 'debit' && <span>{startCase(item.type)} via {item.outletName}</span>}
                              {item.type === 'transfer' && item.entryType === 'debit' && <span>Recieved from {item.sourceAccount}</span>}
                              {item.type === 'transfer' && item.entryType === 'credit' && <span>Transfer to {item.targetAccount}</span>}
                              {item.type === 'payment' && item.entryType === 'credit' && <span>Payment to {!isEmpty(item.metadata) ? item.metadata.store.name : 'Merchant'}</span>}
                            </div>
                          </Link>
                        }
                        description={
                          <div>
                            {moment(item.createdAt).format('MMM D')}<Divider type="vertical"/>{moment(item.createdAt).format('h:mma')}
                          </div>
                        }
                      />
                      <div>
                        {item.currency} <span style={{fontWeight:600}}>{item.amount}</span>
                      </div>
                    </List.Item>)
                }}/>
            </Card>
          </Col>
        </Row>
      </div>
    </QueueAnim>
  )
}