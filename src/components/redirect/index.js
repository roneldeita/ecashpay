import React from 'react'
import { connect } from 'react-redux'
//lodash
import { isEmpty } from 'lodash'

class RedirectPage extends React.PureComponent {
  redirectIndividual(status, phone){
    if(phone === ''){
      window.location.href ='/client/verify/phone'
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
         // this.props.history.push('/')
      }
    }
  }
  redirectBusiness(status, phone){
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
      case 'rejected':
        window.location.href = '/business/rejected'
        break;
      case 'completed':
        window.location.href = '/business/dashboard'
        break;
      default:
        //this.props.history.push('/')
    }
  }
  redirectMerchant(status, phone){
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
      case 'rejected':
        window.location.href = '/merchant/rejected'
        break;
      case 'completed':
        window.location.href = '/merchant/dashboard'
        break;
      default:
        //this.props.history.push('/')
    }
  }
  componentDidMount(){
    window.scrollTo(0, 0)
    if(!isEmpty(this.props.profile)){
      switch(this.props.profile.role){
        case "admin":
          window.location.href = '/admin'
          break;
        case "business":
          this.redirectBusiness(this.props.profile.status)
          break;
        case "individual":
          this.redirectIndividual(this.props.profile.status, this.props.profile.phone)
          break;
        case "merchant":
          this.redirectMerchant(this.props.profile.status)
          break;
        default:
          //this.props.history.push('/')
      }
    }
  }
  componentWillReceiveProps(nextProps){
    if(!isEmpty(nextProps.profile)){
      switch(nextProps.profile.role){
        case "admin":
          window.location.href = '/admin'
          break;
        case "business":
          //window.location.href = '/business'
          this.redirectBusiness(nextProps.profile.role)
          break;
        case "individual":
          this.redirectIndividual(nextProps.profile.status, nextProps.profile.phone)
          break;
        case "merchant":
          this.redirectMerchant(nextProps.profile.status)
          break;
        default:
         // this.props.history.push('/')
      }
    }
  }
  handleLogOut(){
    localStorage.removeItem('auth')
    sessionStorage.removeItem('profile')
    sessionStorage.removeItem('tsv')
    sessionStorage.removeItem('recover')
    window.location.href = '/login'
  }
  render(){
    return (
      <div className="" style={{display:'flex', alignItems:'center', minHeight:'100vh'}}>
        <div className="" style={{width:'100%', textAlign:'center'}}>
          <p style={{fontSize:'32px'}}>Redirecting...</p>
          <p style={{fontSize:'16px', marginTop:'-35px'}}>Please click <a onClick={this.handleLogOut}>here</a> if you are not redirected within a few seconds</p>
        </div>
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