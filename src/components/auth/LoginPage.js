import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
//components
import LoginForm from './presentation/LoginForm'
//services
import { Auth } from '../../services/api'
//ant design
import { Form, Modal } from 'antd'

class LoginPage extends React.PureComponent {
  constructor(props, context){
    super(props, context)
    this.state = {
      buttonState: false
    }
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    document.title="Login - Ecashpay"
  }
  onClickLoginButton(event){
    this.setState({buttonState:true})
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Auth({email: values.Email, password: values.Password}).login()
        .then( res =>{
          sessionStorage.removeItem('tfa')
          if(res.data.tfa){
            let TfaInfo = {
              ...res.data,
              email:values.Email
            }
            sessionStorage.setItem("tfa", JSON.stringify(TfaInfo))
            window.location.href = '/login/tfa'
          }else{
            this.props.authActions.saveAuth(res.data.token)
            window.location.href = '/'
          }
        })
        .catch( err => {
          setTimeout(() => {
            this.setState({buttonState:false})
          }, 800)
          Modal.error({
            title: 'Login Error',
            content: err.response.data.message,
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

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
