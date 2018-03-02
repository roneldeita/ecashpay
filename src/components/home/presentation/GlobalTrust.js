import React from 'react'
import { Col, Row } from 'antd'
import World from '../../../assets/images/World.png'

import 'antd/lib/col/style/css'
import 'antd/lib/row/style/css'

const Container = {
  paddingTop:'120px',
  paddingBottom: '120px',
  color:'#383838',
  textAlign:'center',
  backgroundColor:'#ddfaff'
}

const Title = {
  fontSize: '46px',
  fontWeight: 600
}
const Desc = {
  fontSize: '26px'
}
const Img = {
  width: '100%'
}

const GlobalTrust = () => {
  return (
    <Row type="flex" justify="center" style={Container}>
      <Col span={15}>
        <p style={Title}>Trusted all over the world</p>
        <p style={Desc}>
          People on every contenent are choosing Ecashpay Asia.<br/>
          We are moving over millions everty month globally, saving people in hidden charges.
        </p><br/><br/><br/>
        <img src={World} alt="world trusted" style={Img} />
        <br/><br/><br/>
        <p style={Desc}>We are constantly adding new currencies bringing people everywherea fairer choice.</p>
      </Col>
    </Row>
  )
}

export default GlobalTrust
