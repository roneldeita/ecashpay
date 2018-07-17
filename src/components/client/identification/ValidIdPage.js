import React from 'react'
import { connect } from 'react-redux'
// import ReactS3 from 'react-s3'
import { Form, Row, Col, Card, Icon, Modal } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { Link } from 'react-router-dom'
import UploadIdForm from './presentation/UploadIdForm'
import Pending from './presentation/Pending'
import Rejected from './presentation/Rejected'
import Verified from './presentation/Verified'
import { Id } from '../../../services/api'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class ValidIdPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      identification:{},
      status:'',
      buttonState:false,
      selfie:[],
      id:[],
      preview: false,
      image:''
    }
    this.validateFile = this.validateFile.bind(this)
    this.handleSelfieChange = this.handleSelfieChange.bind(this)
    this.handleIdChange = this.handleIdChange.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
    this.closePreview = this.closePreview.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancelRequest = this.cancelRequest.bind(this)
  }
  handleSubmit = (event) => {
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const SelfieList = values.Selfie.fileList
        const IdList  = values.Id.fileList
        const formData = new FormData()
        SelfieList.forEach((file) => {
          formData.append('files', file.originFileObj)
        })
        IdList.forEach((file) => {
          formData.append('files', file.originFileObj)
        })
        Id(formData, {'x-access-token':this.props.auth.token, 'Content-type':'multipart/form-data'}).SubmitId()
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
        }, 800)
      }
    })
    event.preventDefault()
  }
  validateFile = (rule, value, callback) => {
    if(value !== undefined){
      const Invalid = value.fileList.map(file => {
        if(file.type !== 'image/jpeg' && file.type !== 'image/png'){
          return true
        }
        return false
      })
      if(Invalid.includes(true)){
        callback('Invalid File')
      }
      if(value.fileList.length > 2){
        callback('Maximum of one (1) file allowed')
      }
      if(value.fileList.length === 0){
        callback('File is required')
      }
    }
    callback()
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
  handleSelfieChange(info){
    let {fileList} = info
    this.setState({selfie:fileList});
  }
  handleIdChange(info){
    let {fileList} = info
    this.setState({id:fileList});
  }
  cancelRequest(){
    Id(null, {'x-access-token':this.props.auth.token}).Cancel()
    .then(res=>{
      this.checkStatus()
    }).catch(err=>{
      Modal.error({
        title: 'Cancellation error',
        content: err.response.data.message
      })
    })
  }
  checkStatus(){
    Id(null, {'x-access-token':this.props.auth.token}).Check()
    .then(res=>{
      this.setState({identification:res.data})
    })
  }
  componentDidMount(){
    this.checkStatus()
  }
  render(){
    console.log(this.state.identification)
    return(
      <Row type="flex" justify="center" style={{marginTop:'50px'}}>
        <Col md={12} lg={8}>
          <QueueAnim type={['top', 'bottom']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
            <div key="0">
              <Card
                hoverable
                title="Upgrade Level 1"
                style={CardStyle}
                loading={this.state.identification === ''}
                actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
                <div style={{display:this.state.identification.statusCode === 'none' ? 'block' : 'none'}}>
                  <UploadIdForm
                    buttonState={this.state.buttonState}
                    form={this.props.form}
                    selfie={this.state.selfie}
                    onSelfieChange={this.handleSelfieChange}
                    id={this.state.id}
                    onIdChange={this.handleIdChange}
                    handlePreview={this.handlePreview}
                    preview={this.state.preview}
                    image={this.state.image}
                    closePreview={this.closePreview}
                    validateFile={this.validateFile}
                    submit={this.handleSubmit}
                    />
                </div>
                <div style={{display:this.state.identification.status === 'pending' ? 'block' : 'none'}}>
                  <Pending
                    identification={this.state.identification}
                    cancel={this.cancelRequest}
                    front={this.state.identification.frontLocation}
                    selfie={this.state.identification.selfie}
                    back={this.state.identification.backLocation}
                    handlePreview={this.handlePreview}
                    preview={this.state.preview}
                    image={this.state.image}
                    closePreview={this.closePreview}
                    />
                </div>
                <div style={{display:this.state.identification.status === 'rejected' ? 'block' : 'none'}}>
                  <Rejected resubmit={this.cancelRequest}/>
                </div>
                <div style={{display:this.state.identification.status === 'done' ? 'block' : 'none'}}>
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

export default Form.create()(connect(mapStateToProps)(ValidIdPage))
