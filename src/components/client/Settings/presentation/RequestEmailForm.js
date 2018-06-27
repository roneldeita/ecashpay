import React from 'react'
import {Card, Form, Input, Button} from 'antd'

class RequestEmailForm extends React.Component{
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
    const EmailError = getFieldError('New Email')
    return(
      <div style={{display:this.props.displayForm?'block':'none', margin:'-1px 0px 25px 0px'}}>
        <Card title="Link New Email">
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              wrapperCol={{span:12}}
              hasFeedback={isFieldTouched('Email')}
              validateStatus={EmailError ? 'error' : ''}
              help={EmailError || ''}>
              {getFieldDecorator('New Email', {
                rules: [
                  { required: true },
                  { type: 'email' },
                ],
              })(
                <Input placeholder="user@gmail.com" style={{minWidth:'230px'}}/>
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{marginRight:8}}>
                Send Code
              </Button>
              <Button onClick={this.handleCancel}>Cancel</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(RequestEmailForm)
