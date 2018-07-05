import React from 'react'
import {Card, Form, Input, Button, Modal} from 'antd'
import { Email } from '../../../../services/api'

class RequestEmailForm extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      email: undefined,
      ButtonStatus:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleSubmit(event){
    this.setState({ButtonStatus:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Email({email:values['New Email']},{'x-access-token':this.props.auth.token}).Request()
        .then(res=>{
          this.props.toggleRequest()
          this.props.showReset({email:values['New Email']})
          setTimeout(()=>this.setState({ButtonStatus:false}), 500)
        }).catch(err=>{
          Modal.error({
            title: 'Change email error',
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
              hasFeedback={isFieldTouched('New Email')}
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
                loading={this.state.ButtonStatus}
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
