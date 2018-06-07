import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Form, Input, Button, Icon } from 'antd'
import RightSection from './RightSection'
import * as css from '../../../assets/styles/LoginForm'

const FormItem = Form.Item;

const LoginForm = ({form, buttonState, onSubmit, onClickLoginButton}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const EmailError =  getFieldError('Email')
  const PasswordError =  getFieldError('Password')
  return (
    <Row type="flex" justify="center" style={css.Container}>
      <Col md={22} lg={22} xl={18} xxl={13}>
        <Card hoverable style={css.CardStyle}>
          <Row>
            <Col className="" style={css.FormColumn} xs={24} md={13}>
              <p style={css.Greet}>Welcome to Ecashpay Asia!</p>
              <p style={css.Small}>Log in to your account here</p>
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
                    <Input placeholder="Password" type="password" prefix={<Icon type="lock" style={css.PrefixIcon} /> }/>
                  )}
                </FormItem>
                <div style={{textAlign:'right'}}><Link to="/password/request">Forgot password?</Link></div>
                <FormItem>
                  <Button type="primary" htmlType="submit" loading={buttonState} onClick={onClickLoginButton}>{buttonState ? 'logging in..' : 'Login'}</Button>
                </FormItem>
                <p>{`Don't have an account`}?<Link to="/register"> Sign up now!</Link></p>
              </Form>
            </Col>
            <Col style={css.Column} xs={0} md={11}>
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
          padding-top: 6px;
          padding-bottom: 6px;
          margin-top:10px
        }
        .ant-input{
          height: auto;
          font-size:16px;
          padding-top:8px;
          padding-bottom:8px;
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

export default LoginForm