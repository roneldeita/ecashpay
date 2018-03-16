import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Col, Row, Icon } from 'antd'
import ScrollAnimation from 'react-animate-on-scroll'
import BannerImg from '../../../assets/images/Banner.png'

import 'animate.css/animate.css'

const BannerContainer = {
  color:'#383838',
  minHeight: '700px'
}
const RightCol = {
  paddingRight:'60px',
}
const LeftCol = {
  paddingLeft:'60px',
}
const AntRow = {
  width:'100%',
  paddingTop:'50px',
  paddingBottom:'100px'
}
const Slogan = {
  fontWeight: '600',
  fontSize: '42px',
  lineHeight: '48px'
}
const Desct = {
  textAlign: 'justify',
  fontSize: '22px',
  fontWeight: '300'
}
const AntIcon = {
  fontSize:'48px',
  position:'relative',
  top:'8px',
  paddingRight:'15px'
}
const WatchDesc = {
  fontSize:'26px',
  fontWeight:'300'
}

const BannerImgStyle = {
  width:'100%'
}

const Banner = () => {
  return (
    <div style={BannerContainer}>
      <Row style={AntRow} type="flex" justify="center">
        <Col span={9} style={RightCol}>
            <p style={Slogan}>
              <FormattedMessage
                id="banner.slogan"
                defaultMessage="Pay and Send money the fastest way with real exchange rate."
              />
            </p>
            <p style={Desct}>
              <FormattedMessage
                id="banner.desc"
                defaultMessage="Ecashpay Asia offers a safe and secure way to send payment and remittance anytime and anywhere online. Make a payment to any bank account, payment gateway or any person around Asia today. You can count on us for the fastest, safest, and easiest way to remit money around Asia."
              />
            </p><br/>
            <a href="/" className="anchor-watch">
              <Icon style={AntIcon} type="play-circle"/>
              <span style={WatchDesc}>Watch how Ecashpay works.</span>
            </a>
        </Col>
        <Col span={9} style={LeftCol}>
          <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
            <img style={BannerImgStyle} src={BannerImg} alt="24/7"/>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{padding:'50px 0px', backgroundColor: '#1DA1F2'}}>
        </Col>
      </Row>
      <style jsx="true">{`
        .anchor-watch:hover span{
          border-bottom: 1px solid #1890ff;
        }
      `}
      </style>
    </div>
  )
}

export default Banner
