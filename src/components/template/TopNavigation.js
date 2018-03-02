import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Affix, Menu, Row, Col, Icon } from 'antd'
import EpayLogo from '../../assets/images/Ecashpay_Logo_Orig.png'

import 'antd/lib/affix/style/css'
import 'antd/lib/menu/style/css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import 'antd/lib/icon/style/css'

const SubMenu = Menu.SubMenu;

const NavContainer = {
  backgroundColor: '#ffffff',
  padding: '18px 0 13px 0',
  borderBottom: '2px solid #999999'
}
const Logo = {
  margin: '5px 0px',
  width: '180px'
}

const AntMenu = {
  float: 'right',
  fontSize: '18px',
  borderBottom: '0px',
}

const TopNavigation = ({locale, onChangeLocale}) => {
  return(
    <Affix style={{width:'100%'}}>
      <div style={NavContainer}>
        <Row className="" type="flex" justify="center">
          <Col className="" sm={9} md={7}>
            <Link to="/"><img src={EpayLogo} alt="logo" style={Logo} /></Link>
          </Col>
          <Col className="" sm={9} md={11}>
            <Menu mode="horizontal" onSelect={onChangeLocale} style={AntMenu}>
              <SubMenu title={<span>{locale} <Icon type="down"/></span>}>
                <Menu.Item key="EN">English</Menu.Item>
                <Menu.Item key="CN">中文</Menu.Item>
                <Menu.Item key="ES">Español</Menu.Item>
                <Menu.Item key="MY">Malay</Menu.Item>
                <Menu.Item key="RU">русский</Menu.Item>
              </SubMenu>
              <Menu.Item key="app">Ecashpay Card</Menu.Item>
              <Menu.Item key="hepl">Help</Menu.Item>
              <Menu.Item key="login"><Link to="/login">Login</Link></Menu.Item>
              <Menu.Item key="signup"><Link to="/register">Sign up</Link></Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </Affix>
  )
}

TopNavigation.propTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLocale: PropTypes.func.isRequired
}

export default TopNavigation
