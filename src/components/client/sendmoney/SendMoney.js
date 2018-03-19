import React from 'react'
import Navigation from '../common/Navigation'

class SendMoney extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <Navigation/>
        Send Money
      </div>
    )
  }
}

export default SendMoney
