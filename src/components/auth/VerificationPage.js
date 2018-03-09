import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
import * as profileActions from '../../actions/profileAction'
import axios from 'axios'
import VerificationForm from './presentation/VerificationForm'
import { createForm } from 'rc-form';

import { Modal } from 'antd'

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
        axios.post(process.env.REACT_APP_API + '/verification', {code: values.Code}, { headers:{token:this.props.auth.token}})
        .then(res => {
          this.props.authActions.saveAuth(res.data)
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
    axios.post(process.env.REACT_APP_API + '/verification/resend', null, { headers:{token:this.props.auth.token}})
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
  componentWillMount(){
    axios.get(process.env.REACT_APP_API + '/profile', {headers: {token:this.props.auth.token}})
    .then(res => {
      this.props.profileAction.loadProfile(res.data)
    })
  }
  render() {
    return (
      <div className="font">
        <VerificationForm
          email={this.props.profile.email}
          form={this.props.form}
          buttonState={this.state.buttonState}
          onClickSubmitButton ={this.onClickSubmitButton}
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

export default createForm()(connect(mapStateToProps, mapDispatchToProps)(VerificationPage))
