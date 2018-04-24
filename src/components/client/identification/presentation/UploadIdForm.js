import React from 'react'
import { Form, Select, Upload, Icon, Modal, Button } from 'antd'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 17},
}
const UploadButton = (
  <div className="upload-btn">
    <Icon type="plus" />
    <div className="ant-upload-text">Select File</div>
  </div>
)

export default ({
  form,
  buttonState,
  front,
  back,
  handleFrontChange,
  handleBackChange,
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
  const BackIdError = getFieldError('Back ID')

  const FrontIdProps = {
    fileList:front,
    onChange: handleFrontChange,
    onPreview: handlePreview,
    listType: "picture-card",
    beforeUpload: (file) => {
      return false;
    },
  }
  const BackIdProps = {
    fileList:back,
    onChange: handleBackChange,
    onPreview: handlePreview,
    listType: "picture-card",
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
        validateStatus={IdTypeError ? 'error' : ''}
        help={IdTypeError || ''}>
        {getFieldDecorator('ID type', {
          rules: [
            { required: true }
          ],
        })(
          <Select placeholder="Select your ID"
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
        label="Front Image"
        {...formItemLayout}
        hasFeedback={isFieldTouched('Front ID')}
        validateStatus={FrontIdError ? 'error' : ''}
        help={FrontIdError || ''}>
        {getFieldDecorator('Front ID', {
          rules: [
            { required: true }
          ],
        })(
          <div>
            <Upload {...FrontIdProps}>
              {front.length >= 1 ? null : UploadButton}
            </Upload>
            <Modal visible={preview} footer={null} onCancel={closePreview}>
              <img alt="example" style={{ width: '100%' }} src={image} />
            </Modal>
          </div>
        )}
      </Form.Item>
      <Form.Item
        label="Back Image"
        {...formItemLayout}
        hasFeedback={isFieldTouched('Back ID')}
        validateStatus={BackIdError ? 'error' : ''}
        help={BackIdError || ''}>
        {getFieldDecorator('Back ID', {
          rules: [
            { required: true },
            { validator: validateFile}
          ],
        })(
          <div>
            <Upload {...BackIdProps}>
              {back.length >= 1 ? null : UploadButton}
            </Upload>
            <Modal visible={preview} footer={null} onCancel={closePreview}>
              <img alt="example" style={{ width: '100%' }} src={image} />
            </Modal>
          </div>
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
    </Form>
  )
}
