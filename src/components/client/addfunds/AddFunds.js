import React from 'react'
import { Steps, Row, Col, Icon, Form } from 'antd'
import Navigation from '../common/Navigation'
import StepOne from './presentation/StepOne'
import StepTwo from './presentation/StepTwo'
import StepThree from './presentation/StepThree'

const Step = Steps.Step

const StepStyle = {
  margin: '40px 0px 35px 0px'
}

class AddFunds extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      step: 0,
      merchants:[
        {id:0, name:'7-Eleven', via:'Dragonpay'},
        {id:1, name:'BPI Express', via:'Dragonpay'},
        {id:2, name:'BPI', via:'Dragonpay'},
        {id:3, name:'Chinabank ', via:'Dragonpay'},
        {id:4, name:'Unionbank', via:'Dragonpay'},
        {id:5, name:'LBC Bills Express', via:'Dragonpay'},
        {id:6, name:'SM Bills Paymnet', via:'Dragonpay'},
        {id:7, name:'Robinsons Business Center', via:'Dragonpay'}
      ],
      data:{
        merchant:{},
        amount:0
      }
    }
    this.selectedMerchant = this.selectedMerchant.bind(this)
    this.enteredAmount = this.enteredAmount.bind(this)
    this.amountChange = this.amountChange.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }
  selectedMerchant(merchantId){
    this.setState(prevState => ({ data:{...prevState.data, merchant:merchantId}}))
  }
  amountChange(event){
    const theAmount = event.target.value
    this.setState(prevState => ({ data:{...prevState.data, amount:theAmount}}))
  }
  enteredAmount(amountEntered){
    // let newData = Object.assign({}, this.state.data);
    // newData.amount = amountEntered;
    // this.setState({data:newData})
    this.setState(prevState => ({ data:{...prevState.data, amount:amountEntered}}))
  }
  handleNext(event){
    this.setState({step:this.state.step+1})
  }
  handlePrev(event){
    this.setState({step:this.state.step-1})
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <Navigation location={this.props.location}/>
        <Row type="flex" justify="center">
          <Col className="" xs={23} sm={23} md={23} lg={18} xl={12}>
            <Row type="flex" justify="center">
              <Col span={17}>
                <Steps current={this.state.step} style={StepStyle}>
                  <Step title="Choose" icon={<Icon type="shop" />}/>
                  <Step title="Amount" icon={<Icon type="wallet" />}/>
                  <Step title="Pay" icon={<Icon type="check-circle-o" />}/>
                </Steps>
              </Col>
              <Col span={18}>
                <StepOne merchants={this.state.merchants} select={this.selectedMerchant} visibility={this.state.step === 0? true : false} next={this.handleNext}/>
                <StepTwo form={this.props.form} changeAmount={this.amountChange} data={this.state.data} visibility={this.state.step === 1? true : false} prev={this.handlePrev} next={this.handleNext}/>
                <StepThree visibility={this.state.step === 2? true : false} prev={this.handlePrev}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Form.create()(AddFunds)
