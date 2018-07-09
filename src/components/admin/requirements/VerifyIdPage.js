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
      <Icon type="picture" />
      <span>Verify ID</span>
    </Breadcrumb.Item>
  </Breadcrumb>
)

class VerifyIdPage extends React.PureComponent{
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
    Id({id:RequestId, 'status':'2'}, {'x-access-token':this.props.auth.token}).Verify()
    .then(res=>{
      this.getAllRecords()
    })
    .catch(err=>{
      console.log(err)
    })
  }
  accept(e){
    const RequestId = e.target.getAttribute('data-id')
    Id({id:RequestId, 'status':'1'}, {'x-access-token':this.props.auth.token}).Verify()
    .then(res=>{
      this.getAllRecords()
    })
    .catch(err=>{
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

export default connect(mapStateToProps)(VerifyIdPage)
