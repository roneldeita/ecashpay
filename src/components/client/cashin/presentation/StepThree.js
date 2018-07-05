import React from 'react'
import {Card, Button, Col, Row, Divider, Icon, Tag, Popconfirm} from 'antd'
import {isEmpty} from 'lodash'

const Title = {
  fontSize:'28px',
  fontWeight: 300,
  textAlign: 'center'
}
const DividerStyle = {
  margin:'10px 0px'
}
const rightContent = {
  textAlign:'right'
}
const Info ={
  color:'rgb(29, 161, 242)'
}

const StepThree = ({transaction, confirm}) => {
  const Status = (status) => {
    switch(status){
      case 0:
        return <Tag color="blue">Payment pending</Tag>
      case 1:
        return <Tag color="green">Done</Tag>
      case 2:
        return <Tag>Canceled</Tag>
      default:
        //
    }
  }
  return(
    <Card loading={isEmpty(transaction)} hoverable  style={{cursor:'default '}}>
      <p style={Title}>Complete your payment</p>
      <ol>
        <li>
          <p>Complete payment at any <span style={{fontWeight:600}}>{transaction.outletName}</span> branch to the following account</p>
          <ul>
            <li>Amount due: <span style={{fontWeight:600}}>{transaction.totalAmount}</span></li>
            <li>Account name: <span style={{fontWeight:600}}>ECASHPAY INC.</span></li>
            <li>Account number: <span style={{fontWeight:600}}>000910028667</span></li>
            <li>Account type: <span style={{fontWeight:600}}>CHECKING</span></li>
          </ul>
          <br/>
          <p>Please ensure the amount and reference number match your order. Check deposits and payments through third-party agents and international wire transfer are not accepted.</p>
        </li>
        <li>
          <p>After completing your payment, click on Mark as paid button.</p>
          <div style={{textAlign:'center'}}>
            <Popconfirm placement="leftBottom" title="Are you sure you want to cancel this order?" onConfirm={confirm} okText="Yes" cancelText="No">
              <Button style={{marginRight:'8px'}}>Cancel</Button>
            </Popconfirm>,
            <Button type="primary">Mark as paid</Button>
          </div>
        </li>
      </ol>
      <Row style={{marginTop:'50px'}} type="flex" justify="center">
        <Col span={20}>
          <Row>
            <Col span={12}>Status</Col>
            <Col span={12} style={rightContent}>{Status(transaction.status)}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Recieving Currency</Col>
            <Col span={12} style={rightContent}>{transaction.currency}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>You will Receive</Col>
            <Col span={12} style={rightContent}>{transaction.amount +' '+ transaction.currency}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Ecashpay fee <Icon type="info-circle" style={Info}/></Col>
            <Col span={12} style={rightContent}>{'0 ' + transaction.currency}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Merchant Service fee <Icon type="info-circle" style={Info}/></Col>
            <Col span={12} style={rightContent}>{transaction.fee +' '+ transaction.currency }</Col>
          </Row>
          <Divider style={DividerStyle}/>
          <Row>
            <Col span={12}><b>Amount Due</b></Col>
            <Col span={12} style={rightContent}><b>{parseFloat(transaction.amount)+parseFloat(transaction.fee) +' '+ transaction.currency}</b></Col>
          </Row>
          <Row style={{marginTop:'30px', marginBottom:'20px'}}>
            <Col span={24} style={{fontSize:'20px', fontWeight:200}}>
              Having a problem with this transaction? <a>Contact us.</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default StepThree
