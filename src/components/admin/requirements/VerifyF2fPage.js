import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Icon, Modal } from 'antd'
import VerifyF2fTable from './presentation/VerifyF2fTable'
import { Ftf } from '../../../services/api'
import RejectF2fForm from './presentation/RejectF2fForm';

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
      <Icon type="mobile" />
      <span>Verify F2F</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class VerifyF2fPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      record:[],
      rejectFormVisible: false,
      RequestId:''
    }
    this.handleAction = this.handleAction.bind(this)
  }
  showRejectForm(e){
    const RequestId = e.target.getAttribute('data-id')
    this.setState({rejectFormVisible:true, RequestId})
  }
  hideRejectForm(){
    this.setState({rejectFormVisible:false, RequestId:''})
  }
  handleAction = (e) =>{
    const RequestId = e.item.props['data-id']
    const Status = e.item.props['data-status']

    const modal = Modal.info({
      closable:false,
      title: (<div><Icon type="loading"/> Performing action</div>)
    });
    Ftf({id:RequestId, status:Status}, {'x-access-token':this.props.auth.token}).Verify()
    .then(res=>{
      this.getAllRecords()
      setTimeout(() => modal.destroy(), 1000);
    })
    .catch(err=>{
      console.log(err)
      setTimeout(() => modal.destroy(), 1000);
    })
  }
  getAllRecords(){
    Ftf(null, {'x-access-token':this.props.auth.token}).GetAllIdRequest()
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
          <VerifyF2fTable
            record={this.state.record}
            handleAction={this.handleAction}/>
          <RejectF2fForm
            decline={this.decline}
            visible={this.state.rejectFormVisible}
            close={this.hideRejectForm}/>
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

export default connect(mapStateToProps)(VerifyF2fPage)
