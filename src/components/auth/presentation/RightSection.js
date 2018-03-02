import React from 'react'
import Logo from '../../../assets/images/Ecashpay_Logo_White_2.png'

export const Statement = {
  fontSize: '45px',
  lineHeight: '15px',
  fontWeight: 600
}
export const LogoContainer = {
  textAlign:'center'
}
export const LogoStyle = {
  width:'180px',
}

const RightSection = () => {
  return (
    <div>
      <p style={Statement}>Fastest</p>
      <p style={Statement}>Convenient</p>
      <p style={Statement}>and</p>
      <p style={Statement}>Cheapest</p>
      <p style={Statement}>Money</p>
      <p style={Statement}>Transters</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={LogoContainer}>
        <img src={Logo} alt="logo" style={LogoStyle}/>
      </div>
    </div>
  )
}

export default RightSection
