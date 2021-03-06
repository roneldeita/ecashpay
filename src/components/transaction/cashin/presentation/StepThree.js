import React from 'react'
import {Card, Col, Row, Divider, Icon, Tag, Popover} from 'antd'
import { Link } from 'react-router-dom'
import {isEmpty} from 'lodash'
import Pending from './Pending'
import Canceled from './Canceled'
import UploadSlip from './UploadSlip'
import Processing from './Processing'
import Completed from './Completed'

const DividerStyle = {
  margin:'10px 0px'
}
const rightContent = {
  textAlign:'right'
}
const Info ={
  color:'rgb(29, 161, 242)'
}

const StepThree = ({auth, profile, transaction, cancel, cancelState, uploadState, toggleUpload, loadTransaction}) => {
  const Status = (status) => {
    switch(status){
      case 'pending'://0
        return <Tag color="blue">Payment pending</Tag>
      case 'completed'://1
        return <Tag color="green">Completed</Tag>
      case 'cancelled'://2
        return <Tag>Cancelled</Tag>
      case 'expired'://3
        return <Tag>Expired</Tag>
      case 'processing'://4
        return <Tag color="blue">Verifying your payment</Tag>
      case 'rejected'://5
        return <Tag color="orange">Payment Rejected</Tag>
      default:
        //
    }
  }
  const Title = (
    <div>
      <span style={{fontSize:'14px', color:'#999999'}}>Transaction ID : </span>
      <span style={{fontSize:'18px'}}>{transaction.no}</span>
    </div>
  )
  return(
    <Card
      loading={isEmpty(transaction)}
      hoverable
      style={{cursor:'default '}}
      title={Title}
      actions={[<Link to={profile.role === 'individual' ? `/client/dashboard` : `/${profile.role}/dashboard`}><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
      <Row style={{marginTop:'10px'}} type="flex" justify="center">
        <Col span={22}>
          {transaction.status === 'pending' && !uploadState && <Pending
            transaction={transaction}
            cancel={cancel}
            cancelState={cancelState}
            toggleUpload={toggleUpload}/>}
          {transaction.status === 'completed' && <Completed/>}
          {transaction.status === 'cancelled' && !uploadState && <Canceled transaction={transaction}/>}
          {uploadState && transaction.status === 'pending' && <UploadSlip
            auth={auth}
            transaction={transaction}
            toggleUpload={toggleUpload}
            loadTransaction={loadTransaction}/>}
          {transaction.status === 'processing' && <Processing uploadState={uploadState}/>}
          {transaction.status === 'rejected' && <UploadSlip
            auth={auth}
            transaction={transaction}
            toggleUpload={toggleUpload}
            loadTransaction={loadTransaction}/>}
          <br/>
          <Row>
            <Col span={12}>Status</Col>
            <Col span={12} style={rightContent}>{Status(transaction.status)}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Recieving Currency</Col>
            <Col span={12} style={rightContent}>{transaction.currency}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>You will Receive</Col>
            <Col span={12} style={rightContent}>{transaction.amount +' '+ transaction.currency}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Ecashpay fee{` `}
              <Popover placement="right" content="This helps us run our platform and offer services like live support." trigger="click">
                <Icon type="info-circle" style={Info}/>
              </Popover>
            </Col>
            <Col span={12} style={rightContent}>{parseFloat(transaction.ecashFee).toFixed(2) +' '+transaction.currency}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>
              <Popover placement="right" content="This goes out to our channel partners as payment for their services" trigger="click">
                Channel fee <Icon type="info-circle" style={Info}/>
              </Popover>
            </Col>
            <Col span={12} style={rightContent}>{parseFloat(transaction.outletFee).toFixed(2) +' '+ transaction.currency }</Col>
          </Row>
          <Divider style={DividerStyle}/>
          <Row>
            <Col span={12}><b>{transaction.status === 'completed'?'Total Amount' :'Amount Due'}</b></Col>
            <Col span={12} style={rightContent}><b>{parseFloat(transaction.totalAmount)+' '+ transaction.currency}</b></Col>
          </Row>
          <Row style={{marginTop:'30px', marginBottom:'20px'}}>
            <Col span={24} style={{fontSize:'20px', fontWeight:200}}>
              Having a problem with this transaction? <span style={{color:'#1890ff'}} >Contact us.</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default StepThree
