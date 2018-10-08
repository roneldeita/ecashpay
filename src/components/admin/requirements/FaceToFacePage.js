import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb,  Icon, Row, Col, Radio, Modal } from 'antd'
import AddScheduleForm from './presentation/AddScheduleForm'
import BlockDateForm from './presentation/BlockDateForm'
import FaceToFaceCalendar from './presentation/FaceToFaceCalendar'
import moment from 'moment'
import {Ftf} from '../../../services/api'

const AdminContentStyle = {
  backgroundColor:'#ffffff',
  minHeight:'90vh',
  margin:'0px 20px',
  padding:'20px 35px'
}
const BreadCrumbsStyle = {
  padding:'5px 30px'
}
const BreadCrumbs = (
  <Breadcrumb style={BreadCrumbsStyle}>
    <Breadcrumb.Item href="/admin">
      <Icon type="dashboard" />
      <span>Dashboard</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item href="/KYC">
      <Icon type="idcard" />
      <span>KYC</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Icon type="mobile" />
      <span>Manage Face-to-face validation schedule</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class FaceToFacePage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      addSchedule:true,
      schedules:[]
    }
  }
  handleSchedule = () =>{
    this.setState({addSchedule:!this.state.addSchedule})
  }
  getAllSchedules = () =>{
    Ftf().GetAllSchedule()
    .then(res => {
      console.log(res.data)
      //this.setState({schedules:res.data})
      let Data = []
      Object.entries(res.data).forEach(([index,value])=>{
        if(value.active === true){
          Data.push({
            title: moment(value.date +' '+ value.timeStart).format('h:mm a') +'-'+ moment(value.date +' '+ value.timeEnd).format('h:mm:ss a') +' ('+value.slot+')',
            start: moment(value.date +' '+ value.timeStart).toDate(),
            end: moment(value.date +' '+ value.timeEnd).toDate()
          })
        }else{
          Data.push({
            title:value.reasonToBeBlocked,
            allDay: true, 
            start: moment(value.date).toDate(),
            end: moment(value.date).toDate()
          })
        }
      })
      this.setState({schedules:Data})
    }).catch(err => {
      Modal.error({
        title: 'Face-to-face verification error',
        content: 'Error Fetching Schedules'
      })
    })
  }
  componentDidMount(){
    this.getAllSchedules()
  }
  render(){
    console.log(this.state)
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          <br/>
          <h1>Manage Face-to-face validation <span style={{fontSize:'14px'}}>Set Schedule</span></h1>
          <br/>
          <Row gutter={50}>
            <Col span={8} className="">
              <Radio.Group defaultValue="add" buttonStyle="solid" onChange={this.handleSchedule}>
                <Radio.Button value="add">Add Schedule</Radio.Button>
                <Radio.Button value="block">Block Date</Radio.Button>
              </Radio.Group>
              <div style={{display:this.state.addSchedule ? 'block' : 'none'}}>
                <AddScheduleForm 
                  auth={this.props.auth}
                  getAllSchedules={this.getAllSchedules}/>
              </div>
              <div style={{display:!this.state.addSchedule ? 'block' : 'none'}}>
                <BlockDateForm
                  auth={this.props.auth}
                  getAllSchedules={this.getAllSchedules}/>
              </div>
            </Col>
            <Col span={16}>
              <FaceToFaceCalendar schedules={this.state.schedules}/>
            </Col>
          </Row>
        </div>
        {/*<style jsx="true">{`
            .ant-confirm-btns,
            .anticon-info-circle{
              display:none
            }
            .ant-confirm-title{
              text-align:center
            }
          `}
        </style>*/}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(FaceToFacePage)