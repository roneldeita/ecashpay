import React from 'react'
import {Card, Row, Col, Form, Input, Button } from 'antd'
import RightSection from './RightSection'

const TfaForm = ({tfa, form, submit, buttonState, onResend, resendState}) => {
  const { getFieldDecorator, getFieldError } = form
  const CodeError =  getFieldError('Code')
  return(
    <Row type="flex" justify="center">
      <Col xs={23} sm={22} md={22} lg={22} xl={17} xxl={12}>
        <Card hoverable className="auth card-style">
          <Row>
            <Col className="form-column" xs={24} md={13}>
              <p className="greet">Verification Code Required</p>
              <p className="small">Please input verification code fro your <span style={{fontWeight:500}}>Google Authenticator</span> to login.</p>
              <Form onSubmit={submit} autoComplete="off">
                <Form.Item
                  validateStatus={CodeError ? 'error' : ''}
                  help={CodeError || ''}>
                  {getFieldDecorator('Code', {
                    rules: [
                      { required: true },
                      { max: 6 },
                      { pattern: /^[0-9]+$/, message: 'Code should only contain digits.' }
                    ],
                  })(
                    <Input className="tfa" onKeyUp={submit}/>
                  )}
                </Form.Item>
                <Form.Item>
                  <Button size="large"
                    className="submit"
                    type="primary"
                    htmlType="submit"
                    loading={buttonState} block>{buttonState ? 'Verifying..' : 'Submit'}</Button>
                </Form.Item>
              </Form>
              {/*<p>Haven't received a verification?
                {resendState ?
                  <span style={{color:'#999999'}}> Resending...</span> :
                  <span style={{color:'#1890ff'}} onClick={onResend}> Resend</span>}
              </p>*/}
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

export default TfaForm
