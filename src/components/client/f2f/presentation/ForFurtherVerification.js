import React from 'react'
import { Avatar, Button, Alert } from 'antd'

const IconStyle = {
  backgroundColor:'#ffe58f',
  fontSize:'34px',
  marginBottom:'5px'
}

export default ({resubmit}) => {
  const Desc = (
    <div>
      <h3>Pending : For further verification</h3>
      <br/>
      <p>We are unable to recognize your identity. To proceed, please pick another schedule.</p>
    <Button onClick={resubmit}>Reschedule</Button>
    </div>
  )
  return(
    <div style={{textAlign:'center'}}>
      <Alert
        message={<Avatar size={64} icon="solution" style={IconStyle}/>}
        description={Desc}
        type="none"
      />
    </div>
  )
}
//