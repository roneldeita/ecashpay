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
  </Breadcrumb>
)

class DashboardPage extends React.Component{
  render(){
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          Administrative Dashboard
        </div>
      </div>
    )
  }
}

export default DashboardPage
