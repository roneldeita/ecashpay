import React from 'react'
import RightSection from './RightSection'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Form, Input, Icon, Button } from 'antd'

const RequestPasswordForm = ({form, buttonState, onSubmit, buttonWasClicked}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const EmailError =  getFieldError('Email')
  return(
    <Row type="flex" justify="center">
      <Col xs={24} sm={18} md={22} lg={22} xl={18} xxl={13}>
        <Card hoverable className="auth card-style">
          <Row>
            <Col className="form-column" xs={24} sm={24} md={13}>
              <p className="greet">Forgot your password?</p>
              <p className="small">Enter your email and we will send a code to reset your password.</p>
                <Form onSubmit={onSubmit} autoComplete="off">
                  <Form.Item
                    hasFeedback={isFieldTouched('Email')}
                    validateStatus={EmailError ? 'error' : 'success'}
                    help={EmailError || ''}>
                    {getFieldDecorator('Email', {
                      rules: [
                        { required: true },
                        { type: 'email', message: 'Not a valid email' }
                      ],
                    })(
                      <Input placeholder="Email" prefix={<Icon type="mail" className="prefix-icon" /> }/>
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button className="submit" type="primary" htmlType="submit" loading={buttonState} onClick={buttonWasClicked}>{buttonState ? 'Sending...' : 'Send code'}</Button>
                  </Form.Item>
                  <div style={{textAlign:'center'}}>Dont have a Ecashpay Account? <Link to="/register">Sign Up</Link></div>
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

export default RequestPasswordForm
