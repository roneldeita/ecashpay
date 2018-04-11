import React from 'react'
import { connect } from 'react-redux'
import { Form, Row, Col} from 'antd'
import Currencies from './presentation/Currencies'
import { Wallet } from '../../../services/api'

class ManageCurrencies extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currencies:[],
      buttonState: false,
      serverErrorMessage:''
    }
    this.handleAddCurrency = this.handleAddCurrency.bind(this)
    this.handleDeleteCurrency = this.handleDeleteCurrency.bind(this)
    this.clearError = this.clearError.bind(this)
  }
  handleAddCurrency(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Wallet({code:values.Currency}, {token:this.props.auth.token}).Add()
        .then(res => {
          this.clearError()
          this.fetchCurrencies()
        })
        .catch(err => {
          this.setState({serverErrorMessage:err.response.data.message})
        })
      }
    })
    setTimeout(() => {
      this.setState({buttonState:false})
    }, 800)
    event.preventDefault()
  }
  handleDeleteCurrency(event){
    console.log(event)
  }
  clearError(){
    setTimeout(() => {
      this.setState({serverErrorMessage:''})
    }, 500)
  }
  fetchCurrencies(){
    Wallet(null, {token:this.props.auth.token}).GetAll()
    .then(res =>{
      this.setState({currencies:res.data.wallet.currencies})
    })
  }
  componentWillMount(){
    this.fetchCurrencies()
  }
  render(){
    console.log(this.state)
    return (
      <Row type="flex" justify="center" style={{marginTop:'30px'}}>
        <Col className="" span={10}>
          <Currencies
            form={this.props.form}
            currencies={this.state.currencies}
            addCurrency={this.handleAddCurrency}
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

export default Form.create()(connect(mapStateToProps)(ManageCurrencies))
