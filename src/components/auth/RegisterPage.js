import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
import RegisterForm from './presentation/RegisterForm'
import { camelCase } from 'lodash'
import { createForm } from 'rc-form'
import axios from 'axios'

import { Modal } from 'antd'
import 'antd/lib/modal/style/css'

class RegisterPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkConfirm = this.checkConfirm.bind(this)
    this.checkPassword = this.checkPassword.bind(this)
  }
  onClickLoginButton(event){
    this.setState({buttonState:true})
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    const confirm = form.getFieldValue('Confirm Password')
    if (confirm !== undefined && value !== confirm && value.length >= 6) {
      callback('Password does not match the confirm password')
    }
    callback();
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    const password = form.getFieldValue('Password')
    if (value !=='' && value !== password && value.length >= 6) {
      callback('Password does not match the confirm password');
    }
    callback();
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const Data = {}
        Object.entries(values).forEach(([index,value])=>{
          Data[camelCase(index)]=value
        })
        //console.log(Data)
        axios.post(process.env.REACT_APP_API + '/register', Data)
        .then(res => {
          this.props.authActions.saveAuth(res.data)
          window.location.href = '/verify'
        })
        .catch(error => {
          Modal.error({
            title: 'Login Error',
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
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    console.log(this.props)
    return (
      <div className="font">
        <RegisterForm
          form={this.props.form}
          buttonState={this.state.buttonState}
          onClickLoginButton ={this.onClickLoginButton}
          checkPassword = {this.checkPassword}
          checkConfirm = {this.checkConfirm}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default createForm()(connect(null, mapDispatchToProps)(RegisterPage))
