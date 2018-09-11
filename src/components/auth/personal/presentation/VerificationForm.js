import React from 'react'
import {Card, Row, Col, Form, Input, Button } from 'antd'
import RightSection from '../../presentation/RightSection'

const FormItem = Form.Item;

const VerificationForm = ({email, form, buttonState, onSubmit, autoCheck, onResend, resendState}) => {
  const { getFieldDecorator, getFieldError } = form
  const CodeError =  getFieldError('Code')
  return (
    <Row type="flex" justify="center">
      <Col xs={24} sm={22} md={22} lg={20} xl={18} xxl={14}>
        <Card hoverable className="auth card-style">
          <Row>
            <Col className="form-column" xs={24} sm={24} md={13}>
              <p className="greet">Email Verification</p>
              <p className="small">A verification code has been emailed to <span style={{fontWeight:500}}>{email}</span>, Please input verification code to verify.</p>
              <Form onSubmit={onSubmit} autoComplete="off">
                <FormItem
                  validateStatus={CodeError ? 'error' : ''}
                  help={CodeError || ''}>
                  {getFieldDecorator('Code', {
                    rules: [
                      { required: true },
                      { max: 4 },
                      { pattern: /^[0-9]+$/, message: 'Code should only contain digits.' }
                    ],
                  })(
                    <Input className="verification" onKeyUp={onSubmit}/>
                  )}
                </FormItem>
                <FormItem>
                  <Button
                    size="large" 
                    className="submit" 
                    type="primary" 
                    htmlType="submit" 
                    loading={buttonState} block>{buttonState ? 'Verifying..' : 'Submit'}</Button>
                </FormItem>
              </Form>
              <p>Haven{`'`}t received a verification?
                {resendState ?
                  <span style={{color:'#999999'}}> Resending...</span> :
                  <a onClick={onResend}> Resend</a>}
              </p>
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

export default VerificationForm
