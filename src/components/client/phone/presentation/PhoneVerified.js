import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Avatar } from 'antd'

const IconStyle = {
  backgroundColor:'#b7eb8f',
  fontSize:'30px',
  marginBottom:'5px'
}

const Desc = (
  <div>
    <p>You have successfully verified your mobile number.</p>
    <Link to="/client/dashboard">
      <Button>Continue</Button>
    </Link>
  </div>
)

export default () => {
  return(
    <div style={{textAlign:'center'}}>
      <Alert
        message={<Avatar size={64} icon="mobile" style={IconStyle}/>}
        description={Desc}
        type="none"/>
      
    </div>
  )
}
