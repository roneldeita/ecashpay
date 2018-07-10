import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Card, Tag} from 'antd'
import {includes, isEmpty} from 'lodash'
import QueueAnim from 'rc-queue-anim'
// import Addfunds from '../../../../assets/svg/ecommerce/ecommerce_wallet.svg'
// import SendMoney from '../../../../assets/svg/ecommerce/ecommerce_banknote.svg'
// import BuyLoad from '../../../../assets/svg/basic/basic_smartphone.svg'
// import PayBills from '../../../../assets/svg/ecommerce/ecommerce_creditcard.svg'
// import BookTravel from '../../../../assets/svg/basic/basic_compass.svg'

const CardStyle = {
  cursor:'default',
  backgroundColor: 'transparent',
  border:'none'
}
// const TabImg = {
//   maxHeight: '50px',
//   margin: '20px 0px 5px 0px'
// }
const MenuICon={
  color:'#0C0C0C',
  fontSize:50,
  margin: '20px 0px 5px 0px'
}
// const UserIcon = {
//   fontSize:'75px',
//   marginRight: '15px',
//   color:'#1dA1f2'
// }
const UserName = {
  display:'inline',
  fontSize:'30px',
}
const EcashStatusDesc = {
  fontSize:'16px',
  verticalAlign:'top',
  letterSpacing: '-1px'
}
export default ({ready, profile}) => {

  const Directlink = () => {
    if(!isEmpty(profile)){
      const Levels = profile.levels
      if(Levels.length === 0){
        return <p style={EcashStatusDesc}>Secure your account more by uploading your selfie with government-issued ID. <a href="/client/upload/id">Submit Now!</a></p>
      }else if(Levels.length === 1){
        if(includes(Levels, 1)){
          return <p style={EcashStatusDesc}>Submitting the right documents increases your maximum ecash balance. <a href="/client/upload/pob">Submit Now!</a></p>
        }else if(includes(Levels, 2)){
          return <p style={EcashStatusDesc}>Secure your account more by uploading your selfie with government-issued ID. <a href="/client/upload/id">Submit Now!</a></p>
        }
      }else{
        return <p style={EcashStatusDesc}>Seems like you don{`'`}t have an Ecashpay Card yet. <a href="/">Apply Now!</a></p>
      }
    }
  }
  //console.log(profile)
  return(
    <Card loading={ready} style={CardStyle}>
      <Row>
        <Col className="" md={24} lg={8}>
          <div className="user-icon">
            <QueueAnim type={['left', 'right']} delay="100" ease={['easeOutBack', 'easeInOutCirc']}>
              <div key="0">
                {/*<span className="fa fa-user-circle" name="user-circle" style={UserIcon} />*/}
                <span className="" style={{display:'inline-block'}}>
                  <p className="" style={UserName}>{profile.firstName} {profile.lastName}</p> <Tag style={{color:'#1890ff', fontSize:'14px', border:'none', paddingTop:'1px'}}>{profile.account}</Tag><br/>
                  {Directlink()}
                </span>
              </div>
            </QueueAnim>
          </div>
        </Col>
        <Col className="" xs={24} sm={24} lg={24} xl={16}>
          <Row id="menu" type="flex" justify="end" className="tab-container">
            <Col className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="200" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/cashin" >
                    <span className="pe-7s-wallet" style={MenuICon}></span>
                    {/*<img src={Addfunds} alt="send money" style={TabImg}/>*/}
                    <p>Cash In</p>
                  </Link>
                </div>
              </QueueAnim>
            </Col>
            <Col key="2" className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/sendmoney" >
                    <span className="pe-7s-cash" style={MenuICon}></span>
                    {/*<img src={SendMoney} alt="send money" style={TabImg}/>*/}
                    <p>Send Money</p>
                  </Link>
                </div>
              </QueueAnim>
            </Col>
            <Col className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="400" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/buyload" >
                    <span className="pe-7s-phone" style={MenuICon}></span>
                    {/*<img src={BuyLoad} alt="buy money" style={TabImg}/>*/}
                    <p>Buy Load</p>
                  </Link>
                </div>
              </QueueAnim>
            </Col>
            <Col className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="500" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/paybills" >
                    <span className="pe-7s-credit" style={MenuICon}></span>
                    {/*<img src={PayBills} alt="pay bills" style={TabImg}/>*/}
                    <p>Pay Bills</p>
                  </Link>
                </div>
              </QueueAnim>
            </Col>
            <Col className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="600" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/booktravel" >
                    <span className="pe-7s-compass" style={MenuICon}></span>
                    {/*<img src={BookTravel} alt="book travel" style={TabImg}/>*/}
                    <p>Book Travel</p>
                  </Link>
                </div>
              </QueueAnim>
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
            #menu.ant-row-flex-end{
              justify-content:center
            }
          }
        `}
      </style>
    </Card>
  )
}
