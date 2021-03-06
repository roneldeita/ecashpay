import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Icon, Modal } from 'antd'
import VerifyPobTable from './presentation/VerifyPobTable'
import { Id, Pob } from '../../../services/api'
import RejectForm from './presentation/RejectForm';

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
      <Icon type="paper-clip" />
      <span>Verify Proof of billing</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class VerifyIdPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      rejectFormVisible: false,
      record:[],
      RequestId:'',
      remarks: [
        'Your documents do not match.',
        'Your selfie is unclear and blurry.',
        'Your ID is not valid at the moment you submitted your KYC application. ',
        'Your ID is not legible and/or it appeared to be modified by a photo editing software. ',
        'Other'
      ],
    }
    this.accept = this.accept.bind(this)
    this.decline = this.decline.bind(this)
    this.showRejectForm = this.showRejectForm.bind(this)
    this.hideRejectForm = this.hideRejectForm.bind(this)
  }
  showRejectForm(e){
    const RequestId = e.target.getAttribute('data-id')
    this.setState({rejectFormVisible:true, RequestId})
  }
  hideRejectForm(){
    this.setState({rejectFormVisible:false, RequestId:''})
  }
  decline(remarks){
    const modal = Modal.info({
      closable:false,
      title: (<div><Icon type="loading"/> Rejecting upgrade request</div>)
    });
    Id({id:this.state.RequestId, remarks, 'status':'rejected'}, {'x-access-token':this.props.auth.token}).Verify()
    .then(res=>{
      this.getAllRecords()
      setTimeout(() => {
          modal.destroy()
          setTimeout(() => this.hideRejectForm(), 500);
        }, 1000);
      
    })
    .catch(err=>{
      console.log(err)
      setTimeout(() => modal.destroy(), 1000);
    })
  }
  // decline(e){
  //   const modal = Modal.info({
  //     closable:false,
  //     title: (<div><Icon type="loading"/> Rejecting upgrade request</div>)
  //   });
  //   const RequestId = e.target.getAttribute('data-id')
  //   Id({id:RequestId, 'status':'rejected'}, {'x-access-token':this.props.auth.token}).Verify()
  //   .then(res=>{
  //     this.getAllRecords()
  //     setTimeout(() => modal.destroy(), 1000);
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //     setTimeout(() => modal.destroy(), 1000);
  //   })
  // }
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
  // handleSelected(userId){
  //   this.setState({selected:{}})
  //   Auth({id:userId}).GetAccount()
  //   .then(res=>{
  //     this.setState({selected:res.data})
  //     console.log(res)
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }
  getAllRecords(){
    Pob(null, {'x-access-token':this.props.auth.token}).GetAllPobRequest()
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
    //console.log(this.state)
    return(
      <div>
        {BreadCrumbs}
        <div style={AdminContentStyle}>
          <VerifyPobTable
            record={this.state.record}
            accept={this.accept}
            showRejectForm={this.showRejectForm}/>
          <RejectForm
            title="Reject KYC 3"
            decline={this.decline}
            visible={this.state.rejectFormVisible}
            close={this.hideRejectForm}
            remarks={this.state.remarks}/>
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

export default connect(mapStateToProps)(VerifyIdPage)
