import React from 'react'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import {Card, Button} from 'antd'
import QueueAnim from 'rc-queue-anim'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor: 'default'
}
const Balance = {
  fontSize:'30px',
  color: 'rgb(29, 161, 242)',
  marginBottom:'10px'
}
const CurrencyContainer = {
  padding: '10px 15px',
  backgroundColor:'#f0f5ff'
}
const CurrencyBal = {
  float:'right'
}

export default ({ready, currencies}) => {
  const renderPrimaryCurrency = (currencies) => {
    return currencies.filter(currency =>  currency.primary === true).map((currency, index) => {
      return(
        <p key={index} style={Balance}>
          <span style={{fontWeight:400}}> {currency.symbol}</span>
          <span style={{fontWeight:500}}> {currency.balance}</span>
          <span style={{fontWeight:400}}> {currency.code}*</span>
        </p>)
    })
  }
  const renderCurrencies = (currencies) => {
    return currencies.filter(currency => currency.primary === false && currency.status).map((currency, index) => {
      return(
        <div key={index} style={{marginBottom:'2px'}}>
          <span>{currency.code}</span>
          <span style={CurrencyBal}>{currency.balance}</span>
        </div>)
    })
  }
  //console.log(currencies)
  return(
    <QueueAnim type={['bottom', 'top']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
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
          <p style={{marginBottom:'0px', fontWeight:200}}>Available</p>
          <div>
            {!isEmpty(currencies) ?  renderPrimaryCurrency(currencies) : '<p>Error Fetching Your Wallet</p>'}
          </div>
          <div style={CurrencyContainer}>
            {!isEmpty(currencies) ?  renderCurrencies(currencies) : '<p>Error Fetching Your Wallet</p>'}
          </div>
          <Button style={{marginTop:'15px'}}><Link to="/client/cashin">Cash In</Link></Button>
        </Card>
      </div>
    </QueueAnim>
  )
}
