import React from 'react'
import { Form, Select, Upload, Icon, Modal, Button } from 'antd'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 17},
}
const UploadButton = (
  <div>
    <Icon type="inbox" style={{fontSize:'32px'}}/>
    <p>Click or drag file to this area</p>
  </div>
)

export default ({
  form,
  buttonState,
  files,
  onFilesChange,
  handlePreview,
  preview,
  image,
  closePreview,
  validateFile,
  submit,
  }) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const IdTypeError = getFieldError('ID type')
  const FrontIdError = getFieldError('Front ID')

  const FilesProps = {
    fileList:files,
    onChange: onFilesChange,
    onPreview: handlePreview,
    listType: "picture",
    beforeUpload: (file) => {
      return false;
    },
  }
  return(
    <Form onSubmit={submit}>
      <Form.Item
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
      </Form.Item>
      <Form.Item
        label="Your Photo"
        {...formItemLayout}
        validateStatus={FrontIdError ? 'error' : ''}
        help={FrontIdError || ''}>
        {getFieldDecorator('Front ID', {
          rules: [
            { required: true },
            { validator: validateFile }
          ],
        })(
          <Upload.Dragger {...FilesProps} disabled={files.length >= 2}>
            {UploadButton}
          </Upload.Dragger>
        )}
      </Form.Item>
      <Form.Item wrapperCol={{span: 18, offset: 6}}>
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
            width: 80px;
          }
          .ant-upload-list-picture .ant-upload-list-item-name{
            padding-left: 80px
          }
        `}
      </style>
    </Form>
  )
}
