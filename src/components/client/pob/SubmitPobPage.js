import React from 'react'
import { connect } from 'react-redux'
//import ReactS3 from 'react-s3'
import { Link } from 'react-router-dom'
import UploadPobForm from './presentation/UploadPobForm'
import Pending from './presentation/Pending'
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
      fileList:[]
    }
    this.validateFile = this.validateFile.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
        //console.log(this.state.fileList)
        // const config = {
        //   bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
        //   albumName: process.env.REACT_APP_S3_ALBUM_NAME,
        //   region: process.env.REACT_APP_S3_REGION,
        //   accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
        //   secretAccessKey: process.env.REACT_APP_S3_SECERET_ACCESS_KEY,
        // }
        // ReactS3.upload(this.state.fileList[0], config)
        // .then(res=>{
        //   console.log(res.data)
        // })
        // .catch((err) => {
        //   setTimeout(()=>{
        //     this.setState({buttonState:false})
        //   },800)
        // })
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        },800)
      }
    })
    event.preventDefault()
  }
  handleFileChange(info){
    let {fileList} = info
    this.setState({fileList});
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
    console.log(this.state)
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
                  filelist={this.state.fileList}
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
