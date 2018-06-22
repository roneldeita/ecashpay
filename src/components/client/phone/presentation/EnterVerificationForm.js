import React from 'react'
import { Form, Input, Button, Modal } from 'antd'
import { Phone } from '../../../../services/api'

class StepOne extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if(!err){
        const Verification = {
          'code': values['Verification Code'],
          'areaCode': this.props.code,
          'phone': this.props.phone
        }
        Phone(Verification, {'x-access-token':this.props.auth.token}).Verify()
        .then(res=>{
          this.props.profileAction.loadProfile()
          this.props.changeStep({step:2})
        }).catch(err=>{
          Modal.error({
            title: 'Phone verification error',
            content: err.response.data.message,
          })
        })
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }
    })
    event.preventDefault()
  }
  render(){
    //console.log(this.props)
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form
    const VerificationError = getFieldError('Verification Code')
    return (
      <Form onSubmit={this.handleSubmit}>
        <p>Verification code has been sent to +{this.props.code} <b>{this.props.phone}</b> via sms. It may takes several seconds to arrive.</p>
        <Form.Item
          hasFeedback={isFieldTouched('Verification Code')}
          validateStatus={VerificationError ? 'error' : ''}
          help={VerificationError || ''}>
          {getFieldDecorator('Verification Code', {
            rules: [
              { required: true },
              { min: 4 },
              { max: 4 }
            ],
          })(
            <Input size="large" placeholder="Verification Code"/>
          )}
        </Form.Item>
        <Form.Item style={{textAlign:'center'}}>
          <Button size="large" style={{marginRight:'10px'}} onClick={()=>{this.props.changeStep({step:0})}}>Cancel</Button>
          <Button type="primary" htmlType="submit" size="large" loading={this.state.buttonState}>{this.state.buttonState ? 'Verifying...' : 'Verify Phone'}</Button>
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create()(StepOne)
