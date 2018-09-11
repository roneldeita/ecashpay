import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Affix, Menu, Row, Col, Icon, Badge } from 'antd'
import EpayLogo from '../../assets/images/Ecashpay_Logo_Orig.png'
//components
//import Notifications from './Notifications'

const SubMenu = Menu.SubMenu;

const NavContainer = {
  backgroundColor: '#ffffff',
  borderBottom: '2px solid #999999'
}
const IconStyle = {
  margin:'0',
  fontSize:'20px'
}
const Logo = {
  width: '180px'
}
const Caret = {
  fontSize: '11px'
}
const Display = (loggedIn) => {
  return loggedIn ? 'none' : ''
}

const TopNavigation = ({locale, onChangeLocale, loggedIn, logout, profile}) => {
  // const profileTitle = (
  //   <Affix>
  //     {/*<div style={{minWidth:'200px'}}>
  //       <span style={{display:'block', float:'left', fontWeight:400}}>{profile.firstName} {profile.lastName}</span>
  //       <span style={{display:'block', lineHeight:'26px' , float:'right'}}><Icon type="qrcode"/></span>
  //     </div>*/}
  //   </Affix>
  // )
  // const profileContent = (
  //   <List size="small">
  //     {/*<List.Item>Account Level</List.Item>*/}
  //     <List.Item><Link to="/client/settings">Settings</Link></List.Item>
  //     <List.Item><a to="" onClick={logout}>Logout</a></List.Item>
  //   </List>
  // )
  const Redirect = loggedIn ? profile.role === `individual` ? `/client/dashboard` : `/${profile.role}/dashboard` : `/`
  return(
    <Affix style={{width:'100%'}}>
      <div style={NavContainer}>
        <Row className="ecpa-layout" type="flex" justify="center">
          <Col xs={0} sm={9} md={7}>
            <Row type="flex" justify="start">
              <Col>
                <Link to={Redirect}><img src={EpayLogo} alt="logo" style={Logo} /></Link>
              </Col>
            </Row>
          </Col>
          <Col xs={18} sm={9} md={11}>
            <Row type="flex" justify="end">
              <Col>
                <Menu
                  mode="horizontal" 
                  onSelect={onChangeLocale} 
                  selectedKeys={['/']}>
                  <SubMenu
                    style={{display:Display(loggedIn)}} 
                    title={<span>{locale.toUpperCase()} <Icon type="down" style={Caret}/></span>}>
                    <Menu.Item key="en">English</Menu.Item>
                    <Menu.Item key="zh">中文</Menu.Item>
                    <Menu.Item key="es">Español</Menu.Item>
                    <Menu.Item key="my">Malay</Menu.Item>
                    <Menu.Item key="ru">русский</Menu.Item>
                  </SubMenu>
                  {/*<Menu.Item key="app" style={{display:Display(loggedIn)}}>Ecashpay Card</Menu.Item>
                <Menu.Item key="hepl" style={{display:Display(loggedIn)}}>Help</Menu.Item>*/}
                  <Menu.Item key="login" style={{display:Display(loggedIn)}}><Link to="/login">Login</Link></Menu.Item>
                  <Menu.Item key="signup" style={{display:Display(loggedIn)}}><Link to="/client/register">Sign up</Link></Menu.Item>
                  {/*<Menu.Item key="bell" style={{display:Display(!loggedIn)}}>
                    <Popover placement="bottom" content={<Notifications/>} trigger="click">
                      <Badge>
                        <Icon type="bell" style={IconStyle}/>
                      </Badge>
                    </Popover>
                  </Menu.Item>*/}
                  <Menu.Item key="setting" style={{display:Display(!loggedIn)}}>
                    <Badge>
                      <Icon type="setting" theme="twoTone" style={IconStyle}/>
                    </Badge>
                    {/*<Popover placement="bottom" title={profileTitle} content={profileContent} trigger="click">
                      <Badge>
                        <Icon type="setting" style={IconStyle}/>
                      </Badge>
                    </Popover>*/}
                  </Menu.Item>
                  <Menu.Item key="logout" style={{display:Display(!loggedIn)}}>
                    <Badge>
                      <Icon type="logout" style={IconStyle}/>
                    </Badge>
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <style jsx="true" global="true">{`
        .ant-menu-horizontal{
          line-height:62px
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
        }
        .ant-menu-submenu-title{
          padding: 0px
        }
        .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu {
          width:100%;
          padding: 18px 15px;
        }*/
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
