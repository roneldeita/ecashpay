import React from 'react'
import { Affix, Menu, Row, Col, Icon } from 'antd'
import '../../assets/css/TopNavigation.css'
import EpayLogo from '../../assets/images/Ecashpay_Logo_Orig.png'
const SubMenu = Menu.SubMenu;

const TopNavigation = () => {
  return(
    <Affix>
      <div className="nav-container">
        <Row className="" type="flex" justify="center">
          <Col className="" span={5}>
            <img src={EpayLogo} alt="logo" className="logo" />
          </Col>
          <Col className="" span={13}>
            <Menu mode="horizontal">
              <SubMenu title={<span>English <Icon type="down" /></span>}>
                <Menu.Item key="setting:1">English</Menu.Item>
                <Menu.Item key="setting:2">Chinese</Menu.Item>
              </SubMenu>
              <Menu.Item key="app">Ecashpay Card</Menu.Item>
              <Menu.Item key="hepl">Help</Menu.Item>
              <Menu.Item key="login">Login</Menu.Item>
              <Menu.Item key="signup">Sign up</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </Affix>
  )
}

export default TopNavigation
