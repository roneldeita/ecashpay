import React from 'react'
import { connect } from 'react-redux'
//import ReactS3 from 'react-s3'
import { Link } from 'react-router-dom'
import UploadPobForm from './presentation/UploadPobForm'
import Pending from './presentation/Pending'
import Verified from './presentation/Verified'
import { Form, Row, Col, Card, Icon } from 'antd'
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
          console.log(err)
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
  componentWillMount(){
    this.checkStatus()
  }
  render(){
    //console.log(this.props)
    return (
      <Row justify="center" type="flex" style={{marginTop:'30px'}}>
        <Col md={12} lg={8}>
          <div style={{display:this.state.identification.status === 'none' ? 'block' : 'none'}}>
            <Card
              hoverable
              title={ <span>Submit Proof Of Billing</span> }
              style={CardStyle}
              actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
                <UploadPobForm
                  form={this.props.form}
                  files={this.state.files}
                  validateFile={this.validateFile}
                  change={this.handleFileChange}
                  submit={this.handleSubmit}
                  buttonState={this.state.buttonState}
                  />
            </Card>
          </div>
          <div style={{display:this.state.identification.status === 'pending' ? 'block' : 'none'}}>
            <Card
              hoverable
              title={ <span>Submit your government-issued ID</span> }
              style={CardStyle}
              actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
              <Pending
                cancel={this.cancelRequest}
                location={this.state.identification.location}
                type={this.state.identification.type}
                />
            </Card>
          </div>
          <div style={{display:this.state.identification.status === 'done' ? 'block' : 'none'}}>
            <Card
              hoverable
              title={ <span>Submit Proof Of Billing</span> }
              style={CardStyle}>
              <Verified/>
            </Card>
          </div>
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
