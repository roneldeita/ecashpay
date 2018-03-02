import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as localeActions from './actions/localeAction'
import {BackTop, Icon} from 'antd'
import Loader from 'react-loader'
import TopNavigation from './components/template/TopNavigation'
import BottomNavigation from './components/template/BottomNavigation'

import './App.css'
import 'antd/lib/back-top/style/css'
import 'antd/lib/icon/style/css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loader: false
    }
    this.handleChangeLocale = this.handleChangeLocale.bind(this)
  }

  componentDidMount(){
    if(this.props){
      setTimeout( () =>{
        this.setState({loaded:true})
      },1000)
    }
  }
  handleChangeLocale(event){
    // console.log(event)
    const acceptedKeys = ['EN', 'CN', 'ES', 'MY', 'RU']
    if(acceptedKeys.includes(event.key)){
      this.props.localeActions.changeLocale(event.key)
    }
  }
  hideTopNavigation(){
    const paths = ['/login', '/register', '/verify']
    if(paths.includes(this.props.location.pathname)){
      return 'none'
    }
    return 'block'
  }

  render() {
    return (
      <div className="App">
        <Loader loaded={this.state.loaded} color="#cccccc">
          <div style={{display:this.hideTopNavigation()}}>
            <TopNavigation locale={this.props.locale} onChangeLocale={this.handleChangeLocale}/>
          </div>
          <div style={{minHeight:'30vh'}}>
            {this.props.children}
          </div>
          <div style={{display:this.hideTopNavigation()}}>
            <BottomNavigation/>
          </div>
          <BackTop>
            <Icon type="up-square-o" style={{fontSize:'42px'}}/>
          </BackTop>
        </Loader>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    locale: state.locale
  }
}

function mapDispatchToProps(dispatch){
  return {
    localeActions: bindActionCreators(localeActions, dispatch)
  }
}

App.propTypes = {
  children: PropTypes.any.isRequired,
  locale: PropTypes.string.isRequired,
  localeActions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
