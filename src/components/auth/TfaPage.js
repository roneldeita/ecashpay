import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
import {Form, Modal} from 'antd'
//components
import TfaForm from './presentation/TfaForm'
//services
import { Auth } from '../../services/api'

class TfaPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      buttonState:false,
      resendState:false,
      tfa:{}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleResend = this.handleResend.bind(this)
  }
  componentDidMount(){
    const TfaInfo = sessionStorage.getItem('tfa')
    this.setState({tfa:JSON.parse(TfaInfo)})
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.Code.length === 4){
          this.setState({buttonState:true})
          Auth({code:values.Code}, {'x-access-token':this.state.tfa.token}).verifyTFA()
          .then(res=>{
            this.props.authActions.saveAuth(res.data.token)
            window.location.href = '/'
          }).catch(err=>{
            setTimeout(() => {
              this.setState({buttonState:false})
            }, 800)
            Modal.error({
              title: 'Login Error',
              content: err.response.data.message,
            })
          })
        }
      }else{
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 800)
      }
    })
    event.preventDefault()
  }
  handleResend(event){
    this.setState({resendState:true})
    Auth(null, {'x-access-token': this.state.tfa.token}).resendTFA()
    .then(res => {
      Modal.success({
        title: 'Resend Verification Success',
        content: 'Verification email successfully sent',
      })
      setTimeout(() => {
        this.setState({resendState:false})
      }, 800)
    })
    .catch(error => {
      Modal.error({
        title: 'Resend Verification Error',
        content: error.response.data.message,
      })
      setTimeout(() => {
        this.setState({resendState:false})
      }, 800)
    })
    event.preventDefault()
  }
  render(){
    return(
      <div>
        <TfaForm
          buttonState={this.state.buttonState}
          submit={this.handleSubmit}
          form={this.props.form}
          tfa={this.state.tfa}
          onResend={this.handleResend}
          resendState={this.state.resendState}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default Form.create()(connect(null, mapDispatchToProps)(TfaPage))
