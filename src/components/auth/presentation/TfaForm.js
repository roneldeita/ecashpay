import React from 'react'
import {Card, Row, Col, Form, Input, Button } from 'antd'
import RightSection from './RightSection'
import * as css from '../../../assets/styles/VerificationForm'

const TfaForm = ({tfa, form, submit, buttonState, onResend, resendState}) => {
  const { getFieldDecorator, getFieldError } = form
  const CodeError =  getFieldError('Code')
  return(
    <Row type="flex" justify="center" style={css.Container}>
      <Col xs={23} sm={22} md={22} lg={22} xl={17} xxl={12}>
        <Card hoverable style={css.CardStyle}>
          <Row>
            <Col className="form-column" xs={24} md={13}>
              <p style={css.Greet}>Verification Code Required</p>
              <p style={css.Small}>A verification code has been emailed to <span style={{fontWeight:500}}>{tfa.email}</span>, Please input verification code to login.</p>
              <br/><br/>
              <Form onSubmit={submit} autocomplete="off">
                <Form.Item
                  validateStatus={CodeError ? 'error' : ''}
                  help={CodeError || ''}>
                  {getFieldDecorator('Code', {
                    rules: [
                      { required: true },
                      { max: 4 },
                      { pattern: /^[0-9]+$/, message: 'Code should only contain digits.' }
                    ],
                  })(
                    <Input onKeyUp={submit}/>
                  )}
                </Form.Item>
                <Form.Item>
                  <Button id="submit" type="primary" htmlType="submit" loading={buttonState}>{buttonState ? 'Verifying..' : 'Submit'}</Button>
                </Form.Item>
              </Form>
              <p>Haven't received a verification?
                {resendState ?
                  <span style={{color:'#999999'}}> Resending...</span> :
                  <a onClick={onResend}> Resend</a>}
              </p>
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
          text-align: center;
          height: auto;
          font-size:26px;
          letter-spacing:15px;
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
      `}</style>
    </Row>
  )
}


export default TfaForm
