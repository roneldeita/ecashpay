import React from 'react'
//components
import RequestPasswordForm from './presentation/RequestPasswordForm'
//ant design
import { Form, Modal } from 'antd'
//services
import { Auth } from '../../services/api'

class RequestPasswordPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onClickSubmitButton(event){
    this.setState({buttonState:true})
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Auth({'email': values.Email}).recoveryRequest()
        .then( res => {
          sessionStorage.removeItem('recovery')
          sessionStorage.setItem("recovery", values.Email)
          window.location.href = '/password/reset'
        })
        .catch( err => {
          setTimeout(() => {
            this.setState({buttonState:false})
          }, 800)
          Modal.error({
            title: 'Request Error',
            content: err.response.data.message,
          })
        })
      }else{
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 800)
      }
    })
    event.preventDefault()
  }
  render(){
    //console.log(this.state)
    return(
      <div>
        <RequestPasswordForm
          form={this.props.form}
          onSubmit={this.handleSubmit}
          buttonState={this.state.buttonState}
          buttonWasClicked={this.onClickSubmitButton}
          />
      </div>
    )
  }
}

export default Form.create()(RequestPasswordPage)
