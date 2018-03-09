import React from 'react'

class Redirect extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    return (
      <div style={{margin:'250px 0px',textAlign:'center'}}>
        <p style={{fontSize:'40px'}}>Redirecting...</p>
        <p style={{fontSize:'16px',marginTop:'-50px'}}>Please click <a href="/">here</a> if you are not redirected within a few seconds</p>
      </div>
    )
  }
}

export default Redirect
