import React from 'react'
import { Col, Row, Button } from 'antd'
import ScrollAnimation from 'react-animate-on-scroll'
// import { Parallax } from 'react-parallax'
import EcashcardBack from '../../../assets/images/Ecashcard_Back.png'
import EcashcardFront from '../../../assets/images/Ecashcard_Front.png'
import BSPregulated from '../../../assets/images/BSP_Regulated.png'
import Reviews from '../../../assets/images/Reviews.png'
import Customers from '../../../assets/images/Customers.png'

// import 'animate.css/animate.css'
// import 'antd/lib/col/style/css'
// import 'antd/lib/row/style/css'
// import 'antd/lib/button/style/css'

const Container = {
  paddingTop:'200px',
  paddingBottom:'200px',
  color:'#383838',
  position:'relative',
  overflow:'hidden'
}
//
const Title = {
  fontSize: '42px',
  fontWeight: '600',
  lineHeight: '52px'
}
const Desc = {
  fontSize: '24px',
  fontWeight: '300'
}
const DebitCardBack = {
  position: 'absolute',
  width:'60%',
  right: 0,
  transform: 'translatey(0px)',
	animation: 'float 6s ease-in-out infinite'
}
const DebitCardFront = {
  position: 'absolute',
  width:'60%',
  top:'150px',
  left:'30px',
  transform: 'translatey(0px)',
	animation: 'float-inverse 6s ease-in-out infinite'
}
const AntButton = {
  fontSize: '26px',
  fontWeight: 400,
  height: 'auto',
  padding: '12px 100px'
}
const FactsRow = {
  paddingTop:'250px'
}
const FactsCol = {
  textAlign:'center'
}
const ImgBsp = {
  width:'180px',
  margin:'10px 0'
}
const ImgReviews = {
  width:'180px',
  margin:'15px 0'
}
const ImgCustomers = {
  width:'180px',
  margin:'25px 0'
}
const FactHeader = {
  marginBottom: 0
}
const Anchor = {
  fontSize: '24px',
  borderBottom: '1px solid #1890ff'
}
const DebitCard = () => {
  return (
    /*{<Parallax bgImage={debitBG} strength={500}>}*/
      <div style={Container}>
        <Row type="flex" justify="center">
          <Col span={9}>
            <p style={Title}>Borderless account with debit cards that can be used anytime, anywhere.</p>
            <p style={Desc}>Get your free multi-currency account. to pay and get paid around the world with the real exchange rate. Say bye bye to crazy bank fees for good.</p>
            <Button style={AntButton} type="primary" ghost>Lean More</Button>
          </Col>
          <Col className="" span={9}>
            <ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut" initiallyVisible={false} animateOnce={true}>
              <img style={DebitCardBack} src={EcashcardBack} alt="Ecash Card Front" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp" animateOut="fadeOut" initiallyVisible={false} animateOnce={true}>
              <img style={DebitCardFront} src={EcashcardFront} alt="Ecash Card Front"/>
            </ScrollAnimation>
          </Col>
        </Row>
        <Row style={FactsRow} type="flex" justify="center">
          <Col className="" span={7} style={FactsCol}>
            <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce={true}>
              <img style={ImgBsp} src={BSPregulated} alt="BSP Regulated"/>
            </ScrollAnimation>
            <h1 style={FactHeader}>BSP Regulated</h1>
            <a style={Anchor} href="/">Learn more</a>
          </Col>
          <Col className="" span={7} style={FactsCol}>
            <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce={true}>
              <img style={ImgReviews} src={Reviews} alt="BSP Regulated"/>
            </ScrollAnimation>
            <h1 style={FactHeader}>Thousands Reviews</h1>
            <a style={Anchor} href="/">Learn more</a>
          </Col>
          <Col className="" span={7} style={FactsCol}>
            <ScrollAnimation animateIn="bounceIn" initiallyVisible={false} animateOnce={true}>
              <img style={ImgCustomers} src={Customers} alt="BSP Regulated"/>
            </ScrollAnimation>
            <h1 style={FactHeader}>Over 300k Customers</h1>
            <a style={Anchor} href="/">Learn more</a>
          </Col>
        </Row>
        <style jsx="true">{`
          @keyframes float-inverse {
          	0% {
          		transform: translatex(0px);
          	}
          	50% {
          		transform: translatex(10px);
          	}
          	100% {
          		transform: translatex(0px);
          	}
          }
          @keyframes float {
          	0% {
          		transform: translatex(0px);
          	}
          	50% {
          		transform: translatex(-10px);
          	}
          	100% {
          		transform: translatex(0px);
          	}
          }
        `}
        </style>
      </div>
    /*</Parallax>}*/
  )
}

export default DebitCard
