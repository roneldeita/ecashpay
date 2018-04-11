import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Icon} from 'antd'

const Container = {
  textAlign:'center',
  backgroundColor:'#ffffff',
}
const ActiveTab = {
  display:'inline-block',
  width: '100%',
  padding:'20px 0px',
  color:'rgb(29, 161, 242)',
  borderBottom: '2px solid rgb(29, 161, 242)'
}
const Tab = {
  display:'inline-block',
  width: '100%',
  padding:'20px 0px',
  color:'rgb(85, 95, 97)'
}
const TabIcon = {
  fontSize:'40px',
  fontWeight:200,
}
const TabName = {
  fontSize:'18px',
  fontWeight:300,
  marginBottom:'0px'
}

class Navigation extends React.Component{
  render(){
    const Path = this.props.location.pathname
    return(
      <div className="" style={Container}>
        <Row type="flex" justify="center">
          <Col className="" xs={24} sm={24} md={24} lg={18} xl={12}>
            <Row>
              <Col className="" span={4}>
                <Link to="/client/dashboard" style={Tab}>
                  <Icon type="arrow-left" style={TabIcon}/>
                  <p style={TabName}>Dashboard</p>
                </Link>
              </Col>
              <Col className="" span={4}>
                <Link className="" to="/client/addfunds" style={ (Path === '/client/addfunds' ? ActiveTab : Tab) }>
                  <Icon type="wallet" style={TabIcon}/>
                  <p style={TabName}>Add Funds</p>
                </Link>
              </Col>
              <Col className="" span={4}>
                <Link to="/client/sendmoney" style={ (Path === '/client/sendmoney' ? ActiveTab : Tab) }>
                  <Icon type="rocket" style={TabIcon}/>
                  <p style={TabName}>Send Money</p>
                </Link>
              </Col>
              <Col className="" span={4}>
                <Link to="/client/buyload" style={Tab}>
                  <Icon type="tablet" style={TabIcon}/>
                  <p style={TabName}>Buy Load</p>
                </Link>
              </Col>
              <Col className="" span={4}>
                <Link to="/client/buyload" style={Tab}>
                  <Icon type="credit-card" style={TabIcon}/>
                  <p style={TabName}>Pay Bills</p>
                </Link>
              </Col>
              <Col className="" span={4}>
                <Link to="/client/buyload" style={Tab}>
                  <Icon type="shop" style={TabIcon}/>
                  <p style={TabName}>Shop</p>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Navigation
