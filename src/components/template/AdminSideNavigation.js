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
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default AdminSideNavigation
