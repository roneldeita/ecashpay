import React from 'react'
import {Card, Form, Input, Button, Modal} from 'antd'
import { Tfa } from '../../../../services/api'

class VerifyTfa extends React.PureComponent{
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
          'code': values['Tfa Code']
        }
        Tfa(Verification, {'x-access-token':this.props.auth.token}).Enable()
        .then(res=>{
          Modal.success({
            title: 'Success',
            content: 'Your TFA is now enabled',
          })
          this.props.profileAction.loadProfile()
          this.handleCancel()
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
    //console.log(this.props)
    const { getFieldDecorator } = this.props.form
    return(
      <div style={{display:this.props.displayForm?'block':'none', margin:'-5px 0px 25px 0px'}}>
        <Card title="Enable Two-Factor Authentication.">
          <p>Input the verification code from your Google Authenticator</p>
          <Form onSubmit={this.handleSubmit} autoComplete="off">
            <Form.Item wrapperCol={{span:12}}>
              {getFieldDecorator('Tfa Code', {
                rules: [
                  { required: true },
                  { max: 6, message: 'Verification Code cannot be longer than 4 characters. ' },
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
                Submit
              </Button>
              <Button onClick={this.handleCancel}>Cancel</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(VerifyTfa)
