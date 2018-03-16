import React from 'react'
import { Row, Col, Icon } from 'antd'
import Android from '../../assets/images/Black_And.png'
import Apple from '../../assets/images/Black_Apple.png'

// import 'antd/lib/row/style/css'
// import 'antd/lib/col/style/css'
// import 'antd/lib/icon/style/css'

const BottomRow = {
  marginTop:'50px',
  paddingTop: '120px',
  paddingBottom: '120px',
  textAlign: 'center',
  backgroundColor: '#555F61',
  color: '#ffffff',
  fontWeight: '300',
  fontSize: '20px',
  lineHeight: '18px'
}
const FooterTitle = {
  fontSize: '26px',
  fontWeight: '400'
}
const DLContainer = {
  margin:'80px 0px'
}
const Download = {
  width:'280px',
  margin:'25px'
}
const Title = {
  fontSize: '46px',
  fontWeight: 500
}
const Desc = {
  fontSize: '28px'
}
const AntIcon = {
  fontSize: '44px',
  margin: '5px'
}

const BottomNavigation = () => {
  return(
      <div>
        <Row style={BottomRow}>
          <Col span={24}>
            <p style={Title}>Get Ecashpay Asia App Now</p>
            <p style={Desc}>Track your money on the go, or make new ones in a couple of taps</p>
            <div style={DLContainer}>
              <img src={Android} alt="Google play" style={Download}/>
              <img src={Apple} alt="Apple store" style={Download}/>
            </div>
            <Row type="flex" justify="center">
              <Col span={5}>
                <p style={FooterTitle}>Company & Team</p>
                <p>Company & Team</p>
                <p>News & Blog</p>
                <p>Press</p>
                <p>Careers</p>
                <p>Affiliates & Partnerships</p>
              </Col>
              <Col span={5}>
                <p style={FooterTitle}>Help & Support</p>
                <p>Getting Started</p>
                <p>Pricing</p>
                <p>Supported currencies</p>
                <p>FAQ</p>
                <p>QWIFT/BIC Codes</p>
                <p>Currency Converter</p>
                <p>Rate Alert</p>
                <p>Contact</p>
              </Col>
              <Col span={5}>
                <p style={FooterTitle}>Follow Us</p>
                <Icon style={AntIcon} type="facebook"/><Icon style={AntIcon} type="twitter"/><br/>
                <Icon style={AntIcon} type="instagram"/><Icon style={AntIcon} type="google-plus"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
  )
}

export default BottomNavigation
