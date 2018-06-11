import React from 'react'
import { Steps, Row, Col, Icon, Form } from 'antd'
import Navigation from '../common/Navigation'
import StepOne from './presentation/StepOne'
import StepTwo from './presentation/StepTwo'
import StepThree from './presentation/StepThree'
import { Outlets } from '../../../services/api'

const Step = Steps.Step

const StepStyle = {
  margin: '15px 0px 15px 0px'
}

class AddFundsPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      step: 0,
      featured:[],
      merchants:[],
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
  componentWillMount(){
    Outlets().Featured()
    .then(res=>{
      this.setState({featured:res.data})
    })
    Outlets().GetAll()
    .then(res=>{
      this.setState({merchants:res.data})
    })
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <Navigation location={this.props.location}/>
        <Row type="flex" justify="center">
          <Col className="" xs={23} sm={23} md={23} lg={18} xl={14}>
            <Row type="flex" justify="center">
              <Col span={19}>
                <Steps current={this.state.step} style={StepStyle}>
                  <Step title="Choose" icon={<Icon type="shop" />}/>
                  <Step title="Amount" icon={<Icon type="wallet" />}/>
                  <Step title="Pay" icon={<Icon type="check-circle-o" />}/>
                </Steps>
              </Col>
              <Col span={19}>
                <StepOne merchants={this.state.merchants} featured={this.state.featured} select={this.selectedMerchant} visibility={this.state.step === 0? true : false} next={this.handleNext}/>
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

export default Form.create()(AddFundsPage)
