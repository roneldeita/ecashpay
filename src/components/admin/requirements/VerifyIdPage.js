import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Icon, Modal } from 'antd'
import VerifyIdTable from './presentation/VerifyIdTable'
import { Auth, Id } from '../../../services/api'

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
    <Breadcrumb.Item href="/KYC">
      <Icon type="idcard" />
      <span>KYC</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Icon type="picture" />
      <span>Verify ID</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class VerifyIdPage extends React.PureComponent{
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
      title: (<div><Icon type="loading"/> Rejecting upgrade request</div>)
    });
    const RequestId = e.target.getAttribute('data-id')
    Id({id:RequestId, 'status':'rejected'}, {'x-access-token':this.props.auth.token}).Verify()
    .then(res=>{
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
      title: (<div><Icon type="loading"/> Accepting upgrade request</div>)
    });
    const RequestId = e.target.getAttribute('data-id')
    Id({id:RequestId, 'status':'accepted'}, {'x-access-token':this.props.auth.token}).Verify()
    .then(res=>{
      this.getAllRecords()
      setTimeout(() => modal.destroy(), 1000);
    })
    .catch(err=>{
      console.log(err)
      setTimeout(() => modal.destroy(), 1000);
    })
  }
  handleSelected(userId){
    this.setState({selected:{}})
    Auth({id:userId}).GetAccount()
    .then(res=>{
      this.setState({selected:res.data})
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  getAllRecords(){
    Id(null, {'x-access-token':this.props.auth.token}).GetAllIdRequest()
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
    console.log(this.state)
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          <VerifyIdTable
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

export default connect(mapStateToProps)(VerifyIdPage)
