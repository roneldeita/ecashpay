import React from 'react'
import { connect } from 'react-redux'
//lodash
import { isEmpty } from 'lodash'

class RedirectPage extends React.Component {
  componentWillMount(){
    //console.log(this.props.profile)
    // if(this.props.profile){
    //   this.props.history.push('/')
    // }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  isLoggedIn(status){
    //console.log(status)
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
  componentWillReceiveProps(nextProps){
    if(!isEmpty(nextProps.profile)){
      switch(nextProps.profile.type){
        case "admin":
          window.location.href = '/admin'
          break;
        case "individual":
          this.isLoggedIn(nextProps.profile.status)
          break;
        default:
          window.location.href = '/'
      }
    }
  }
  render(){
    //console.log(this.props)
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
