import React from 'react'
import {Card, Form, Input, Button, Modal} from 'antd'
import { Password } from '../../../../services/api'

class ResetPasswordForm extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      password:'',
      confirm:'',
      ButtonStatus:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeConfirm = this.handleChangeConfirm.bind(this)
    this.handleMatchPassword = this.handleMatchPassword.bind(this)
  }
  handleSubmit(event){
    this.setState({ButtonStatus:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const Params = {
          'password': values['Password'],
          'confirmPassword': values['Confirm Password'],
          'code': values['Code']
        }
        Password(Params, {'x-access-token':this.props.auth.token}).Reset()
        .then(res=>{
          console.log(res.data)
          this.props.toggleReset()
          Modal.success({
            title: 'Change password success',
            content: 'Password updated successfully',
          })
          setTimeout(()=>this.setState({ButtonStatus:false}), 500)
        }).catch(err=>{
          Modal.error({
            title: 'Change password error',
            content: err.response.data.message
          })
          setTimeout(()=>this.setState({ButtonStatus:false}), 500)
        })
      }else{
        setTimeout(()=>this.setState({ButtonStatus:false}), 500)
      }
    })
    event.preventDefault()
  }
  handleChangePassword(event){
    this.setState({password:event.target.value})
    this.props.form.resetFields('Confirm Password')
  }
  handleChangeConfirm(event){
    this.setState({confirm:event.target.value})
  }
  handleMatchPassword = (rule, value, callback) => {
    if(this.state.password !== this.props.form.getFieldValue('Confirm Password')){
      if(this.state.password.length >= 8){
        callback('Password does not match the confirm password. ')
      }
    }
    callback()
  }
  handleCancel(){
    this.props.form.resetFields()
    this.props.cancel()
  }
  render(){
  //  console.log(this.props)
    const { getFieldDecorator } = this.props.form
    return(
      <div style={{display:this.props.displayForm?'block':'none', margin:'-1px 0px 25px 0px'}}>
        <Card title="Reset your password">
          <p>Please enter the 4-digit code you just received from your email and your new password.</p>
          <Form onSubmit={this.handleSubmit} autoComplete="off">
            <Form.Item wrapperCol={{span:12}}>
              {getFieldDecorator('Code', {
                rules: [
                  { required: true },
                  { max: 4 },
                  { min: 4 },
                  { pattern: /^[0-9]+$/, message: 'Code should only contain digits.' }
                ],
              })(
                <Input placeholder="Verification code"/>
              )}
            </Form.Item>
            <Form.Item wrapperCol={{span:12}} >
              {getFieldDecorator('Password', {
                rules: [
                  { required: true },
                  { min: 8 , message:"Password must be at least 8 characters. "},
                  { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/, message: "The password must contain atleast 1 lower and 1 uppercase letter, 1 number and 1 special character. " },
                ],
              })(
                <Input placeholder="New Password" type="password" onChange={this.handleChangePassword}/>
              )}
            </Form.Item>
            <Form.Item wrapperCol={{span:12}}>
              {getFieldDecorator('Confirm Password', {
                rules: [
                  { required: true },
                  { validator:this.handleMatchPassword }
                ],
              })(
                <Input placeholder="Confirm New Password" type="password" onChange={this.handleChangeConfirm}/>
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.ButtonStatus}
                style={{marginRight:8}}>
                Submit
              </Button>
              <Button onClick={this.props.toggleReset}>Cancel</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(ResetPasswordForm)
