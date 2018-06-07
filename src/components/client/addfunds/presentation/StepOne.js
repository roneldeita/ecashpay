import React from 'react'
import { Card, Divider } from 'antd'

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
        <img src={merchant.logo} alt={merchant.logo} style={{width:'100%'}}/>
        <p>{merchant.name}</p>
      </Card.Grid>
    )
  })
}
const StepOne = ({visibility, next, merchants, featured, select}) => {
  return(
    <div className="" style={visibility ? Show : Hide}>
      <Card>
        <p style={Title}>Choose a merchant</p>
          <Card>
            {renderFeatured(featured, next, select)}
          </Card>
          <Divider/>
          <Card>
            {renderMerchants(merchants, next, select)}
          </Card>
      </Card>
    </div>
  )
}

export default StepOne
