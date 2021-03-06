import React, { PureComponent } from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as localeActions from 'actions/localeAction'
import * as authActions from 'actions/authAction'
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
import {Layout as AntdLayout, BackTop, Icon, message } from 'antd'
import 'App.css'
import 'antd/dist/antd.min.css'
//animate-on-scroll
import "animate.css/animate.min.css";
//lodash
//import { isEmpty } from 'lodash'
//components
import TopNavigation from 'components/template/TopNavigation'
import BottomNavigation from 'components/template/BottomNavigation'
import AdminSideNavigation from 'components/template/AdminSideNavigation'
import AdminTopNavigation from 'components/template/AdminTopNavigation'
//images
import EpayLogo from 'assets/images/Ecashpay_Logo_White.png'
import EpayLogoMini from 'assets/images/Ecashpay_Logo_White_Mini.png'
//Idle
//import Idle from 'react-idle'
import IdleTimer from 'react-idle-timer'
//api services
//import { Auth } from './services/api'
import { hasToken } from 'assets/utils/auth'
//socket.io
//import { SubscribeToKyc } from './services/socket'
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

class Layout extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      timeOut: process.env.REACT_APP_TIMEOUT,
      collapsed: false,
      notif:'',
      ready:document.readyState
    }
    this.handleChangeLocale = this.handleChangeLocale.bind(this)
    this.translateContent = this.translateContent.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
    //SubscribeToKyc((data) => this.setState({notif:data}));
  }
  toggleCollapse = () => {
    //console.log(this.state.collapsed)
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
        message = { 
          'locale': 'es', 
          'banner.slogan': 'Pagar y enviar dinero de la manera más rápida con la tasa de cambio real.'
        }
        break;
      case 'ru':
        message = { 
          'locale': 'ru', 
          'banner.slogan': 'Платите и отправляйте деньги самым быстрым способом с реальным обменным курсом.' 
        }
        break;
      case 'my':
        message = { 
          'locale': 'my', 
          'banner.slogan': 'Bayar dan Hantar wang cara terpantas dengan kadar pertukaran sebenar.'
        }
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
    if(event.key === 'setting'){
      this.props.history.push('/client/settings')
    }
    if(event.key === 'logout'){
      this.handleLogOut()
    }
  }
  hideTopNavigation(){
    const paths = [
      '/login', '/termsandconditions', 
      '/client/register', '/client/verify', 
      '/redirecting', '/password/request', 
      '/password/reset', '/login/tsv', '/login/tfa',
      '/business/register', '/business/verify',
      '/merchant/register', '/merchant/verify',
      '/admin', '/admin/login', '/admin/transactions',
      '/admin/requirements/id', '/admin/requirements/pob',
      '/admin/requirements/f2f', '/admin/manage/f2f',
      '/admin/transactions/cashin', '/admin/business/accounts',
      '/admin/merchant/accounts', '/admin/merchant/payments']
    if(paths.includes(this.props.location.pathname)){
      return 'none'
    }
    return 'block'
  }
  showAdminNavigation(){
    const paths = [
      '/admin', '/admin/transactions',
      '/admin/requirements/id', '/admin/requirements/pob',
      '/admin/requirements/f2f', '/admin/manage/f2f',
      '/admin/transactions/cashin', '/admin/business/accounts',
      '/admin/merchant/accounts', '/admin/merchant/payments']
    if(paths.includes(this.props.location.pathname)){
      return 'block'
    }
    return 'none'
  }
  handleLogOut(){
    localStorage.removeItem('auth')
    sessionStorage.removeItem('profile')
    sessionStorage.removeItem('tsv')
    sessionStorage.removeItem('recover')
    window.location.href = '/login'
  }
  handleIdle = () =>{
    if(hasToken()){
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
      if(this.props.profile.role === 'admin'){
        this.props.history.push('/admin/login')
      }
      this.props.history.push('/login')
    }
  }
  
  render(){
    return (
      <IdleTimer
        ref={ref => { this.idleTimer = ref }}
        timeout={Number(this.state.timeOut)}
        onIdle={this.handleIdle}>
          <IntlProvider locale={this.props.locale} messages={this.translateContent(this.props.locale)}>
            <div className="App">
              <AntdLayout>
                <AntdLayout.Header style={{display:this.hideTopNavigation()}}>
                  <TopNavigation
                  profile={this.props.profile}
                  loggedIn={hasToken()}
                  locale={this.props.locale}
                  onChangeLocale={this.handleChangeLocale}
                  logout={this.handleLogOut}
                  />
                </AntdLayout.Header>
                <AntdLayout className="ecpa-layout">
                  <AntdLayout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{display:this.showAdminNavigation()}}>
                    <div style={LogoContainer}>
                      <img src={this.state.collapsed ? EpayLogoMini : EpayLogo  } alt="logo" style={this.state.collapsed ? LogoMini : Logo}/>
                    </div>
                    <AdminSideNavigation location={this.props.location} collapsed={this.state.collapsed} />
                  </AntdLayout.Sider>
                  <AntdLayout>
                    <AntdLayout.Header style={{display:this.showAdminNavigation(), maxHeight:'auto', lineHeight:'40px'}}>
                      <AdminTopNavigation collapsed={this.state.collapsed} toggle={this.toggleCollapse} />
                    </AntdLayout.Header>
                    <AntdLayout.Content style={{minHeight:'30vh'}}>{ this.props.children }</AntdLayout.Content>
                  </AntdLayout>
                </AntdLayout>
                <AntdLayout.Footer style={{display:this.hideTopNavigation()}}>
                  {!hasToken() && <BottomNavigation/>}
                </AntdLayout.Footer>
              </AntdLayout>
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
        </IdleTimer>
    )
  }
}
function mapStateToProps(state, ownProps){
  return {
    locale: state.locale,
    auth: state.auth,
    profile: state.profile
  }
}
function mapDispatchToProps(dispatch){
  return {
    localeActions: bindActionCreators(localeActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  }
}

Layout.propTypes = {
  auth: PropTypes.object.isRequired,
  authActions: PropTypes.objectOf(PropTypes.func).isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  locale: PropTypes.string.isRequired,
  localeActions: PropTypes.objectOf(PropTypes.func).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  profile: PropTypes.objectOf(PropTypes.any).isRequired
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))
