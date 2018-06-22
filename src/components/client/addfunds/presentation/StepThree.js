import React from 'react'
import {Card, Alert} from 'antd'

const Title = {
  fontSize:'28px',
  fontWeight: 300,
  textAlign: 'center'
}

const StepThree = () => {
  return(
    <Card>
      <p style={Title}>Make your payment</p>
      <Alert
        style={{margin:'0px 30px 20px 30px'}}
        message="IMPORTANT:"
        description="Due to a limitation in Outlet's online system, deposits made online between 10 PM and 4 AM can only be processed after 2 business days."
        type="info"
      />
      <ol>
        <li>Click on Pay with DragonPay.</li>
        <li>DragonPay will email you instructions on how to complete the payment via BPI Express Online/Mobile.</li>
        <li>Your order will be automatically processed once DragonPay validates your payment.</li>
      </ol>
    </Card>
  )
}

export default StepThree
