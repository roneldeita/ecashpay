import React from 'react'
import RightSection from './RightSection'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Form, Input, Icon, Button } from 'antd'

const ResetPasswordForm = ({form, buttonState, checkPassword, checkConfirm, onSubmit, buttonWasClicked, resendState, resend}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const CodeError =  getFieldError('Code')
  const PasswordError =  getFieldError('Password');
  const ConfirmError =  getFieldError('Confirm Password');
  return(
    <Row type="flex" justify="center">
      <Col md={22} lg={22} xl={18} xxl={13}>
        <Card hoverable className="auth card-style">
          <Row>
            <Col className="form-column" xs={24} md={13}>
              <p className="greet">Reset your password?</p>
              <p className="small">Please enter the 4-digit code you just received and your new password.</p>
                <Form onSubmit={onSubmit} autoComplete="off">
                  <Form.Item
                    validateStatus={CodeError ? 'error' : ''}
                    help={CodeError || ''}>
                    {getFieldDecorator('Code', {
                      rules: [
                        { required: true },
                        { max: 4 },
                        { min: 4 },
                        { pattern: /^[0-9]+$/, message: 'Code should only contain digits.' }
                      ],
                    })(
                      <Input placeholder="Verification code" prefix={<Icon type="lock" className="prefix-icon" /> }/>
                    )}
                  </Form.Item>
                  <Form.Item
                    hasFeedback={isFieldTouched('Password')}
                    validateStatus={PasswordError ? 'error' : 'success'}
                    help={PasswordError || ''}>
                    {getFieldDecorator('Password', {
                      rules: [
                        { required: true },
                        { min: 8 , message:"Password must be at least 8 characters. "},
                        { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/, message: "The password must contain atleast 1 lower and 1 uppercase letter, 1 number and 1 special character. " },
                        { validator: checkPassword }
                      ],
                    })(
                      <Input
                        placeholder="New Password"
                        type="password" size="large"
                        prefix={<Icon type="key" className="prefix-icon" /> }
                        uffix={PasswordError ? '' : <Icon type="eye-o"/> }
                        />
                    )}
                  </Form.Item>
                  <Form.Item
                    hasFeedback={isFieldTouched('Confirm Password')}
                    validateStatus={ConfirmError ? 'error' : 'success'}
                    help={ConfirmError || ''}>
                    {getFieldDecorator('Confirm Password', {
                      rules: [
                        { required: true },
                        { validator: checkConfirm }
                      ],
                    })(
                      <Input placeholder="Confirm New Password" type="password" size="large" prefix={<Icon type="key" className="prefix-icon" /> }/>
                    )}
                  </Form.Item>
                  <p>Haven't received a verification?
                    {resendState ?
                      <span style={{color:'#999999'}}> Resending...</span> :
                      <span style={{color:'#1890ff'}} onClick={resend}> Resend</span>}
                  </p>
                  <Form.Item>
                    <Button className="submit" type="primary" htmlType="submit" loading={buttonState} onClick={buttonWasClicked}>{buttonState ? 'Resetting...' : 'Reset'}</Button>
                  </Form.Item>
                  <div style={{textAlign:'center'}}>Don't have a Ecashpay Account? <Link to="/client/register">Sign Up</Link></div>
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

export default ResetPasswordForm
