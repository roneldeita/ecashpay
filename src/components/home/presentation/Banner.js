import React from 'react'
import Particles from 'react-particles-js'
import ReactSelect from 'react-select'
import '../../../assets/css/banner.css'
import SelectOption from './SelectOption'
import SelectValue from './SelectValue'
import BSPregulated from '../../../assets/images/BSP_Regulated.png'
import Reviews from '../../../assets/images/Reviews.png'
import Customers from '../../../assets/images/Customers.png'
import { Col, Row, Card, Icon } from 'antd'


const Banner = ({options, senderValue, onChangeSender, recepientValue, onChangeRecepient}) => {
  return (
    <div className="banner">
      <Particles className="particles" />
      <Row style={{paddingTop:'130px'}} type="flex" justify="center">
        <Col className="" span={9} style={{paddingRight:'15px'}}>
            <p className="slogan">Pay and Send money the fastest way with real exchange rate.</p>
            <p className="description">
              Ecashpay Asia offers a safe and secure way to send payment and remittance anytime and anywhere online.
              Make a payment to any bank account, payment gateway or any person around Asia today. You can count on us
              for the fastest, safest, and easiest way to remit money around Asia.
            </p><br/>
            <a href="/"><Icon type="play-circle" style={{fontSize:'48px', position:'relative', top:'8px', paddingRight:'15px' }}/> <span style={{fontSize:'26px', fontWeight:300, textDecoration:'underline'}}>Watch how Ecashpay works.</span></a>
        </Col>
        <Col className="" span={9} style={{paddingLeft:'15px'}}>
          <Card className="exchange-card">
            <ReactSelect
              value={recepientValue}
              options={options}
              valueComponent={SelectValue}
              optionComponent={SelectOption}
              onChange={onChangeRecepient}
            />
            <ReactSelect
              value={senderValue}
              options={options}
              valueComponent={SelectValue}
              optionComponent={SelectOption}
              onChange={onChangeSender}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{paddingTop:'130px'}} type="flex" justify="center">
        <Col className="" span={7} style={{textAlign:'center'}}>
          <img className="img img-bsp" src={BSPregulated} alt="BSP Regulated"/>
          <h1>BSP Regulated</h1>
          <a className="anchor" href="/">Learn more</a>
        </Col>
        <Col className="" span={7} style={{textAlign:'center'}}>
          <img className="img img-reviews" src={Reviews} alt="BSP Regulated"/>
          <h1>Thousands Reviews</h1>
          <a className="anchor" href="/">Learn more</a>
        </Col>
        <Col className="" span={7} style={{textAlign:'center'}}>
          <img className="img img-customers" src={Customers} alt="BSP Regulated"/>
          <h1>Over 300k Customers</h1>
          <a className="anchor" href="/">Learn more</a>
        </Col>
      </Row>
    </div>
  )
}

export default Banner
