import React from 'react'
import RightSection from './RightSection'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Form, Input, Icon, Button } from 'antd'
import * as css from '../../../assets/styles/RequestPasswordForm'

const RequestPasswordForm = ({form, buttonState, onSubmit, buttonWasClicked}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const EmailError =  getFieldError('Email')
  return(
    <Row type="flex" justify="center" style={css.Container}>
      <Col md={22} lg={22} xl={18} xxl={13}>
        <Card hoverable style={css.CardStyle}>
          <Row>
            <Col className="" style={css.FormColumn} xs={24} md={13}>
              <p style={css.Greet}>Forgot your password?</p>
              <p style={css.Small}>Enter your email and we will send a code to reset your password.</p>
              <br/><br/>
                <Form onSubmit={onSubmit}>
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
                      <Input placeholder="Email" prefix={<Icon type="mail" style={css.PrefixIcon} /> }/>
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" loading={buttonState} onClick={buttonWasClicked}>{buttonState ? 'Sending...' : 'Send code'}</Button>
                  </Form.Item>
                  <div style={{textAlign:'center'}}>Don't have a Ecashpay Account? <Link to="/register">Sign Up</Link></div>
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

export default RequestPasswordForm
