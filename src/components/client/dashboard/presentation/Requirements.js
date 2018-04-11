import React from 'react'
import {Card, Row, Col, Progress} from 'antd'
import VerifyPhoneNumber from '../../../../assets/images/Verify_Number.png'
import VerifyID from '../../../../assets/images/Verify_ID.png'
import BillsStatement from '../../../../assets/images/Bills_Statement.png'
import LinkEcashCard from '../../../../assets/images/Link_EcashCard.png'

const CardStyle = {
  minHeight:'360px',
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}
const RowStyle ={
  textAlign:'center'
}
const Title = {
  fontSize:'18px',
  fontWeight:600,
  marginBottom:'30px'
}
const Img = {
  width:'80%',
  marginBottom:'8px'
}
const ProgressStyle = {
  marginTop: '30px'
}
const RequirementTitle = {
  fontSize: '15px',
  marginBottom:'5px',
}
const Desc = {
  color: '#999999',
  fontSize: '12px',
  lineHeight: '13px'
}

const Requirements = ({ready, progress}) => {
  return(
    <Card hoverable loading={ready} style={CardStyle}>
      <p style={Title}>Get started with Eacashpay</p>
      <Row type="flex" justify="space-between" style={RowStyle}>
        <Col className="" span={4}>
          <img src={VerifyPhoneNumber} style={Img} alt="verify phone number" />
          <p style={RequirementTitle}>Verify Phone Number</p>
          <p style={Desc}>This allows us to contact you and send important updates.</p>
        </Col>
        <Col className="" span={4}>
          <img src={VerifyID} style={Img} alt="submit ID"/>
          <p style={RequirementTitle}>Submit Valid ID{`'`}s</p>
          <p style={Desc}>Secure your account more by uploading your valid ID.</p>
        </Col>
        <Col className="" span={4}>
          <img src={BillsStatement} style={Img} alt="add billing statement"/>
          <p style={RequirementTitle}>Add Funds</p>
          <p style={Desc}>Send and receive money straight to your account.</p>
        </Col>
        <Col className="" span={4}>
          <img src={LinkEcashCard} style={Img} alt="link Ecashpay card"/>
          <p style={RequirementTitle}>Link Ecash Card</p>
          <p style={Desc}>Cash in instantly at any partnered outlets.</p>
        </Col>
      </Row>
      <Progress percent={progress} status="active" style={ProgressStyle} />
    </Card>
  )
}

export default Requirements
