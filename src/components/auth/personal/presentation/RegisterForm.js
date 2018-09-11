import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Row, Col, Form, Input, DatePicker, Radio, Button, Icon } from 'antd'
import RightSection from '../../presentation/RightSection'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const RegisterForm = ({form, buttonState, onSubmit, checkPassword, checkConfirm}) => {
  const { getFieldDecorator } = form;
  return (
    <Row type="flex" justify="center">
      <Col xs={23} sm={22} md={24} lg={22} xl={20} xxl={14}>
        <Card hoverable className="auth card-style">
          <Row>
            <Col className="form-column" xs={24} md={13}>
              <p className="reg-greet">Create your Ecashpay account</p>
              <Form onSubmit={onSubmit} autoComplete="off">
                <FormItem>
                  {getFieldDecorator('Role', {
                    initialValue: 'individual',
                    rules: [
                      { required: true },
                    ],
                  })(
                    <RadioGroup>
                      <Radio value="individual">Pesonal</Radio>
                      <Link to='/business/register'><Radio value="business">Business</Radio></Link>
                      <Link to='/merchant/register'><Radio value="merchant">Merchant</Radio></Link>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('Email', {
                    rules: [
                      { required: true },
                      { type: 'email', message: 'Not a valid email' }
                    ],
                  })(
                    <Input 
                      placeholder="Email"
                      size="large"
                      prefix={<Icon type="mail" className="prefix-icon"/> }/>
                  )}
                </FormItem>
                <Row gutter={12}>
                  <Col xs={24} sm={12}>
                    <FormItem>
                      {getFieldDecorator('First Name', {
                        rules: [
                          { required: true },
                          { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'First Name should only contain letters' }
                        ],
                      })(
                        <Input 
                          placeholder="First Name"
                          size="large"  
                          prefix={<Icon type="user" className="prefix-icon" /> }/>
                      )}
                    </FormItem>
                  </Col>
                  <Col xs={24} sm={12}>
                    <FormItem>
                      {getFieldDecorator('Last Name', {
                        rules: [
                          { required: true },
                          { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'Last Name should only contain letters' }
                        ],
                      })(
                        <Input 
                          placeholder="Last Name"
                          size="large"  
                          prefix={<Icon type="user" className="prefix-icon" /> }/>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col xs={24} sm={12}>
                    <FormItem>
                      {getFieldDecorator('Middle Name', {
                        rules: [
                          { required: true },
                          { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'Middle Name should only contain letters' }
                        ],
                      })(
                        <Input 
                          placeholder="Middle Name"
                          size="large"
                          prefix={<Icon type="user" className="prefix-icon" /> }/>
                      )}
                    </FormItem>
                  </Col>
                  <Col xs={24} sm={12}>
                    <FormItem>
                      {getFieldDecorator('Birth Date', {
                        rules: [
                          { required: true }
                        ],
                      })(
                        <DatePicker size="large"  style={{width:'100%'}}/>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row gutter={12}>
                  <Col xs={24} sm={12}>
                    <FormItem>
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
                    <FormItem>
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
                          prefix={<Icon type="key" className="prefix-icon" /> }/>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <p>By clicking submit, you agree to our <a href="/termsandconditions" target="_blank">Terms & Conditions</a></p>
                <FormItem>
                  <Button size="large" className="submit" type="primary" htmlType="submit" loading={buttonState} block>{buttonState ? 'Signing up' : 'Sign up'} </Button>
                </FormItem>
              </Form>
              <p>Already have an account?<Link to="/login"> Login now</Link></p>
            </Col>
            <Col key="2" className="column" xs={0} md={11}>
              <RightSection />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default RegisterForm
