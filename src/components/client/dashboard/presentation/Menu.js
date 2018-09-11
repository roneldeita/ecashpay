import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Card, Tag, Menu, Dropdown, Button, Icon} from 'antd'
import QueueAnim from 'rc-queue-anim'
import QRCode from 'qrcode.react'

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
// const EcashStatusDesc = {
//   fontSize:'16px',
//   verticalAlign:'top',
//   letterSpacing: '-1px'
// }
export default ({ready, profile}) => {
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

  // const Directlink = () => {
  //   if(!isEmpty(profile)){
  //     const Levels = profile.levels
  //     if(Levels.length === 0){
  //       return <p style={EcashStatusDesc}>Secure your account more by uploading your selfie with government-issued ID. <a href="/client/upload/id">Submit Now!</a></p>
  //     }else if(Levels.length === 1){
  //       if(includes(Levels, 1)){
  //         return <p style={EcashStatusDesc}>Submitting the right documents increases your maximum ecash balance. <a href="/client/upload/pob">Submit Now!</a></p>
  //       }else if(includes(Levels, 2)){
  //         return <p style={EcashStatusDesc}>Secure your account more by uploading your selfie with government-issued ID. <a href="/client/upload/id">Submit Now!</a></p>
  //       }
  //     }else{
  //       return <p style={EcashStatusDesc}>Seems like you don{`'`}t have an Ecashpay Card yet. <a href="/">Apply Now!</a></p>
  //     }
  //   }
  // }
  //console.log(profile)
  return(
    <Card className="menu-card" loading={ready} style={CardStyle}>
      <Row>
        <Col className="" md={24} lg={8}>
          <div className="user-icon">
            <QueueAnim type={['left', 'right']} delay="100" ease={['easeOutBack', 'easeInOutCirc']}>
              <div key="0">
                {/*<span className="fa fa-user-circle" name="user-circle" style={UserIcon} />*/}
                <QRCode value={profile.account} size={50}/>
                <span className="" style={{display:'inline-block', marginLeft:'10px'}}>
                  <br/>
                  <p className="" style={UserName}>{profile.firstName} {profile.lastName}</p><br/>
                  <Tag style={{color:'#1890ff', fontSize:'14px', border:'none', paddingTop:'1px'}}>{profile.account}</Tag>
                </span>
              </div>
            </QueueAnim>
          </div>
        </Col>
        <Col className="" xs={24} sm={24} md={0} lg={0} xl={0}>
          <div className="dropdown-menu">
            <Dropdown overlay={menu}  trigger={['click']}>
              <Button>Dashboard <Icon type="down" style={{float:'right', marginTop:'5px'}}/></Button>
            </Dropdown>
          </div>
        </Col>
        <Col className="" xs={0} sm={0} md={24} lg={24} xl={16}>
          <Row id="menu" type="flex" justify="end" className="tab-container">
            <Col className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="200" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/cash-in" >
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
                  <Link to="/send-money" >
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
                  <Link to="/buy-load" >
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
                  <Link to="/pay-bills" >
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
                  <Link to="/book-travel" >
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
          .dropdown-menu .ant-btn{
            text-align: left;
            width: 100%;
            height:42px;
            font-weight:500;
          }
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
            .menu-card .ant-card-body{
              padding: 15px 0px 15px 0px;
            }
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
