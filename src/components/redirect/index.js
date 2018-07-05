import React from 'react'
import { connect } from 'react-redux'
//lodash
import { isEmpty } from 'lodash'

class RedirectPage extends React.PureComponent {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  componentWillMount(){
    if(!isEmpty(this.props.profile)){
      switch(this.props.profile.type){
        case "admin":
          window.location.href = '/admin'
          break;
        case "individual":
          this.isLoggedIn(this.props.profile.status)
          break;
        default:
          window.location.href = '/'
      }
    }
  }
  isLoggedIn(status, phone){
    if(phone === ''){
      window.location.href = '/client/verify/phone'
    }else{
      switch(status){
        case 0:
          //this.props.history.push('/verify')
          window.location.href = '/verify'
          break;
        case 1:
          //this.props.history.push('/profile')
          window.location.href = '/profile'
          break;
        case 2:
          //this.props.history.push('/client/dashboard')
          window.location.href = '/client/dashboard'
          break;
        default:
          //this.props.history.push('/')
          window.location.href = '/'
      }
    }
  }
  componentWillReceiveProps(nextProps){
    if(!isEmpty(nextProps.profile)){
      switch(nextProps.profile.type){
        case "admin":
          window.location.href = '/admin'
          break;
        case "individual":
          this.isLoggedIn(nextProps.profile.status, nextProps.profile.phone)
          break;
        default:
          window.location.href = '/'
      }
    }
  }
  render(){
    return (
      <div style={{margin:'250px 0px', textAlign:'center'}}>
        <p style={{fontSize:'40px'}}>Redirecting...</p>
        <p style={{fontSize:'16px', marginTop:'-50px'}}>Please click <a href="/">here</a> if you are not redirected within a few seconds</p>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(RedirectPage)
