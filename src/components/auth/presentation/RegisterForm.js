import React from 'react'
import {Card, Row, Col, Form, Input, Button, Icon } from 'antd'
import RightSection from './RightSection'
import * as css from '../../../assets/styles/RegisterForm'

import 'antd/lib/card/style/css'
import 'antd/lib/col/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/form/style/css'
import 'antd/lib/input/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/icon/style/css'

const FormItem = Form.Item;

const RegisterForm = ({form, buttonState, onSubmit, onClickLoginButton}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  const EmailError =  getFieldError('Email');
  const PasswordError =  getFieldError('Password');
  const FirstNameError =  getFieldError('First Name');
  const LastNameError =  getFieldError('Last Name');
  return (
    <Row type="flex" justify="center" style={css.Container}>
      <Col span={13}>
        <Card hoverable style={css.CardStyle}>
          <Row>
            <Col className="" style={css.FormColumn} span={13}>
              <p style={css.Greet}>Create your Ecashpay accout</p>
              <Form onSubmit={onSubmit}>
                <FormItem
                  hasFeedback={isFieldTouched('Email')}
                  validateStatus={EmailError ? 'error' : 'success'}
                  help={EmailError || ''}>
                  {getFieldDecorator('Email', {
                    rules: [
                      { required: true },
                      { type: 'email', message: 'Not a valid email' }
                    ],
                  })(
                    <Input placeholder="Email" prefix={<Icon type="mail" style={css.PrefixIcon} /> }/>
                  )}
                </FormItem>
                <FormItem
                  hasFeedback={isFieldTouched('Password')}
                  validateStatus={PasswordError ? 'error' : 'success'}
                  help={PasswordError || ''}>
                  {getFieldDecorator('Password', {
                    rules: [
                      { required: true },
                      { min:6 }
                    ],
                  })(
                    <Input placeholder="Password" type="password" size="large" prefix={<Icon type="lock" style={css.PrefixIcon} /> }/>
                  )}
                </FormItem>
                <FormItem
                  hasFeedback={isFieldTouched('First Name')}
                  validateStatus={FirstNameError ? 'error' : 'success'}
                  help={FirstNameError || ''}>
                  {getFieldDecorator('First Name', {
                    rules: [
                      { required: true },
                      { pattern: /^[a-zA-Z]+$/, message: 'First Name should only contain letters' }
                    ],
                  })(
                    <Input placeholder="First Name" prefix={<Icon type="user" style={css.PrefixIcon} /> }/>
                  )}
                </FormItem>
                <FormItem
                  hasFeedback={isFieldTouched('Last Name')}
                  validateStatus={LastNameError ? 'error' : 'success'}
                  help={LastNameError || ''}>
                  {getFieldDecorator('Last Name', {
                    rules: [
                      { required: true },
                      { pattern: /^[a-zA-Z]+$/, message: 'Last Name should only contain letters' }
                    ],
                  })(
                    <Input placeholder="Last Name" prefix={<Icon type="user" style={css.PrefixIcon} /> }/>
                  )}
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit" loading={buttonState} onClick={onClickLoginButton}>{buttonState ? 'Signing up...' : 'Sign up'} </Button>
                </FormItem>
              </Form>
            </Col>
            <Col style={css.Column} span={11}>
              <RightSection />
            </Col>
          </Row>
        </Card>
      </Col>
      <style jsx="true">{`
        .ant-btn-primary{
          height: auto;
          width: 100%;
          font-size: 18px;
          padding-top: 8px;
          padding-bottom: 8px;
          margin-top:10px
        }
        .ant-input{
          height: auto;
          font-size:16px;
          padding-top:10px;
          padding-bottom:10px;
        }
        .ant-input-affix-wrapper .ant-input:not(:first-child){
          padding-left:45px
        }
        .ant-card,
        .ant-card-wider-padding .ant-card-body,
        .ant-card-body{
          font-family: 'Work Sans', sans-serif !important;
          padding:0px
        }
      `}
      </style>
    </Row>
  )
}

export default RegisterForm
