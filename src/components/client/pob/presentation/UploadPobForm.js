import React from 'react'
import {Form, Icon, Upload, Button} from 'antd'

const UploadButton = (
  <div>
    <Icon type="inbox" style={{fontSize:'32px'}}/>
    <p>Click or drag file to this area</p>
  </div>
)
export default ({form, filelist, change, validateFile, buttonState, submit}) => {
  const { getFieldDecorator, getFieldError } = form
  const fileProps = {
    fileList:filelist,
    onChange:change,
    listType: "picture",
    beforeUpload: (file) => {
      return false;
    },
  }
  return(
    <Form onSubmit={submit}>
      <Form.Item
        wrapperCol={{span:16, offset:4}}
        validateStatus={getFieldError('File') ? 'error' : ''}
        help={getFieldError('File') || ''}>
        {getFieldDecorator('File', {
          rules: [
            { required: true },
            { validator: validateFile }
          ],
        })(
          <Upload.Dragger {...fileProps} disabled={filelist.length >= 1}>
            {UploadButton}
          </Upload.Dragger>
        )}
      </Form.Item>
      <Form.Item wrapperCol={{span: 16, offset: 4}}>
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
        .ant-upload-list-picture .ant-upload-list-item-thumbnail{
          top: 25px !important;
        }
        .ant-upload-list-picture .ant-upload-list-item-name{
          padding-left: 50px
        }
      `}
      </style>
    </Form>
  )
}
