import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Form, Input, Button, Icon } from 'antd'
//import QueueAnim from 'rc-queue-anim'
import RightSection from './RightSection'
import * as css from '../../../assets/styles/LoginForm'

const FormItem = Form.Item;

const LoginForm = ({form, buttonState, onSubmit, onClickLoginButton, passwordVisible, passwordVisibility}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const EmailError =  getFieldError('Email')
  const PasswordError =  getFieldError('Password')
  return (
    <Row type="flex" justify="center">
      <Col xs={23} sm={22} md={22} lg={22} xl={17} xxl={12}>
            <Card hoverable style={css.CardStyle}>
              <Row>
                <Col className="form-column" xs={24} md={13}>
                  <p style={css.Greet}>Welcome to Ecashpay Asia!</p>
                  <p style={css.Small}>Log in to your account here</p>
                  <Form onSubmit={onSubmit} autoComplete="off">
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
                      validateStatus={PasswordError ? 'error' : ''}
                      help={PasswordError || ''}>
                      {getFieldDecorator('Password', {
                        rules: [
                          { required: true },
                          { min:6 }
                        ],
                      })(
                        <Input
                          placeholder="Password"
                          type={passwordVisible ? 'text' : 'password'}
                          prefix={<Icon type="lock" style={css.PrefixIcon}/>}
                          suffix={PasswordError ? '' : <Icon style={css.PrefixIcon} onClick={passwordVisibility} type={passwordVisible ? 'eye': 'eye-o'}/> }
                          />
                      )}
                    </FormItem>
                    <div style={{textAlign:'right'}}><Link to="/password/request">Forgot password?</Link></div>
                    <FormItem>
                      <Button id="submit" type="primary" htmlType="submit" loading={buttonState} onClick={onClickLoginButton}>{buttonState ? 'logging in..' : 'Login'}</Button>
                    </FormItem>
                    <p>{`Don't have an account`}?<Link to="/client/register"> Sign up now!</Link></p>
                  </Form>
                </Col>
                <Col style={css.Column} xs={0} md={11}>
                  <RightSection />
                </Col>
              </Row>
            </Card>
      </Col>
      <style jsx="true">{`
        #submit.ant-btn-primary{
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
        .form-column{
          padding: 80px 60px 30px 60px
        }
        @media only screen and (max-width: 600px) {
          .form-column{
            padding: 80px 20px 30px 20px
          }
        }
      `}
      </style>
    </Row>
  )
}

export default LoginForm
