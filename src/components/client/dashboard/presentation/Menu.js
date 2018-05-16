import React from 'react'
import { Link } from 'react-router-dom'
import Animate from 'rc-animate'
import {Row, Col, Spin, Icon} from 'antd'
// import FontAwesome from 'react-fontawesome'
// import SendMoney from '../../../../assets/images/Send_Money.png'
// import BuyLoad from '../../../../assets/images/Buy_Load_1.png'
// import PayBills from '../../../../assets/images/Pay_Bills.png'
// import BookTravel from '../../../../assets/images/Travel.png'
import SendMoney from '../../../../assets/svg/ecommerce/ecommerce_banknotes.svg'
import BuyLoad from '../../../../assets/svg/basic/basic_smartphone.svg'
import PayBills from '../../../../assets/svg/ecommerce/ecommerce_creditcard.svg'
import BookTravel from '../../../../assets/svg/basic/basic_compass.svg'

const Container = {
  marginTop:'30px',
  minHeight: '115px'
}
const Spinner = {
  marginTop:'10px',
  position:'absolute',
  width:'100%',
  fontSize:'30px',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  maxHeight: '100%',
  zIndex:1
}
// const ServicesIcons = {
//   marginTop:'10px',
//   fontSize:'50px',
//   color:'#707070'
// }
const TabImg = {
  maxHeight: '50px',
  margin: '20px 0px 5px 0px'
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
  fontSize:'16px',
  verticalAlign:'top',
  letterSpacing: '-1px'
}
export default ({ready, profile}) => {
  return(
    <Spin spinning={ready} style={Spinner} indicator={<Icon type="loading"/>}>
      <div style={Container}>
        <Row style={{clear:'both'}}>
          <Col className="" md={24} lg={12}>
            <div className="user-icon" style={{marginTop:'20px'}}>
              <div className="">
                <span className="fa fa-user-circle" name="user-circle" style={UserIcon} />
                <span className="" style={{display:'inline-block'}}>
                  <p className="" style={UserName}>{profile.firstName} {profile.lastName}</p><br/>
                  <p className="" style={EcashStatusDesc}>Seems like you don{`'`}t have an Ecashpay Card yet. <a href="/">Apply Now!</a></p>
                </span>
              </div>
            </div>
          </Col>
          <Col className="" xs={24} sm={24} lg={24} xl={12}>
            <Row type="flex" justify="end" className="tab-container">
              <Col className="" span={5}>
                <Animate transitionAppear transitionName="fade">
                  <Link to="/client/sendmoney" >
                    {/*<span className="la la-money" style={ServicesIcons}></span>*/}
                    <img src={SendMoney} alt="send money" style={TabImg}/>
                    <p>Send Money</p>
                  </Link>
                </Animate>
              </Col>
              <Col className="" span={5}>
                <Link to="/client/buyload" >
                  {/*<span className="la la-mobile" style={ServicesIcons}></span>*/}
                  <img src={BuyLoad} alt="buy money" style={TabImg}/>
                  <p>Buy Load</p>
                </Link>
              </Col>
              <Col className="" span={5}>
                <Link to="/client/paybills" >
                  {/*<span className="la la-credit-card" style={ServicesIcons}></span>*/}
                  <img src={PayBills} alt="pay bills" style={TabImg}/>
                  <p>Pay Bills</p>
                </Link>
              </Col>
              <Col className="" span={5}>
                <Link to="/client/booktravel" >
                  {/*<span className="la la-plane" style={ServicesIcons}></span>*/}
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
              transform: translate(50%, 0%);
            }
            @media (max-width: 1400px){
              .fa-user-circle{
                display:none !important
              }
            }
            @media (max-width: 1200px) {
              .user-icon{
                display:none !important
              }
              .ant-row-flex-end{
                justify-content:center
              }
            }
          `}
        </style>
      </div>
    </Spin>
  )
}
