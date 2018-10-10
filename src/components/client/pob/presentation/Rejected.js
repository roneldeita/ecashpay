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
      <h3>We{`'`}re sorry</h3>
      <br/>
      <p>We are unable to verify your identity. To proceed, please re-submit valid requirements.</p>
    <Button onClick={resubmit}>Try Again</Button>
    </div>
  )
  return(
    <div style={{textAlign:'center'}}>
      <Alert
        message={<Avatar size={64} icon="exclamation" style={IconStyle}/>}
        description={Desc}
        type="none"
      />
    </div>
  )
}
