import React from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'antd'
import Menu from './presentation/Menu'
import WalletCard from './presentation/WalletCard'
import Requirements from './presentation/Requirements'
//services
import { Wallet } from '../../../services/api'
//lodash
import { isEmpty } from 'lodash'

class ClientDashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      wallets:{}
    }
  }
  loadWallets(){
    Wallet(null, {token:this.props.auth.token}).GetAll()
    .then(res => {
      this.setState({wallets:res.data.wallet.currencies})
    })
    .catch(err => {
      console.log(err)
    })
  }
  componentDidMount(){
    this.loadWallets()
  }
  render(){
    //console.log(this.state.wallets)
    const IsWalletReady = isEmpty(this.state.wallets)
    const IsProfileReady = isEmpty(this.props.profile)
    return(
      <Row type="flex" justify="center">
        <Col className="" span={18}>
          <Menu ready={IsProfileReady} profile={this.props.profile} />
        </Col>
        <Col className="" span={18} style={{marginTop:'30px'}}>
          <Row gutter={30}>
            <Col className="" span={8}>
              <WalletCard ready={IsWalletReady} currencies={this.state.wallets}/>
            </Col>
            <Col className="" span={16}>
              <Requirements ready={IsWalletReady} progress={20} />
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

export default connect(mapStateToProps)(ClientDashboard)
