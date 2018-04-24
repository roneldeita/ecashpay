import React from 'react'
import {Form, Icon, Upload, Button} from 'antd'

const UploadButton = (
  <div>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area</p>
  </div>
)
export default ({form, filelist, change, buttonState}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const fileError = getFieldError('File')
  const fileProps = {
    fileList:filelist,
    onChange:change,
    listType: "picture",
    beforeUpload: (file) => {
      return false;
    },
  }
  return(
    <Form>
      <Form.Item
        wrapperCol={{span:16, offset:4}}
        hasFeedback={isFieldTouched('File')}
        validateStatus={fileError ? 'error' : ''}
        help={fileError || ''}>
        {getFieldDecorator('File', {
          rules: [
            { required: true }
          ],
        })(
          <div>
            <label style={{display:'block'}}>* Proof of billing:</label>
            <Upload.Dragger {...fileProps}>
              {filelist.length >= 1 ? null : UploadButton}
            </Upload.Dragger>
          </div>
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
    </Form>
  )
}
