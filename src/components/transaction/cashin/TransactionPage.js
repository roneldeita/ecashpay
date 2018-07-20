import React from 'react'
import { connect } from 'react-redux'
import Navigation from '../common/Navigation'
import { Steps, Row, Col, Icon } from 'antd'
import StepThree from './presentation/StepThree'
import { Transaction } from '../../../services/api'
//import { isEmpty } from 'lodash'

const Step = Steps.Step
const StepStyle = {
  margin: '25px 0px 15px 0px',
}

class TransactionPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      cancelState: false,
      uploadState: false,
      transaction:{}
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.ToggleUpload = this.ToggleUpload.bind(this)
    this.loadTransaction = this.loadTransaction.bind(this)
  }
  handleCancel(){
    this.setState({cancelState:true})
    Transaction({transaction:this.props.match.params.no}, {'x-access-token':this.props.auth.token}).Cancel()
    .then(res=>{
      this.loadTransaction()
      setTimeout(() => {
        this.setState({cancelState:false})
      }, 800)
    })
    .catch(err=>{
      setTimeout(() => {
        this.setState({cancelState:false})
      }, 800)
    })
  }
  loadTransaction(){
    Transaction({transaction:this.props.match.params.no}, {'x-access-token':this.props.auth.token}).Get()
    .then(res=>{
      this.setState({transaction:res.data})
    })
    .catch(err=>{
      console.log(err)
    })
  }
  ToggleUpload(){
    this.setState({uploadState:!this.state.uploadState})
  }
  componentDidMount(){
    this.loadTransaction()
  }
  render(){
    console.log(this.props)
    return(
      <div>
        <Navigation location={this.props.location}/>
          <Row type="flex" justify="center">
            <Col className="" xs={24} sm={24} md={24} lg={20} xl={18} xxl={12}>
              <Row type="flex" justify="center">
                <Col span={12}>
                  <Steps current={2} style={StepStyle}>
                    <Step title="Choose" icon={<Icon type="shop" />}/>
                    <Step title="Amount" icon={<Icon type="wallet" />}/>
                    <Step title="Pay" icon={<Icon type="check-circle-o" />}/>
                  </Steps>
                </Col>
                <Col span={19}>
                  <StepThree
                    auth={this.props.auth}
                    transaction={this.state.transaction}
                    cancel={this.handleCancel}
                    cancelState={this.state.cancelState}
                    uploadState={this.state.uploadState}
                    toggleUpload={this.ToggleUpload}
                    loadTransaction={this.loadTransaction}/>
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(TransactionPage)
