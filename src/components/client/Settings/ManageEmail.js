import React from 'react'
import { List } from 'antd'
import RequestEmailForm from './presentation/RequestEmailForm'
import ResetEmailForm from './presentation/ResetEmailForm'

class ManageEmail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
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
  toggleReset(){
    this.setState({resetDisplay:!this.state.resetDisplay})
  }
  render(){
    return(
      <div>
        <List.Item actions={[<a onClick={this.toggleAll}>
          {this.state.requestDisplay || this.state.resetDisplay ? 'Cancel' : 'Change Email Address'}</a>]}>
          <List.Item.Meta
            title="Email"/>
        </List.Item>
        <RequestEmailForm
          displayForm={this.state.requestDisplay}
          toggleRequest={this.toggleRequest}
          showReset={this.toggleReset}
          cancel={this.toggleAll}/>
        <ResetEmailForm
          displayForm={this.state.resetDisplay}
          cancel={this.toggleAll}/>
      </div>
    )
  }
}

export default ManageEmail
