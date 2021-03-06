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
import { Modal, Form } from 'antd'

class VerificationPage extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      resendState:false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleResend = this.handleResend.bind(this)
    this.autoCheck = this.autoCheck.bind(this)
    document.title="Verify Email - Ecashpay"
  }
  autoCheck(event){
    console.log(event.target)
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.Code.length === 4){
          this.setState({buttonState:true})
          Auth({code:values.Code}, {'x-access-token':this.props.auth.token}).verifyEmail()
          .then(res => {
            this.props.profileAction.loadProfile(this.props.auth.token)
            window.location.href = '/business/profile'
          })
          .catch(error => {
            Modal.error({
              title: 'Email Verification Error',
              content: error.response.data.message,
            });
            setTimeout(() => {
              this.setState({buttonState:false})
            }, 800)
          })
        }
      }else{
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 800)
      }
    });
    event.preventDefault()
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
            form={this.props.form}
            buttonState={this.state.buttonState}
            onSubmit={this.handleSubmit}
            onResend={this.handleResend}
            autoCheck={this.autoCheck}
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

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(VerificationPage))
