import React from 'react'
import { Card } from 'antd'
import Moment from 'react-moment'
import QueueAnim from 'rc-queue-anim'

export default ({transaction}) => {
  return(
    <QueueAnim type={['bottom', 'top']} ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Card hoverable>
          <p style={{fontSize:'18px', marginBottom:0, textAlign:'center'}}>
            This transaction has been marked as paid. We will credit your account as soon as we have confirmed your payment.
          </p>
        </Card>
      </div>
    </QueueAnim>
  )
}
