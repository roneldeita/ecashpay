import React from 'react'
import { Avatar, Button, Alert, Card, Row, Col, Popconfirm, Modal } from 'antd'

const IconStyle = {
  backgroundColor:'#91d5ff',
  fontSize:'34px',
  marginBottom:'10px'
}

export default ({cancel, front, back, files, handlePreview, preview, image, closePreview}) => {
  const Desc = (
    <div>
      <h2>Identification request pending approval</h2>
      <br/>
      <p>You have already submitted your Identification request
      that is currenty being review by out team.
      We typically review request within 1-5 business days.</p>
      <Row gutter={24} justify="center" type="flex">
        {files !== undefined &&
          files.map((file,index)=>(
            <Col span={8} key={index}>
              <Card hoverable cover={<img alt="front" src={file.url}/>} onClick={()=> handlePreview({'url':file.url})}>
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
      <Popconfirm title="Are you sure to cancel your request?" placement="bottom" onConfirm={cancel} onCancel="" okText="Yes" cancelText="No">
        <Button>Cancel Request</Button>
      </Popconfirm>
  </div>
  )
  //console.log(files)
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
