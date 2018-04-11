import React from 'react'
import Navigation from '../common/Navigation'

class SendMoney extends React.Component{
  render(){
    //console.log(this.props)
    return(
      <div>
        <Navigation location={this.props.location}/>
        Send Money
      </div>
    )
  }
}

export default SendMoney
