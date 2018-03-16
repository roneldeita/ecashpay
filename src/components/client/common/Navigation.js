import React from 'react'
import { Link } from 'react-router-dom'
import {Icon, Divider} from 'antd'

const Container = {
  textAlign:'center',
  minHeight:'100px'
}
const Tab ={
  display:'inline-block'
}

class Navigation extends React.Component{
  render(){
    return(
      <div className="border" style={Container}>
        <Link to="/client/dashboard" style={Tab}>
          <Icon type="wallet"/>
          <p>Dashboard</p>
        </Link>
        <Divider type="vertical"/>
        <Link to="/client/addfunds" style={Tab}>
          <Icon type="plus-circle-o"/>
          <p>Add Funds</p>
        </Link>
        <Divider type="vertical"/>
        <Link to="/client/sendmoney" style={Tab}>
          <Icon type="rocket"/>
          <p>Send Money</p>
        </Link>
        <Divider type="vertical"/>
        <Link to="/client/buyload" style={Tab}>
          <Icon type="mobile"/>
          <p>Buy Load</p>
        </Link>
        <Divider type="vertical"/>
        <Link to="/client/buyload" style={Tab}>
          <Icon type="mobile"/>
          <p>Pay Bills</p>
        </Link>
      </div>
    )
  }
}

export default Navigation
