import React from 'react'
import {Row, Col, Button} from 'antd'
import CebuanaLogo from '../../../assets/images/Cebuana.png'
import MLhuillier from '../../../assets/images/MLhuillier.png'
import SecurityBank from '../../../assets/images/SecurityBank.png'
import Landbank from '../../../assets/images/Landbank.png'
import PNB from '../../../assets/images/PNB.png'
import BPI from '../../../assets/images/BPI.png'
import UCPB from '../../../assets/images/UCPB.png'
import BDO from '../../../assets/images/BDO.png'

import 'antd/lib/col/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/button/style/css'

const Container = {
  paddingTop:'120px',
  paddingBottom: '120px',
  textAlign:"center",
  color:'#383838'
}
const Title = {
  fontSize: '46px',
  fontWeight: 600
}
const Desc = {
  fontSize: '26px'
}
const AntButton = {
  fontSize: '26px',
  fontWeight: 400,
  height: 'auto',
  padding: '12px 100px'
}

const Services = () => {
  return(
    <Row type="flex" justify="center" style={Container}>
      <Col className="" span={16}>
        <p style={Title}>Fastest, Convenient and Cheapest</p>
        <p style={Desc}>From shopping online to sending payments around the world,<br/> Ecashpay is the safer and easier way to pay.</p>
        <br/><br/>
        <Row className="">
          <Col className="upper-partners" span={6}><img src={CebuanaLogo} alt="Cebuana lhuillier" style={{maxWidth:'70%'}}/></Col>
          <Col className="upper-partners" span={6}><img src={MLhuillier} alt="MLhuillier"/></Col>
          <Col className="upper-partners" span={6}><img src={SecurityBank} alt="Security Bank"/></Col>
          <Col className="upper-partners" span={6}><img src={Landbank} alt="Landbank"/></Col>
        </Row>
        <br/>
        <Row type="flex" justify="center">
          <Col className="lower-partners" span={5}><img src={PNB} alt="PNB"/></Col>
          <Col className="lower-partners" span={5}><img src={BPI} alt="BPI" /></Col>
          <Col className="lower-partners" span={5}><img src={UCPB} alt="UCPB"/></Col>
          <Col className="lower-partners" span={5}><img src={BDO} alt="BDO"/></Col>
        </Row>
        <br/><br/><br/><br/>
        <Button type="primary" ghost style={AntButton} href="/register">Sign Up Now for Free</Button>
      </Col>
      <style jsx="true">{`
        .upper-partners{
          height: 100px
        }
        .upper-partners img{
          max-width:85%;
          max-height:100%;
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          margin:auto;
        }

        .lower-partners{
          height: 80px
        }
        .lower-partners img{
          max-width:55%;
          max-height:100%;
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          margin:auto;
        }`}
      </style>
    </Row>
  )
}

export default Services
