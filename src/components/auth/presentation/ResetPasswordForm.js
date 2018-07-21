import React from 'react'
import RightSection from './RightSection'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Form, Input, Icon, Button } from 'antd'
import * as css from '../../../assets/styles/ResetPasswordForm'

const ResetPasswordForm = ({form, buttonState, checkPassword, checkConfirm, onSubmit, buttonWasClicked, resendState, resend}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const CodeError =  getFieldError('Code')
  const PasswordError =  getFieldError('Password');
  const ConfirmError =  getFieldError('Confirm Password');
  return(
    <Row type="flex" justify="center" style={css.Container}>
      <Col md={22} lg={22} xl={18} xxl={13}>
        <Card hoverable style={css.CardStyle}>
          <Row>
            <Col className="form-column" xs={24} md={13}>
              <p style={css.Greet}>Reset your password?</p>
              <p style={css.Small}>Please enter the 4-digit code you just received and your new password.</p>
              <br/><br/>
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
                      <Input placeholder="Verification code" prefix={<Icon type="lock" style={css.PrefixIcon} /> }/>
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
                        prefix={<Icon type="key" style={css.PrefixIcon} /> }
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
                      <Input placeholder="Confirm New Password" type="password" size="large" prefix={<Icon type="key" style={css.PrefixIcon} /> }/>
                    )}
                  </Form.Item>
                  <p>Haven't received a verification?
                    {resendState ?
                      <span style={{color:'#999999'}}> Resending...</span> :
                      <a onClick={resend}> Resend</a>}
                  </p>
                  <Form.Item>
                    <Button id="submit" type="primary" htmlType="submit" loading={buttonState} onClick={buttonWasClicked}>{buttonState ? 'Resetting...' : 'Reset'}</Button>
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

export default ResetPasswordForm
