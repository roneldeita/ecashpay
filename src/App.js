import React, { Component } from 'react'
import './App.css'
import {BackTop} from 'antd'
import TopNavigation from './components/template/TopNavigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavigation/>
        {this.props.children}
        <BackTop/>
      </div>
    );
  }
}

export default App
