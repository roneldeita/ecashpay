import React from 'react'
import { connect } from 'react-redux'
//import ReactS3 from 'react-s3'
import { Link } from 'react-router-dom'
import UploadPobForm from './presentation/UploadPobForm'
import Pending from './presentation/Pending'
import Verified from './presentation/Verified'
import Rejected from './presentation/Rejected'
import { Form, Row, Col, Card, Icon, Modal } from 'antd'
import { Pob } from '../../../services/api'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class SubmitPobPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      identification:'',
      buttonState:false,
      files:[]
    }
    this.validateFile = this.validateFile.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancelRequest = this.cancelRequest.bind(this)
  }
  validateFile = (rule, value, callback) => {
    if(value !== undefined){
      value.fileList.map(file => {
        if(file.type !== 'image/jpeg' && file.type !== 'application/pdf'){
          callback('I can only accept jpg or pdf file')
        }
        return callback()
      })
      if(value.fileList.length > 1){
        callback('You can only select no more than one file')
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
      this.setState({identification:res.data})
    })
  }
  componentDidMount(){
    this.checkStatus()
  }
  render(){
    //console.log(this.props)
    return (
      <Row justify="center" type="flex" style={{marginTop:'30px'}}>
        <Col md={12} lg={8}>
          <Card
            hoverable
            title={ <span>Submit Proof Of Billing</span> }
            style={CardStyle}
            actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
              <div style={{display:this.state.identification === '' ? 'block' : 'none', minHeight:200, lineHeight:'200px', textAlign:'center'}}>
                <p style={{verticalAlign:'middle', fontSize:'20px'}}>Loading...</p>
              </div>
              <div style={{display:this.state.identification.status === 'none' ? 'block' : 'none'}}>
                <UploadPobForm
                  form={this.props.form}
                  files={this.state.files}
                  validateFile={this.validateFile}
                  change={this.handleFileChange}
                  submit={this.handleSubmit}
                  buttonState={this.state.buttonState}
                  />
              </div>
              <div style={{display:this.state.identification.status === 'pending' ? 'block' : 'none'}}>
                <Pending
                  cancel={this.cancelRequest}
                  location={this.state.identification.location}
                  type={this.state.identification.type}
                  />
              </div>
              <div style={{display:this.state.identification.status === 'rejected' ? 'block' : 'none'}}>
                <Rejected resubmit={this.cancelRequest}/>
              </div>
              <div style={{display:this.state.identification.status === 'done' ? 'block' : 'none'}}>
                <Verified/>
              </div>
          </Card>
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
