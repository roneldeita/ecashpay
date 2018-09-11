import React from 'react';
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../../actions/authAction'
//lodash
import { camelCase } from 'lodash'
//services
import { Auth } from '../../../services/api'
//component
import RegisterForm from './presentation/RegisterForm'
//ant design
import { Form, Modal } from 'antd'

class RegisterPage extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkConfirm = this.checkConfirm.bind(this)
    document.title="Register - Ecashpay"
  }
  onClickLoginButton(event){
    this.setState({buttonState:true})
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    const confirm = form.getFieldValue('Confirm Password')
    const containSmallLetter = new RegExp('(?=.*[a-z])')
    const containUpperLetter = new RegExp('(?=.*[A-Z])')
    const containNumber = new RegExp('(?=.*[0-9])')
    const containSymbol = new RegExp('(?=.*[#$@!%&*?])')
    if(value !== undefined && value.length > 0){
      if(value.length < 8){
        callback('Password must be at least 8 characters')
      }else{
        if(!containSmallLetter.test(value)){
          callback('The password must contain atleast 1 lower case')
        }else{
          if(!containUpperLetter.test(value)){
            callback('The password must contain atleast 1 upper case')
          }else{
            if(!containNumber.test(value)){
              callback('The password must contain atleast 1 number')
            }else{
              if(!containSymbol.test(value)){
                callback('The password must contain atleast 1 special character')
              }
            }
          }
        }
      }
    }
    if (confirm !== undefined && confirm !== '' && value !== confirm && value.length >= 6) {
      form.setFieldsValue({'Confirm Password':''})
    }
    callback();
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    const password = form.getFieldValue('Password')
    if(value !== undefined && value.length > 0){
      if (value !== password) {
        callback('Password does not match the confirm password')
      }
    }
    callback();
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const Data = {}
        Object.entries(values).forEach(([index,value])=>{
          if(index === 'Business Name'){
            index = 'Name'
          }
          Data[camelCase(index)]=value
        })
        Auth(Data).MerchantRegister()
        .then( res => {
          this.props.authActions.saveAuth(res.data.token)
          window.location.href = '/merchant/verify'
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
    return (
      <div className="center-wrapper">
        <div className="center-container">
          <RegisterForm
            form={this.props.form}
            buttonState={this.state.buttonState}
            onClickLoginButton ={this.onClickLoginButton}
            checkPassword = {this.checkPassword}
            checkConfirm = {this.checkConfirm}
            onSubmit={this.handleSubmit}/>
        </div>
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
