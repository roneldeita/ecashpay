import React from 'react'
import { Breadcrumb, Icon } from 'antd'
import { connect } from 'react-redux'
import CashInTable from './presentation/CashInTable'

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
      <Icon type="wallet" />
      <span>Cash In</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class CashInPage extends React.PureComponent{
  render(){
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          <CashInTable/>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(CashInPage)
