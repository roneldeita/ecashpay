import React from 'react'
import { connect } from 'react-redux'
import { Steps, Row, Col, Icon, Form, Modal } from 'antd'
import QueueAnim from 'rc-queue-anim'
import Navigation from '../common/Navigation'
import StepOne from './presentation/StepOne'
import StepTwo from './presentation/StepTwo'
import { Outlets, Transaction } from '../../../services/api'

const Step = Steps.Step
const StepStyle = {
  margin: '25px 0px 15px 0px',
}

class CashInPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      step: 0,
      featured:[],
      merchants:[],
      data:{
        merchant:{},
        amount:0,
        rate:0
      },
      profile:{}
    }
    this.selectedMerchant = this.selectedMerchant.bind(this)
    this.amountChange = this.amountChange.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handlePay = this.handlePay.bind(this)
    document.title = "Cash In - Ecashpay"
  }
  selectedMerchant(SelectedMerchant){
    this.setState(prevState => ({ data:{...prevState.data, merchant:SelectedMerchant}}))
  }
  amountChange(event){
    const theAmount = event.target.value
    let rate = 0
    if(theAmount <= 1000){
      rate = 10
    }else if(theAmount >= 1001 && theAmount <= 4000){
      rate = theAmount * 0.01
    }else if(theAmount >= 4000){
      rate = 40
    }
    this.setState(prevState => ({ data:{...prevState.data, amount:theAmount, rate: parseFloat(rate)}}))
  }
  handleNext(event){
    this.setState({step:this.state.step+1})
  }
  handlePrev(event){
    this.setState({step:this.state.step-1})
  }
  handlePay(){
    const Data = {
      outlet:this.state.data.merchant.id.toString(),
      amount: parseFloat(this.state.data.amount).toString(),
      currency:'PHP'
    }
    Transaction(Data, {'x-access-token':this.props.auth.token}).CashIn()
    .then(res=>{
      this.props.history.push(`/cashin/transactions/${res.data.no}`)
    }).catch(err=>{
      console.log(err)
      Modal.error({
        title: 'Cash In Error',
        content: err.response.data.message,
      })
    })
  }
  componentWillMount(){
    Outlets().Featured()
    .then(res=>{
      this.setState({featured:res.data})
    })
    Outlets().GetAll()
    .then(res=>{
      this.setState({merchants:res.data})
    })
    console.log(this.props)
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render(){
    return(
      <div>
        <Navigation location={this.props.location} style={{display:this.props.profile.type === 'merchant' ? 'none' : 'block'}}/>
        <Row type="flex" justify="center">
          <Col className="" xs={24} sm={24} md={24} lg={20} xl={18} xxl={14}>
            <Row type="flex" justify="center">
              <Col span={12}>
                <Steps current={this.state.step} style={StepStyle}>
                  <Step title="Choose" icon={<Icon type="shop" />}/>
                  <Step title="Amount" icon={<Icon type="wallet" />}/>
                  <Step title="Pay" icon={<Icon type="check-circle-o" />}/>
                </Steps>
              </Col>
              <Col span={19}>
                <QueueAnim type={['bottom', 'top']} ease={['easeOutBack', 'easeInOutCirc']}>
                  <div key="0">
                    <StepOne
                      visibility={this.state.step === 0 ? true : false}
                      merchants={this.state.merchants}
                      featured={this.state.featured}
                      select={this.selectedMerchant}
                      next={this.handleNext}/>
                    <StepTwo
                      visibility={this.state.step === 1 ? true : false}
                      form={this.props.form}
                      changeAmount={this.amountChange}
                      data={this.state.data}
                      prev={this.handlePrev}
                      next={this.handlePay}/>
                  </div>
                </QueueAnim>
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
    auth: state.auth,
    profile: state.profile
  }
}

export default Form.create()(connect(mapStateToProps)(CashInPage))
