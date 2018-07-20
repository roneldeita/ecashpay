import React from 'react'
import { Card } from 'antd'
import {isEmpty} from 'lodash'

const Title = {
  fontSize:'28px',
  fontWeight: 300,
  textAlign: 'center'
}
const gridStyle = {
  width: '25%',
  textAlign: 'center',
}
const Show ={
  display: 'block'
}
const Hide ={
  display: 'none'
}
const renderFeatured = (merchants, next, select) => {
  return merchants.map((merchant, index) => {
    return (
      <Card.Grid key={index} style={gridStyle} onClick={() => {next(); select(merchant)}}>
        <img src={merchant.logo} alt={merchant.logo} style={{width:'100%'}}/>
        <p>{merchant.name}</p>
      </Card.Grid>
    )
  })
}
const renderMerchants = (merchants, next, select) => {
  return merchants.map((merchant, index) => {
    return (
      <Card.Grid key={index} style={gridStyle} onClick={() => {next(); select(merchant)}}>
        <img src={merchant.logo} alt={merchant.logo} style={{maxWidth:'100%', height:'50px'}}/>
        <p>{merchant.name}</p>
      </Card.Grid>
    )
  })
}
const StepOne = ({visibility, next, merchants, featured, select}) => {
  return(
    <div style={visibility ? Show : Hide}>
      <Card loading={isEmpty(merchants)}>
        <p style={Title}>Add money to your Ecash Pay Account <br/>at any of our Cash In channels.</p>
          <Card>
            {renderFeatured(featured, next, select)}
          </Card>
          <p>1. Over-the-counter (OTC)</p>
          <p>2. Bank Deposit</p>
          <Card>
            {renderMerchants(merchants, next, select)}
          </Card>
          <p>3. Credit/Debit Card</p>
      </Card>
      <style jsx="true">{`
        .ant-card-bordered{
          border:none
        }
      `}</style>
    </div>
  )
}

export default StepOne