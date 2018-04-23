import React from 'react'
import { connect } from 'react-redux'
import ReactS3 from 'react-s3'
import { Form, Row, Col, Card, Icon } from 'antd'
import { Link } from 'react-router-dom'
import UploadIdForm from './presentation/UploadIdForm'
import Pending from './presentation/Pending'
import Rejected from './presentation/Rejected'
import { isEmpty } from 'lodash'
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
      status:'',
      buttonState:false,
      front:[],
      back:[],
      preview: false,
      image:''
    }
    this.handleFrontChange = this.handleFrontChange.bind(this)
    this.handleBackChange = this.handleBackChange.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
    this.closePreview = this.closePreview.bind(this)
    this.validateFile = this.validateFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancelRequest = this.cancelRequest.bind(this)
  }
  handleSubmit = (event) => {
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const config = {
          bucketName: 'gprsv2',
          albumName: 'creatives',
          region: 'ap-southeast-1',
          accessKeyId: 'AKIAJYS7YQXKNVYMW4FA',
          secretAccessKey: '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',
        }
        var front = ReactS3.upload(this.state.front[0], config)
        var back = ReactS3.upload(this.state.back[0], config)

        Promise.all([front, back]).then( res =>{
          Id({
            'type': values['ID type'],
            'frontLocation':res[0].location,
            'backLocation': res[1].location
          }, {'x-access-token':this.props.auth.token}).SubmitId()
          .then(res => {
            this.checkStatus()
            setTimeout(()=>{
              this.setState({buttonState:false})
            }, 800)
          })
          .catch(err => {
            console.log(err)
            setTimeout(()=>{
              this.setState({buttonState:false})
            }, 800)
          })
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
    //console.log(value)
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
  handleFrontChange(info){
    let {fileList} = info
    if(!isEmpty(fileList)){
      let tmpimg = window.URL.createObjectURL(fileList[0])
      fileList[0]['url'] = tmpimg
    }
    this.setState({front:fileList});
  }
  handleBackChange(info){
    let {fileList} = info
    if(!isEmpty(fileList)){
      let tmpimg = window.URL.createObjectURL(fileList[0])
      fileList[0]['url'] = tmpimg
    }
    this.setState({back:fileList});
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
      this.setState({status:res.data.status})
    })
  }
  componentWillMount(){
    this.checkStatus()
  }
  render(){
    console.log(this.state)
    return(
      <Row type="flex" justify="center" style={{marginTop:'30px'}}>
        <Col md={12} lg={8}>
          <div style={{display:this.state.status === 'none' ? 'block' : 'none'}}>
            <Card
              hoverable
              title={ <span>Submit your government-issued ID</span> }
              style={CardStyle}
              actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
                <UploadIdForm
                  buttonState={this.state.buttonState}
                  form={this.props.form}
                  front={this.state.front}
                  back={this.state.back}
                  handleFrontChange={this.handleFrontChange}
                  handleBackChange={this.handleBackChange}
                  handlePreview={this.handlePreview}
                  preview={this.state.preview}
                  image={this.state.image}
                  closePreview={this.closePreview}
                  validateFile={this.validateFile}
                  submit={this.handleSubmit}
                  />
            </Card>
          </div>
          <div style={{display:this.state.status === 'pending' ? 'block' : 'none'}}>
            <Card
              hoverable
              title={ <span>Submit your government-issued ID</span> }
              style={CardStyle}
              actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
              <Pending cancel={this.cancelRequest}/>
            </Card>
          </div>
          <div style={{display:this.state.status === 'rejected' ? 'block' : 'none'}}>
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
