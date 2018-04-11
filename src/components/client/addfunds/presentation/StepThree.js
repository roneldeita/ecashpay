import React from 'react'
import {Card, Button, Divider, Icon} from 'antd'

const Title = {
  fontSize:'28px',
  fontWeight: 300,
  textAlign: 'center'
}
const Show ={
  display: 'block'
}
const Hide ={
  display: 'none'
}

const StepThree = ({visibility, prev}) => {
  return(
    <Card className="" style={visibility ? Show : Hide}>
      <p style={Title}>Payment</p>
      <Divider/>
      <div>
        <Button onClick={prev}><Icon type="left"/>Prev</Button>
      </div>
    </Card>
  )
}

export default StepThree
