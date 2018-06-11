import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button } from 'antd'

export default () => {
  return(
    <div>
      <Alert
        message="Verification Success!"
        description="Your file(s) had been successfully verified."
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
