import React from 'react'
import { connect } from 'react-redux'
import TransferForm from './presentation/TransferForm'
import { Row, Col, Form } from 'antd'
import QueueAnim from 'rc-queue-anim'
//services
import { Wallet } from '../../../services/api'

class TransferPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state={
      transferStatus:'New',
      buttonState:false,
      currencies:[],
      primary:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
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
                buttonState={this.state.buttonState}
                submit={this.handleSubmit}/>
            </div>
          </QueueAnim>
        </Col>
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
