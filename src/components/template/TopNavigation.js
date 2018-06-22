import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Affix, Menu, Row, Col, Icon, Popover, List } from 'antd'
import EpayLogo from '../../assets/images/Ecashpay_Logo_Orig.png'

const SubMenu = Menu.SubMenu;

const NavContainer = {
  backgroundColor: '#ffffff',
  borderBottom: '2px solid #999999'
}
const Logo = {
  width: '180px'
}

const AntMenu = {
  fontSize: '18px',
}
const Caret = {
  fontSize: '11px'
}
const NotifContainer = {
  padding: '10px 0px'
}
const NotifContainerItem = {
  padding:'8px 15px',
  fontSize: '13px'
}
const isLoggedIn = (loggedIn) => {
  return loggedIn ? 'none' : 'block'
}


const TopNavigation = ({locale, onChangeLocale, loggedIn}) => {
  const NotifTitle = (
    <div style={{minWidth:'250px'}}>
      <span style={{display:'block', float:'left', fontWeight:400}}>Notifications</span>
      <Link to="/notifications" style={{display:'block', fontSize:'11px', lineHeight:'26px' , float:'right'}}>Open All</Link>
    </div>
  )
  const NotifContent = (
    <List style={NotifContainer}>
      <List.Item>
        <div style={NotifContainerItem}>Notif1</div>
      </List.Item>
      <List.Item>
        <div style={NotifContainerItem}>Notif1</div>
      </List.Item>
      <List.Item>
        <div style={NotifContainerItem}>Notif1</div>
      </List.Item>
    </List>
  )
  const profileTitle = (
    <Affix>
      <div style={{minWidth:'180px'}}>
        <span style={{display:'block', float:'left', fontWeight:400}}>Ronel A. Deita</span>
        <Link to="/client/settings" style={{display:'block', lineHeight:'26px' , float:'right'}}><Icon type="qrcode"/></Link>
      </div>
    </Affix>
  )
  const profileContent = (
    <List size="small">
      <List.Item>Account Level</List.Item>
      <List.Item>Settings</List.Item>
      <List.Item>Logout</List.Item>
    </List>
  )
  return(
    <Affix style={{width:'100%'}}>
      <div style={NavContainer}>
        <Row className="" type="flex" justify="center">
          <Col xs={0} sm={11} md={7}>
            <Row type="flex" justify="start">
              <Col>
                <Link to={loggedIn ? '/client/dashboard' : '/'}><img src={EpayLogo} alt="logo" style={Logo} /></Link>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={11} >
            <Row type="flex" justify="end">
              <Col>
                <Menu mode="horizontal" onSelect={onChangeLocale} style={AntMenu}>
                  <SubMenu title={<span>{locale.toUpperCase()} <Icon type="down" style={Caret}/></span>}>
                    <Menu.Item key="en">English</Menu.Item>
                    <Menu.Item key="zh">中文</Menu.Item>
                    <Menu.Item key="es">Español</Menu.Item>
                    <Menu.Item key="my">Malay</Menu.Item>
                    <Menu.Item key="ru">русский</Menu.Item>
                  </SubMenu>
                  {/*<Menu.Item key="app" style={{display:isLoggedIn(loggedIn)}}>Ecashpay Card</Menu.Item>
                <Menu.Item key="hepl" style={{display:isLoggedIn(loggedIn)}}>Help</Menu.Item>*/}
                  <Menu.Item key="login" style={{display:isLoggedIn(loggedIn)}}><Link to="/login">Login</Link></Menu.Item>
                  <Menu.Item key="signup" style={{display:isLoggedIn(loggedIn)}}><Link to="/register">Sign up</Link></Menu.Item>
                  <Menu.Item key="bell" style={{display:isLoggedIn(!loggedIn)}}>
                    <Popover placement="bottom" title={NotifTitle} content={NotifContent} trigger="click">
                      <Icon type="bell" style={{margin:'0 auto'}}/>
                    </Popover>
                  </Menu.Item>
                  <Menu.Item key="user" style={{display:isLoggedIn(!loggedIn)}}>
                    <Popover placement="bottom" title={profileTitle} content={profileContent} trigger="click">
                      <Icon type="user" style={{margin:'0 auto'}}/>
                    </Popover>
                  </Menu.Item>
                  <Menu.Item key="logout" style={{display:isLoggedIn(!loggedIn)}}>Logout</Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <style jsx="true" global="true">{`
        .ant-menu-horizontal{
          line-height:26px
        }
        /*.ant-popover-arrow,
        .ant-popover-title{
          background-color:#f7f7f7
        }
        .ant-popover-inner-content{
          background-color:#f7f7f7
        }
        .ant-popover-inner-content{
          padding:0px
        }*/
        .ant-menu-submenu-title{
          padding: 0px
        }

        .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu {
          padding: 18px 15px;
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
