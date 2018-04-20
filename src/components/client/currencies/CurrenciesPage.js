import React from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col} from 'antd'
import Currencies from './presentation/ManageCurrencies'
import { Wallet } from '../../../services/api'

class CurrenciesPage extends React.Component{
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
        Wallet({code:values.Currency}, {'x-access-token':this.props.auth.token}).Add()
        .then(res => {
          this.clearError()
          this.fetchCurrencies()//(optimize) just push the state currencies
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
    let currency = event.target.attributes.currency.value
    Wallet({code:currency}, {'x-access-token':this.props.auth.token}).MakePrimary()
    .then(res => {
      //this.clearError()
      this.fetchCurrencies()//(optimize) just apdate the selected currency to primary
    })
    .catch(err => {
      this.setState({serverErrorMessage:err.response.data.message})
      console.log(err)
    })
  }
  handleDeleteCurrency(currency, status){
    const Action = !status ? Wallet({code:currency}, {'x-access-token':this.props.auth.token}).Add() : Wallet({code:currency}, {'x-access-token':this.props.auth.token}).CloseCurrency()
    Action.then(res => {
      //this.clearError()
      this.fetchCurrencies()//(optimize) just apdate the selected currency to primary
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
  fetchCurrencies(){
    Wallet(null, {'x-access-token':this.props.auth.token}).GetAll()
    .then(res =>{
      this.setState({currencies:res.data.currencies})
    })
  }
  componentWillMount(){
    this.fetchCurrencies()
  }
  render(){
    //console.log(this.state)
    return (
      <Row type="flex" justify="center" style={{marginTop:'30px'}}>
        <Col className="" span={10}>
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
