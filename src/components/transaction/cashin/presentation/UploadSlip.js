import React from 'react'
import { Row, Col, Button, Form, Input,  Upload, Icon, Modal, Alert } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { Transaction } from '../../../../services/api'

const Title = {
  fontSize:'22px',
  fontWeight: 300,
  textAlign: 'center'
}
const formItemLayout = {
  wrapperCol: {md:{span:18, offset:3}, lg:{span:20, offset:2}},
}
const UploadButton = (
  <div>
    <Icon type="inbox" style={{fontSize:'32px'}}/>
    <p>Click or drag file to this area</p>
  </div>
)

class UploadSlip extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      uploadState: false,
      files:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
  }
  handleFileChange(info){
    let {fileList} = info
    this.setState({files:fileList});
  }
  handleSubmit(event){
    this.setState({uploadState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { fileList } = values.File
        const formData = new FormData()
        formData.append('transaction', this.props.transaction.no)
        fileList.forEach((file) => {
          formData.append('files', file.originFileObj);
        });
        formData.set('reference', values['Reference'])
        Transaction(formData, {'x-access-token':this.props.auth.token, 'Content-type':'multipart/form-data'}).Upload()
        .then(res => {
          this.props.loadTransaction()
          this.delayUploadState = setTimeout(()=>{
            this.setState({uploadState:false})
          }, 800)
        }).catch(err => {
          Modal.error({
            title: 'Sumission Error',
            content: err.response.data.message
          })
          setTimeout(()=>{
            this.setState({uploadState:false})
          }, 800)
        })
      }else{
        setTimeout(()=>{
          this.setState({uploadState:false})
        },800)
      }
    })
    event.preventDefault()
  }
  componentWillUnmount(){
    clearTimeout(this.delayUploadState)
  }
  render(){
    const { getFieldDecorator, getFieldError } = this.props.form
    const fileProps = {
      fileList:this.state.files,
      onChange:this.handleFileChange,
      listType: "picture",
      beforeUpload: (file) => {
        return false;
      },
    }
    return(
      <QueueAnim type={['bottom', 'top']} ease={['easeOutBack', 'easeInOutCirc']}>
        <div key="0">
          <Row type="flex" justify="center">
            <Col xs={24} md={18}>
              {this.props.transaction.status === 5 &&
                <Alert
                  message="Upload again"
                  description="We were unable to match your payment with the details of your Cash In. Please send us a copy of your deposit slip and/or screenshot of the transaction."
                  type="warning"
                  showIcon
                  closable
                  style={{marginBottom:'10px'}}
                />}
              <p style={Title}>Confirm your Cash in transaction by uploading a clear copy of your official receipt / deposit slip.</p>
              <Form onSubmit={this.handleSubmit} autoComplete="off">
                <Form.Item
                  {...formItemLayout}
                  validateStatus={getFieldError('File') ? 'error' : ''}
                  help={getFieldError('File') || ''}>
                  {getFieldDecorator('File', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Upload.Dragger {...fileProps} disabled={this.state.files.length >= 1}>
                      {UploadButton}
                    </Upload.Dragger>
                  )}
                </Form.Item>
                <Form.Item
                  {...formItemLayout}>
                  {getFieldDecorator('Reference', {
                    rules:[
                      { required: true}
                    ]
                  })(
                    <Input placeholder="Reference code"/>
                  )}
                </Form.Item>
                <div style={{textAlign:'center'}}>
                  {this.props.transaction.status === 0 &&
                  <Button onClick={this.props.toggleUpload} style={{marginRight:'10px'}}>Cancel</Button>}
                  <Button htmlType="submit" type="primary" loading={this.state.uploadState}>{this.state.uploadState ? 'Uploading' : 'Upload'}</Button>
                </div>
              </Form>
            </Col>
          </Row>
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
        </div>
      </QueueAnim>
    )
  }
}

export default Form.create()(UploadSlip)
