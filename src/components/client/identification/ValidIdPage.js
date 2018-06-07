import React from 'react'
import { connect } from 'react-redux'
// import ReactS3 from 'react-s3'
import { Form, Row, Col, Card, Icon } from 'antd'
import { Link } from 'react-router-dom'
import UploadIdForm from './presentation/UploadIdForm'
import Pending from './presentation/Pending'
import Rejected from './presentation/Rejected'
import { Id } from '../../../services/api'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class ValidIdPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      identification:'',
      status:'',
      buttonState:false,
      files:[],
      preview: false,
      image:''
    }
    this.validateFile = this.validateFile.bind(this)
    this.handleFilesChange = this.handleFilesChange.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
    this.closePreview = this.closePreview.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancelRequest = this.cancelRequest.bind(this)
  }
  handleSubmit = (event) => {
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { fileList } = values.File
        const formData = new FormData()
        fileList.forEach((file) => {
          formData.append('files', file.originFileObj);
        });
        Id(formData, {'x-access-token':this.props.auth.token, 'Content-type':'multipart/form-data'}).SubmitId()
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
        }, 800)
      }
    })
    event.preventDefault()
  }
  validateFile = (rule, value, callback) => {
    if(value !== undefined){
      value.fileList.map(file => {
        if(file.type !== 'image/jpeg' && file.type !== 'image/png'){
          callback('I can only accept jpg or png file')
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
  closePreview = () => {
    this.setState({preview:false})
  }
  handlePreview = (file) => {
    this.setState({
      image: file.url || file.thumbUrl,
      preview: true,
    });
  }
  handleFilesChange(info){
    let {fileList} = info
    this.setState({files:fileList});
  }
  cancelRequest(){
    Id(null, {'x-access-token':this.props.auth.token}).Cancel()
    .then(res=>{
      this.checkStatus()
    })
  }
  checkStatus(){
    Id(null, {'x-access-token':this.props.auth.token}).Check()
    .then(res=>{
      this.setState({identification:res.data})
    })
  }
  componentWillMount(){
    this.checkStatus()
  }
  render(){
    //console.log(this.state)
    return(
      <Row type="flex" justify="center" style={{marginTop:'80px'}}>
        <Col md={12} lg={8}>
          <div style={{display:this.state.identification.status === 'none' ? 'block' : 'none'}}>
            <Card
              hoverable
              title={ <span>Submit your government-issued ID</span> }
              style={CardStyle}
              actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
                <UploadIdForm
                  buttonState={this.state.buttonState}
                  form={this.props.form}
                  files={this.state.files}
                  onFilesChange={this.handleFilesChange}
                  handlePreview={this.handlePreview}
                  preview={this.state.preview}
                  image={this.state.image}
                  closePreview={this.closePreview}
                  validateFile={this.validateFile}
                  submit={this.handleSubmit}
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
                front={this.state.identification.frontLocation}
                files={this.state.identification.files}
                back={this.state.identification.backLocation}
                handlePreview={this.handlePreview}
                preview={this.state.preview}
                image={this.state.image}
                closePreview={this.closePreview}
                />
            </Card>
          </div>
          <div style={{display:this.state.identification.status === 'rejected' ? 'block' : 'none'}}>
            <Card
              hoverable
              title={ <span>Submit your government-issued ID</span> }
              style={CardStyle}
              actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
              <Rejected resubmit={this.cancelRequest}/>
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


export default Form.create()(connect(mapStateToProps)(ValidIdPage))
