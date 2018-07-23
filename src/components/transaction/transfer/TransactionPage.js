import React from 'react'
import {  Row, Col,  Card, Divider, Icon } from 'antd'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Transaction } from '../../../services/api'
import Navigation from '../common/Navigation'
import { isEmpty } from 'lodash'

class TransactionPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      transaction:{}
    }
  }
  loadTransaction(){
    Transaction({transaction:this.props.match.params.no}, {'x-access-token':this.props.auth.token}).Get()
    .then(res=>{
      this.setState({transaction:res.data})
    })
    .catch(err=>{
      console.log(err)
    })
  }
  componentDidMount(){
    this.loadTransaction()
  }
  render(){
    const rightContent = {
      textAlign:'right'
    }
    const DividerStyle = {
      margin:'10px 0px'
    }
    const Info ={
      color:'rgb(29, 161, 242)'
    }
    const Title = (
      <div>
        <span style={{fontSize:'14px', color:'#999999'}}>Transaction ID : </span>
        <span style={{fontSize:'18px'}}>{this.state.transaction.no}</span>
      </div>
    )
    console.log(this.state.transaction)
    return(
      <div>
        <Navigation location={this.props.location}/>
        <Row style={{marginTop:'10px'}} type="flex" justify="center">
          <Col className="" xs={24} sm={24} md={24} lg={20} xl={10}>
            <br/>
            <Card
              loading={isEmpty(this.state.transaction)}
              hoverable  style={{cursor:'default '}}
              title={Title}
              actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
              {this.state.transaction.entryType ==='debit' &&
                <div>
                  <Row>
                    <Col span={12}>Sender Account ID</Col>
                    <Col span={12} style={rightContent}>{this.state.transaction.sourceAccount}</Col>
                  </Row>
                  <Divider dashed style={DividerStyle}/>
                  <Row>
                    <Col span={12}>Date</Col>
                    <Col span={12} style={rightContent}>{this.state.transaction.createdAt}</Col>
                  </Row>
                  <Divider dashed style={DividerStyle}/>
                  <Row>
                    <Col span={12}>Transfer Amount</Col>
                    <Col span={12} style={rightContent}>{`${this.state.transaction.amount} ${this.state.transaction.currency}`}</Col>
                  </Row>
                  <Divider dashed style={DividerStyle}/>
                  <Row>
                    <Col span={12}>Transfer Fee <Icon type="info-circle" style={Info}/></Col>
                    <Col span={12} style={rightContent}>{`${this.state.transaction.ecashFee} ${this.state.transaction.currency}`}</Col>
                  </Row>
                  <Divider style={DividerStyle}/>
                  <Row>
                    <Col style={{fontWeight:500}} span={12}>Total Amount</Col>
                    <Col style={{fontWeight:600, textAlign:'right'}} span={12}>{`${this.state.transaction.totalAmount} ${this.state.transaction.currency}`}</Col>
                  </Row>
                </div>
              }
              {this.state.transaction.entryType ==='credit' &&
                <div>
                  <Row>
                    <Col span={12}>Recipient Account ID</Col>
                    <Col span={12} style={rightContent}>{this.state.transaction.targetAccount}</Col>
                  </Row>
                  <Divider dashed style={DividerStyle}/>
                  <Row>
                    <Col span={12}>Date</Col>
                    <Col span={12} style={rightContent}><Moment format="MMMM D, Y hh:mm:ss A" date={this.state.transaction.createdAt}/></Col>
                  </Row>
                  <Divider dashed style={DividerStyle}/>
                  <Row>
                    <Col span={12}>Transfer Amount</Col>
                    <Col span={12} style={rightContent}>{`${this.state.transaction.amount} ${this.state.transaction.currency}`}</Col>
                  </Row>
                  <Divider dashed style={DividerStyle}/>
                  <Row>
                    <Col span={12}>Transfer Fee <Icon type="info-circle" style={Info}/></Col>
                    <Col span={12} style={rightContent}>{`${this.state.transaction.ecashFee} ${this.state.transaction.currency}`}</Col>
                  </Row>
                  <Divider style={DividerStyle}/>
                  <Row>
                    <Col style={{fontWeight:500}} span={12}>Total Amount</Col>
                    <Col style={{fontWeight:600, textAlign:'right'}} span={12}>{`${this.state.transaction.totalAmount} ${this.state.transaction.currency}`}</Col>
                  </Row>
                </div>
              }
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(TransactionPage)
