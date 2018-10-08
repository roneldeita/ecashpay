import React from 'react'
import { Avatar, Button, Alert } from 'antd'

const IconStyle = {
  backgroundColor:'#ffe58f',
  fontSize:'34px',
  marginBottom:'10px'
}

export default ({resubmit}) => {
  const Desc = (
    <div>
      <h3>Expired</h3>
      <br/>
      <p>We are unable to reach and perform Face-to-face verification. To proceed, please re-submit valid requirements.</p>
    <Button onClick={resubmit}>Try Again</Button>
    </div>
  )
  return(
    <div style={{textAlign:'center'}}>
      <Alert
        message={<Avatar size="large" icon="clock-circle" style={IconStyle}/>}
        description={Desc}
        type="warning"
      />
    </div>
  )
}
//