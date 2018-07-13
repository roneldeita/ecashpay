import React from 'react'
import { Form, Upload, Modal, Button, Row, Col } from 'antd'
import SelfieWithId from '../../../../assets/images/selfie_with_id.png'
import Id from '../../../../assets/images/id.png'

const UploadSelfieButton = (
  <div>
    <img src={SelfieWithId} style={{height:'100px'}} alt="selfie watermark"/>
    <p>Click or drag to this area</p>
  </div>
)
const UploadIdButton = (
  <div>
    <img src={Id} style={{height:'100px'}}  alt="id watermark"/>
    <p>Click or drag to this area</p>
  </div>
)
export default ({
  form,
  buttonState,
  selfie,
  id,
  onSelfieChange,
  onIdChange,
  handlePreview,
  preview,
  image,
  closePreview,
  validateFile,
  submit,
  }) => {
  const { getFieldDecorator, getFieldError } = form
  // const IdTypeError = getFieldError('ID type')
  const SelfieError = getFieldError('Selfie')
  const IdError = getFieldError('Id')

  const SelfieProps = {
    fileList:selfie,
    onChange: onSelfieChange,
    onPreview: handlePreview,
    listType: "picture",
    beforeUpload: (file) => {
      return false;
    },
  }
  const IdProps = {
    fileList:id,
    onChange: onIdChange,
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
            validateStatus={SelfieError ? 'error' : ''}
            help={SelfieError || ''}>
            {getFieldDecorator('Selfie', {
              rules: [
                { required: true },
                { validator: validateFile }
              ],
            })(
              <Upload.Dragger {...SelfieProps} disabled={selfie.length >= 1}>
                {UploadSelfieButton}
              </Upload.Dragger>
            )}
          </Form.Item>
          <p>2. Upload government-issued ID.</p>
          <Form.Item
            validateStatus={IdError ? 'error' : ''}
            help={IdError || ''}>
            {getFieldDecorator('Id', {
              rules: [
                { required: true },
                { validator: validateFile }
              ],
            })(
              <Upload.Dragger {...IdProps} disabled={id.length >= 1}>
                {UploadIdButton}
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
            height: 150px
          }
          .ant-upload-list-item-info > span{
            margin-top:0px
          }
          .ant-upload-list-picture .ant-upload-list-item-thumbnail img{
            width:130px;
            height:130px;
            object-fit: cover !important
          }
          .ant-upload-list-picture .ant-upload-list-item-name{
            padding-left: 130px
          }
        `}
      </style>
    </Row>
  )
}
