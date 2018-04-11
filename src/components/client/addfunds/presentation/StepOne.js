import React from 'react'
import { Card } from 'antd'

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
const renderMerchants = (merchants, next, select) => {
  return merchants.map((merchant, index) => {
    return (
      <Card.Grid key={index} style={gridStyle} onClick={() => {next(); select(merchant)}}>
        <p>{merchant.name}</p>
        <p>(via {merchant.via})</p>
      </Card.Grid>
    )
  })
}
const StepOne = ({visibility, next, merchants, select}) => {
  return(
    <div className="" style={visibility ? Show : Hide}>
      <Card>
        <p style={Title}>Choose a merchant</p>
          <Card>
            {renderMerchants(merchants, next, select)}
          </Card>
      </Card>
    </div>
  )
}

export default StepOne
