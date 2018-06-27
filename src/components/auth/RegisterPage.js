import React from 'react';
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
//lodash
import { camelCase } from 'lodash'
//services
import { Auth } from '../../services/api'
//component
import RegisterForm from './presentation/RegisterForm'
//ant design
import { Form, Modal } from 'antd'

class RegisterPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkConfirm = this.checkConfirm.bind(this)
    //this.checkPassword = this.checkPassword.bind(this)
  }
  onClickLoginButton(event){
    this.setState({buttonState:true})
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    const confirm = form.getFieldValue('Confirm Password')
    if (confirm !== undefined && confirm !== '' && value !== confirm && value.length >= 6) {
      form.setFieldsValue({'Confirm Password':''})
    }
    callback();
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    const password = form.getFieldValue('Password')
    if (value !=='' && value !== password) {
      callback('Password does not match the confirm password')
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
        Auth(Data).register()
        .then( res => {
          this.props.authActions.saveAuth(res.data)
          window.location.href = '/verify'
        })
        .catch( err => {
          Modal.error({
            title: 'Registration Error',
            content: err.response.data.message,
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
  render(){
    console.log(this.props.form)
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
    )
  }
}


function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default Form.create()(connect(null, mapDispatchToProps)(RegisterPage))
