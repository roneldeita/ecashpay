import React from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col} from 'antd'
import QueueAnim from 'rc-queue-anim'
import Currencies from './presentation/ManageCurrencies'
import { Wallet } from '../../../services/api'

class CurrenciesPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      currencies:[],
      buttonState: false,
      serverErrorMessage:''
    }
    this.handleAddCurrency = this.handleAddCurrency.bind(this)
    this.handleMakePrimaryCurrency = this.handleMakePrimaryCurrency.bind(this)
    this.handleDeleteCurrency = this.handleDeleteCurrency.bind(this)
    this.clearError = this.clearError.bind(this)
  }
  buttonState(){
    setTimeout(() => {
      this.setState({buttonState:false})
    }, 500)
  }
  handleAddCurrency(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Wallet({currency:values.Currency}, {'x-access-token':this.props.auth.token}).Add()
        .then(res => {
          console.log(res.data)
          this.clearError()
          //(optimize) just push the new object to the state currencies
          let newCurrencies = Object.assign([], this.state.currencies)
          newCurrencies.push(res.data)
          this.setState({currencies: newCurrencies})
          this.buttonState()
        })
        .catch(err => {
          this.setState({serverErrorMessage:err.response.data.message})
          this.buttonState()
        })
      }else{
        this.buttonState()
      }
    })

    event.preventDefault()
  }
  handleMakePrimaryCurrency(event){
    let NewPrimaryCurrency = event.target.attributes.currency.value
    Wallet({currency:NewPrimaryCurrency, primary: true}, {'x-access-token':this.props.auth.token}).Update()
    .then(res => {
      //(optimize) just apdate the selected currency to primary
      let newCurrencies = this.state.currencies.map(currency => {
         if(currency.code === res.data.code){
           currency.primary = true
         }else {
           currency.primary = false
         }
         return currency
      })
      this.setState({currencies: newCurrencies})
    })
    .catch(err => {
      this.setState({serverErrorMessage:err.response.data.message})
      console.log(err)
    })
  }
  handleDeleteCurrency(SelectedCurrency, status){
    //const Action = !status ? Wallet({code:currency}, {'x-access-token':this.props.auth.token}).Add() : Wallet({code:currency}, {'x-access-token':this.props.auth.token}).CloseCurrency()
    Wallet({currency:SelectedCurrency, status: false}, {'x-access-token':this.props.auth.token}).Update()
      .then(res => {
      //(optimize) just apdate the selected currency status to response status
      console.log(res.data)
      let newCurrencies = this.state.currencies.map(currency => {
         if(currency.code === res.data.code){
           currency.status = res.data.status
         }
         return currency
      })
      this.setState({currencies: newCurrencies})
    })
    .catch(err => {
      this.setState({serverErrorMessage:err.response.data.message})
      console.log(err)
    })
  }
  clearError(){
    setTimeout(() => {
      this.setState({serverErrorMessage:''})
    }, 500)
  }
  componentDidMount(){
    Wallet(null, {'x-access-token':this.props.auth.token}).GetAll()
    .then(res =>{
      this.setState({currencies:res.data.currencies})
    })
  }
  render(){
    return (
      <Row type="flex" justify="center" style={{marginTop:'30px'}}>
        <Col className="" xs={22} md={16} lg={10}>
          <QueueAnim type={['top', 'bottom']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
            <div key="0">
              <Currencies
                form={this.props.form}
                currencies={this.state.currencies}
                addCurrency={this.handleAddCurrency}
                makePrimary={this.handleMakePrimaryCurrency}
                deleteCurrency={this.handleDeleteCurrency}
                buttonState={this.state.buttonState}
                error={this.state.serverErrorMessage}
                closeAlert={this.clearError}
              />
            </div>
          </QueueAnim>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth
  }
}

export default Form.create()(connect(mapStateToProps)(CurrenciesPage))
