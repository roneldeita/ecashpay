import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Form, Input, Radio, Button, Icon } from 'antd'
import RightSection from './RightSection'
import * as css from '../../../assets/styles/RegisterForm'

// import 'antd/lib/card/style/css'
// import 'antd/lib/col/style/css'
// import 'antd/lib/row/style/css'
// import 'antd/lib/form/style/css'
// import 'antd/lib/input/style/css'
// import 'antd/lib/radio/style/css'
// import 'antd/lib/button/style/css'
// import 'antd/lib/icon/style/css'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const RegisterForm = ({form, buttonState, onSubmit, checkPassword, checkConfirm, onClickLoginButton}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  const EmailError =  getFieldError('Email');
  const PasswordError =  getFieldError('Password');
  const ConfirmError =  getFieldError('Confirm Password');
  const FirstNameError =  getFieldError('First Name');
  const LastNameError =  getFieldError('Last Name');
  const AccTypeError =  getFieldError('Account Type');
  return (
    <Row type="flex" justify="center" style={css.Container}>
      <Col span={13}>
        <Card hoverable style={css.CardStyle}>
          <Row>
            <Col className="" style={css.FormColumn} span={13}>
              <p style={css.Greet}>Create your Ecashpay accout</p>
              <Form onSubmit={onSubmit}>
                <FormItem
                hasFeedback={isFieldTouched('Type')}
                validateStatus={AccTypeError ? 'error' : ''}
                help={AccTypeError || ''}>
                  {getFieldDecorator('Account Type', {
                    initialValue: 'personal',
                    rules: [
                      { required: true },
                    ],
                  })(
                    <RadioGroup>
                      <Radio value="personal">Pesonal</Radio>
                      <Radio value="business">Business</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
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
                <Row gutter={12}>
                  <Col span={12}>
                    <FormItem
                      hasFeedback={isFieldTouched('Password')}
                      validateStatus={PasswordError ? 'error' : 'success'}
                      help={PasswordError || ''}>
                      {getFieldDecorator('Password', {
                        rules: [
                          { required: true },
                          { min:6 },
                          { validator: checkPassword }
                        ],
                      })(
                        <Input placeholder="Password" type="password" size="large" prefix={<Icon type="lock" style={css.PrefixIcon} /> }/>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      hasFeedback={isFieldTouched('Confirm Password')}
                      validateStatus={ConfirmError ? 'error' : 'success'}
                      help={ConfirmError || ''}>
                      {getFieldDecorator('Confirm Password', {
                        rules: [
                          { required: true },
                          { min:6 },
                          { validator: checkConfirm }
                        ],
                      })(
                        <Input placeholder="Confirm Password" type="password" size="large" prefix={<Icon type="lock" style={css.PrefixIcon} /> }/>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col span={12}>
                    <FormItem
                      hasFeedback={isFieldTouched('First Name')}
                      validateStatus={FirstNameError ? 'error' : 'success'}
                      help={FirstNameError || ''}>
                      {getFieldDecorator('First Name', {
                        rules: [
                          { required: true },
                          { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'First Name should only contain letters' }
                        ],
                      })(
                        <Input placeholder="First Name" prefix={<Icon type="user" style={css.PrefixIcon} /> }/>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={12}>
                    <FormItem
                      hasFeedback={isFieldTouched('Last Name')}
                      validateStatus={LastNameError ? 'error' : 'success'}
                      help={LastNameError || ''}>
                      {getFieldDecorator('Last Name', {
                        rules: [
                          { required: true },
                          { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'Last Name should only contain letters' }
                        ],
                      })(
                        <Input placeholder="Last Name" prefix={<Icon type="user" style={css.PrefixIcon} /> }/>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <FormItem>
                  <Button type="primary" htmlType="submit" loading={buttonState} onClick={onClickLoginButton}>{buttonState ? 'Signing up...' : 'Sign up'} </Button>
                </FormItem>
              </Form>
              <p>Already have an account?<Link to="/login"> Login now</Link></p>
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
