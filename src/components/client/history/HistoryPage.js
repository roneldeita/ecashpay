import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as profileActions from '../../../actions/profileAction'
import HistoryList from './presentation/HistoryList'
//services
import { Transaction } from '../../../services/api'

class HistoryPage extends React.PureComponent{
  state = {
    transactions: []
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
  componentDidMount(){
    window.scrollTo(0, 0)
    this.loadTransactions()
  }
  render(){
   return <HistoryList transactions={this.state.transactions} profile={this.props.profile}/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)