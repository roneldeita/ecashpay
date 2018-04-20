import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col} from 'antd'
import Addfunds from '../../../assets/svg/ecommerce/ecommerce_wallet.svg'
import SendMoney from '../../../assets/svg/ecommerce/ecommerce_banknotes.svg'
import BuyLoad from '../../../assets/svg/basic/basic_smartphone.svg'
import PayBills from '../../../assets/svg/ecommerce/ecommerce_creditcard.svg'
import BookTravel from '../../../assets/svg/basic/basic_compass.svg'

const Container = {
  textAlign:'center',
  backgroundColor:'#ffffff',
}
const ActiveTab = {
  display:'inline-block',
  width: '100%',
  padding:'20px 0px 5px 0px',
  color:'rgb(29, 161, 242)',
  borderBottom: '2px solid rgb(29, 161, 242)'
}
const Tab = {
  display:'inline-block',
  width: '100%',
  padding:'20px 0px 5px 0px',
  color:'rgba(0, 0, 0, 0.65) !important'
}
const TabImg = {
  maxHeight: '45px',
}
// const TabIcon = {
//   fontSize:'40px',
//   fontWeight:200,
// }
const TabName = {
  fontSize:'18px',
  fontWeight:300,
  marginBottom:'0px'
}

export default ({location}) =>{
  const Path = location.pathname
  return(
    <div className="" style={Container}>
      <Row type="flex" justify="center">
        <Col className="" xs={24} sm={24} md={24} lg={18} xl={12}>
          <Row>
            <Col className="" span={4}>
              {/*<Link to="/client/dashboard" style={Tab}>
                <Icon type="arrow-left" style={TabIcon}/>
                <p style={TabName}>Dashboard</p>
              </Link>*/}
            </Col>
            <Col className="" span={4}>
              <Link className="" to="/client/addfunds" style={ (Path === '/client/addfunds' ? ActiveTab : Tab) }>
                {/*<Icon type="wallet" style={TabIcon}/>*/}
                <img src={Addfunds} alt="send money" style={TabImg}/>
                <p style={TabName}>Add Funds</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/client/sendmoney" style={ (Path === '/client/sendmoney' ? ActiveTab : Tab) }>
                {/*<span className="la la-money" style={TabIcon}/>*/}
                <img src={SendMoney} alt="send money" style={TabImg}/>
                <p style={TabName}>Send Money</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/client/buyload" style={Tab}>
                {/*<span className="la la-mobile" style={TabIcon}/>*/}
                <img src={BuyLoad} alt="send money" style={TabImg}/>
                <p style={TabName}>Buy Load</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/client/buyload" style={Tab}>
                {/*<span className="la la-credit-card" style={TabIcon}/>*/}
                <img src={PayBills} alt="send money" style={TabImg}/>
                <p style={TabName}>Pay Bills</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/client/buyload" style={Tab}>
                {/*<Icon type="shop" style={TabIcon}/>*/}
                <img src={BookTravel} alt="send money" style={TabImg}/>
                <p style={TabName}>Book Travel</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
