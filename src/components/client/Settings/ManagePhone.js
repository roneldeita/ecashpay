import React from 'react'
import { List } from 'antd'
import RequestPhoneForm from './presentation/RequestPhoneForm'
import ResetPhoneForm from './presentation/ResetPhoneForm'

class ManagePhone extends React.Component{
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
          {this.state.requestDisplay || this.state.resetDisplay ? 'Cancel' : 'Change Phone Number'}</a>]}>
          <List.Item.Meta
            title="Phone Number"/>
        </List.Item>
        <RequestPhoneForm
          displayForm={this.state.requestDisplay}
          toggleRequest={this.toggleRequest}
          showReset={this.toggleReset}
          cancel={this.toggleAll}/>
        <ResetPhoneForm
          displayForm={this.state.resetDisplay}
          cancel={this.toggleAll}/>
      </div>
    )
  }
}

export default ManagePhone
