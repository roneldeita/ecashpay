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
//moment
import moment from 'moment'

class RegisterPage extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      datePlaceholder: 'Birthdate'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkConfirm = this.checkConfirm.bind(this)
    this.handlePlaceholder = this.handlePlaceholder.bind(this)
    document.title="Register - Ecashpay"
  }
  checkName = (rule, value, callback) => {
    const lettersOnly = new RegExp(/^[a-zA-Z\s-'ñÑ_]+$/)

    if(value !== undefined && value.length > 0){
      if(!lettersOnly.test(value)){
        callback(rule.field+' should only contain letters')
      }else{
        if(value.length < 2 || value.length > 50 ){
          callback(rule.field+' length should be 2-50 characters')
        }else{
          callback()
        }
      }
    }else{
      callback()
    }
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
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const Data = {}
        Object.entries(values).forEach(([index,value])=>{
          if(index === 'Birthdate'){
            value = moment(value).format('YYYY-MM-DD')
          }
          Data[camelCase(index)]=value
        })
        Auth(Data).register()
        .then( res => {
          this.props.authActions.saveAuth(res.data.token)
          //this.props.history.push('/client/verify')
          window.location.href = '/'
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
  handlePlaceholder(e){
    e ? this.setState({datePlaceholder: 'YYYY-MM-DD'}) : this.setState({datePlaceholder: 'Birthdate'})
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
            placeholder={this.state.datePlaceholder}
            changePlaceholder={this.handlePlaceholder}
            buttonState={this.state.buttonState}
            checkPassword = {this.checkPassword}
            checkConfirm = {this.checkConfirm}
            checkName = {this.checkName}
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
