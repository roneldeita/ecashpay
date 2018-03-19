import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Affix, Menu, Row, Col, Icon, Popover } from 'antd'
import EpayLogo from '../../assets/images/Ecashpay_Logo_Orig.png'

// import 'antd/lib/affix/style/css'
// import 'antd/lib/menu/style/css'
// import 'antd/lib/row/style/css'
// import 'antd/lib/col/style/css'
// import 'antd/lib/icon/style/css'

const SubMenu = Menu.SubMenu;

const NavContainer = {
  backgroundColor: '#ffffff',
  marginBottom: '30px',
  borderBottom: '2px solid #999999'
}
const Logo = {
  marginTop: '22px',
  width: '180px'
}

const AntMenu = {
  float: 'right',
  fontSize: '18px',
  borderBottom: '0px',
}

const Caret = {
  fontSize: '11px'
}

const isLoggedIn = (loggedIn) => {
  return loggedIn ? 'none' : 'block'
}
const NotifTitle = (
  <div style={{minWidth:'250px'}}>
    <span style={{display:'block', fontSize:'16px', float:'left', fontWeight:400}}>Notifications</span>
    <Link to="/notifications" style={{display:'block', fontSize:'11px', lineHeight:'26px' , float:'right'}}>Open All</Link>
  </div>
)
const NotifContent = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const TopNavigation = ({locale, onChangeLocale, loggedIn}) => {
  return(
    <Affix style={{width:'100%'}}>
      <div style={NavContainer}>
        <Row className="" type="flex" justify="center">
          <Col sm={9} md={7}>
            <Link to={loggedIn ? '/client/dashboard' : '/'}><img src={EpayLogo} alt="logo" style={Logo} /></Link>
          </Col>
          <Col sm={9} md={11}>
            <Menu mode="horizontal" onSelect={onChangeLocale} style={AntMenu}>
              <SubMenu title={<span>{locale.toUpperCase()} <Icon type="down" style={Caret}/></span>}>
                <Menu.Item key="en">English</Menu.Item>
                <Menu.Item key="zh">中文</Menu.Item>
                <Menu.Item key="es">Español</Menu.Item>
                <Menu.Item key="my">Malay</Menu.Item>
                <Menu.Item key="ru">русский</Menu.Item>
              </SubMenu>
              <Menu.Item key="app" style={{display:isLoggedIn(loggedIn)}}>Ecashpay Card</Menu.Item>
              <Menu.Item key="hepl" style={{display:isLoggedIn(loggedIn)}}>Help</Menu.Item>
              <Menu.Item key="login" style={{display:isLoggedIn(loggedIn)}}><Link to="/login">Login</Link></Menu.Item>
              <Menu.Item key="signup" style={{display:isLoggedIn(loggedIn)}}><Link to="/register">Sign up</Link></Menu.Item>
              <Menu.Item key="bell" style={{display:isLoggedIn(!loggedIn)}}>
                <Popover placement="bottom" title={NotifTitle} content={NotifContent} trigger="click"><div><Icon type="bell" style={{margin:'0 auto'}}/></div></Popover>
              </Menu.Item>
              <Menu.Item key="user" style={{display:isLoggedIn(!loggedIn)}}><Icon type="user"/></Menu.Item>
              <Menu.Item key="logout" style={{display:isLoggedIn(!loggedIn)}}>Logout</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
      <style jsx="true" global="true">{`
        .ant-menu-submenu-title{
          padding: 0px
        }
        .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu {
          padding: 17px 15px;
        }
      `}
      </style>
    </Affix>
  )
}

TopNavigation.propTypes = {
  locale: PropTypes.string.isRequired,
  onChangeLocale: PropTypes.func.isRequired
}

export default TopNavigation
