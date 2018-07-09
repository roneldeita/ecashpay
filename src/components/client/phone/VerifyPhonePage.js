import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as profileActions from '../../../actions/profileAction'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Icon} from 'antd'
import QueueAnim from 'rc-queue-anim'
import StepOne from './presentation/EnterPhoneNumberForm'
import StepTwo from './presentation/EnterVerificationForm'
import Done from './presentation/PhoneVerified'
import {isEmpty} from 'lodash'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class VerifyPhonePage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      step: 0,
      phone: undefined,
      code: undefined
    }
    this.handleStep = this.handleStep.bind(this)
  }
  handleStep(data){
    this.setState({step:data.step, phone: data.phone, code:data.code})
  }
  render(){
    return(
      <Row type="flex" justify="center" style={{marginTop:'50px'}}>
        <Col sm={18} md={13} lg={8}>
          <QueueAnim type={['top', 'bottom']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
            <div key="0">
              <Card
                hoverable
                title={ <span>Verify your Phone number</span> }
                style={CardStyle}
                loading={isEmpty(this.props.profile)}
                actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> {this.state.step===2?'Return to Dashboard':'Skip'}</Link>]}>
                <div style={{display:this.state.step === 0 && this.props.profile.phone === '' ? 'block' : 'none'}}>
                  <StepOne
                    changeStep={this.handleStep}
                    auth={this.props.auth}/>
                </div>
                <div style={{display:this.state.step === 1 && this.props.profile.phone === ''? 'block' : 'none'}}>
                  <StepTwo
                    changeStep={this.handleStep}
                    phone={this.state.phone}
                    code={this.state.code}
                    auth={this.props.auth}
                    profileAction={this.props.profileAction}/>
                </div>
                <div style={{display:this.state.step === 2 || this.props.profile.phone !== ''? 'block' : 'none'}}>
                  <Done/>
                </div>
              </Card>
            </div>
          </QueueAnim>
        </Col>
      </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhonePage)
