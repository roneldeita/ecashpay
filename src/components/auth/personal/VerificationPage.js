import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../../actions/authAction'
import * as profileActions from '../../../actions/profileAction'
//components
import VerificationForm from './presentation/VerificationForm'
//services
import { Auth } from '../../../services/api'
//ant design
import { Modal } from 'antd'

class VerificationPage extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      resendState:false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleResend = this.handleResend.bind(this)
    document.title="Verify Email - Ecashpay"
  }
  handleChange(event){
    if(event.length === 4){
      Auth({code:event}, {'x-access-token':this.props.auth.token}).verifyEmail()
      .then(res => {
        window.location.href = '/'
      })
      .catch(error => {
        Modal.error({
          title: 'Email Verification Error',
          content: error.response.data.message,
        });
      })
    }
  }
  handleResend(event){
    this.setState({resendState:true})
    Auth(null, {'x-access-token': this.props.auth.token}).verificationResend()
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
  render() {
    return (
      <div className="center-wrapper">
        <div className="center-container">
          <VerificationForm
            email={this.props.profile.email}
            onChange={this.handleChange}
            onResend={this.handleResend}
            resendState={this.state.resendState}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
    profile: state.profile
  }
}
function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch),
    profileAction: bindActionCreators(profileActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationPage)
