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
import Requirements from './presentation/Requirements'
import ShortcutList from './presentation/ShortcutList'
import History from './presentation/History'
//services
import { Wallet, Transaction } from '../../../services/api'
//import { SubscribeToTimer } from '../../../services/socket'
//lodash
import { isEmpty } from 'lodash'

class DashboardPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      wallets:[],
      profile:{},
      transactions:[],
      timestamp: 'no timestamp yet',
      progress: 0,
    }
    document.title="Dashboard - Ecashpay"
    //SubscribeToTimer((timestamp) => this.setState({timestamp}))
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
  redirectPhoneVerification(){
    window.location.href='/client/verify/phone'
  }
  componentDidMount(){
    window.scrollTo(0, 0)
    this.props.profileActions.loadProfile()
    this.delayProgressBar = setTimeout(()=>this.progress(), 1000)
    this.loadWallets()
    this.loadTransactions()
  }
  componentWillUnmount(){
    clearTimeout(this.delayProgressBar)
  }
  progress(){
    let Levels = this.state.profile.levels;
    let Phone = this.state.profile.phone !=='' ? 25 : 0
    let ProgressValue = ((Levels !== undefined ? Object.keys(Levels).length : 0) * 37.5) + Phone
    this.setState({progress:ProgressValue})
  }
  render(){
    return(
      <Row type="flex" justify="center">
        <Col className="" xs={23} sm={23} md={22} lg={20} xl={18}>
          <Menu ready={isEmpty(this.state.profile)} profile={this.state.profile} />
        </Col>
        <Col className="" xs={23} sm={23} md={22} lg={20} xl={18}>
          <Row gutter={15}>
            <Col className="" md={24} lg={8} style={{marginBottom:'10px'}}>
              <WalletCard ready={isEmpty(this.state.wallets)} currencies={this.state.wallets}/>
              <ShortcutList/>
            </Col>
            <Col className="" xs={24} sm={24} md={24} lg={16}>
              <Requirements
                ready={isEmpty(this.state.profile)}
                levels={this.state.profile.levels}
                phone={this.state.profile.phone}
                progress={this.state.progress}/>
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
