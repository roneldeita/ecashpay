import React from 'react'
import { connect } from 'react-redux'
import TransferForm from './presentation/TransferForm'
import TransferSummary from './presentation/TransferSummary'
import { Row, Col, Form, Modal } from 'antd'
import QueueAnim from 'rc-queue-anim'
//services
import { Wallet, Transaction } from '../../../services/api'

class TransferPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      buttonState:false,
      summaryVisible:false,
      okState:false,
      currencies:[],
      transfer:{},
      primary:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleTransfer = this.handleTransfer.bind(this)
  }
  handleCancel(){
    this.setState({buttonState:false})
    this.setState({summaryVisible:false})
    this.setState({okState:false})
  }
  handleTransfer(){
    this.setState({buttonState:true})
    Transaction(this.state.transfer, {'x-access-token':this.props.auth.token}).Transfer()
    .then(res=>{
      this.props.form.resetFields()
      Modal.success({
        title: 'Transfer Success',
        content: 'You have successfully sent '+ this.state.transfer.currency + this.state.transfer.amount + ' to ' + this.state.transfer.targetAccount
      })
      setTimeout(()=>{
        this.setState({buttonState:false})
        this.setState({summaryVisible:false})
      }, 800)
    }).catch(err=>{
      Modal.error({
        title: 'Transfer Error',
        content: err.response.data.message
      })
      setTimeout(()=>{
        this.setState({buttonState:false})
      }, 800)
    })
  }
  handleSubmit(event){
    //this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        const Data = {
          targetAccount:values['Account Number'],
          amount:values.Amount,
          currency:values.Currency
        }
        this.setState({transfer: Data})
        this.setState({summaryVisible:true})
      }else{
        // setTimeout(()=>{
        //   this.setState({buttonState:false})
        // }, 800)
      }
    })
    event.preventDefault()
  }
  loadWallets(){
    Wallet(null, {'x-access-token':this.props.auth.token}).GetAll()
    .then(res => {
      this.setState({currencies:res.data.currencies})
      const Primary = res.data.currencies.filter(currency => currency.primary === true )
      this.setState({primary:Primary[0].code})
    })
    .catch(err => {
      console.log(err)
    })
  }
  componentDidMount(){
    this.loadWallets()
  }
  render(){
    return(
      <Row type="flex" justify="center" style={{marginTop:'50px'}}>
        <Col sm={18} md={14} lg={12} xl={10} xxl={8}>
          <QueueAnim type={['top', 'bottom']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
            <div key="0">
              <TransferForm
                currencies={this.state.currencies}
                primary={this.state.primary}
                form={this.props.form}
                submit={this.handleSubmit}
                summaryVisible={this.state.summaryVisible}/>
            </div>
          </QueueAnim>
        </Col>
        <Modal
          title="Transfer Summary"
          visible={this.state.summaryVisible}
          onOk={this.handleTransfer}
          okText={this.state.buttonState ? 'Transferring...' : 'Proceed'}
          confirmLoading={this.state.buttonState}
          onCancel={this.handleCancel}
          cancelText="Edit">
          <TransferSummary
            transfer={this.state.transfer}/>
        </Modal>
      </Row>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    profile: state.profile,
    auth: state.auth
  }
}

export default Form.create()(connect(mapStateToProps)(TransferPage))
