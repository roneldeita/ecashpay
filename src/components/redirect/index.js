import React from 'react'
import { connect } from 'react-redux'
//lodash
import { isEmpty } from 'lodash'

class RedirectPage extends React.PureComponent {
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  redirectPersonal(status, phone){
    if(phone === ''){
      window.location.href = '/client/verify/phone'
    }else{
      switch(status){
        case 'unverified':
          window.location.href = '/client/verify'
          break;
        case 'verified':
          window.location.href = '/client/profile'
          break;
        case 'completed':
          window.location.href = '/client/dashboard'
          break;
        default:
          window.location.href = '/'
      }
    }
  }
  redirectBusiness(status, phone){
    if(phone === ''){
      window.location.href = '/business/verify/phone'
    }else{
      switch(status){
        case 'unverified':
          window.location.href = '/business/verify'
          break;
        case 'verified':
          window.location.href = '/business/profile'
          break;
        case 'submissionOfRequirements':
          window.location.href = '/business/requirements'
          break;
        case 'pending':
          window.location.href = '/business/pending'
          break;
        case 'completed':
          window.location.href = '/business/dashboard'
          break;
        default:
          window.location.href = '/'
      }
    }
  }
  redirectMerchant(status, phone){
    if(phone === ''){
      window.location.href = '/merchant/verify/phone'
    }else{
      switch(status){
        case 'unverified':
          window.location.href = '/merchant/verify'
          break;
        case 'verified':
          window.location.href = '/merchant/profile'
          break;
        case 'submissionOfRequirements':
          window.location.href = '/merchant/requirements'
          break;
        case 'pending':
          window.location.href = '/merchant/pending'
          break;
        case 'completed':
          window.location.href = '/merchant/dashboard'
          break;
        default:
          window.location.href = '/'
      }
    }
  }
  componentWillMount(){
    if(!isEmpty(this.props.profile)){
      switch(this.props.profile.type){
        case "admin":
          window.location.href = '/admin'
          break;
        case "business":
          //window.location.href = '/business'
          this.redirectBusiness(this.props.profile.status)
          break;
        case "individual":
          this.redirectPersonal(this.props.profile.status)
          break;
        case "merchant":
          this.redirectMerchant(this.props.profile.status)
          break;
        default:
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
        case "business":
          //window.location.href = '/business'
          this.redirectBusiness(nextProps.profile.status, nextProps.profile.phone)
          break;
        case "individual":
          this.redirectPersonal(nextProps.profile.status, nextProps.profile.phone)
          break;
        case "merchant":
          this.redirectMerchant(nextProps.profile.status, nextProps.profile.phone)
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
