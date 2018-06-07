import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as profileActions from '../../../actions/profileAction'
import { Card, Row, Col} from 'antd'
import StepOne from './presentation/EnterPhoneNumberForm'
import StepTwo from './presentation/EnterVerificationForm'
import Done from './presentation/PhoneVerified'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class VerifyPhonePage extends React.Component{
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
    //console.log(this.state)
    return(
      <Row type="flex" justify="center" style={{marginTop:'80px'}}>
        <Col md={12} lg={6}>
          <Card
            hoverable
            title={ <span>Verify your Phone number</span> }
            style={CardStyle}>
            <div style={{display:this.state.step === 0 ? 'block' : 'none'}}>
              <StepOne
                changeStep={this.handleStep}
                auth={this.props.auth}/>
            </div>
            <div style={{display:this.state.step === 1 ? 'block' : 'none'}}>
              <StepTwo
                changeStep={this.handleStep}
                phone={this.state.phone}
                code={this.state.code}
                auth={this.props.auth}
                profileAction={this.props.profileAction}/>
            </div>
            <div style={{display:this.state.step === 2 ? 'block' : 'none'}}>
              <Done/>
            </div>
          </Card>
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
