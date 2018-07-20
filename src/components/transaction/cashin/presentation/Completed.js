import React from 'react'
import { Alert } from 'antd'
import QueueAnim from 'rc-queue-anim'

export default ({transaction}) => {
  return(
    <QueueAnim type={['bottom', 'top']} ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Alert
          message="Cash In Completed"
          description="Your transaction has been processed and your funds have been credited to your Ecash Wallet."
          type="success"
          showIcon
          style={{marginBottom:'10px'}}
        />
      </div>
    </QueueAnim>
  )
}
