import React from 'react'
import {Card, Col, Row, Button, Icon, Divider, Form, Input} from 'antd'
const FormItem = Form.Item
const Title = {
  fontSize:'28px',
  fontWeight: 300,
  textAlign: 'center'
}
const Show ={
  display: 'block'
}
const Hide ={
  display: 'none'
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
const StepTwo = ({visibility, next, changeAmount, data, prev, form}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  const EmailError =  getFieldError('Amount');
  const validate = (event) => {
    form.validateFields((err, values) => {
      if(!err){
        next();
      }
    })
    event.preventDefault()
  }
  return(
    <Card style={visibility ? Show : Hide}>
      <p style={Title}>Enter Amount</p>
      <Form onSubmit={validate}>
        <Row type="flex" justify="center">
          <Col span={14}>
            <FormItem
              hasFeedback={isFieldTouched('Amount')}
              validateStatus={EmailError ? 'error' : 'success'}
              help={EmailError || ''}>
              {getFieldDecorator('Amount', {
                rules: [
                  { required: true }
                ],
              })(
                <Input type="number" size="large" placeholder="0" onChange={changeAmount}/>
              )}
              <Button type="primary" htmlType="submit" id="SubmitButton" style={{display:'none'}}>Submit</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Row style={{marginTop:'50px'}} type="flex" justify="center">
        <Col span={24}>
          <Row>
            <Col span={12}>Merchant</Col>
            <Col span={12} style={rightContent}>{data.merchant.name}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Recieving Currency</Col>
            <Col span={12} style={rightContent}>Philippine Peso (PHP)</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>You will recieve</Col>
            <Col span={12} style={rightContent}>{data.amount ? data.amount + ' PHP' : '' }</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Ecashpay fee <Icon type="info-circle" style={Info}/></Col>
            <Col span={12} style={rightContent}>{data.amount ? data.amount + ' PHP' : '' }</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Merchant Service fee <Icon type="info-circle" style={Info}/></Col>
            <Col span={12} style={rightContent}>{data.amount ? data.amount + ' PHP' : '' }</Col>
          </Row>
          <Divider style={DividerStyle}/>
          <Row>
            <Col span={12}><b>Amount Due</b></Col>
            <Col span={12} style={rightContent}><b>{data.amount ? data.amount + ' PHP' : '' }</b></Col>
          </Row>
        </Col>
      </Row>
      <div style={{marginTop:'50px'}}>
        <Button onClick={prev}><Icon type="left"/>Prev</Button>
        <Button onClick={() =>{ document.getElementById('SubmitButton').click() }} style={{float:'right'}}type="primary">Next<Icon type="right" /></Button>
      </div>
    </Card>
  )
}

export default StepTwo