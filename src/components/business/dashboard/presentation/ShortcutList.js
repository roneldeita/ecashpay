import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'

// const DividerStyle = {
//   margin:'10px 0 5px 0'
// }
export default () => {
  return(
    <QueueAnim type={['bottom', 'top']} delay="900" ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Card>
        {/*<Link to="/currencies">Manage Currencies</Link>
          <Divider style={DividerStyle}/>*/}
          <Link to="/knownaccounts">Manage Known Accounts</Link>
        </Card>
      </div>
    </QueueAnim>
  )
}
