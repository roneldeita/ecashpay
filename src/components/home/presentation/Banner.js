import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Col, Row, Icon } from 'antd'
import ScrollAnimation from 'react-animate-on-scroll'
import BlueMap from '../../../assets/images/banner/BlueMap.png'
import Curve from '../../../assets/images/banner/Curve.png'
import Screen from '../../../assets/images/banner/Screen.png'
import CardReader from '../../../assets/images/banner/CardReader.png'
import Card from '../../../assets/images/banner/Card.png'
import Dollar from '../../../assets/images/banner/Dollar.png'

const BannerContainer = {
  color:'#383838',
  minHeight: '700px',
  marginTop:'50px'
}
const RightCol = {
  paddingRight:'60px',
}
const LeftCol = {
}
const AntRow = {
  width:'100%',
  paddingTop:'50px',
  paddingBottom:'100px'
}
const Slogan = {
  fontWeight: '600',
  fontSize: '36px',
  lineHeight: '42px'
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

const BlueMapStyle = {
  position: 'absolute',
  width:'100%',
}
const CurveStyle = {
  position: 'absolute',
  transform:'translate(5%,10%)',
  width:'90%'
}
const ScreenStyle = {
  position: 'absolute',
  transform:'translate(35%, 40%)',
  width:'60%',
  animation: 'float-screen 4s ease-in-out infinite',
}
const CardReaderStyle = {
  position: 'absolute',
  transform:'translate(195%, 5%)',
  width:'15%',
  animation: 'float-card-reader 4s ease-in-out infinite',
}
const CardStyle = {
  position: 'absolute',
  transform:'translate(255%, 130%)',
  width:'25%',
  animation: 'float-card 4s ease-in-out infinite',
}

const DollarStyle = {
  position: 'absolute',
  transform:'translate(490%, 70%)',
  width:'10%',
  animation: 'dollar-sign 4s ease-in-out infinite',
}

const Banner = () => {
  return (
    <div style={BannerContainer}>
      <Row style={AntRow} type="flex" justify="center">
        <Col span={9} style={RightCol}>
            <p style={Slogan}>
              <FormattedMessage
                id="banner.slogan"
                defaultMessage="Send and receive money with Ecashpay Asia."
              />
            </p>
            <p style={Desct}>
              <FormattedMessage
                id="banner.desc"
                defaultMessage="Ecashpay Asia provides alternative payment solutions which allows enterprises, online businesses and individuals to send and receive money around the world."
              />
            </p><br/>
            <a href="/" className="anchor-watch">
              <Icon style={AntIcon} type="play-circle"/>
              <span style={WatchDesc}>Watch how Ecashpay works.</span>
            </a>
        </Col>
        <Col span={9} style={LeftCol} className="">
            <div className="" style={{height:'100%'}}>
              <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}>
                <img style={BlueMapStyle} src={BlueMap} alt="Blue Map"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeIn' initiallyVisible={false} animateOnce={true}  delay={1000}>
                <img style={CurveStyle} src={Curve} alt="Curve"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInUp" initiallyVisible={false} animateOnce={true} delay={800}>
                <img style={ScreenStyle} src={Screen} alt="Screen"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInLeft" initiallyVisible={false} animateOnce={true} delay={1200}>
                <img style={CardReaderStyle} src={CardReader} alt="Card Reader"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInRight" initiallyVisible={false} animateOnce={true} delay={1400}>
                <img style={CardStyle} src={Card} alt="Card"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInDown" initiallyVisible={false} animateOnce={true} delay={1600}>
                <img style={DollarStyle} src={Dollar} alt="Dollar Sign"/>
              </ScrollAnimation>
            </div>
        </Col>
      </Row>
      {/*<Row>
        <Col span={24} style={{padding:'50px 0px', backgroundColor: '#1DA1F2'}}>
        </Col>
      </Row>*/}
      <style jsx="true">{`
        .anchor-watch:hover span{
          border-bottom: 1px solid #1890ff;
        }
        @keyframes float-card-reader {
          0% {
            transform: translate(195%, 5%)
          }
          30% {
            transform: translate(205%, 5%)
          }
          100% {
            transform: translate(195%, 5%)
          }
        }
        @keyframes float-card {
          0% {
            transform: translate(255%, 130%)
          }
          70% {
            transform: translate(250%, 130%)
          }
          100% {
            transform: translate(255%, 130%)
          }
        }
        @keyframes dollar-sign {
          0% {
            transform: translate(490%, 70%)
          }
          50% {
            transform: translate(490%, 90%)
          }
          100% {
            transform: translate(490%, 70%)
          }
        }
        @keyframes float-screen {
          0% {
            transform: translate(35%, 40%)
          }
          65% {
            transform: translate(35%, 36%)
          }
          100% {
            transform: translate(35%, 40%)
          }
        }
      `}
      </style>
    </div>
  )
}

export default Banner
