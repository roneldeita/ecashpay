import React from 'react'
import { connect } from 'react-redux'
import {Row, Col} from 'antd'
import Menu from './presentation/Menu'
import WalletCard from './presentation/WalletCard'
import Requirements from './presentation/Requirements'
//services
//import { Wallet } from '../../../services/api'
//lodash
import { isEmpty } from 'lodash'

class DashboardPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      wallets:{}
    }
  }
  loadWallets(){
    // Wallet(null, {'x-access-token':this.props.auth.token}).GetAll()
    // .then(res => {
    //   //console.log(res)
    //   this.setState({wallets:res.data.currencies})
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }
  componentDidMount(){
    this.loadWallets()
  }
  render(){
    if(this.props.profile.phone === ''){
      window.location.href = '/client/verify/phone'
    }
    const IsWalletReady = isEmpty(this.state.wallets)
    const IsProfileReady = isEmpty(this.props.profile)
    return(
      <Row type="flex" justify="center">
        <Col className="" xs={24} sm={24} md={22} lg={18}>
          <Menu ready={IsProfileReady} profile={this.props.profile} />
        </Col>
        <Col className="" span={18} style={{marginTop:'30px'}}>
          <Row gutter={30}>
            <Col className="" md={24} lg={8} style={{marginBottom:'10px'}}>
              <WalletCard ready={IsWalletReady} currencies={this.state.wallets}/>
            </Col>
            <Col className="" md={24} lg={16}>
              {/*<Requirements ready={IsProfileReady} levels={this.props.profile.levels} />*/}
              <Requirements levels={this.props.profile.levels} phone={this.props.profile.phone} />
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

export default connect(mapStateToProps)(DashboardPage)
