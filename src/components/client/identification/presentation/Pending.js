import React from 'react'
import { Avatar, Button, Alert, Card, Row, Col, Popconfirm, Modal, Divider } from 'antd'

const IconStyle = {
  backgroundColor:'#91d5ff',
  fontSize:'30px',
  marginBottom:'5px'
}

export default ({cancel, identification, handlePreview, preview, image, closePreview}) => {
  const Desc = (
    <div>
      <h3>Status: Pending Approval</h3>
      <br/>
      <p>Youe Upgrade Level 1 request is currently being reviewed. Notification will be sent within 1-5 business days via email.</p>
      <p>Type of your ID: <b>{identification['idType']}</b></p>
      <p>ID Number: <b>{identification['idNo']}</b></p>
      <Divider dashed={true}/>
      <Row gutter={24} justify="center" type="flex">
        {identification.files !== undefined &&
          identification.files.map((file,index)=>(
            <Col span={8} key={index}>
              <Card hoverable cover={<img alt="front" src={file.url}/>} onClick={()=> handlePreview({'url':file.url})}>
                <Card.Meta title={file.name}/>
              </Card>
              <Modal visible={preview} footer={null} onCancel={closePreview} mask={false}>
                <img alt="example" style={{ width: '100%' }} src={image} />
              </Modal>
            </Col>
          ))
        }
      </Row>
      <br/>
      <Popconfirm title="Are you sure to cancel your request?" placement="bottom" onConfirm={cancel} onCancel="" okText="Yes" cancelText="No">
        <Button>Cancel Request</Button>
      </Popconfirm>
  </div>
  )
  //console.log(files)
  return(
    <div style={{textAlign:'center'}}>
      <Alert
        message={<Avatar size={64} icon="hourglass" style={IconStyle}/>}
        description={Desc}
        type="none"
      />
    </div>
  )
}
