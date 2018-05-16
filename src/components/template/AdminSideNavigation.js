import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class AdminSideNavigation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selected:'dashboard',
      collapsed: false
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
  }
  toggleCollapsed(){
    this.setState({collapsed: !this.state.collapsed})
  }
  componentWillMount(){
    this.setState({selected:this.props.location.pathname})
  }
  componentWillReceiveProps(nextProps){
    this.setState({selected:nextProps.location.pathname})
  }
  render() {
    return (
      <div>
        <Menu mode="inline" theme="dark" selectedKeys={[this.state.selected]}>
        <Menu.Item key="/admin">
          <Link to="/admin"><Icon type="dashboard" /><span>Dashboard</span></Link>
        </Menu.Item>
          <Menu.Item key="/admin/transactions">
            <Link to="/admin/transactions"><Icon type="swap" /><span>Transactions</span></Link>
          </Menu.Item>
          <Menu.Item key="/shop">
            <Icon type="shop" />
            <span>Merchants</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="wallet" /><span>Currency</span></span>}>
            <Menu.Item key="5">Rates</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default AdminSideNavigation
