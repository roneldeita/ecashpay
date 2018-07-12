import React from 'react'
import { Avatar, Button, Alert, Popconfirm } from 'antd'

const IconStyle = {
  backgroundColor:'#91d5ff',
  fontSize:'34px',
  marginBottom:'10px'
}

export default ({cancel, location, type}) => {
  const Desc = (
    <div>
      <h2>Identification Request Sent for Approval</h2>
      <br/>
      <p>Your pending identification request is currently being reviewed by Ecashpay asia team. You will be notified within 1-5 business days via SMS and Email.</p>
      <br/>
      <Popconfirm title="Are you sure to cancel your request?" placement="bottom"  onConfirm={cancel} onCancel="" okText="Yes" cancelText="No">
        <Button>Cancel Request</Button>
      </Popconfirm>
    </div>
  )
  return(
    <div style={{textAlign:'center'}}>
      <Alert
        message={<Avatar size="large" icon="ellipsis" style={IconStyle}/>}
        description={Desc}
        type="info"
      />
    </div>
  )
}
