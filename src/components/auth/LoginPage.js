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
      buttonState: false,
      passwordVisible: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePasswordVisibility = this.handlePasswordVisibility.bind(this)
    document.title=this.props.title
  }
  handlePasswordVisibility(){
    this.setState({passwordVisible:!this.state.passwordVisible})
  }
  handleSubmit(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Auth({email: values.Email, password: values.Password}).login()
        .then( res =>{
          //console.log(res)
          sessionStorage.removeItem('tsv')
          if(res.data.authType === '2SV'){
            let TwoStepVerification = {
              ...res.data,
              email:values.Email
            }
            sessionStorage.setItem("tsv", JSON.stringify(TwoStepVerification))
            window.location.href = '/login/tsv'
          }else{
            this.props.authActions.saveAuth(res.data.token)
            window.location.href = '/'
          }
        })
        .catch( err => {
          setTimeout(() => {
            this.setState({buttonState:false})
          }, 800)
          Modal.warning({
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
      <div className="center-wrapper">
        <div className="center-container">
          <LoginForm
            form={this.props.form}
            buttonState={this.state.buttonState}
            onSubmit={this.handleSubmit}
            passwordVisible={this.state.passwordVisible}
            passwordVisibility={this.handlePasswordVisibility}
          />
        </div>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  title: 'Login - Ecashpay'
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
