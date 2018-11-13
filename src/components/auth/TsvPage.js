import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
import { Modal} from 'antd'
//components
import TsvForm from './presentation/TsvForm'
//services
import { Auth } from '../../services/api'

class TsvPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      resendState:false,
      tsv:{}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleResend = this.handleResend.bind(this)
    document.title="2-Step verification - Ecashpay"
  }
  componentDidMount(){
    const TsvInfo = sessionStorage.getItem('tsv')
    this.setState({tsv:JSON.parse(TsvInfo)})
  }
  handleChange(event){
    if(event.length === 4){
      Auth({code:event}, {'x-access-token':this.state.tsv.token}).verifyTSV()
      .then(res=>{
        this.props.authActions.saveAuth(res.data.token)
        window.location.href = '/'
      }).catch(err=>{
        Modal.error({
          title: 'Login Error',
          content: err.response.data.message,
        })
      })
    }
  }
  handleResend(event){
    this.setState({resendState:true})
    Auth(null, {'x-access-token': this.state.tsv.token}).resendTSV()
    .then(res => {
      Modal.success({
        title: 'Resend Verification Success',
        content: 'Verification email successfully sent',
      })
      setTimeout(() => {
        this.setState({resendState:false})
      }, 800)
    })
    .catch(error => {
      Modal.error({
        title: 'Resend Verification Error',
        content: error.response.data.message,
      })
      setTimeout(() => {
        this.setState({resendState:false})
      }, 800)
    })
    event.preventDefault()
  }
  render(){
    return(
      <div className="center-wrapper">
        <div className="center-container">
          <TsvForm
            onChange={this.handleChange}
            tsv={this.state.tsv}
            onResend={this.handleResend}
            resendState={this.state.resendState}/>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(TsvPage)
