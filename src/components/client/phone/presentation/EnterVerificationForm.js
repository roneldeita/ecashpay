import React from 'react'
import { Form, Input, Button, Modal } from 'antd'
import { Phone } from '../../../../services/api'

class StepOne extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      resendState:false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleResend = this.handleResend.bind(this)
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if(!err){
        if(values['Verification Code'].length === 4){
          this.setState({buttonState:true})
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
            setTimeout(()=>{
              this.setState({buttonState:false})
            }, 800)
          })
        }
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }
    })
    event.preventDefault()
  }
  handleResend(event){
    this.setState({resendState:true})
    Phone({areaCode:this.props.code, phone:this.props.phone}, {'x-access-token':this.props.auth.token}).Request()
    .then(res => {
      Modal.success({
        title: 'Resending verification success',
        content: res.data.message,
      })
      this.setState({resendState:false})
    }).catch(err => {
      Modal.error({
        title: 'Phone verification error',
        content: err.response.data.message,
      })
      setTimeout(()=>{
        this.setState({resendState:false})
      }, 800)
    })
  }
  render(){
    //console.log(this.props)
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form
    const VerificationError = getFieldError('Verification Code')
    return (
      <Form onSubmit={this.handleSubmit} autocomplete="off">
        <p>A verification code was sent to +{this.props.code}<b>{this.props.phone}</b>.</p>
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
            <Input size="large" placeholder="Enter the 4-digit code" onKeyUp={this.handleSubmit}/>
          )}
        </Form.Item>
        <p>Didn't receive the code?
          {this.state.resendState ?
            <span style={{color:'#999999'}}> Resending...</span> :
            <a onClick={this.handleResend}> Resend</a>}
        </p>
        <Form.Item style={{textAlign:'center'}}>
          <Button size="large" style={{marginRight:'10px'}} onClick={()=>{this.props.changeStep({step:0})}}>Change Number</Button>
          <Button type="primary" htmlType="submit" size="large" loading={this.state.buttonState}>{this.state.buttonState ? 'Verifying...' : 'Verify Phone'}</Button>
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create()(StepOne)
