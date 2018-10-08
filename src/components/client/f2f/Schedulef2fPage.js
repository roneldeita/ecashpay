import React from 'react'
import { connect } from 'react-redux'
// import ReactS3 from 'react-s3'
import { Form, Row, Col, Card, Icon, Modal } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { Link } from 'react-router-dom'
import ScheduleForm from './presentation/ScheduleForm'
import Pending from './presentation/Pending'
import Expired from './presentation/Expired'
import Verified from './presentation/Verified'
import { isEmpty, camelCase } from 'lodash'
import moment from 'moment'
import { Ftf } from '../../../services/api'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class Schedulef2fPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      ftfStatus: {status:'none'},
      disabledDates: [],
      availableTime:[]
    }
  }
  handleSubmit = (event) =>{
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const Data = {}
        Object.entries(values).forEach(([index,value])=>{
          if(index === 'Date'){
            value = moment(value).format('YYYY-MM-DD')
          }
          if(index === 'Account Type'){
            index = 'Access Type'
          }
          if(index === 'Account Detail'){
            index = 'Access Details'
          }
          Data[camelCase(index)]=value
        })
        Ftf(Data, {'x-access-token':this.props.auth.token}).SubmitFtf()
        .then(res=>{
          this.checkStatus()
          setTimeout(()=>{
            this.setState({buttonState:false})
          }, 800)
        }).catch(err=>{
          Modal.error({
            title: 'Face-to-face verification error',
            content: err.response.data.message
          })
        })
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }
    })
    event.preventDefault()
  }
  verifyPhone(){
    Modal.info({
      title: 'Phone verification required',
      content: 'Please verifiy your phone number first',
    });
  }
  requireLevelOne(){
    Modal.info({
      title: 'Upgrade required',
      content: 'Upgrade to level 1 first',
    });
  }
  getDisabledDates(){
    Ftf().GetDisabledDates()
    .then(res => {
      this.setState({disabledDates:res.data})
    }).catch(err => {
      Modal.info({
        title: 'Error Fetching Dates',
        content: 'Try to reload your browser',
      })
    })
  }
  getAvailableTime = (selectedDate) => {
    this.props.form.setFields({'Time': ''})
    let date = moment(selectedDate).format('YYYY-MM-DD')
    Ftf({date}).GetAvailableTime()
    .then(res => {
      this.setState({availableTime:res.data})
    }).catch(err =>{
      Modal.info({
        title: 'Error Fetching Available time',
        content: 'Try to pick another date',
      })
    })
    //console.log(selectedDate)
  }
  disabledDates = (current) => {
    return moment(current) < moment().endOf('day') || this.state.disabledDates.includes(moment(current).format('YYYY-MM-DD'))
  }
  checkStatus(){
    Ftf(null, {'x-access-token':this.props.auth.token}).Check()
    .then(res=>{
      this.setState({ftfStatus:res.data})
    })
  }
  cancelRequest = () => {
    Ftf(null, {'x-access-token':this.props.auth.token}).Cancel()
    .then(res=>{
      this.checkStatus()
    }).catch(err=>{
      Modal.error({
        title: 'Rescedule error',
        content: err.response.data.message
      })
    })
  }
  componentDidMount(){
    this.checkStatus()
    this.getDisabledDates()
    if(!isEmpty(this.props.profile) && this.props.profile.role === 'individual'){
      if(this.props.profile.phone === ''){
        this.props.history.push('/client/verify/phone')
        this.verifyPhone()
      }else if(!this.props.profile.levels.includes(1)){
        this.props.history.push('/client/upload/id')
        this.requireLevelOne()
      }
    }
  }
  componentWillReceiveProps(nextProps){
    if(!isEmpty(nextProps.profile) && nextProps.profile.role === 'individual'){
      if(nextProps.profile.phone === ''){
        nextProps.history.push('/client/verify/phone')
        this.verifyPhone()
      }else if(!nextProps.profile.levels.includes(1)){
        nextProps.history.push('/client/upload/id')
        this.requireLevelOne()
      }
    }
  }
  render(){
    const Status = this.state.ftfStatus.status
    const FtfStatus = this.state.ftfStatus.f2fScheduleStatus
    return(
      <Row type="flex" justify="center" style={{marginTop:'50px'}}>
        <Col xs={23} sm={23} md={14} lg={12} xl={10} xxl={8}>
          <QueueAnim type={['top', 'bottom']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
            <div key="0">
              <Card
                hoverable
                title="Upgrade Level 2"
                style={CardStyle}
                loading={isEmpty(this.state.ftfStatus)}
                actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
                <div style={{display:Status === 'none' ? 'block' : 'none'}}>
                  <ScheduleForm
                    buttonState={this.state.buttonState}
                    form={this.props.form}
                    submit={this.handleSubmit}
                    disabledDates={this.disabledDates}
                    dateSelected={this.getAvailableTime}
                    availableTime={this.state.availableTime}/>
                </div>
                <div style={{display:Status === 'pending' && FtfStatus === 'pending' ? 'block' : 'none'}}>
                  <Pending ftfStatus={this.state.ftfStatus} cancel={this.cancelRequest}/>
                </div>
                <div style={{display:Status === 'pending' && FtfStatus === 'expired' ? 'block' : 'none'}}>
                  <Expired resubmit={this.cancelRequest}/>
                </div>
                <div style={{display:Status === 'accepted' ? 'block' : 'none'}}>
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
    profile: state.profile
  }
}

export default Form.create()(connect(mapStateToProps)(Schedulef2fPage))