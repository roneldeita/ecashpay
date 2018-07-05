import React from 'react'
import { Icon, Popconfirm } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/Ecashpay_Logo_White_2.png'

import 'antd/lib/icon/style/css'

const Statement = {
  fontSize: '45px',
  lineHeight: '15px',
  fontWeight: 600
}
const LogoContainer = {
  textAlign:'center'
}
const LogoStyle = {
  width:'180px',
}
const GoHome = {
  color:'#ededed',
  position:'absolute',
  fontSize:'20px',
  top:0,
  right:0,
  padding:'10px',
}

class RightSection extends React.Component{
  handleLogOut(){
    localStorage.removeItem('auth')
    sessionStorage.removeItem('profile')
    sessionStorage.removeItem('tfa')
    sessionStorage.removeItem('recover')
    window.location.href = '/'
  }
  render(){
    return (
      <div>
        <Popconfirm placement="left" title="Are you sure you want to leave this page?" onConfirm={this.handleLogOut} okText="Yes" cancelText="No">
          <Icon type="close-circle-o" style={GoHome} id="close"/>
        </Popconfirm>
        <p style={Statement}>Fastest</p>
        <p style={Statement}>Convenient</p>
        <p style={Statement}>and</p>
        <p style={Statement}>Cheapest</p>
        <p style={Statement}>Money</p>
        <p style={Statement}>Transfers</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={LogoContainer}>
          <Link to="/"><img src={Logo} alt="logo" style={LogoStyle}/></Link>
        </div>
        <style jsx="true">{`
          .anticon-close-circle-o:hover{
            font-size:26px !important;
            padding:8px !important
          }
        `}
        </style>
      </div>
    )
  }
}

export default RightSection
