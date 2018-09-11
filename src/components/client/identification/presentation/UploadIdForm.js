import React from 'react'
import { Form, Upload, Modal, Button, Select, Input, Avatar } from 'antd'
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
const StepStyle = {
  backgroundColor:'#a5cfe3',
  marginTop:'-5px'
}
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
  const { getFieldDecorator } = form

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
  const AccountTypeSelector = getFieldDecorator('ID Type', {
    initialValue: 'passport',
    rules: [
      { required: true }
    ],
  })(
    <Select
      showSearch
      optionFilterProp="children"
      block 
      style={{ width: 200 }}>
      <Select.Option value="Philippine passport">Philippine passport</Select.Option>
      <Select.Option value="Driver's License">Driver's License</Select.Option>
      <Select.Option value="SSS UMID Card">SSS UMID Card</Select.Option>
      <Select.Option value="GSIS eCard">GSIS eCard</Select.Option>
      <Select.Option value="Digitized Postal ID">Digitized Postal ID</Select.Option>
      <Select.Option value="IBP ID">IBP ID</Select.Option>
      <Select.Option value="OWWA ID">OWWA ID</Select.Option>
      <Select.Option value="Diplomat ID">Diplomat ID</Select.Option>
      <Select.Option value="Senior Citizen ID">Senior Citizen ID</Select.Option>
      <Select.Option value="Voter's ID">Voter's ID</Select.Option>
      <Select.Option value="GOCC and Government Office ID">GOCC and Government Office ID</Select.Option>
    </Select>
  );
  return(
    <Form onSubmit={submit} autoComplete="off">
      <p><Avatar size={22} style={StepStyle}>1</Avatar> Choose valid ID</p>
      <Form.Item>
        {getFieldDecorator('ID Number', {
          rules: [
            { required: true },
            { max: 50}
          ],
        })(
          <Input addonBefore={AccountTypeSelector}/>
        )}
      </Form.Item>
      <p><Avatar size={22} style={StepStyle}>2</Avatar> Please take a clear photo of yourself holding your government-issued ID next to your face.</p>
      <Form.Item>
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
      <p><Avatar size={22} style={StepStyle}>3</Avatar> Upload government-issued ID.</p>
      <Form.Item>
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
        <Button
          type="primary"
          htmlType="submit"
          loading={buttonState}>
          {buttonState ? 'Submitting' : 'Submit'}
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
    </Form>
  )
}
