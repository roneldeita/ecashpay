import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
//components
import LoginForm from './presentation/LoginForm'
//services
import { Login } from '../../services/auth'
//ant design
import { Form, Modal } from 'antd'

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
        Login({email: values.Email, password: values.Password})
        .then( res =>{
          this.props.authActions.saveAuth(res.data)
          switch(res.data.status){
            case 0:
              window.location.href = '/verify'
              break;
            case 1:
              window.location.href = '/profile'
              break;
            case 2:
              window.location.href = '/client/dashboard'
              break;
            default:
              window.location.href = '/login'
          }
        })
        .catch( err => {
          setTimeout(() => {
            this.setState({buttonState:false})
          }, 800)
          console.log(err)
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
    //console.log(this.props)
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
