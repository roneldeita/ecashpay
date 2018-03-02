import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound" style={{margin:'100px',textAlign:'center'}}>
        <p style={{fontSize:'50px',}}>404</p>
        <p style={{fontSize:'20px',marginTop:'-50px'}}>Page not found</p>
      </div>
    );
  }
}

export default NotFound;
