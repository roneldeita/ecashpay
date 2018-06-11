import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col} from 'antd'
import Addfunds from '../../../assets/svg/ecommerce/ecommerce_wallet.svg'
import AddfundsActive from '../../../assets/svg/ecommerce/ecommerce_wallet_active.svg'
import SendMoney from '../../../assets/svg/ecommerce/ecommerce_banknotes.svg'
import SendMoneyActive from '../../../assets/svg/ecommerce/ecommerce_banknotes_active.svg'
import BuyLoad from '../../../assets/svg/basic/basic_smartphone.svg'
import PayBills from '../../../assets/svg/ecommerce/ecommerce_creditcard.svg'
import BookTravel from '../../../assets/svg/basic/basic_compass.svg'

const Container = {
  marginTop:'-5px',
  textAlign:'center',
  backgroundColor:'#ffffff',
}
const ActiveTab = {
  display:'inline-block',
  width: '100%',
  padding:'20px 0px 5px 0px',
  borderBottom: '2px solid #1da1f2'
}
const Tab = {
  display:'inline-block',
  width: '100%',
  padding:'20px 0px 5px 0px',
}
const TabImg = {
  maxHeight: '50px',
}
// const TabIcon = {
//   fontSize:'40px',
//   fontWeight:200,
// }
const TabName = {
  color:'black',
  fontWeight:400,
  marginBottom:'0px'
}
const TabNameActive = {
  color:'#1da1f2',
  fontWeight:400,
  marginBottom:'0px'
}

export default ({location}) =>{
  const Path = location.pathname
  return(
    <div className="" style={Container}>
      <Row type="flex" justify="center">
        <Col className="" xs={24} sm={24} md={24} lg={18} xl={14}>
          <Row type="flex" justify="center">
            <Col className="" span={4}>
              <Link className="" to="/client/addfunds" style={(Path === '/client/addfunds' ? ActiveTab : Tab)}>
                {/*<Icon type="wallet" style={TabIcon}/>*/}
                <img src={(Path === '/client/addfunds' ?  AddfundsActive : Addfunds)} alt="send money" style={TabImg}/>
                <p style={(Path === '/client/addfunds' ?  TabNameActive : TabName)}>Cash In</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/client/sendmoney" style={ (Path === '/client/sendmoney' ? ActiveTab : Tab) }>
                <img src={(Path === '/client/sendmoney' ?  SendMoneyActive : SendMoney)} alt="send money" style={TabImg}/>
                <p style={(Path === '/client/sendmoney' ?  TabNameActive : TabName)}>Send Money</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/client/buyload" style={Tab}>
                <img src={BuyLoad} alt="send money" style={TabImg}/>
                <p style={(Path === '/client/buyload' ?  TabNameActive : TabName)}>Buy Load</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/client/buyload" style={Tab}>
                <img src={PayBills} alt="send money" style={TabImg}/>
                <p style={(Path === '/client/buyload' ?  TabNameActive : TabName)}>Pay Bills</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/client/buyload" style={Tab}>
                <img src={BookTravel} alt="send money" style={TabImg}/>
                <p style={(Path === '/client/buyload' ?  TabNameActive : TabName)}>Book Travel</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
