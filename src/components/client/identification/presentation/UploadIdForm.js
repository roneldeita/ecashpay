import React from 'react'
import { Form, Upload, Icon, Modal, Button, Row, Col } from 'antd'

const UploadButton = (
  <div>
    <Icon type="inbox" style={{fontSize:'32px'}}/>
    <p>Click or drag to this area</p>
  </div>
)

export default ({
  form,
  buttonState,
  files,
  id,
  onFilesChange,
  handlePreview,
  preview,
  image,
  closePreview,
  validateFile,
  submit,
  }) => {
  const { getFieldDecorator, getFieldError } = form
  // const IdTypeError = getFieldError('ID type')
  const fileError = getFieldError('File')

  const FilesProps = {
    fileList:files,
    onChange: onFilesChange,
    onPreview: handlePreview,
    listType: "picture",
    beforeUpload: (file) => {
      return false;
    },
  }
  const FileIdProps = {
    fileList:id,
    onChange: onFilesChange,
    onPreview: handlePreview,
    listType: "picture",
    beforeUpload: (file) => {
      return false;
    },
  }
  return(
    <Row type="flex" justify="center">
      <Col xs={24} sm={22} md={18}>
        <p></p>
        <Form onSubmit={submit}>
          {/*<Form.Item
            label="ID type"
            {...formItemLayout}
            hasFeedback={isFieldTouched('ID type')}
            validateStatus={IdTypeError ? 'error' : 'success'}
            help={IdTypeError || ''}>
            {getFieldDecorator('ID type', {
              rules: [
                { required: false }
              ],
            })(
              <Select placeholder="Select your ID"
                disabled
                showSearch
                optionFilterProp="children"
                style={{ minWidth: 180 }}>
                <Select.Option value="passport">Philippine passport</Select.Option>
                <Select.Option value="drivers_license">Driver's License</Select.Option>
                <Select.Option value="umid">SSS UMID Card</Select.Option>
                <Select.Option value="gsis">GSIS eCard</Select.Option>
                <Select.Option value="postal">Digitized Postal ID</Select.Option>
                <Select.Option value="ibp">IBP ID</Select.Option>
                <Select.Option value="owwa">OWWA ID</Select.Option>
                <Select.Option value="diplomat">Diplomat ID</Select.Option>
                <Select.Option value="senior_citizen">Senior Citizen ID</Select.Option>
                <Select.Option value="voter">Voter’s ID</Select.Option>
                <Select.Option value="gocc">GOCC and Government Office ID</Select.Option>
              </Select>
            )}
          </Form.Item>*/}
          <p>1. Please take a clear photo of yourself holding your government-issued ID next to your face.</p>
          <Form.Item
            validateStatus={fileError ? 'error' : ''}
            help={fileError || ''}>
            {getFieldDecorator('File', {
              rules: [
                { required: true },
                { validator: validateFile }
              ],
            })(
              <Upload.Dragger {...FilesProps} disabled={files.length >= 1}>
                {UploadButton}
              </Upload.Dragger>
            )}
          </Form.Item>
          <p>2. Upload government-issued ID.</p>
          <Form.Item
            validateStatus={fileError ? 'error' : ''}
            help={fileError || ''}>
            {getFieldDecorator('File', {
              rules: [
                { required: true },
                { validator: validateFile }
              ],
            })(
              <Upload.Dragger {...FileIdProps} disabled={files.length >= 1}>
                {UploadButton}
              </Upload.Dragger>
            )}
          </Form.Item>
          <Form.Item>
            Note: By clicking submit, you agree to our <a>Terms & Condition</a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={buttonState}>
              {buttonState ? 'Submitting...' : 'Submit'}
            </Button>
          </Form.Item>
          <Modal visible={preview} footer={null} onCancel={closePreview}>
            <img alt="example" style={{ width: '100%' }} src={image} />
          </Modal>
        </Form>
      </Col>
      <style jsx="true">{`
          .ant-upload-disabled{
            display:none
          }
          .ant-upload-list-picture .ant-upload-list-item,
          .ant-upload-list-picture-card .ant-upload-list-item{
            height: 100px
          }
          .ant-upload-list-item-info > span{
            margin-top:20px
          }
          .ant-upload-list-picture .ant-upload-list-item-thumbnail img{
            width:80px;
            height:80px;
            object-fit: cover !important
          }
          .ant-upload-list-picture .ant-upload-list-item-name{
            padding-left: 80px
          }
        `}
      </style>
    </Row>
  )
}
