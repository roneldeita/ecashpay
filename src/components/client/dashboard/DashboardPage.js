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
import History from './presentation/History'
//services
import { Wallet, Transaction } from '../../../services/api'
//import { SubscribeToTimer } from '../../../services/socket'
//lodash
import { isEmpty } from 'lodash'

class DashboardPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      wallets:{},
      profile:{},
      transactions:[],
      timestamp: 'no timestamp yet',
      progress: 0,
    }
    //SubscribeToTimer((timestamp) => this.setState({timestamp}))
  }
  loadTransactions(){
    Transaction(null, {'x-access-token':this.props.auth.token}).All()
    .then(res => {
      this.setState({transactions:res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  loadWallets(){
    Wallet(null, {'x-access-token':this.props.auth.token}).GetAll()
    .then(res => {
      //console.log(res)
      this.setState({wallets:res.data.currencies})
    })
    .catch(err => {
      console.log(err)
    })
  }
  redirectPhoneVerification(){
    window.location.href='/client/verify/phone'
    //this.props.history.push('/client/verify/phone')
  }
  componentWillMount(){
    this.props.profileActions.loadProfile()
    if(this.props.profile.phone === ''){
      this.redirectPhoneVerification()
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.profile.phone === ''){
      this.redirectPhoneVerification()
    }
    this.setState({profile:nextProps.profile})
  }
  componentDidMount(){
    this.setState({profile:this.props.profile})
    this.delayProgressBar = setTimeout(()=>this.progress(), 600)
    this.loadWallets()
    this.loadTransactions()
  }
  componentWillUnmount(){
    clearTimeout(this.delayProgressBar)
  }
  progress(){
    let Levels = this.state.profile.levels;
    let ProgressValue = ((Levels !== undefined ? Object.keys(Levels).length : 0) * 25) + 25
    this.setState({progress:ProgressValue})
  }
  render(){
    return(
      <Row type="flex" justify="center">
        <Col className="" xs={24} sm={24} md={22} lg={18}>
          <Menu ready={isEmpty(this.state.profile)} profile={this.state.profile} />
        </Col>
        <Col className="" span={18}>
          <Row gutter={20}>
            <Col className="" md={24} lg={8} style={{marginBottom:'10px'}}>
              <WalletCard ready={isEmpty(this.state.wallets)} currencies={this.state.wallets}/>
            </Col>
            <Col className="" xs={24} sm={24} md={24} lg={16}>
              {/*<Requirements ready={IsProfileReady} levels={this.props.profile.levels} />*/}
              <Requirements
                ready={isEmpty(this.state.profile)}
                levels={this.state.profile.levels}
                phone={this.state.profile.phone}
                progress={this.state.progress}/>
              <History transactions={this.state.transactions}/>
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
