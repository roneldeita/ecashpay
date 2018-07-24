import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Icon, Modal } from 'antd'
import AccountsTable from './presentation/AccountsTable'
import { Auth } from '../../../../services/api'

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
      <span>New Merchant Accounts</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class AccountsPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      record:[],
      selected:{}
    }
    this.accept = this.accept.bind(this)
    this.decline = this.decline.bind(this)
    this.handleSelected = this.handleSelected.bind(this)
  }
  decline(e){
    const modal = Modal.info({
      closable:false,
      title: (<div><Icon type="loading"/> Rejecting merchant account</div>)
    });
    const RequestId = e.target.getAttribute('data-id')
    Auth({id:RequestId, status:'rejected'}, {'x-access-token':this.props.auth.token}).HandleMerchantAccount()
    .then(res=>{
      console.log(res)
      this.getAllRecords()
      setTimeout(() => modal.destroy(), 1000);
    })
    .catch(err=>{
      console.log(err)
      setTimeout(() => modal.destroy(), 1000);
    })
  }
  accept(e){
    const modal = Modal.info({
      closable:false,
      title: (<div><Icon type="loading"/> Accepting new merchant account</div>)
    });
    const RequestId = e.target.getAttribute('data-id')
    Auth({id:RequestId, status:'completed'}, {'x-access-token':this.props.auth.token}).HandleMerchantAccount()
    .then(res=>{
      console.log(res)
      this.getAllRecords()
      setTimeout(() => modal.destroy(), 1000);
    })
    .catch(err=>{
      console.log(err)
      setTimeout(() => modal.destroy(), 1000);
    })
  }
  handleSelected(userId){
    Auth({id:userId}).GetAccount()
    .then(res=>{
      this.setState({selected:res.data})
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  getAllRecords(){
    Auth(null, {'x-access-token':this.props.auth.token}).AdminMerchantNewAccounts()
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
            selected={this.state.selected}
            handleSelected={this.handleSelected}/>
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

export default connect(mapStateToProps)(AccountsPage)
