import React from 'react'
import { List } from 'antd'
import ResetPasswordForm from './presentation/ResetPasswordForm'

class ManagePassword extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      resetDisplay:false
    }
    this.toggleReset = this.toggleReset.bind(this)
  }
  toggleReset(){
    this.setState({resetDisplay:!this.state.resetDisplay})
  }
  render(){
    return(
      <div>
        <List.Item  actions={[<a onClick={this.toggleReset}>{this.state.resetDisplay ? 'Cancel' : 'Change Password'}</a>]}>
          <List.Item.Meta
            title="Password"
            description={<span style={{fontWeight:600, fontSize:'24px', lineHeight:'12px'}}>........</span>}/>
        </List.Item>
        <ResetPasswordForm
          displayForm={this.state.resetDisplay}
          toggleReset={this.toggleReset}/>
      </div>
    )
  }
}

export default ManagePassword
