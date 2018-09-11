import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Form, Input, Button, Icon } from 'antd'
import RightSection from './RightSection'

const FormItem = Form.Item;

const LoginForm = ({form, buttonState, onSubmit, passwordVisible, passwordVisibility}) => {
  const { getFieldDecorator, getFieldError } = form
  const PasswordError =  getFieldError('Password')
  return (
    <Row type="flex" justify="center">
      <Col xs={23} sm={22} md={22} lg={22} xl={17} xxl={12}>
            <Card hoverable className="auth card-style">
              <Row>
                <Col className="form-column" xs={24} md={13}>
                  <p className="greet">Welcome to Ecashpay Asia!</p>
                  <p className="small">Log in to your account here</p>
                  <Form onSubmit={onSubmit} autoComplete="on">
                    <FormItem>
                      {getFieldDecorator('Email', {
                        rules: [
                          { required: true },
                          { type: 'email', message: 'Not a valid email' }
                        ],
                      })(
                        <Input 
                          size="large" 
                          placeholder="Email" 
                          prefix={<Icon type="mail" theme="outlined" className="prefix-icon"/> }/>
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('Password', {
                        rules: [
                          { required: true },
                          { min:6 }
                        ],
                      })(
                        <Input
                          size="large"
                          placeholder="Password"
                          type={passwordVisible ? 'text' : 'password'}
                          prefix={<Icon type="lock" theme="outlined" className="prefix-icon"/>}
                          suffix={PasswordError ? '' : <Icon className="prefix-icon" onClick={passwordVisibility} type="eye" theme={passwordVisible ? 'filled': 'outlined'}/> }/>
                      )}
                    </FormItem>
                    <div style={{textAlign:'right'}}><Link to="/password/request">Forgot password?</Link></div>
                    <FormItem>
                      <Button size="large" className="submit" type="primary" htmlType="submit" loading={buttonState} block>{buttonState ? 'logging in' : 'Login'}</Button>
                    </FormItem>
                    <p>{`Don't have an account`}?<Link to="/client/register"> Sign up now!</Link></p>
                  </Form>
                </Col>
                <Col className="column" xs={0} md={11}>
                  <RightSection />
                </Col>
              </Row>
            </Card>
      </Col>
    </Row>
  )
}

export default LoginForm
