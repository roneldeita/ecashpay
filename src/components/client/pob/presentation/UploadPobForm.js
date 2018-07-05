import React from 'react'
import {Form, Icon, Upload, Button} from 'antd'

const UploadButton = (
  <div>
    <Icon type="inbox" style={{fontSize:'32px'}}/>
    <p>Click or drag file to this area</p>
  </div>
)
const formItemLayout = {
  wrapperCol: {md:{span:16, offset:4}},
}
export default ({form, files, change, validateFile, buttonState, submit}) => {
  const { getFieldDecorator, getFieldError } = form
  const fileProps = {
    fileList:files,
    onChange:change,
    listType: "picture",
    beforeUpload: (file) => {
      return false;
    },
  }
  return(
    <Form onSubmit={submit}>
      <Form.Item
        {...formItemLayout}
        validateStatus={getFieldError('File') ? 'error' : ''}
        help={getFieldError('File') || ''}>
        {getFieldDecorator('File', {
          rules: [
            { required: true },
            { validator: validateFile }
          ],
        })(
          <Upload.Dragger {...fileProps} disabled={files.length >= 2}>
            {UploadButton}
          </Upload.Dragger>
        )}
      </Form.Item>
      <Form.Item {...formItemLayout}>
        Note: By clicking submit, you agree to our <a>Terms & Condition</a>
      </Form.Item>
      <Form.Item wrapperCol={{md:{span: 16, offset: 4}}}>
        <Button
          type="primary"
          htmlType="submit"
          loading={buttonState}>
          {buttonState ? 'Submitting...' : 'Submit'}
        </Button>
      </Form.Item>
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
    </Form>
  )
}
