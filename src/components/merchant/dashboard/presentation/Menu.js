import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Card, Tag} from 'antd'
import QueueAnim from 'rc-queue-anim'

const CardStyle = {
  cursor:'default',
  backgroundColor: 'transparent',
  border:'none'
}
const MenuICon={
  color:'#0C0C0C',
  fontSize:50,
  margin: '20px 0px 5px 0px'
}
const UserName = {
  display:'inline',
  fontSize:'30px',
}
export default ({ready, profile}) => {
  return(
    <Card loading={ready} style={CardStyle}>
      <Row>
        <Col className="" md={24} lg={8}>
          <div className="user-icon">
            <QueueAnim type={['left', 'right']} delay="100" ease={['easeOutBack', 'easeInOutCirc']}>
              <div key="0">
                {/*<span className="fa fa-user-circle" name="user-circle" style={UserIcon} />*/}
                <span className="" style={{display:'inline-block'}}>
                  <br/>
                  <p className="" style={UserName}>{profile.name}</p><br/>
                  <Tag style={{color:'#1890ff', fontSize:'14px', border:'none', paddingTop:'1px'}}>{profile.account}</Tag>
                  {/*{Directlink()}*/}
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
                    <span className="pe-7s-repeat" style={MenuICon}></span>
                    {/*<img src={Addfunds} alt="send money" style={TabImg}/>*/}
                    <p>Transfer</p>
                  </Link>
                </div>
              </QueueAnim>
            </Col>
            <Col key="2" className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/sendmoney" >
                    <span className="pe-7s-note2" style={MenuICon}></span>
                    {/*<img src={SendMoney} alt="send money" style={TabImg}/>*/}
                    <p>History</p>
                  </Link>
                </div>
              </QueueAnim>
            </Col>
            <Col className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="400" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/buyload" >
                    <span className="pe-7s-news-paper" style={MenuICon}></span>
                    {/*<img src={BuyLoad} alt="buy money" style={TabImg}/>*/}
                    <p>Reports</p>
                  </Link>
                </div>
              </QueueAnim>
            </Col>
            <Col className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="500" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/buyload" >
                    <span className="pe-7s-tools" style={MenuICon}></span>
                    {/*<img src={BuyLoad} alt="buy money" style={TabImg}/>*/}
                    <p>Settings</p>
                  </Link>
                </div>
              </QueueAnim>
            </Col>
            <Col className="" span={4}>
              <QueueAnim type={['bottom', 'top']} delay="600" ease={['easeOutBack', 'easeInOutCirc']}>
                <div key="0">
                  <Link to="/client/paybills" >
                    <span className="pe-7s-credit" style={MenuICon}></span>
                    {/*<img src={PayBills} alt="pay bills" style={TabImg}/>*/}
                    <p>Ecashpay Card</p>
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
