import React from 'react'
import {Card, Col, Row, Button, Icon, Divider, Form, Input, Popover} from 'antd'
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
  const EmailError = getFieldError('Amount');
  const validate = (event) => {
    event.preventDefault()
    form.validateFields((err, values) => {
      if(!err){
        next()
      }
    })
    //event.preventDefault()
  }
  return(
    <Card style={visibility ? Show : Hide}>
      <p style={Title}>How much would you like to Cash In?</p>
      <Form onSubmit={validate} autoComplete="off">
        <Row type="flex" justify="center">
          <Col span={14}>
            <FormItem
              hasFeedback={isFieldTouched('Amount')}
              validateStatus={EmailError ? 'error' : ''}
              help={EmailError || ''}>
              {getFieldDecorator('Amount', {
                rules: [
                  { required: true },
                  { pattern: /^(0|[1-9][0-9]*)$/, message: 'Invalid Amount'}
                ],
              })(
                <Input type="number" size="large" min="0" placeholder="Enter Amount" onChange={changeAmount}/>
              )}
              <Button type="primary" htmlType="submit" id="SubmitButton" style={{display:'none'}}>Submit</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Row style={{marginTop:'50px'}} type="flex" justify="center">
        <Col span={24}>
          <Row>
            <Col span={12}>Channel</Col>
            <Col span={12} style={rightContent}>{data.merchant.name}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Recieving Currency</Col>
            <Col span={12} style={rightContent}>Philippine Peso (PHP)</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>You will receive</Col>
            <Col span={12} style={rightContent}>{data.amount ? data.amount + ' PHP' : '' }</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Ecashpay fee{` `}
              <Popover placement="right" content="This helps us run our platform and offer services like live support." trigger="click">
                <Icon type="info-circle" style={Info}/>
              </Popover>
            </Col>
            <Col span={12} style={rightContent}>{data.rate !== 0 ? parseFloat(data.rate) + ' PHP' : '0 PHP'}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Channel Service fee{` `}
              <Popover placement="right" content="This goes out to our channel partners as payment for their services" trigger="click">
                <Icon type="info-circle" style={Info}/>
              </Popover>
            </Col>
            <Col span={12} style={rightContent}>{data.merchant.fee + ' PHP' }</Col>
          </Row>
          <Divider style={DividerStyle}/>
          <Row>
            <Col span={12}><b>Amount Due</b></Col>
            <Col span={12} style={rightContent}><b>{data.amount ? (parseFloat(data.amount)+parseFloat(data.merchant.fee)+parseFloat(data.rate)) + ' PHP' : '' }</b></Col>
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
