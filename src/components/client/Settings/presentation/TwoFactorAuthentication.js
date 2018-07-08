import React from 'react'
import { Card, List } from 'antd'
export default () =>{
  return(
    <Card title="Two-Factor Authentication" style={{marginTop:'15px'}}>
      <List.Item actions={[<a>Disable 2FA</a>]}>
        <List.Item.Meta
          title="Status"
          description="Enabled"/>
        <div>Two-factor authentication provides an extra layer of security for your account.</div>
      </List.Item>
    </Card>
  )
}
