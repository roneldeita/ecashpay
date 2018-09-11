import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Form,  Icon, Row, Col } from 'antd'
import FaceToFaceForm from './presentation/FaceToFaceForm'
import FaceToFaceCalendar from './presentation/FaceToFaceCalendar'

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
    this.state={}
  }
  render(){
    console.log(this.state)
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          <br/>
          <h1>Face-to-face validation <span style={{fontSize:'14px'}}>Video call via Facebook Messenger or Skype</span></h1>
          <br/>
          <Row gutter={50}>
            <Col span={8} className="">
              <FaceToFaceForm form={this.props.form}/>
            </Col>
            <Col span={16}>
              <FaceToFaceCalendar/>
            </Col>
          </Row>
        </div>
        <style jsx="true">{`
            .ant-confirm-btns,
            .anticon-info-circle{
              display:none
            }
            .ant-confirm-title{
              text-align:center
            }
          `}
        </style>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
  }
}

export default Form.create()(connect(mapStateToProps)(FaceToFacePage))