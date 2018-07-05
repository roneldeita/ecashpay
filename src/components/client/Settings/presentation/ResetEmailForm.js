import React from 'react'
import {Card, Form, Input, Button, Modal} from 'antd'
import { Email } from '../../../../services/api'

class ResetEmailForm extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      ButtonStatus:false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleSubmit(event){
    this.setState({ButtonStatus:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const Verification = {
          'code': values['Verification Code'],
          'email':this.props.email
        }
        Email(Verification, {'x-access-token':this.props.auth.token}).Verify()
        .then(res=>{
          Modal.success({
            title: 'Change email success',
            content: 'Email address updated successfully',
          })
          this.props.toggleReset()
          this.props.profileAction.loadProfile()
          setTimeout(()=>this.setState({ButtonStatus:false}), 500)
        }).catch(err=>{
          Modal.error({
            title: 'Email verification error',
            content: err.response.data.message,
          })
          setTimeout(()=>this.setState({ButtonStatus:false}), 500)
        })
      }else{
        setTimeout(()=>this.setState({ButtonStatus:false}), 500)
      }
    })
    event.preventDefault()
  }
  handleCancel(){
    this.props.form.resetFields()
    this.props.cancel()
  }
  render(){
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form
    const EmailError = getFieldError('Verification Code')
    return(
      <div style={{display:this.props.displayForm?'block':'none', margin:'15px 0px 25px 0px'}}>
        <Card title="Verify Email Address">
          <p>A verification code has been sent to <span style={{fontWeight:500}}>{this.props.email}</span>, Please input verification code to verify.</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              wrapperCol={{span:12}}
              hasFeedback={isFieldTouched('Verification Code')}
              validateStatus={EmailError ? 'error' : ''}
              help={EmailError || ''}>
              {getFieldDecorator('Verification Code', {
                rules: [
                  { required: true },
                  { max: 4, message: 'Verification Code cannot be longer than 4 characters. ' },
                  { pattern: /^[0-9]+$/, message: 'Code should only contain digits. ' }
                ],
              })(
                <Input/>
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.ButtonStatus}
                style={{marginRight:8}}>
                Verify Email Address
              </Button>
              <Button onClick={this.handleCancel}>Cancel</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(ResetEmailForm)
