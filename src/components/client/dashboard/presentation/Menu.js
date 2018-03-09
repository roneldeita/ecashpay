import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Spin, Icon} from 'antd'
import SendMoney from '../../../../assets/images/Send_Money.png'
import BuyLoad from '../../../../assets/images/Buy_Load.png'
import PayBills from '../../../../assets/images/Pay_Bills.png'
import BookTravel from '../../../../assets/images/Travel.png'

const Container = {
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
const TabContainer = {
  float:'right'
}
const TabChild = {
  width: '100px',
  textAlign: 'center',
  display:'inline-block',
  margin: '0px 25px',
}
const TabImg = {
  height: '70px',
  marginBottom: '5px'
}
class Menu extends React.Component{
  render(){
    return(
      <div style={Container}>
        <Spin spinning={this.props.loader} style={Spinner} indicator={<Icon type="loading"/>}>
          <Row style={{clear:'both'}}>
            <Col className="" span={12}>
            </Col>
            <Col className="" span={12}>
              <div style={TabContainer} className="tab-container">
                <div style={TabChild}><Link to="" ><img src={SendMoney} alt="send money" style={TabImg}/><p>Send Money</p></Link></div>
                <div style={TabChild}><Link to="" ><img src={BuyLoad} alt="buy money" style={TabImg}/><p>Buy Load</p></Link></div>
                <div style={TabChild}><Link to="" ><img src={PayBills} alt="pay bills" style={TabImg}/><p>Pay Bills</p></Link></div>
                <div style={TabChild}><Link to="" ><img src={BookTravel} alt="book travel" style={TabImg}/><p>Book Travel</p></Link></div>
              </div>
            </Col>
          </Row>
        </Spin>
        <style jsx="true">{`
          .tab-container a{
            color: rgba(0, 0, 0, 0.65) !important;
            font-weight: 500
          }
          .tab-container p{
            font-size: 14px
          }
          .anticon-spin{
            height: 100%;
            transform: translate(50%, 40%);
          }
        `}
        </style>
      </div>
    )
  }
}

export default Menu
