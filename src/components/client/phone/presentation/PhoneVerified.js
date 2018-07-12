import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button } from 'antd'

export default () => {
  return(
    <div>
      <Alert
        message="Verification Successful!"
        description="You have successfully verified your mobile number."
        type="success"
        showIcon
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <Link to="/client/dashboard">
          <Button>Continue</Button>
        </Link>
      </div>
    </div>
  )
}
