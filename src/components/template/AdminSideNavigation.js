import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

export default ({location}) => {
  const handleLogOut = () =>{
    localStorage.removeItem('auth')
    sessionStorage.removeItem('profile')
    window.location.href = '/admin/login'
  }
  return(
    <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
      <Menu.Item key="/admin">
        <Link to="/admin"><Icon type="dashboard" /><span>Dashboard</span></Link>
      </Menu.Item>
      <SubMenu key="sub1" title={<span><Icon type="idcard"/><span>KYC</span></span>}>
        <Menu.Item key="/admin/requirements/id"><Link to="/admin/requirements/id">Verify ID</Link></Menu.Item>
        <Menu.Item key="/admin/requirements/f2f"><Link to="/admin/requirements/f2f">Verify F2F</Link></Menu.Item>
        <Menu.Item key="/admin/requirements/pob"><Link to="/admin/requirements/pob">Verify POB</Link></Menu.Item>
        <Menu.Item key="/admin/manage/f2f"><Link to="/admin/manage/f2f">Manage F2F Schedule</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" title={<span><Icon type="swap"/><span>Transactions</span></span>}>
        <Menu.Item key="/admin/transactions/cashin"><Link to="/admin/transactions/cashin">Cash In</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" title={<span><Icon type="global"/><span>Business</span></span>}>
        <Menu.Item key="/admin/business/accounts"><Link to="/admin/business/accounts">New Accounts</Link></Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" title={<span><Icon type="shop"/><span>Merchant</span></span>}>
        <Menu.Item key="/admin/merchant/accounts"><Link to="/admin/merchant/accounts">New Accounts</Link></Menu.Item>
        <Menu.Item key="/admin/merchant/payments"><Link to="/admin/merchant/payments">Payments</Link></Menu.Item>
      </SubMenu>
      <Menu.Item key="6" onClick={handleLogOut}><Icon type="logout"/><span>Logout</span></Menu.Item>
    </Menu>
  )
}
