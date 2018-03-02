import React from 'react';
import LoginForm from './presentation/LoginForm'
import { createForm } from 'rc-form';

class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
    this.onClickLoginButton = this.onClickLoginButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  onClickLoginButton(event){
    this.setState({buttonState:true})
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }else{
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 800)
      }
    });
    event.preventDefault()
  }
  render() {
    return (
      <div className="font">
        <LoginForm
          form={this.props.form}
          buttonState={this.state.buttonState}
          onClickLoginButton ={this.onClickLoginButton}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default createForm()(LoginPage);
