import React from 'react'
import ResetEmailForm from './presentation/ResetEmailForm'
import {Form} from 'antd'

class ResetEmail extends React.Component{
  render(){
    return(
      <ResetEmailForm form={this.props.form}/>
    )
  }
}

export default Form.create()(ResetEmail)
