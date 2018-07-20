import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Icon } from 'antd'
import AccountsTable from './presentation/AccountsTable'
import { Auth } from '../../../services/api'

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
      <Icon type="shop" />
      <span>New Busniness Accounts</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class AccountsPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      record:[]
    }
    this.accept = this.accept.bind(this)
    this.decline = this.decline.bind(this)
  }
  decline(e){
    const RequestId = e.target.getAttribute('data-id')
    Auth({id:RequestId}, {'x-access-token':this.props.auth.token}).AdminBusinessNewAccounts()
    .then(res=>{
      this.getAllRecords()
    })
    .catch(err=>{
      console.log(err)
    })
  }
  accept(e){
    const RequestId = e.target.getAttribute('data-id')
    Auth({id:RequestId, status:'completed'}, {'x-access-token':this.props.auth.token}).AdminAcceptNewBusinessAccount()
    .then(res=>{
      console.log(res)
      this.getAllRecords()
    })
    .catch(err=>{
      console.log(err)
    })
  }
  getAllRecords(){
    Auth(null, {'x-access-token':this.props.auth.token}).AdminBusinessNewAccounts()
    .then(res=>{
      this.setState({record:res.data})
    })
    .catch(err=>{
      console.log(err)
    })
  }
  componentDidMount(){
    this.getAllRecords()
  }
  render(){
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          <AccountsTable
            record={this.state.record}
            accept={this.accept}
            decline={this.decline}
            />
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

export default connect(mapStateToProps)(AccountsPage)
