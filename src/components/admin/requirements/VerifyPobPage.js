import React from 'react'
import { Breadcrumb, Icon } from 'antd'

const AdminContentStyle = {
  backgroundColor:'#ffffff',
  minHeight:'90vh',
  margin:'0px 20px',
  padding:'20px'
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
    <Breadcrumb.Item>
      <Icon type="clock-circle-o" />
      <span>Verify ID</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class VerifyPobPage extends React.Component{
  render(){
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          POB
        </div>
      </div>
    )
  }
}

export default VerifyPobPage
