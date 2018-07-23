import React from 'react'
import { Alert } from 'antd'
import QueueAnim from 'rc-queue-anim'

export default ({transaction}) => {
  return(
    <QueueAnim type={['bottom', 'top']} ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Alert
          message="Verifying your proof of delivery"
          description="We will credit your account as soon as we have confirmed the proof of posting/delivery."
          type="info"
          showIcon
          style={{marginBottom:'10px'}}
        />
      </div>
    </QueueAnim>
  )
}
