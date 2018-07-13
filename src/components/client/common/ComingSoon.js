import React from 'react'
import { Card, Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'

const StepStyle = {
  textAlign:'center',
  height:'500px',
  margin: '70px 0px 0px 0px',
  paddingTop:'120px',
  color:'#a0a0a0'
}
const Clock = {
  fontSize:'68px',
  lineHeight:'68px',
}
const Text = {
  fontSize:'42px',
  lineHeight:'42px',
  fontWeight:200
}

export default () => {
  return(
    <QueueAnim type={['bottom', 'top']} ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <Card style={StepStyle}>
          <div>
            <span style={Clock} className="pe-7s-clock"/>
            <p style={Text}>Available Soon</p>
          </div>
        </Card>
      </div>
    </QueueAnim>
  )
}
