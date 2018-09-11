import React from 'react'
import { Icon, Popconfirm } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/Ecashpay_Logo_White_2.png'

const Statement = {
  fontSize: '30px',
  lineHeight: '42px',
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
        <p style={Statement}>Highly Secured</p>
        <p style={Statement}>Real-time Transaction</p>
        <p style={Statement}>Easy Integration</p>
        <p style={Statement}>Anti-Fraud Solution</p>
        <p style={Statement}>24/7 Chat Support</p>
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
