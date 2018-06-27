import React from 'react'
import { connect } from 'react-redux'
//import { bindActionCreators } from 'redux'
import ManageEmail from './ManageEmail'
import ManagePhone from './ManagePhone'
import ManagePassword from './ManagePassword'
//import General from './presentation/General'
import Privacy from './presentation/Privacy'
import TwoFactorAuthentication from './presentation/TwoFactorAuthentication'
import Navigation from '../common/Navigation'
import { Col, Row, Card, List } from 'antd'

class SettingsPage extends React.Component{
  render(){
    return(
      <div>
        <Navigation location={this.props.location}/>
        <Row type="flex" justify="center">
          <Col xs={23} sm={23} md={20} lg={16} xl={11}>
            <Card title="General Settings" style={{marginTop:'50px'}}>
              <List size="small">
                <ManageEmail/>
                <ManagePhone/>
                <ManagePassword/>
              </List>
            </Card>
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
