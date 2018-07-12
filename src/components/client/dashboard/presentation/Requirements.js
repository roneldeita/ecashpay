import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Progress, Tag} from 'antd'
import QueueAnim from 'rc-queue-anim'
import {includes} from 'lodash'
import VerifyPhoneNumber from '../../../../assets/images/Verify_Number.png'
import VerifyID from '../../../../assets/images/Verify_ID.png'
import BillsStatement from '../../../../assets/images/Bills_Statement.png'
import LinkEcashCard from '../../../../assets/images/Link_EcashCard.png'
import Check from '../../../../assets/images/check.png'
const CardStyle = {
  margin: '0px 0px 15px 0px',
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

export default ({ready, levels, phone, progress}) => {
  return(
    <QueueAnim type={['bottom', 'top']} delay="400" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
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
                  <p style={RequirementTitle}>Mobile Verification</p>
                  <p style={Desc}>Receive all the latest and important updates on products and services through sms by verifying your mobile number.</p>
                </div>
                :
                <Link to="/client/verify/phone">
                  <img src={VerifyPhoneNumber} style={Img} alt="verify phone number" />
                  <p style={RequirementTitle}>Mobile Verification</p>
                  <p style={Desc}>Receive all the latest and important updates on products and services through sms by verifying your mobile number.</p>
                </Link>
              }
            </Col>
            <Col className="" xs={24} sm={12} lg={8} xl={4}>
              { includes(levels, 1)
                ?
                <div>
                  <img src={Check} style={Img} alt="check" />
                  <p style={RequirementTitle}>KYC Level 1</p>
                  <p style={Desc}>Maximize features and access the easy-to-use tools in your account by uploading governement-issued I.D and Selfie.</p>
                </div>
                :
                <Link to="/client/upload/id">
                  <img src={VerifyID} style={Img} alt="submit ID"/>
                  <p style={RequirementTitle}>KYC Level 1</p>
                  <p style={Desc}>Maximize features and access the easy-to-use tools in your account by uploading governement-issued I.D and Selfie.</p>
                </Link>
              }
            </Col>
            <Col className="" xs={24} sm={12} lg={8} xl={4}>
              { includes(levels, 2)
                ?
                <div>
                  <img src={Check} style={Img} alt="check" />
                  <p style={RequirementTitle}>KYC Level 2</p>
                  <p style={Desc}>Increase your fund limits and access more tools by uploading your latest proof of billing.</p>
                </div>
                :
                <Link to="/client/upload/pob">
                  <img src={BillsStatement} style={Img} alt="add billing statement"/>
                  <p style={RequirementTitle}>KYC Level 2</p>
                  <p style={Desc}>Increase your fund limits and access more tools by uploading your latest proof of billing.</p>
                </Link>
              }
            </Col>
            <Col className="" xs={24} sm={12} lg={8} xl={4}>
              <img src={LinkEcashCard} style={Img} alt="link Ecashpay card"/>
              <p style={RequirementTitle}>Link Your Ecash Card</p>
              <p style={Desc}>Transfer and get your cash instantly through our accredited banks nationwide.</p>
              <Tag>Available soon</Tag>
            </Col>
          </Row>
          <Progress percent={progress} status="active" style={ProgressStyle} />
        </Card>
      </div>
    </QueueAnim>
  )
}
