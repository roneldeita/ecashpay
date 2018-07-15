import React from 'react'
import { Row, Col, Card, Avatar, Button, Alert, Popconfirm, Modal } from 'antd'

const IconStyle = {
  backgroundColor:'#91d5ff',
  fontSize:'34px',
  marginBottom:'10px'
}

export default ({identification, cancel, location, type, handlePreview, preview, image, closePreview}) => {
  console.log(identification)
  const Desc = (
    <div>
      <br/>
      <h3>Status: Pending Approval</h3>
      <br/>
      <p>Youe Upgrade Level 2 request is currently being reviewed. Notification will be sent within 1-5 business days via email.</p>
      <br/>
      <Row gutter={24} justify="center" type="flex">
        {identification.files !== undefined &&
          identification.files.map((file,index)=>(
            <Col span={8} key={index}>
              <Card hoverable onClick={()=> file.mimeType === 'image/jpeg' && handlePreview({'url':file.url}) } cover={
                  file.mimeType === 'image/jpeg' &&
                  <img alt="front" src={file.url}/>
                }>
                <Card.Meta title={file.name}/>
              </Card>
              <Modal visible={preview} footer={null} onCancel={closePreview}>
                <img alt="example" style={{ width: '100%' }} src={image} />
              </Modal>
            </Col>
          ))
        }
      </Row>
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
