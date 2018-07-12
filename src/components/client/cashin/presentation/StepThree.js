import React from 'react'
import {Card, Col, Row, Divider, Icon, Tag} from 'antd'
import {isEmpty} from 'lodash'
import Pending from './Pending'
import Canceled from './Canceled'
import UploadSlip from './UploadSlip'
import Processing from './Processing'

const DividerStyle = {
  margin:'10px 0px'
}
const rightContent = {
  textAlign:'right'
}
const Info ={
  color:'rgb(29, 161, 242)'
}

const StepThree = ({auth, transaction, cancel, cancelState, uploadState, toggleUpload, loadTransaction}) => {
  console.log(transaction)
  const Status = (status) => {
    switch(status){
      case 0:
        return <Tag color="blue">Payment pending</Tag>
      case 1:
        return <Tag color="green">Done</Tag>
      case 2:
        return <Tag>Canceled</Tag>
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
    <Card loading={isEmpty(transaction)} hoverable  style={{cursor:'default '}} title={Title}>
      <Row style={{marginTop:'10px'}} type="flex" justify="center">
        <Col span={22}>
          {transaction.status === 0 && !uploadState && <Pending
            transaction={transaction}
            cancel={cancel}
            cancelState={cancelState}
            toggleUpload={toggleUpload}/>}
          {transaction.status === 2 && !uploadState && <Canceled transaction={transaction}/>}
          {uploadState && transaction.status === 0 && <UploadSlip
            auth={auth}
            transaction={transaction}
            toggleUpload={toggleUpload}
            loadTransaction={loadTransaction}/>}
          {transaction.status === 4 && <Processing uploadState={uploadState}/>}
          {transaction.status === 5 && <UploadSlip
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
            <Col span={12}>Ecashpay fee <Icon type="info-circle" style={Info}/></Col>
            <Col span={12} style={rightContent}>{'0 ' + transaction.currency}</Col>
          </Row>
          <Divider dashed style={DividerStyle}/>
          <Row>
            <Col span={12}>Merchant Service fee <Icon type="info-circle" style={Info}/></Col>
            <Col span={12} style={rightContent}>{transaction.fee +' '+ transaction.currency }</Col>
          </Row>
          <Divider style={DividerStyle}/>
          <Row>
            <Col span={12}><b>Amount Due</b></Col>
            <Col span={12} style={rightContent}><b>{parseFloat(transaction.amount)+parseFloat(transaction.fee) +' '+ transaction.currency}</b></Col>
          </Row>
          <Row style={{marginTop:'30px', marginBottom:'20px'}}>
            <Col span={24} style={{fontSize:'20px', fontWeight:200}}>
              Having a problem with this transaction? <a>Contact us.</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default StepThree
