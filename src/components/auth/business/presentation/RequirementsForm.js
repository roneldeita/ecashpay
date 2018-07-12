import React from 'react'
import {Row, Col, Card, Form, Radio, Tooltip, Icon, Upload, Button} from 'antd'
import { isEmpty } from 'lodash'

const AntForm = {
  margin:'50px 0px'
}
const AntContainer = {
  margin: '50px 0px 100px 0px'
}
const Head = {
  backgroundColor: '#1dA1f2',
  color: '#ffffff',
  textAlign: 'center',
  padding: '40px 10px 5px 10px'
}
const UseIcon = {
  fontSize: '60px',
  fontWeight: 200
}
const Title = {
  fontSize: '32px',
  fontWeight: 200
}

const Label = {
  labelCol: { xs:24, sm: 24, md:24, lg:24, xl:9},
  wrapperCol: { xs:24, sm:24, md:24, lg:24, xl:15}
}

export default ({
  form,
  buttonState,
  type,
  changeType,
  soleProprietorship,
  cooperative,
  corporation,
  fileOne,
  submit}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const BusinessTypeError =  getFieldError('Business Type')
  let files = []
  if(type === 'Sole Proprietorship'){
    files = soleProprietorship
  }else if (type === 'Cooperative') {
    files = cooperative
  }else if (type) {
    files = corporation
  }
  return(
    <Row type="flex" justify="center" style={AntContainer}>
      <Col sm={24} md={22} lg={22} xl={13} className="">
        <Card hoverable>
          <div style={Head}>
            <span className="pe-7s-paperclip" style={UseIcon}/>
            <p style={Title}>Upload the necessary requirements</p>
          </div>
          <Row type="flex" justify="center">
            <Col span={20}>
              <Form onSubmit={submit} style={AntForm}>
                <Form.Item
                label="Type of your business"
                required={false}
                {...Label}
                hasFeedback={isFieldTouched('Business Type')}
                validateStatus={BusinessTypeError ? 'error' : ''}
                help={BusinessTypeError || ''}>
                  {getFieldDecorator('Business Type', {
                    initialValue: type,
                    rules: [
                      { required: true },
                    ],
                  })(
                    <Radio.Group onChange={changeType}>
                      <Radio.Button value="Sole Proprietorship">Sole Proprietorship</Radio.Button>
                      <Radio.Button value="Cooperative">Cooperative</Radio.Button>
                      <Radio.Button value="Corporation">Corporation</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
                {type === "Sole Proprietorship" && files.map((file, index)=>{
                  const fileProps = {
                    beforeUpload:(file) => {
                      return false;
                    }
                  }
                  return <Form.Item
                  key={index}
                  label={<span>
                      <Tooltip placement="topRight" title={file.description}>
                        {file.name} {file.description !== '' && <Icon  type="info-circle-o"/>}
                      </Tooltip>
                  </span>}
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched(file.name)}
                  validateStatus={getFieldError(file.name) ? 'error' : ''}
                  help={getFieldError(file.name) || ''}>
                    {getFieldDecorator(file.name, {
                      rules: [
                        { required: true },
                      ],
                    })(
                      <Upload {...fileProps}>
                        <Button>
                          <Icon type="upload" /> Select File
                        </Button>
                      </Upload>
                    )}
                  </Form.Item>
                })}
                {type === "Cooperative" && files.map((file, index)=>{
                  const fileProps = {
                    beforeUpload:(file) => {
                      return false;
                    }
                  }
                  return <Form.Item
                  key={index}
                  label={<span>
                      {<Tooltip placement="topRight" title={file.description}>
                        {file.name} {file.description !== '' && <Icon  type="info-circle-o"/>}
                    </Tooltip>}
                  </span>}
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched(file.name)}
                  validateStatus={getFieldError(file.name) ? 'error' : ''}
                  help={getFieldError(file.name) || ''}>
                    {getFieldDecorator(file.name, {
                      rules: [
                        { required: true },
                      ],
                    })(
                      <Upload {...fileProps}>
                        <Button>
                          <Icon type="upload" /> Select File
                        </Button>
                      </Upload>
                    )}
                  </Form.Item>
                })}
                {type === "Corporation" && files.map((file, index)=>{
                  const fileProps = {
                    beforeUpload:(file) => {
                      return false;
                    }
                  }
                  return <Form.Item
                  key={index}
                  label={<span>
                      <Tooltip placement="topRight" title={file.description}>
                        {file.name} {file.description !== '' && <Icon  type="info-circle-o"/>}
                      </Tooltip>
                  </span>}
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched(file.name)}
                  validateStatus={getFieldError(file.name) ? 'error' : ''}
                  help={getFieldError(file.name) || ''}>
                    {getFieldDecorator(file.name, {
                      rules: [
                        { required: true },
                      ],
                    })(
                      <Upload {...fileProps}>
                        <Button>
                          <Icon type="upload" /> Select File
                        </Button>
                      </Upload>
                    )}
                  </Form.Item>
                })}
                <Form.Item wrapperCol={{md:{span: 15, offset: 9}}}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={buttonState}>
                    {buttonState ? 'Submitting...' : 'Submit'}
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
      <style jsx="true">{`
        .pe-7s-paperclip{
          border-radius: 100px;
          border: 2px solid #ffffff;
          padding: 0.4em 0.5em;
        }
        .ant-card,
        .ant-card-wider-padding .ant-card-body,
        .ant-card-body{
          font-family: 'Work Sans', sans-serif !important;
          padding:0px;
        }
      `}
      </style>
    </Row>
  )
}
