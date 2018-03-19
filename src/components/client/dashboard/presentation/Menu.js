import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Spin, Icon} from 'antd'
import FontAwesome from 'react-fontawesome'
import SendMoney from '../../../../assets/images/Send_Money.png'
import BuyLoad from '../../../../assets/images/Buy_Load_1.png'
import PayBills from '../../../../assets/images/Pay_Bills.png'
import BookTravel from '../../../../assets/images/Travel.png'

const Container = {
  minHeight: '115px',
  borderBottom: '1px solid #dddddd'
}
const Spinner = {
  position:'absolute',
  height:'100%',
  width:'100%',
  fontSize:'30px',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  maxHeight: '100%',
  zIndex:1
}
const TabImg = {
  maxHeight: '70px',
  marginBottom: '5px'
}
const UserIconContainer = {
  display:'inline-block'
}
const UserIcon = {
  fontSize:'75px',
  marginRight: '15px',
  color:'#1dA1f2'
}
const UserName = {
  display:'inline',
  fontSize:'30px',
  verticalAlign:'top'
}
const EcashStatusDesc = {
  display:'inline',
  fontSize:'16px',
  verticalAlign:'top',
  letterSpacing: '-1px'
}
class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loader:true
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({loader:false})
    }, 500)
  }
  render(){
    return(
      <Spin spinning={this.state.loader} style={Spinner} indicator={<Icon type="loading"/>}>
        <div style={Container}>
          <Row style={{clear:'both'}}>
            <Col className="" span={12}>
              <div className="">
                <div className="" style={UserIconContainer}>
                  <FontAwesome name="user-circle" style={UserIcon} />
                </div>
                <div className="" style={{display:'inline-block'}}>
                  <p className="" style={UserName}>{this.props.profile.firstName} <span style={{color:'#999999'}}>{this.props.profile.lastName}</span></p><br/>
                  <p className="" style={EcashStatusDesc}>Seems like you don{`'`}t have an Ecashpay Card yet. <a href="/">Apply Now!</a></p>
                </div>
              </div>
            </Col>
            <Col className="" span={12}>
              <Row type="flex" justify="end" className="tab-container">
                <Col className="" span={5}>
                  <Link to="/client/sendmoney" >
                    <img src={SendMoney} alt="send money" style={TabImg}/>
                    <p>Send Money</p>
                  </Link>
                </Col>
                <Col className="" span={5}>
                  <Link to="/client/buyload" >
                    <img src={BuyLoad} alt="buy money" style={TabImg}/>
                    <p>Buy Load</p>
                  </Link>
                </Col>
                <Col className="" span={5}>
                  <Link to="/client/paybills" >
                    <img src={PayBills} alt="pay bills" style={TabImg}/>
                    <p>Pay Bills</p>
                  </Link>
                </Col>
                <Col className="" span={5}>
                  <Link to="/client/booktravel" >
                    <img src={BookTravel} alt="book travel" style={TabImg}/>
                    <p>Book Travel</p>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <style jsx="true">{`
              @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
              .tab-container{
                text-align:center
              }
              .tab-container a{
                color: rgba(0, 0, 0, 0.65) !important;
                font-weight: 500;
              }
              .tab-container p{
                font-size: 14px;
              }
              .anticon-spin{
                height: 100%;
                transform: translate(50%, 40%);
              }
            `}
          </style>
        </div>
      </Spin>
    )
  }
}
// const Menu = ({loader, profile}) => {
//
// }

export default Menu
