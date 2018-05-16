import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../../actions/authAction'
//antd
import { Form, Modal } from 'antd'
//components
import LoginForm from './presentation/LoginForm'
//services
import { Auth } from '../../../services/api'

class LoginPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonState:false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Auth({'email':values.Email, 'password': values.Password}).AdminLogin()
        .then(res => {
          this.props.authActions.saveAuth(res.data)
          window.location.href = '/admin'
        })
        .catch(err => {
          setTimeout(() => this.setState({buttonState:false}), 800)
          Modal.error({
            title: 'Login Error',
            content: err.response.data.message,
          })
        })
      }else{
        setTimeout(() => this.setState({buttonState:false}), 800)
      }
    })
    event.preventDefault()
  }
  render(){
    return(
      <LoginForm
        form={this.props.form}
        submit={this.handleSubmit}
        buttonState={this.state.buttonState}
      />
    )
  }
}
function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}
export default Form.create()(connect(null, mapDispatchToProps)(LoginPage))
