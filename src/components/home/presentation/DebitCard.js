import React from 'react'
import { Col, Row, Button } from 'antd'
import '../../../assets/css/debitCard.css'
import EcashcardBack from '../../../assets/images/Ecashcard_Back.png'
import EcashcardFront from '../../../assets/images/Ecashcard_Front.png'

const DebitCard = () => {
  return (
    <Row className="" type="flex" justify="center" style={{marginTop:'120px', marginBottom:'300px', color:'#383838'}}>
      <Col className="" span={9}>
        <p className="title">Borderless account with debit cards that can be used anytime, anywhere.</p>
        <p className="desc">Get your free multi-currency account. to pay and get paid around the world with the real exchange rate. Say bye bye to crazy bank fees for good.</p>
        <Button type="primary" ghost>Lean More</Button>
      </Col>
      <Col className="" span={9}>
        <img className="card debit-card-back" src={EcashcardBack} alt="Ecash Card Front" />
        <img className="card debit-card-front" src={EcashcardFront} alt="Ecash Card Front"/>
      </Col>
    </Row>
  )
}

export default DebitCard
