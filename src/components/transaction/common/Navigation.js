import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Menu, Dropdown, Button, Icon} from 'antd'
import {startCase} from 'lodash'

const Container = {
  marginTop:'-5px',
  textAlign:'center',
  backgroundColor:'#ffffff',
}
const ActiveTab = {
  height:'90px',
  display:'inline-block',
  width: '100%',
  paddingTop:'20px',
  borderBottom: '2px solid #1da1f2'
}
const Tab = {
  height:'90px',
  display:'inline-block',
  width: '100%',
  paddingTop:'20px',
}
// const TabImg = {
//   maxWidth: '50px',
// }
const TabIcon = {
  color:'#0C0C0C',
  fontSize:'40px',
  fontWeight:200,
}
const TabIconActive = {
  color:'#1da1f2',
  fontSize:'40px',
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
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/cash-in">Cash In</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/send-money">Send Money</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/buy-load">Buy Load</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/pay-bills">Pay Bills</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/book-travel">Book Travel</Link>
      </Menu.Item>
    </Menu>
  );
  return(
    <div className="" style={Container}>
      <Row type="flex" justify="center">
        <Col className="" xs={20} sm={18} md={0} lg={0} xl={0} xxl={0}>
          <div className="dropdown-menu">
            <Dropdown overlay={menu} trigger={['click']}>
              {/* remove the first slash, split url slashes and get the first item, replace the dash with space and uppercase all the first letter of the word*/}
              <Button>{startCase(Path.substring(1).split('/').shift().replace("-"," "))} <Icon type="down" style={{float:'right', marginTop:'5px'}}/></Button>
            </Dropdown>
          </div>
        </Col>
        <Col className="" xs={0} sm={0} md={24} lg={20} xl={18} xxl={14}>
          <Row type="flex" justify="center">
            <Col className="" span={4}>
              <Link to="/cash-in" style={(Path === '/cash-in' ?  ActiveTab : Tab)}>
                <span className="pe-7s-wallet" style={(Path === '/cash-in' ?  TabIconActive : TabIcon)}></span>
                <p style={(Path === '/cash-in' ?  TabNameActive : TabName)}>Cash In</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/send-money" style={(Path === '/send-money' ?  ActiveTab : Tab)}>
                <span className="pe-7s-cash" style={(Path === '/send-money' ?  TabIconActive : TabIcon)}></span>
                <p style={(Path === '/send-money' ?  TabNameActive : TabName)}>Send Money</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/buy-load" style={(Path === '/buy-load' ?  ActiveTab : Tab)}>
                <span className="pe-7s-phone" style={(Path === '/buy-load' ?  TabIconActive : TabIcon)}></span>
                {/*<img src={BuyLoad} alt="send money" style={TabImg}/>*/}
                <p style={(Path === '/buy-load' ?  TabNameActive : TabName)}>Buy Load</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/pay-bills" style={(Path === '/pay-bills' ?  ActiveTab : Tab)}>
                <span className="pe-7s-credit" style={(Path === '/pay-bills' ?  TabIconActive : TabIcon)}></span>
                {/*<img src={PayBills} alt="send money" style={TabImg}/>*/}
                <p style={(Path === '/pay-bills' ?  TabNameActive : TabName)}>Pay Bills</p>
              </Link>
            </Col>
            <Col className="" span={4}>
              <Link to="/book-travel" style={(Path === '/book-travel' ?  ActiveTab : Tab)}>
                <span className="pe-7s-map-2" style={(Path === '/book-travel' ?  TabIconActive : TabIcon)}></span>
                {/*<img src={BookTravel} alt="send money" style={TabImg}/>*/}
                <p style={(Path === '/book-travel' ?  TabNameActive : TabName)}>Book Travel</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <style jsx="true">{`
        .dropdown-menu{
          margin:25px 0px 20px 0px
        }
        .dropdown-menu .ant-btn{
          font-weight:500;
          text-align: left;
          width: 100%;
          height: 42px;
        }
      `}
      </style>
    </div>
  )
}
