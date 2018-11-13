import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import {isEmpty} from 'lodash'

export default ComponentChild => {
  class ComposedComponent extends React.Component {
    verifyPhone(){
      Modal.info({
        title: 'Phone verification required',
        content: 'Please verifiy your phone number first',
      });
    }
    requireLevelOne(){
      Modal.info({
        title: 'Upgrade required',
        content: 'Upgrade to level 1 first',
      });
    }
    requireLevelTwo(){
      Modal.info({
        title: 'Upgrade required',
        content: 'Upgrade to level 2 first',
      });
    }
    navigate(){
      if(!isEmpty(this.props.profile) && this.props.profile.role === 'individual'){
        if(this.props.profile.phone === ''){
          this.props.history.push('/client/verify/phone')
          this.verifyPhone()
        } else if(!this.props.profile.levels.includes(1)){
          this.props.history.push('/client/upload/id')
          this.requireLevelOne()
        } else if(!this.props.profile.levels.includes(2)){
          this.props.history.push('/client/schedule/f2f')
          this.requireLevelTwo()
        }
      }
    }
    componentDidMount(){
      this.navigate()
    }
    componentDidUpdate(){
      this.navigate()
    }
    render(){
      return <ComponentChild {...this.props}/>
    }
  }
  
  function mapStateToProps(state, ownProps){
    return {
      auth: state.auth,
      profile: state.profile
    }
  }

  return connect(mapStateToProps)(ComposedComponent)
}
