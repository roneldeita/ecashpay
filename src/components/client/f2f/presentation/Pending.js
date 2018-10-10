import React from 'react'
import { Avatar, Button, Alert, Popconfirm } from 'antd'
import moment from 'moment'

const IconStyle = {
  backgroundColor:'#91d5ff',
  fontSize:'34px',
  marginBottom:'5px'
}

export default ({ftfStatus, cancel}) => {
  //console.log(ftfStatus)
  const Desc = (
    <div>
      <br/>
      <h3>Status: Pending</h3>
      <p>Your face-to-face verification will be on {moment(ftfStatus.date).format('LL')} via {ftfStatus.application} from {ftfStatus.timeStart} to {ftfStatus.timeEnd}</p>
      <br/>
      <Popconfirm title="Are you sure to reschedule?" placement="bottom" onConfirm={cancel} onCancel="" okText="Yes" cancelText="No">
        <Button>Reschedule</Button>
      </Popconfirm>
    </div>
  )
  //console.log(files)
  return(
    <div style={{textAlign:'center'}}>
      <Alert
        message={<Avatar size={64} icon="ellipsis" style={IconStyle}/>}
        description={Desc}
        type="none"
      />
    </div>
  )
}