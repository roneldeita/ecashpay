import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col} from 'antd'
// import Addfunds from '../../../assets/svg/ecommerce/ecommerce_wallet.svg'
// import AddfundsActive from '../../../assets/svg/ecommerce/ecommerce_wallet_active.svg'
// import SendMoney from '../../../assets/svg/ecommerce/ecommerce_banknote.svg'
// import SendMoneyActive from '../../../assets/svg/ecommerce/ecommerce_banknote_active.svg'
// import BuyLoad from '../../../assets/svg/basic/basic_smartphone.svg'
// import PayBills from '../../../assets/svg/ecommerce/ecommerce_creditcard.svg'
// import BookTravel from '../../../assets/svg/basic/basic_compass.svg'

const Container = {
  marginTop:'-5px',
  textAlign:'center',
  backgroundColor:'#ffffff',
}
const ActiveTab = {
  height:'100px',
  display:'inline-block',
  width: '100%',
  padding:'15px 0px 5px 0px',
  borderBottom: '2px solid #1da1f2'
}
const Tab = {
  height:'100px',
  display:'inline-block',
  width: '100%',
  padding:'15px 0px 5px 0px',
}
// const TabImg = {
//   maxWidth: '50px',
// }
const TabIcon = {
  color:'#0C0C0C',
  fontSize:'50px',
  fontWeight:200,
}
const TabIconActive = {
  color:'#1da1f2',
  fontSize:'50px',
  fontWeight:200,
}
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
        <Col className="" xs={24} sm={24} md={24} lg={20} xl={18} xxl={14}>
          <Row type="flex" justify="center">
            <Col className="" span={4}>
              <Link to="/cashin" style={(Path === '/cashin' ?  ActiveTab : Tab)}>
                <span className="pe-7s-wallet" style={(Path === '/cashin' ?  TabIconActive : TabIcon)}></span>
                <p style={(Path === '/cashin' ?  TabNameActive : TabName)}>Cash In</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/sendmoney" style={(Path === '/sendmoney' ?  ActiveTab : Tab)}>
                <span className="pe-7s-cash" style={(Path === '/sendmoney' ?  TabIconActive : TabIcon)}></span>
                <p style={(Path === '/sendmoney' ?  TabNameActive : TabName)}>Send Money</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/buyload" style={(Path === '/buyload' ?  ActiveTab : Tab)}>
                <span className="pe-7s-phone" style={(Path === '/buyload' ?  TabIconActive : TabIcon)}></span>
                {/*<img src={BuyLoad} alt="send money" style={TabImg}/>*/}
                <p style={(Path === '/buyload' ?  TabNameActive : TabName)}>Buy Load</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/paybills" style={(Path === '/paybills' ?  ActiveTab : Tab)}>
                <span className="pe-7s-credit" style={(Path === '/paybills' ?  TabIconActive : TabIcon)}></span>
                {/*<img src={PayBills} alt="send money" style={TabImg}/>*/}
                <p style={(Path === '/paybills' ?  TabNameActive : TabName)}>Pay Bills</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/booktravel" style={(Path === '/booktravel' ?  ActiveTab : Tab)}>
                <span className="pe-7s-map-2" style={(Path === '/booktravel' ?  TabIconActive : TabIcon)}></span>
                {/*<img src={BookTravel} alt="send money" style={TabImg}/>*/}
                <p style={(Path === '/booktravel' ?  TabNameActive : TabName)}>Book Travel</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
