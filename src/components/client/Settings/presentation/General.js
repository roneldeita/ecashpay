import React from 'react'
import { Card, List } from 'antd'
export default ({profile, Reset}) =>{
  console.log(profile)
  return(
    <Card title="General Settings" style={{marginTop:'50px'}}>
      <List size="small">
        <List.Item actions={[<a>Change Email Address</a>]}>
          <List.Item.Meta
            title="Email"
            description={profile.email}/>
        </List.Item>
        <Reset/>
        <List.Item  actions={[<a>Change Phone Numnber</a>]}>
          <List.Item.Meta
            title="Phone Number"
            description={profile.phone}/>
        </List.Item>
        <List.Item  actions={[<a>Change Password</a>]}>
          <List.Item.Meta
            title="Password"
            description={<span style={{fontWeight:600, fontSize:'24px', lineHeight:'12px'}}>........</span>}/>
        </List.Item>
      </List>
    </Card>
  )
}
