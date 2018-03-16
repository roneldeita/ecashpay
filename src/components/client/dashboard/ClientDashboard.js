import React from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'antd'
import Menu from './presentation/Menu'
import Wallet from './presentation/Wallet'
import Requirements from './presentation/Requirements'

class ClientDashboard extends React.Component{
  render(){
    return(
      <Row type="flex" justify="center">
        <Col className="" span={18}>
          <Menu profile={this.props.profile} />
        </Col>
        <Col className="" span={18} style={{marginTop:'30px'}}>
          <Row gutter={30}>
            <Col className="" span={8}>
              <Wallet/>
            </Col>
            <Col className="" span={16}>
              <Requirements />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(ClientDashboard)
