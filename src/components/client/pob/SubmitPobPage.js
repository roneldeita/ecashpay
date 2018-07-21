import React from 'react'
import { connect } from 'react-redux'
//import ReactS3 from 'react-s3'
import { Link } from 'react-router-dom'
import UploadPobForm from './presentation/UploadPobForm'
import Pending from './presentation/Pending'
import Verified from './presentation/Verified'
import Rejected from './presentation/Rejected'
import { Form, Row, Col, Card, Icon, Modal, Alert} from 'antd'
import QueueAnim from 'rc-queue-anim'
import { Pob } from '../../../services/api'
import { isEmpty } from 'lodash'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class SubmitPobPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      identification:'',
      buttonState:false,
      files:[],
      preview: false,
      image:''
    }
    this.validateFile = this.validateFile.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancelRequest = this.cancelRequest.bind(this)
  }
  validateFile = (rule, value, callback) => {
    if(value !== undefined){
      const Invalid = value.fileList.map(file => {
        if(file.type !== 'image/jpeg' && file.type !== 'application/pdf' && file.type !== 'image/png'){
          return true
        }
        return false
      })
      if(Invalid.includes(true)){
        callback('Invalid File')
      }
      if(value.fileList.length > 3){
        callback('Maximum of 3 files allowed')
      }
      if(value.fileList.length === 0){
        callback('File is required')
      }
    }
    callback()
  }
  handleSubmit(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { fileList } = values.File
        const formData = new FormData()
        fileList.forEach((file) => {
          formData.append('files', file.originFileObj);
        });
        Pob(formData, {'x-access-token':this.props.auth.token, 'Content-type':'multipart/form-data'}).SubmitPob()
        .then(res => {
          this.checkStatus()
          setTimeout(()=>{
            this.setState({buttonState:false})
          }, 800)
        }).catch(err => {
          Modal.error({
            title: 'Sumission Error',
            content: err.response.data.message
          })
          setTimeout(()=>{
            this.setState({buttonState:false})
          }, 800)
        })
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        },800)
      }
    })
    event.preventDefault()
  }
  cancelRequest(){
    Pob(null, {'x-access-token':this.props.auth.token}).Cancel()
    .then(res=>{
      this.checkStatus()
    }).catch(err=>{
      Modal.error({
        title: 'Cancellation error',
        content: err.response.data.message
      })
    })
  }
  handleFileChange(info){
    let {fileList} = info
    this.setState({files:fileList});
  }
  checkStatus(){
    Pob(null, {'x-access-token':this.props.auth.token}).Check()
    .then(res=>{
      console.log(res.data)
      this.setState({identification:res.data})
    })
  }
  closePreview = () => {
    this.setState({preview:false})
  }
  handlePreview = (file) => {
    this.setState({
      image: file.url || file.thumbUrl,
      preview: true,
    });
  }
  componentDidMount(){
    this.checkStatus()
  }
  render(){
    return (
      <Row justify="center" type="flex" style={{marginTop:'50px'}}>
        <Col md={12} lg={8}>
          <QueueAnim type={['top', 'bottom']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
            <div key="0">
              <Card
                hoverable
                title="Upgrade Level 2"
                style={CardStyle}
                loading={isEmpty(this.state.identification)}
                actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
                  <div style={{display:this.state.identification.status === 'none' ? 'block' : 'none'}}>
                    <Row type="flex" justify="center">
                      <Col span={20}>
                        <Alert
                          message="Note:"
                          description="If you don't have Proof of Billing under your name, please submit Proof of Billing under parent's name as long as you're residing at the same address and same family name. If you are renting, kindly upload Proof of Billing with an authorization letter signed by the owner of the billing statement and photocopy of IDs of the owner."
                          type="info"/>
                        <br/>
                      </Col>
                    </Row>
                    <UploadPobForm
                      form={this.props.form}
                      files={this.state.files}
                      validateFile={this.validateFile}
                      change={this.handleFileChange}
                      submit={this.handleSubmit}
                      buttonState={this.state.buttonState}/>
                  </div>
                  <div style={{display:this.state.identification.status === 'pending' ? 'block' : 'none'}}>
                    <Pending
                      identification={this.state.identification}
                      cancel={this.cancelRequest}
                      location={this.state.identification.location}
                      type={this.state.identification.type}
                      handlePreview={this.handlePreview}
                      preview={this.state.preview}
                      image={this.state.image}
                      closePreview={this.closePreview}/>
                  </div>
                  <div style={{display:this.state.identification.status === 'rejected' ? 'block' : 'none'}}>
                    <Rejected resubmit={this.cancelRequest}/>
                  </div>
                  <div style={{display:this.state.identification.status === 'accepted' ? 'block' : 'none'}}>
                    <Verified/>
                  </div>
              </Card>
            </div>
          </QueueAnim>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
  }
}

export default Form.create()(connect(mapStateToProps)(SubmitPobPage))
