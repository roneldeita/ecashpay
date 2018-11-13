import React from 'react'
import { Divider, Modal } from 'antd'
import { Phone } from '../../../../services/api'
import ReactCodeInput from 'react-code-input'

const CodeInputStyle ={
  fontFamily: 'monospace',
  borderRadius: '6px',
  border: '1px solid lightgrey',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px',
  margin: '4px',
  paddingLeft: '12px',
  width: '44px',
  height: '50px',
  fontSize: '32px',
  boxSizing: 'border-box',
  color: 'rgba(0,0,0,.65)',
  backgroundColor: 'white'
}


class StepOne extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      resendState:false
    }
    this.handleResend = this.handleResend.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    console.log(this.props)
    const Verification = {
      'code': event,
      'areaCode': this.props.code,
      'phone': this.props.phone
    }
    if(event.length === 4){
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
    }
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
    return (
      <div style={{textAlign:'center'}}>
        <p style={{fontSize:'18px', marginBottom:'20px'}}>Enter verification code to verify your number</p>
        <ReactCodeInput type='number' fields={4} onChange={this.handleChange} inputStyle={CodeInputStyle} />
        <Divider/>
        <p>Didn't receive the code?
          {this.state.resendState ?
            <span style={{color:'#999999'}}> Resending...</span> :
            <span style={{color:'#1890ff', cursor:'pointer'}} onClick={this.handleResend}> Resend</span>}
        </p>
      </div>
    )
  }
}
export default StepOne