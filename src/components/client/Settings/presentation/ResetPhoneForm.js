import React from 'react'
import {Card, Form, Input, Button, Modal} from 'antd'
import { Phone } from '../../../../services/api'

class ResetEmailForm extends React.Component{
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
          'code': values['Phone Verification Code'],
          'areaCode': this.props.code,
          'phone': this.props.phone
        }
        Phone(Verification, {'x-access-token':this.props.auth.token}).Verify()
        .then(res=>{
          //message.success('Phone number updated successfully', 25)639169187846
          this.props.toggleReset()
          this.props.profileAction.loadProfile()
          Modal.success({
            title: 'Phone verification success',
            content: 'Phone number updated successfully',
          })
          setTimeout(()=>this.setState({ButtonStatus:false}), 500)
        }).catch(err=>{
          Modal.error({
            title: 'Phone verification error',
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
    const CodeError = getFieldError('Phone Verification Code')
    return(
      <div style={{display:this.props.displayForm?'block':'none', margin:'15px 0px 25px 0px'}}>
        <Card title="Verify Phone Number">
          <p>A verification code has been sent to your new phone number <span style={{fontWeight:500}}>+{this.props.code}{this.props.phone}</span>, Please input verification code to verify.</p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              wrapperCol={{span:12}}
              hasFeedback={isFieldTouched('Phone Verification Code')}
              validateStatus={CodeError ? 'error' : ''}
              help={CodeError || ''}>
              {getFieldDecorator('Phone Verification Code', {
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
                Verify Phone Number
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
