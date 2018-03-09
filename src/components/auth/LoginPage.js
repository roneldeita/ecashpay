import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
import axios from 'axios'
import LoginForm from './presentation/LoginForm'
import { createForm } from 'rc-form'

import { Modal } from 'antd'

class LoginPage extends React.Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      buttonState: false
    }
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onClickLoginButton(event){
    this.setState({buttonState:true})
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post(process.env.REACT_APP_API + '/login', {email: values.Email, password: values.Password})
        .then(res => {
          this.props.authActions.saveAuth(res.data)
          switch(res.data.status){
            case 0:
              window.location.href = '/verify'
              break;
            case 1:
              window.location.href = '/profile'
              break;
            default:
              window.location.href = '/'
          }
        })
        .catch(error => {
          setTimeout(() => {
            this.setState({buttonState:false})
          }, 800)
          Modal.error({
            title: 'Resend Verification Error',
            content: error.response.data.message,
          })
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
    // console.log(this)
    return (
      <div>
        <LoginForm
          form={this.props.form}
          buttonState={this.state.buttonState}
          onClickLoginButton ={this.onClickLoginButton}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}


function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
  }
}
function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default createForm()(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
