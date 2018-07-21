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
const renderOTC = (merchants, next, select) => {
  return merchants.filter(merchant => merchant.type === 2).map((merchant, index) => {
    return (
      <Card.Grid key={index} style={gridStyle} onClick={() => {next(); select(merchant)}}>
        <img src={merchant.logo} alt={merchant.logo} style={{height:'100px'}}/>
        <p style={{marginBottom:0}}>{merchant.name}</p>
      </Card.Grid>
    )
  })
}
const renderBanks = (merchants, next, select) => {
  return merchants.filter(merchant => merchant.type === 1).map((merchant, index) => {
    return (
      <Card.Grid key={index} style={gridStyle} onClick={() => {next(); select(merchant)}}>
        <img src={merchant.logo} alt={merchant.logo} style={{height:'100px'}}/>
        <p style={{marginBottom:0}}>{merchant.name}</p>
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
          <Card>
            {renderOTC(merchants, next, select)}
          </Card>
          <p>2. Bank Deposit</p>
          <Card>
            {renderBanks(merchants, next, select)}
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
