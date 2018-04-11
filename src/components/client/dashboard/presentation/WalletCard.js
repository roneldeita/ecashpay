import React from 'react'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import {Card, Divider, Button, Icon} from 'antd'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}
const Title = {
  fontSize:'20px',
  fontWeight:600,
  marginBottom:'20px'
}
const Balance = {
  fontSize:'30px',
  color: 'rgb(29, 161, 242)',
  marginBottom:'10px'
}
const CurrencyContainer = {
  padding: '10px 15px',
  backgroundColor:'#eaf4f9'
}
const CurrencyCode = {
  fontSize: '16px'
}
const CurrencyBal = {
  fontSize: '16px',
  float:'right'
}
const AddFundButton = {
  paddingRight:'35px',
  paddingLeft:'35px'
}
const renderCurrencies = (currencies) => {
  return currencies.map((currency, index) =>{
    return (
      <div key={index} className="">
        <span className="" style={CurrencyCode}>{currency.code}</span>
        <span className="" style={CurrencyBal}>{currency.balance}</span>
      </div>
    )
  })
}

const WalletCard = ({ready, currencies}) => {
  return(
    <Card hoverable loading={ready} style={CardStyle}>
      <Link style={{float: 'right'}} to='/client/manage/currencies'><span>Manage Currencies <Icon type="caret-right" style={{fontSize:'11px'}}/></span></Link>
      <p style={Title}>Ecash</p>
      <p style={{marginBottom:'0px'}}>Available</p>
      <p style={Balance}>
        <span style={{fontWeight:600}}>&#8369;</span>
        <span style={{fontWeight:700}}> 00.00 </span>
        <span style={{fontWeight:600}}>PHP*</span>
      </p>
      <div style={CurrencyContainer}>
        {!isEmpty(currencies) ?  renderCurrencies(currencies) : '<p>Error Fetching Your Wallet</p>'}
      </div>
      <Divider/>
      <Button type="primary" size="large" style={AddFundButton}><Link to="/client/addfunds"><Icon type="wallet"/> Add Funds</Link></Button>
    </Card>
  )
}

export default WalletCard
