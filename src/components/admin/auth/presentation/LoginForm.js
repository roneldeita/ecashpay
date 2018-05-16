import React from 'react'
import { Form, Input, Button,  Card, Row, Col } from 'antd'
import EcashLogo from '../../../../assets/images/Ecashpay_Logo_Orig.png'

const CardStyle = {
  cursor:'auto'
}

export default ({form, submit, buttonState}) =>{
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const EmailError = getFieldError('Email')
  const PasswordError = getFieldError('Password')
  return(
    <Row type="flex" justify="center" style={{marginTop:'100px'}}>
      <Col span={6}>
        <Card
          hoverable
          style={CardStyle}
          cover={<img alt="example" src={EcashLogo} />}>
          <Form onSubmit={submit}>
            <Form.Item
              hasFeedback={isFieldTouched('Email')}
              validateStatus={EmailError ? 'error' : ''}
              help={EmailError || ''}>
              {getFieldDecorator('Email', {
                rules: [
                  { required: true },
                  { type: 'email', message: 'Not a valid email' }
                ],
              })(
                <Input placeholder="Email"/>
              )}
            </Form.Item>
            <Form.Item
              hasFeedback={isFieldTouched('Password')}
              validateStatus={PasswordError ? 'error' : ''}
              help={PasswordError || ''}>
              {getFieldDecorator('Password', {
                rules: [
                  { required: true },
                  { min:6 }
                ],
              })(
                <Input placeholder="Password" type="password"/>
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={buttonState}>{buttonState ? 'logging in..' : 'Login'}</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <style jsx="true">{`
        .ant-card-cover{
          background: #D3D3D3;
          padding:50px 30px 30px 30px;
          text-align:center;
        }
        .ant-card-cover img{
          max-width:200px;
          display:inline-block;
        }
        .ant-card-body{
          margin-top:15px;
          padding-bottom:10px
        }
      `}</style>
    </Row>
  )
}
//if you still hold on to something that is not right, you can't be able to grow.
