import React from 'react'
import { isEmpty } from 'lodash'
import { Link } from 'react-router-dom'
import {Card, Button} from 'antd'
import QueueAnim from 'rc-queue-anim'

const CardStyle = {
  margin: '0px 0px 15px 0px',
  padding: '0px',
  cursor: 'default'
}
const Balance = {
  fontSize:'30px',
  color: 'rgb(29, 161, 242)',
  marginBottom:'10px'
}
// const CurrencyContainer = {
//   padding: '10px 15px',
//   backgroundColor:'#f0f5ff'
// }
// const CurrencyBal = {
//   float:'right'
//}

export default ({ready, currencies, cashflow}) => {
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
  // 
  //console.log(currencies)
  return(
    <QueueAnim type={['bottom', 'top']} delay="700" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Card
          hoverable
          className="wallet-card"
          title="Ecashpay Wallet"
          loading={ready}
          style={CardStyle}
          actions={[<Link to="/transfer">Transfer</Link>]}>
          <p style={{marginBottom:'0px', fontWeight:200}}>Available</p>
          <div>
            {!isEmpty(currencies) &&  renderPrimaryCurrency(currencies)}
          </div>
          {/*<div style={CurrencyContainer}>
            {!isEmpty(currencies) &&  renderCurrencies(currencies)}
          </div>*/}
           <p style={{marginBottom:'0px', fontWeight:300, display: (cashflow.balance === undefined ? 'none' : 'block')}}>Running Cash In total for this month: P<b>{cashflow.balance }</b>. <Link to="/client/cash-in/breakdown">View details</Link></p>
          <Button style={{marginTop:'15px'}}><Link to="/cash-in">Cash In</Link></Button>
         
        </Card>
      </div>
    </QueueAnim>
  )
}
