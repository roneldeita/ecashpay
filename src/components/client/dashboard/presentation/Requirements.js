import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Progress} from 'antd'
import {includes} from 'lodash'
import VerifyPhoneNumber from '../../../../assets/images/Verify_Number.png'
import VerifyID from '../../../../assets/images/Verify_ID.png'
import BillsStatement from '../../../../assets/images/Bills_Statement.png'
import LinkEcashCard from '../../../../assets/images/Link_EcashCard.png'
import Check from '../../../../assets/images/check.png'
const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}
const RowStyle ={
  textAlign:'center'
}
// const Title = {
//   fontSize:'18px',
//   fontWeight:600,
//   marginBottom:'30px'
// }
const Img = {
  width:'100%',
  maxWidth:'120px',
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

export default ({ready, levels, phone}) => {
  let progress = ((levels !== undefined ? Object.keys(levels).length : 0) * 25) + 25
  return(
    <Card
      hoverable
      title="Get started with Eacashpay"
      loading={ready}
      style={CardStyle}>
      {/*<p style={Title}>Get started with Eacashpay</p>*/}
      <Row type="flex" justify="space-between" style={RowStyle}>
        <Col className="" xs={24} sm={12} lg={8} xl={4}>
          { (phone !== '')
            ?
            <div>
              <img src={Check} style={Img} alt="check" />
              <p style={RequirementTitle}>Verify Phone Number</p>
              <p style={Desc}>This allows us to contact you and send important updates.</p>
            </div>
            :
            <Link to="/client/verify/phone">
              <img src={VerifyPhoneNumber} style={Img} alt="verify phone number" />
              <p style={RequirementTitle}>Verify Phone Number</p>
              <p style={Desc}>This allows us to contact you and send important updates.</p>
            </Link>
          }
        </Col>
        <Col className="" xs={24} sm={12} lg={8} xl={4}>
          { includes(levels, 1)
            ?
            <div>
              <img src={Check} style={Img} alt="check" />
              <p style={RequirementTitle}>Submit Valid ID</p>
              <p style={Desc}>Secure your account more by uploading your government-issued ID.</p>
            </div>
            :
            <Link to="/client/upload/id">
              <img src={VerifyID} style={Img} alt="submit ID"/>
              <p style={RequirementTitle}>Submit Valid ID</p>
              <p style={Desc}>Secure your account more by uploading your government-issued ID.</p>
            </Link>
          }
        </Col>
        <Col className="" xs={24} sm={12} lg={8} xl={4}>
          { includes(levels, 2)
            ?
            <div>
              <img src={Check} style={Img} alt="check" />
              <p style={RequirementTitle}>Proof Of Billing</p>
              <p style={Desc}>Submitting the right documents increases your maximum wallet balance</p>
            </div>
            :
            <Link to="/client/upload/pob">
              <img src={BillsStatement} style={Img} alt="add billing statement"/>
              <p style={RequirementTitle}>Proof Of Billing</p>
              <p style={Desc}>Submitting the right documents increases your maximum wallet balance</p>
            </Link>
          }
        </Col>
        <Col className="" xs={24} sm={12} lg={8} xl={4}>
          <img src={LinkEcashCard} style={Img} alt="link Ecashpay card"/>
          <p style={RequirementTitle}>Link Ecash Card</p>
          <p style={Desc}>Cash in instantly at any partnered outlets.</p>
        </Col>
      </Row>
      <Progress percent={progress} status="active" style={ProgressStyle} />
    </Card>
  )
}
