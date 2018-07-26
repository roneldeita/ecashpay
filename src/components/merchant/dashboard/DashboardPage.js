import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as profileActions from '../../../actions/profileAction'
//antd
import {Row, Col} from 'antd'
//components
import Menu from './presentation/Menu'
import WalletCard from './presentation/WalletCard'
import History from './presentation/History'
//services
import { Wallet, Transaction } from '../../../services/api'
//lodash
import {isEmpty} from 'lodash'

class DashboardPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      wallets:[],
      profile:{},
      transactions:[]
    }
  }
  static getDerivedStateFromProps(props, state){
    return props
  }
  loadTransactions(){
    Transaction(null, {'x-access-token':this.props.auth.token}).All()
    .then(res => {
      //const DebitOnly = res.data.filter(transaction=> transaction.entryType === 'debit')
      this.setState({transactions:res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  loadWallets(){
    Wallet(null, {'x-access-token':this.props.auth.token}).GetAll()
    .then(res => {
      this.setState({wallets:res.data.currencies})
    })
    .catch(err => {
      console.log(err)
    })
  }
  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.profileActions.loadProfile()
    this.loadWallets()
    this.loadTransactions()
  }
  render(){
    return(
      <Row type="flex" justify="center">
        <Col className="" xs={24} sm={24} md={22} lg={20} xl={18}>
          <Menu ready={isEmpty(this.state.profile)} profile={this.state.profile} />
        </Col>
        <Col className="" xs={24} sm={24} md={22} lg={20} xl={18}>
          <Row gutter={15}>
            <Col className="" md={24} lg={8} style={{marginBottom:'10px'}}>
              <WalletCard ready={isEmpty(this.state.wallets)} currencies={this.state.wallets}/>
            </Col>
            <Col className="" xs={24} sm={24} md={24} lg={16}>
              <History transactions={this.state.transactions} profile={this.props.profile}/>
            </Col>
          </Row>
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
function mapDispatchToProps(dispatch){
  return {
    profileActions: bindActionCreators(profileActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
