import React from 'react'
import { Col, Row } from 'antd'
import '../../../assets/css/globalTrust.css'
import World from '../../../assets/images/World.png'

const GlobalTrust = () => {
  return (
    <Row className="" type="flex" justify="center" style={{paddingTop:'120px', paddingBottom: '120px', color:'#383838', textAlign:'center', backgroundColor:'#ddfaff'}}>
      <Col className="" span={15}>
        <p className="title">Trusted all over the world</p>
        <p className="desc">
          People on every contenent are choosing Ecashpay Asia.<br/>
          We are moving over millions everty month globally, saving people in hidden charges.
        </p><br/><br/><br/>
        <img src={World} alt="world trusted" style={{width:'100%'}} />
        <br/><br/><br/>
        <p className="desc">We are constantly adding new currencies bringing people everywherea fairer choice.</p>
      </Col>
    </Row>
  )
}

export default GlobalTrust
