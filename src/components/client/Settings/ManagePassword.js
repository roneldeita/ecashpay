import React from 'react'
import { List, Icon } from 'antd'
import ResetPasswordForm from './presentation/ResetPasswordForm'
import { Password } from '../../../services/api'

class ManagePassword extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      resetDisplay:false,
      requestStatus:false
    }
    this.toggleReset = this.toggleReset.bind(this)
  }
  toggleReset(){
    this.setState({requestStatus:true})
    if(this.state.resetDisplay === false){
      Password(null,{'x-access-token':this.props.auth.token}).Request()
      .then(res=>{
        this.setState({resetDisplay:!this.state.resetDisplay})
        this.setState({requestStatus:false})
      }).catch(err=>{
        this.setState({requestStatus:false})
        this.setState({resetDisplay:this.state.resetDisplay})
      })
    }else {
      this.setState({requestStatus:false})
      this.setState({resetDisplay:!this.state.resetDisplay})
    }
  }
  render(){
    return(
      <div>
        <List.Item  actions={[<span style={{color:'#1890ff'}} onClick={this.toggleReset}>{(!this.state.resetDisplay && !this.state.requestStatus ) && 'Change Password '}{this.state.requestStatus && <Icon type="loading"/>}</span>]}>
          <List.Item.Meta
            title="Password"
            description={<span style={{fontWeight:600, fontSize:'24px', lineHeight:'12px'}}>........</span>}/>
        </List.Item>
        <ResetPasswordForm
          auth={this.props.auth}
          displayForm={this.state.resetDisplay}
          toggleReset={this.toggleReset}/>
        <style>{`.ant-list-item{border:none}`}</style>
      </div>
    )
  }
}

export default ManagePassword
