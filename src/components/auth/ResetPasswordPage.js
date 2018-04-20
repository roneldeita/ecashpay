import React from 'react'
//components
import ResetPasswordForm from './presentation/ResetPasswordForm'
//ant design
import { Form, Modal } from 'antd'
//services
import { Auth } from '../../services/api'
//lodash
import { camelCase } from 'lodash'

class ResetPasswordPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkConfirm = this.checkConfirm.bind(this)
    this.checkPassword = this.checkPassword.bind(this)
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    const confirm = form.getFieldValue('Confirm Password')
    if (confirm !== undefined && confirm !== '' && value !== confirm && value.length >= 6) {
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
  onClickSubmitButton(event){
    console.log(event)
    this.setState({buttonState:true})
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const Data = {}
        Object.entries(values).forEach(([index,value])=>{
          Data[camelCase(index)]=value
        })
        Data.email = sessionStorage.getItem("recovery")
        Auth(Data).recoveryReset()
        .then( res => {
          sessionStorage.removeItem('recovery');
          window.location.href = '/login'
        })
        .catch( err => {
          setTimeout(() => {
            this.setState({buttonState:false})
          }, 800)
          Modal.error({
            title: 'Request Error',
            content: err.response.data.message,
          })
        })
      }else{
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 800)
      }
    })
    event.preventDefault()
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <ResetPasswordForm
          form={this.props.form}
          onSubmit={this.handleSubmit}
          buttonState={this.state.buttonState}
          checkPassword = {this.checkPassword}
          checkConfirm = {this.checkConfirm}
          buttonWasClicked={this.onClickSubmitButton}
          />
      </div>
    )
  }
}

export default Form.create()(ResetPasswordPage)
