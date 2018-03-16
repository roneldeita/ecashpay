import React, { Component } from 'react'
import PropTypes from 'prop-types'
//react-router
import { withRouter } from 'react-router-dom'
//locale
import { IntlProvider, addLocaleData } from 'react-intl';
import zh from 'react-intl/locale-data/zh';
import es from 'react-intl/locale-data/es';
import ru from 'react-intl/locale-data/ru';
import my from 'react-intl/locale-data/my';
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as localeActions from './actions/localeAction'
import * as authActions from './actions/authAction'

//antd & global css
import {BackTop, Icon} from 'antd'
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
//lodash
import { isEqual } from 'lodash'
//components
import TopNavigation from './components/template/TopNavigation'
import BottomNavigation from './components/template/BottomNavigation'

addLocaleData(zh);
addLocaleData(es);
addLocaleData(ru);
addLocaleData(my);

class App extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      loader: false
    }
    this.handleChangeLocale = this.handleChangeLocale.bind(this)
    this.translateContent = this.translateContent.bind(this)
    this.handleLogOut = this.handleLogOut.bind(this)
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
    const paths = ['/login', '/register', '/verify', '/redirecting']
    if(paths.includes(this.props.location.pathname)){
      return 'none'
    }
    return 'block'
  }
  isLoggedIn(){
    const Status = this.props.auth.status
    if(this.props.loggedIn){
      switch(Status){
        case 0:
          window.location.href = '/verify'
          break;
        case 1:
          window.location.href = '/profile'
          break;
        case 2:
          //this.props.history.push('/client/dashboard')
           //window.location.href = '/client/dashboard'
          break;
        default:
          window.location.href = '/login'
      }
    }
  }
  handleLogOut(){
    this.props.authActions.saveAuth({})
    sessionStorage.removeItem('profile')
  }
  componentWillReceiveProps(nextProps){
    this.isLoggedIn()
  }
  shouldComponentUpdate(prevProps){
    return !isEqual(prevProps, this.props);
  }
  render() {
    console.log(this.props)
    return (
      <IntlProvider locale={this.props.locale} messages={this.translateContent(this.props.locale)}>
        <div className="App">
          <div style={{display:this.hideTopNavigation()}}>
            <TopNavigation
            loggedIn={this.props.loggedIn}
            locale={this.props.locale}
            onChangeLocale={this.handleChangeLocale}
            />
          </div>
          <div style={{minHeight:'30vh'}}>{ this.props.children }</div>
          <div style={{display:this.hideTopNavigation()}}>
            <BottomNavigation/>
          </div>
          <BackTop>
            <Icon type="up-square-o" style={{fontSize:'42px'}}/>
          </BackTop>
        </div>
      </IntlProvider>
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
  children: PropTypes.any.isRequired,
  locale: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  localeActions: PropTypes.objectOf(PropTypes.func).isRequired
}
export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
