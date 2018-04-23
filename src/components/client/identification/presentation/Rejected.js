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
      <h2>Unable to verify your identity</h2>
      <br/>
      <p>Unfortunately, we were unable to verify your identity. Please try submitting government-issued ID again.</p>
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
