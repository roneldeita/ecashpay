import React from 'react';
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
import * as profileActions from '../../actions/profileAction'
//components
import VerificationForm from './presentation/VerificationForm'
//services
import { Auth } from '../../services/api'
//ant design
import { Modal, Form } from 'antd'

class VerificationPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleResend = this.handleResend.bind(this)
  }
  onClickSubmitButton(event){
    this.setState({buttonState:true})
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Auth({code:values.Code}, {'x-access-token':this.props.auth.token}).verifyEmail()
        .then(res => {
          sessionStorage.removeItem('profile');
          this.props.profileAction.loadProfile(this.props.auth.token)
          window.location.href = '/profile'
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
      }else{
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 800)
      }
    });
    event.preventDefault()
  }
  handleResend(event){
    Auth(null, {'x-access-token': this.props.auth.token}).verificationResend()
    .then(res => {
      Modal.success({
        title: 'Resend Verification Success',
        content: 'Verification email successfully sent',
      })
    })
    .catch(error => {
      Modal.error({
        title: 'Resend Verification Error',
        content: error.response.data.message,
      })
    })
    event.preventDefault()
  }
  render() {
    return (
      <div className="font">
        <VerificationForm
          email={this.props.profile.email}
          form={this.props.form}
          buttonState={this.state.buttonState}
          onClickSubmitButton={this.onClickSubmitButton}
          onSubmit={this.handleSubmit}
          onResend={this.handleResend}
        />
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
