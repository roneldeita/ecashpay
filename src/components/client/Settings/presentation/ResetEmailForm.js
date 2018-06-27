import React from 'react'
import {Card, Form, Input, Button} from 'antd'

class ResetEmailForm extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
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
          <p>A verification code has been sent, Please input verification code to verify.</p>
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
