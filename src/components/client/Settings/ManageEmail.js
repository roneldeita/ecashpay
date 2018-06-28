import React from 'react'
import { List } from 'antd'
import RequestEmailForm from './presentation/RequestEmailForm'
import ResetEmailForm from './presentation/ResetEmailForm'

class ManageEmail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email:undefined,
      requestDisplay:false,
      resetDisplay:false
    }
    this.toggleRequest = this.toggleRequest.bind(this)
    this.toggleReset = this.toggleReset.bind(this)
    this.toggleAll = this.toggleAll.bind(this)
  }
  toggleAll(){
    if(this.state.requestDisplay === true){
      this.toggleRequest()
    }else if (this.state.resetDisplay === true) {
      this.toggleReset()
    }else{
      this.toggleRequest()
    }
  }
  toggleRequest(){
    this.setState({requestDisplay:!this.state.requestDisplay})
  }
  toggleReset(data){
    if(data!== undefined){
      this.setState({email:data.email})
    }
    this.setState({resetDisplay:!this.state.resetDisplay})
  }
  render(){
    return(
      <div>
        <List.Item actions={[<a onClick={this.toggleAll}>
          {!(this.state.requestDisplay || this.state.resetDisplay) && 'Change Email Address'}</a>]}>
          <List.Item.Meta
            title="Email"
            description={this.props.profile.email}/>
        </List.Item>
        <RequestEmailForm
          auth={this.props.auth}
          displayForm={this.state.requestDisplay}
          toggleRequest={this.toggleRequest}
          showReset={this.toggleReset}
          cancel={this.toggleAll}/>
        <ResetEmailForm
          auth={this.props.auth}
          profileAction={this.props.profileAction}
          email={this.state.email}
          displayForm={this.state.resetDisplay}
          toggleReset={this.toggleReset}
          cancel={this.toggleAll}/>
      </div>
    )
  }
}

export default ManageEmail
