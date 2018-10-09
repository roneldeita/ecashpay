import React from 'react'
import { List } from 'antd'
import RequestPhoneForm from './presentation/RequestPhoneForm'
import ResetPhoneForm from './presentation/ResetPhoneForm'

class ManagePhone extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      phone: undefined,
      code: undefined,
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
      this.setState({phone:data.phone, code:data.code})
    }
    this.setState({resetDisplay:!this.state.resetDisplay})
  }

  render(){
    //console.log(this.props)
    return(
      <div style={{display:this.props.profile.phone==='' ? 'none' : 'block'}}>
        <List.Item actions={[<span style={{color:'#1890ff'}} onClick={this.toggleAll}>
          { !(this.state.requestDisplay || this.state.resetDisplay) && 'Change Phone Number'}</span>]}>
          <List.Item.Meta
            title="Phone Number"
            description={`+${this.props.profile.phone}`}/>
        </List.Item>
        <RequestPhoneForm
          auth={this.props.auth}
          displayForm={this.state.requestDisplay}
          toggleRequest={this.toggleRequest}
          showReset={this.toggleReset}
          cancel={this.toggleAll}/>
        <ResetPhoneForm
          auth={this.props.auth}
          displayForm={this.state.resetDisplay}
          toggleReset={this.toggleReset}
          profileAction={this.props.profileAction}
          cancel={this.toggleAll}
          phone={this.state.phone}
          code={this.state.code}/>
      </div>
    )
  }
}

export default ManagePhone
