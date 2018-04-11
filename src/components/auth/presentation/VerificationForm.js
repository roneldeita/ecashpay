import React from 'react'
import {Card, Row, Col, Form, Input, Button } from 'antd'
import RightSection from './RightSection'
import * as css from '../../../assets/styles/VerificationForm'

// import 'antd/lib/card/style/css'
// import 'antd/lib/col/style/css'
// import 'antd/lib/row/style/css'
// import 'antd/lib/form/style/css'
// import 'antd/lib/input/style/css'
// import 'antd/lib/button/style/css'

const FormItem = Form.Item;

const VerificationForm = ({email, form, buttonState, onSubmit, onResend, onClickSubmitButton}) => {
  const { getFieldDecorator, getFieldError } = form;
  const CodeError =  getFieldError('Code');
  return (
    <Row type="flex" justify="center" style={css.Container}>
      <Col md={22} lg={22} xl={18} xxl={13}>
        <Card hoverable style={css.CardStyle}>
          <Row>
            <Col className="" style={css.FormColumn} span={13}>
              <p style={css.Greet}>Email Verification</p>
              <p style={css.Small}>A verification code has been emailed to <b>{email}</b>, Please input verification code to verify.</p>
              <br/><br/>
              <Form onSubmit={onSubmit}>
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
                    <Input/>
                  )}
                </FormItem>
                <FormItem>
                  <Button type="primary" htmlType="submit" loading={buttonState} onClick={onClickSubmitButton}>{buttonState ? 'Verifying..' : 'Submit'}</Button>
                </FormItem>
              </Form>
              <p>Haven{`'`}t received a verification? <a onClick={onResend}>Resend</a></p>
            </Col>
            <Col style={css.Column} span={11}>
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
          padding-top: 8px;
          padding-bottom: 8px;
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
      `}
      </style>
    </Row>
  )
}

export default VerificationForm
