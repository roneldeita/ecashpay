import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as profileActions from '../../../actions/profileAction'
//import { bindActionCreators } from 'redux'
import ManageEmail from './ManageEmail'
import ManagePhone from './ManagePhone'
import ManagePassword from './ManagePassword'
//import General from './presentation/General'
import Privacy from './presentation/Privacy'
import TwoFactorAuthentication from './presentation/TwoFactorAuthentication'
import Navigation from '../common/Navigation'
import { Col, Row, Card, List } from 'antd'
//lodash
import { isEmpty } from 'lodash'

class SettingsPage extends React.PureComponent{
  constructor(props){
    super(props)
    document.title="Settings - Ecashpay"
  }
  render(){
    return(
      <div>
        <Navigation location={this.props.location}/>
        <Row type="flex" justify="center">
          <Col xs={23} sm={23} md={20} lg={16} xl={11}>
            <Card
              title="Security Settings"
              loading={isEmpty(this.props.profile)}
              style={{marginTop:'50px'}}>
              <List size="small">
                <ManageEmail
                  auth={this.props.auth}
                  profile={this.props.profile}
                  profileAction={this.props.profileAction}/>
                <ManagePhone
                  auth={this.props.auth}
                  profile={this.props.profile}
                  profileAction={this.props.profileAction}/>
                <ManagePassword
                  auth={this.props.auth}
                  profile={this.props.profile}
                  profileAction={this.props.profileAction}
                  />
              </List>
            </Card>
            <TwoFactorAuthentication/>
            {/*<Privacy/>*/}
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch){
  return {
    profileAction: bindActionCreators(profileActions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage)
