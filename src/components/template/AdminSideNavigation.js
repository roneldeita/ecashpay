import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class AdminSideNavigation extends React.PureComponent{
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
  componentDidMount(){
    this.setState({selected:this.props.location.pathname})
  }
  componentWillReceiveProps(nextProps){
    this.setState({selected:nextProps.location.pathname})
  }
  handleLogOut(){
    localStorage.removeItem('auth')
    sessionStorage.removeItem('profile')
    window.location.href = '/admin/login'
  }
  render() {
    return (
      <div>
        <Menu mode="inline" theme="dark" selectedKeys={[this.state.selected]}>
        <Menu.Item key="/admin">
          <Link to="/admin"><Icon type="dashboard" /><span>Dashboard</span></Link>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="idcard"/><span>KYC</span></span>}>
          <Menu.Item key="/admin/requirements/id"><Link to="/admin/requirements/id">Verify ID</Link></Menu.Item>
          <Menu.Item key="/admin/requirements/pob"><Link to="/admin/requirements/pob">Verify POB</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="swap"/><span>Transactions</span></span>}>
          <Menu.Item key="/admin/transactions/cashin"><Link to="/admin/transactions/cashin">Cash In</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="/shop">
          <Icon type="shop" />
          <span>Outlets</span>
        </Menu.Item>
        <SubMenu key="sub3" title={<span><Icon type="wallet"/><span>Currency</span></span>}>
          <Menu.Item key="5">Rates</Menu.Item>
        </SubMenu>
        <Menu.Item key="5" onClick={this.handleLogOut}><Icon type="logout"/><span>Logout</span></Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default AdminSideNavigation
