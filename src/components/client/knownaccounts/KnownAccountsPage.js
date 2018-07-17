import React from 'react'
import { Form } from 'antd'
import ManageKnownAccounts from './presentation/ManageKnownAccounts'

class KnowAccountsPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState:false,
      accounts:[
        {id:'1', account:'6654933508527626'},
        {id:'2', account:'6788557225735884'},
        {id:'3', account:'4692190320248819'},
        {id:'4', account:'9838658235728902'},
        {id:'5', account:'0939849579983987'}
      ]
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleAdd(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let newAccounts = Object.assign([], this.state.accounts)
        let Id = this.state.accounts.length++
        newAccounts.push({id:Id, account:values['Account ID']})
        this.props.form.resetFields()
        this.setState({accounts:newAccounts})
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 500)
      }else{
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 500)
      }
    })
    event.preventDefault()
  }
  handleRemove(id){
    let newAccounts = this.state.accounts.filter(account => account.id !== id)
    this.setState({accounts:newAccounts})
  }
  render(){
    console.log(this.state)
    return(
      <ManageKnownAccounts
        form={this.props.form}
        buttonState={this.state.buttonState}
        accounts={this.state.accounts}
        deleteAccount={this.handleRemove}
        addAccount={this.handleAdd}/>
    )
  }
}

export default Form.create()(KnowAccountsPage)
