import React from 'react'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import {Card, Button, Icon} from 'antd'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
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
const renderCurrencies = (currencies) => {
  return currencies.map((currency, index) =>{
    return currency.status && (
      <div key={index} className="">
        <span className="" style={CurrencyCode}>{currency.code}</span>
        <span className="" style={CurrencyBal}>{currency.balance}</span>
      </div>
    )
  })
}
const renderPrimaryCurrency = (currencies) => {
  return currencies.map((currency, index) => {
    return currency.primary && (
      <p key={index} style={Balance}>
        <span style={{fontWeight:400}}> {currency.symbol}</span>
        <span style={{fontWeight:500}}> {currency.balance}</span>
        <span style={{fontWeight:400}}> {currency.code}*</span>
      </p> )
  })
}

export default ({ready, currencies}) => {
  //console.log(currencies)
  return(
    <Card
      hoverable
      className="wallet-card"
      title="Ecash"
      loading={ready}
      style={CardStyle}
      actions={[
        <Link to="/client/convert">Convert</Link>,
        <Link to="/client/manage/currencies">Manage Currencies</Link>]}>
      {/*<Link style={{float: 'right'}} to='/client/manage/currencies'><span>Manage Currencies <Icon type="caret-right" style={{fontSize:'11px'}}/></span></Link>*/}
      {/*<p style={Title}>Ecash</p>*/}
      <p style={{marginBottom:'0px'}}>Available</p>
      <div>
        {!isEmpty(currencies) ?  renderPrimaryCurrency(currencies) : '<p>Error Fetching Your Wallet</p>'}
      </div>
      <div style={CurrencyContainer}>
        {!isEmpty(currencies) ?  renderCurrencies(currencies) : '<p>Error Fetching Your Wallet</p>'}
      </div>
      <Button type="primary" style={{marginTop:'15px'}}><Link to="/client/addfunds"><Icon type="wallet"/> Add Funds</Link></Button>
    </Card>
  )
}
