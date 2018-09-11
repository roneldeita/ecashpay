import React from 'react'
import { connect } from 'react-redux'
// import ReactS3 from 'react-s3'
import { Form, Row, Col, Card, Icon } from 'antd'
import QueueAnim from 'rc-queue-anim'
import { Link } from 'react-router-dom'
import ScheduleForm from './presentation/ScheduleForm'
import Pending from './presentation/Pending'
import Rejected from './presentation/Rejected'
import Verified from './presentation/Verified'
import { isEmpty } from 'lodash'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class Schedulef2fPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState:false,
      identification:{status:'none'}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
  }
  render(){
    console.log(this.state)
    return(
      <Row type="flex" justify="center" style={{marginTop:'50px'}}>
        <Col xs={23} sm={23} md={14} lg={12} xl={10} xxl={8}>
          <QueueAnim type={['top', 'bottom']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
            <div key="0">
              <Card
                hoverable
                title="Upgrade Level 1"
                style={CardStyle}
                loading={isEmpty(this.state.identification)}
                actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
                <div style={{display:this.state.identification.status === 'none' ? 'block' : 'none'}}>
                  <ScheduleForm
                    buttonState={this.state.buttonState}
                    form={this.props.form}
                    submit={this.handleSubmit}/>
                </div>
                <div style={{display:this.state.identification.status === 'pending' ? 'block' : 'none'}}>
                  <Pending
                    identification={this.state.identification}
                    cancel={this.cancelRequest}
                    front={this.state.identification.frontLocation}
                    selfie={this.state.identification.selfie}
                    back={this.state.identification.backLocation}
                    handlePreview={this.handlePreview}
                    preview={this.state.preview}
                    image={this.state.image}
                    closePreview={this.closePreview}/>
                </div>
                <div style={{display:this.state.identification.status === 'rejected' ? 'block' : 'none'}}>
                  <Rejected resubmit={this.cancelRequest}/>
                </div>
                <div style={{display:this.state.identification.status === 'accepted' ? 'block' : 'none'}}>
                  <Verified/>
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

export default Form.create()(connect(mapStateToProps)(Schedulef2fPage))