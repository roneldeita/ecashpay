import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as profileActions from '../../../actions/profileAction'
import CashInBreakdownList from './presentation/CashInBreakdownList'
//services
import { Transaction } from '../../../services/api'

class CashInBreakdownPage extends React.PureComponent{
  state = {
    transactions: []
  }
  loadTransactions(){
    Transaction(null, {'x-access-token':this.props.auth.token}).CashInBreakdown()
    .then(res => {
      //const DebitOnly = res.data.filter(transaction=> transaction.entryType === 'debit')
      this.setState({transactions:res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }
  componentDidMount(){
    window.scrollTo(0, 0)
    this.loadTransactions()
  }
  render(){
   return <CashInBreakdownList transactions={this.state.transactions} profile={this.props.profile}/> 
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
    profile: state.profile
  }
}
function mapDispatchToProps(dispatch){
  return {
    profileActions: bindActionCreators(profileActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CashInBreakdownPage)