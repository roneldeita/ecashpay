import React from 'react'
import { Tabs, Icon, Badge } from 'antd'
const TabPane = Tabs.TabPane
// const NotifContainer = {
//   width:250
// }
// const NotifContainerItem = {
//   padding:'8px 15px',
//   fontSize: '13px'
// }

class Notifications extends React.Component{
  render(){
    return(
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Badge count={10}><Icon type="notification"/></Badge></span>} key="1">notification</TabPane>
        <TabPane tab={<span><Badge count={10}><Icon type="message"/></Badge></span>} key="2">message</TabPane>
        <TabPane tab={<span><Badge count={1}><Icon type="flag"/></Badge></span>} key="3">alerts</TabPane>
      </Tabs>
    )
  }
}

export default Notifications
