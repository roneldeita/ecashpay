import React from 'react'
import {Card, Row, Col, Divider } from 'antd'
import RightSection from './RightSection'
import ReactCodeInput from 'react-code-input'

const CodeInputStyle ={
  fontFamily: 'monospace',
  borderRadius: '6px',
  border: '1px solid lightgrey',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px',
  margin: '4px',
  paddingLeft: '12px',
  width: '44px',
  height: '50px',
  fontSize: '32px',
  boxSizing: 'border-box',
  color: 'rgba(0,0,0,.65)',
  backgroundColor: 'white'
}

const TsvForm = ({tsv, onChange, onResend, resendState}) => {
  return(
    <Row type="flex" justify="center">
      <Col xs={23} sm={22} md={22} lg={22} xl={17} xxl={12}>
        <Card hoverable className="auth card-style">
          <Row>
            <Col className="form-column" xs={24} md={13}>
              <p className="greet">Two-Step Verification</p>
              <p className="small">A verification code has been emailed to <span style={{fontWeight:500}}>{tsv.email}</span>, Please input verification code to register your device.</p>
              <div style={{textAlign:'center'}}>
                <ReactCodeInput type='number' fields={4} onChange={onChange} inputStyle={CodeInputStyle} />
                <Divider/>
                <p>Haven{`'`}t received a verification?
                  {resendState ?
                    <span style={{color:'#999999'}}> Resending...</span> :
                    <span onClick={onResend} style={{color:'#1890ff', cursor:'pointer'}}> Resend</span>}
                </p>
              </div>
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

export default TsvForm
