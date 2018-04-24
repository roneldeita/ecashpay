import React from 'react'
import { Avatar, Button, Alert, Card, Row, Col, Popconfirm, Modal } from 'antd'

const IconStyle = {
  backgroundColor:'#91d5ff',
  fontSize:'34px',
  marginBottom:'10px'
}

export default ({cancel, front, back, handlePreview, preview, image, closePreview}) => {
  const Desc = (
    <div>
      <h2>Identification request pending approval</h2>
      <br/>
      <p>You have already submitted your Identification request
      that is currenty being review by out team.
      We typically review request within 1-5 business days.</p>
    <Row gutter={24} justify="center" type="flex">
        <Col span={8}>
          <Card hoverable cover={<img alt="front" src={front}/>} onClick={()=> handlePreview({'url':front})}>
            <Card.Meta title="Front"/>
          </Card>
          <Modal visible={preview} footer={null} onCancel={closePreview}>
            <img alt="example" style={{ width: '100%' }} src={image} />
          </Modal>
        </Col>
        <Col span={8}>
          <Card hoverable cover={<img alt="front" src={back}/>} onClick={()=> handlePreview({'url':back})}>
            <Card.Meta title="Back"/>
          </Card>
          <Modal visible={preview} footer={null} onCancel={closePreview}>
            <img alt="example" style={{ width: '100%' }} src={image} />
          </Modal>
        </Col>
      </Row>
      <br/>
      <Popconfirm title="Are you sure delete this task?" placement="bottom"  onConfirm={cancel} onCancel="" okText="Yes" cancelText="No">
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
