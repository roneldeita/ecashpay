import React from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import ResetEmail from './ResetEmail'
import General from './presentation/General'
import Privacy from './presentation/Privacy'
import TwoFactorAuthentication from './presentation/TwoFactorAuthentication'
import Navigation from '../common/Navigation'
import { Col, Row } from 'antd'

class SettingsPage extends React.Component{
  render(){
    //console.log(this.props)
    return(
      <div>
        <Navigation location={this.props.location}/>
        <Row type="flex" justify="center">
          <Col xs={23} sm={23} md={20} lg={16} xl={11}>
            <General profile={this.props.profile} Reset={ResetEmail}/>
            <Privacy/>
            <TwoFactorAuthentication/>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(SettingsPage)
