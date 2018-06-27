import React from 'react'
import {Card, Form, Input, Button} from 'antd'

class ResetPasswordForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      password:'',
      confirm:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleChangeConfirm = this.handleChangeConfirm.bind(this)
    this.handleMatchPassword = this.handleMatchPassword.bind(this)
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.toggleRequest()
        this.props.showReset()
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
    console.log(this.props)
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form
    const CodeError =  getFieldError('Code')
    const PasswordError =  getFieldError('Password');
    const ConfirmError =  getFieldError('Confirm Password');
    return(
      <div style={{display:this.props.displayForm?'block':'none', margin:'-1px 0px 25px 0px'}}>
        <Card title="Link New Email">
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              wrapperCol={{span:12}}
              validateStatus={CodeError ? 'error' : ''}
              help={CodeError || ''}>
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
            <Form.Item
              wrapperCol={{span:12}}
              hasFeedback={isFieldTouched('Password')}
              validateStatus={PasswordError ? 'error' : 'success'}
              help={PasswordError || ''}>
              {getFieldDecorator('Password', {
                rules: [
                  { required: true },
                  { min:8 }
                ],
              })(
                <Input placeholder="New Password" type="password" onChange={this.handleChangePassword}/>
              )}
            </Form.Item>
            <Form.Item
              wrapperCol={{span:12}}
              hasFeedback={isFieldTouched('Confirm Password')}
              validateStatus={ConfirmError ? 'error' : 'success'}
              help={ConfirmError || ''}>
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
                style={{marginRight:8}}>
                Send Code
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
