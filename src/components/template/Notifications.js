import React from 'react'
import { Tabs, Icon, Badge } from 'antd'
const TabPane = Tabs.TabPane

// const NotifContainer = {
//   padding: '10px 0px'
// }
// const NotifContainerItem = {
//   padding:'8px 15px',
//   fontSize: '13px'
// }

class Notifications extends React.Component{
  render(){
    return(
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Badge count={10}><Icon type="bell"/></Badge></span>} key="1"></TabPane>
        <TabPane tab={<span><Badge count={4}><Icon type="message"/></Badge></span>} key="2">Messages</TabPane>
        <TabPane tab={<span><Badge count={1}><Icon type="flag"/></Badge></span>} key="3">Alerts</TabPane>
      </Tabs>
    )
  }
}

export default Notifications
