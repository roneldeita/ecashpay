import React from 'react'
import Navigation from '../common/Navigation'

class AddFunds extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <Navigation/>
        Add Funds
      </div>
    )
  }
}

export default AddFunds
