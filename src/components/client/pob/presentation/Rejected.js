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
      <h2>Identification Request Status</h2>
      <br/>
      <p>We're sorry. We are unable to verify your identity. To proceed, please re-submit valid requirements.</p>
    <Button onClick={resubmit}>Try Again</Button>
    </div>
  )
  return(
    <div style={{textAlign:'center'}}>
      <Alert
        message={<Avatar size="large" icon="exclamation" style={IconStyle}/>}
        description={Desc}
        type="warning"
      />
    </div>
  )
}
