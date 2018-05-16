import React, { Component } from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as localeActions from './actions/localeAction'
import * as authActions from './actions/authAction'
//proptypes
import PropTypes from 'prop-types'
//react-router
import { withRouter } from 'react-router-dom'
//locale
import { IntlProvider, addLocaleData } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import es from 'react-intl/locale-data/es';
import ru from 'react-intl/locale-data/ru';
import my from 'react-intl/locale-data/my';
//antd & global css
import {Layout, BackTop, Icon, message } from 'antd'
import './App.css'
import 'antd/lib/row/style/css'
import 'antd/lib/col/style/css'
import 'antd/lib/card/style/css'
import 'antd/lib/icon/style/css'
import 'antd/lib/form/style/css'
import 'antd/lib/input/style/css'
import 'antd/lib/date-picker/style/css'
import 'antd/lib/select/style/css'
import 'antd/lib/button/style/css'
import 'antd/lib/back-top/style/css'
import 'antd/lib/radio/style/css'
import 'antd/lib/affix/style/css'
import 'antd/lib/menu/style/css'
import 'antd/lib/modal/style/css'
import 'antd/lib/divider/style/css'
import 'antd/lib/progress/style/css'
import 'antd/lib/modal/style/css'
import 'antd/lib/popover/style/css'
import 'antd/lib/tabs/style/css'
import 'antd/lib/divider/style/css'
import 'antd/lib/steps/style/css'
import 'antd/lib/layout/style/css'
import 'antd/lib/dropdown/style/css'
import 'antd/lib/breadcrumb/style/css'
import 'antd/lib/table/style/css'
import 'antd/lib/alert/style/css'
import 'antd/lib/tag/style/css'
import 'antd/lib/switch/style/css'
import 'antd/lib/upload/style/css'
import 'antd/lib/avatar/style/css'
import 'antd/lib/popconfirm/style/css'
import 'antd/lib/message/style/css'
//animate-on-scroll
import "animate.css/animate.min.css";
//lodash
//import { isEmpty } from 'lodash'
//components
import TopNavigation from './components/template/TopNavigation'
import BottomNavigation from './components/template/BottomNavigation'
import AdminSideNavigation from './components/template/AdminSideNavigation'
import AdminTopNavigation from './components/template/AdminTopNavigation'
//images
import EpayLogo from './assets/images/Ecashpay_Logo_White.png'
import EpayLogoMini from './assets/images/Ecashpay_Logo_White_Mini.png'
//Idle
import Idle from 'react-idle'
//api services
//import { Auth } from './services/api'
import { hasToken } from './assets/utils/auth'
//styles
const LogoContainer = {
  margin:'20px 10px 20px 10px',
  textAlign:'center'
}
const Logo = {
  width:'150px'
}
const LogoMini = {
  width:'25px'
}

addLocaleData(zh);
addLocaleData(es);
addLocaleData(ru);
addLocaleData(my);

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeOut: 600000,
      collapsed: false,
    }
    this.handleChangeLocale = this.handleChangeLocale.bind(this)
    this.translateContent = this.translateContent.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
  }
  toggleCollapse = () => {
    this.setState({collapsed:!this.state.collapsed})
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  translateContent(lang){
    let message = {}
    switch(lang){
      case 'zh':
        message = {
          'locale': 'zh',
          'banner.slogan': '用实际汇率支付和汇款最快的方式',
          'banner.desc': 'Ecashpay Asia 提供一种安全可靠的方式，可随时随地在线发送付款和汇款。今天向亚洲周边的任何银行账户，支付网关或任何人支付款项。您可以指望我们以最快，最安全，最简单的方式汇款到亚洲。'
        }
        break;
      case 'es':
        message = { 'locale': 'es', 'banner.slogan': 'Pagar y enviar dinero de la manera más rápida con la tasa de cambio real.'}
        break;
      case 'ru':
        message = { 'locale': 'ru', 'banner.slogan': 'Платите и отправляйте деньги самым быстрым способом с реальным обменным курсом.' }
        break;
      case 'my':
        message = { 'locale': 'my', 'banner.slogan': 'Bayar dan Hantar wang cara terpantas dengan kadar pertukaran sebenar.'}
        break;
      default:
        //
    }
    return message
  }
  handleChangeLocale(event){
    const acceptedKeys = ['en', 'zh', 'es', 'my', 'ru']
    if(acceptedKeys.includes(event.key)){
      this.props.localeActions.changeLocale(event.key)
    }
    if(event.key === 'logout'){
      this.handleLogOut()
    }
  }
  hideTopNavigation(){
    const paths = [
      '/login', '/register', '/verify', '/redirecting',
      '/admin', '/admin/login', '/admin/transactions',
      '/password/request', '/password/reset']
    if(paths.includes(this.props.location.pathname)){
      return 'none'
    }
    return 'block'
  }
  showAdminNavigation(){
    const paths = ['/admin', '/admin/transactions']
    if(paths.includes(this.props.location.pathname)){
      return 'block'
    }
    return 'none'
  }
  handleLogOut(){
    localStorage.removeItem('auth')
    sessionStorage.removeItem('profile')
    window.location.href = '/login'
  }
  handleIdle(idle){
    if(hasToken() && idle){
      localStorage.removeItem('auth')
      sessionStorage.removeItem('profile')
      message.warn(
        <span>
          You are being timed out due to inactivity.
          <Icon type="close"
            style={{color:'grey', marginLeft:'10px', marginRight:'-5px'}}
            onClick={()=>message.destroy()}
            />
        </span>
      , 0);
      this.props.history.push('/login')
    }
  }
  render() {
    console.log(this.props)
    return (
      <Idle
        timeout={this.state.timeOut}
        onChange={({ idle }) =>  this.handleIdle(idle)}
        render={({ idle }) =>
          <IntlProvider locale={this.props.locale} messages={this.translateContent(this.props.locale)}>
            <div className="App">
              <Layout>
                <Layout.Header style={{display:this.hideTopNavigation()}}>
                  <TopNavigation
                  loggedIn={hasToken()}
                  locale={this.props.locale}
                  onChangeLocale={this.handleChangeLocale}
                  />
                </Layout.Header>
                <Layout>
                  <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{display:this.showAdminNavigation()}}>
                    <div style={LogoContainer}>
                      <img src={this.state.collapsed ? EpayLogoMini : EpayLogo  } alt="logo" style={this.state.collapsed ? LogoMini : Logo}/>
                    </div>
                    <AdminSideNavigation location={this.props.location} />
                  </Layout.Sider>
                  <Layout>
                    <Layout.Header style={{display:this.showAdminNavigation(), maxHeight:'auto', lineHeight:'40px'}}>
                      <AdminTopNavigation collapsed={this.state.collapsed} toggle={this.toggleCollapse} />
                    </Layout.Header>
                    <Layout.Content style={{minHeight:'30vh'}}>{ this.props.children }</Layout.Content>
                  </Layout>
                </Layout>
                <Layout.Footer style={{display:this.hideTopNavigation()}}>
                  {hasToken() ? '': <BottomNavigation/>}
                </Layout.Footer>
              </Layout>
              <BackTop>
                <Icon type="up-square-o" style={{fontSize:'42px'}}/>
              </BackTop>
              <style jsx="true">{`
                .ant-layout-header{
                  padding:0px;
                  height:auto;
                  max-height:85px;
                  background-color: transparent
                }
                .ant-layout-content{
                  min-height:100vh !important
                }
                .ant-layout-footer{
                  padding:0px;
                }
                `}
              </style>
            </div>
          </IntlProvider>
        }
      />
    )
  }
}
function mapStateToProps(state, ownProps){
  return {
    locale: state.locale,
    auth: state.auth
  }
}
function mapDispatchToProps(dispatch){
  return {
    localeActions: bindActionCreators(localeActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  localeActions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
