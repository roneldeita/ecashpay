import React from 'react'
import { connect } from 'react-redux'
import { Breadcrumb, Icon, Modal } from 'antd'
import PaymentsTable from './presentation/PaymentsTable'
import { Transaction } from '../../../../services/api'

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
      <span>Payments</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Icon type="shop" />
      <span>Verify Proof of delivery</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class PaymentsPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      record:[]
    }
    this.accept = this.accept.bind(this)
    this.decline = this.decline.bind(this)
  }
  decline(e){
    const modal = Modal.info({
      closable:false,
      title: (<div><Icon type="loading"/> Rejecting proof of delivery</div>)
    });
    const RequestId = e.target.getAttribute('data-id')
    Transaction({id:RequestId}, {'x-access-token':this.props.auth.token}).RejectPayment()
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
      title: (<div><Icon type="loading"/> Verifying proof of delivery</div>)
    });
    const RequestId = e.target.getAttribute('data-id')
    Transaction({id:RequestId}, {'x-access-token':this.props.auth.token}).AcceptPayment()
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
  getAllRecords(){
    Transaction(null, {'x-access-token':this.props.auth.token}).GetAllPayments()
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
          <PaymentsTable
            record={this.state.record}
            accept={this.accept}
            decline={this.decline}
            />
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

export default connect(mapStateToProps)(PaymentsPage)
