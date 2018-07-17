import React from 'react'
import { Card, Divider } from 'antd'
import { Link } from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'

const DividerStyle = {
  margin:'10px 0 5px 0'
}
export default () => {
  return(
    <QueueAnim type={['bottom', 'top']} delay="500" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Card>
          <Link to="/client/manage/currencies">Manage Currencies</Link>
          <Divider style={DividerStyle}/>
          <Link to="/client/manage/knownaccounts">Manage Known Accounts</Link>
        </Card>
      </div>
    </QueueAnim>
  )
}
