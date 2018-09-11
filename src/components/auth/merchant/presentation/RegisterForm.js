import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Form, Input, Radio, Button, Icon } from 'antd'
import RightSection from '../../presentation/RightSection'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const RegisterForm = ({form, buttonState, onSubmit, checkPassword, checkConfirm, onClickLoginButton}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  const EmailError =  getFieldError('Email');
  const PasswordError =  getFieldError('Password');
  const ConfirmError =  getFieldError('Confirm Password');
  const BusinessNameError =  getFieldError('Business Name');
  const AccTypeError =  getFieldError('Account Type');
  return (
    <Row type="flex" justify="center">
      <Col xs={23} sm={22} md={24} lg={24} xl={20} xxl={14}>
        <Card hoverable className="auth card-style">
          <Row>
            <Col className="form-column" xs={24} md={13}>
              <p className="reg-greet">Create your Ecashpay account</p>
              <Form onSubmit={onSubmit} autoComplete="off">
                <FormItem
                hasFeedback={isFieldTouched('Type')}
                validateStatus={AccTypeError ? 'error' : ''}
                help={AccTypeError || ''}>
                  {getFieldDecorator('Account Type', {
                    initialValue: 'merchant',
                    rules: [
                      { required: true },
                    ],
                  })(
                    <RadioGroup>
                      <Link to='/client/register'><Radio value="individual">Pesonal</Radio></Link>
                      <Link to='/business/register'><Radio value="business">Business</Radio></Link>
                      <Radio value="merchant">Merchant</Radio>
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
                    <Input
                      size="large"
                      placeholder="Email"
                      prefix={<Icon type="mail" className="prefix-icon" /> }/>
                  )}
                </FormItem>
                <FormItem
                  hasFeedback={isFieldTouched('Business Name')}
                  validateStatus={BusinessNameError ? 'error' : 'success'}
                  help={BusinessNameError || ''}>
                  {getFieldDecorator('Business Name', {
                    rules: [
                      { required: true },
                      { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'First Name should only contain letters' }
                    ],
                  })(
                    <Input 
                      size="large"
                      placeholder="Business Name" 
                      prefix={<Icon type="shop" className="prefix-icon" /> }/>
                  )}
                </FormItem>
                <Row gutter={12}>
                  <Col xs={24} sm={12}>
                    <FormItem
                      hasFeedback={isFieldTouched('Password')}
                      validateStatus={PasswordError ? 'error' : 'success'}
                      help={PasswordError || ''}>
                      {getFieldDecorator('Password', {
                        rules: [
                          { required: true },
                          { validator: checkPassword }
                        ],
                      })(
                        <Input 
                          placeholder="Password"
                          type="password"
                          size="large"
                          prefix={<Icon type="key" className="prefix-icon" /> }/>
                      )}
                    </FormItem>
                  </Col>
                  <Col xs={24} sm={12}>
                    <FormItem
                      hasFeedback={isFieldTouched('Confirm Password')}
                      validateStatus={ConfirmError ? 'error' : 'success'}
                      help={ConfirmError || ''}>
                      {getFieldDecorator('Confirm Password', {
                        rules: [
                          { required: true },
                          { validator: checkConfirm }
                        ],
                      })(
                        <Input 
                          placeholder="Confirm Password" 
                          type="password" 
                          size="large" 
                          prefix={<Icon type="key" 
                          className="prefix-icon" /> }/>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <p>By clicking submit, you agree to our <a href="/termsandconditions" target="_blank">Terms & Conditions</a></p>
                <FormItem>
                  <Button
                    block
                    size="large"
                    className="submit" 
                    type="primary" 
                    htmlType="submit" 
                    loading={buttonState} onClick={onClickLoginButton}>{buttonState ? 'Signing up...' : 'Sign up'} </Button>
                </FormItem>
              </Form>
              <p>Already have an account?<Link to="/login"> Login now</Link></p>
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

export default RegisterForm
