import React from 'react'
import {Card} from 'antd'

const Title = {
  fontSize:'18px',
  fontWeight:600,
  marginBottom:'20px'
}
const Balance = {
  fontSize:'30px',
  color: 'rgb(29, 161, 242)'
}
class Wallet extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loader:true
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({loader:false})
    }, 1500)
  }
  render(){
    return(
      <Card hoverable loading={this.state.loader}>
        <p style={Title}>Ecash Online Wallet</p>
        <p style={{marginBottom:'0px'}}>Available</p>
        <p style={Balance}>
          <span style={{fontWeight:600}}>&#8369;</span>
          <span style={{fontWeight:700}}> 00.00 </span>
          <span style={{fontWeight:600}}>PHP*</span>
        </p>
      </Card>
    )
  }
}

export default Wallet
