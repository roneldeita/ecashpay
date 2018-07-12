import React from 'react'
import Navigation from '../common/Navigation'

class BuyLoadpage extends React.PureComponent{
  render(){
    //console.log(this.props)
    return(
      <div>
        <Navigation location={this.props.location}/>
        Buy Load page
      </div>
    )
  }
}

export default BuyLoadpage
