import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Icon } from 'antd'
import VerifyIdTable from './presentation/VerifyIdTable'
import { Id } from '../../../services/api'

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
      <Icon type="idcard" />
      <span>Verify ID</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class VerifyIdPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      record:[]
    }
  }
  componentWillMount(){
    Id(null, {'x-access-token':this.props.auth.token}).VerifyID()
    .then(res=>{
      this.setState({record:res.data})
    })
    .catch(err=>{
      console.log(err)
    })
  }
  render(){
    console.log(this.state)
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          <VerifyIdTable record={this.state.record}/>
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

export default connect(mapStateToProps)(VerifyIdPage)
