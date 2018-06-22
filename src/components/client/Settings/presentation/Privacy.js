import React from 'react'
import { Card, List } from 'antd'
export default () =>{
  return(
    <Card title="Privacy Settings" style={{marginTop:'15px'}}>
      <List size="small">
        <List.Item actions={[<a>Enable</a>]}>
          <List.Item.Meta
            title="Status"
            description="Disabled"/>
          <p>How would you like to appear when another Ecashpay user sends you money?</p>
        </List.Item>
      </List>
    </Card>
  )
}
