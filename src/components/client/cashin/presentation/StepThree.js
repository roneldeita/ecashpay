import React from 'react'
import {Card, Button, Col, Row, Divider, Icon, Tag} from 'antd'
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
  return(
    <Card loading={isEmpty(transaction)} hoverable  style={{cursor:'default '}}>
      <Row style={{marginTop:'50px'}} type="flex" justify="center">
        <Col span={22}>
          {transaction.status === 2 && !uploadState && <Canceled transaction={transaction}/>}
          {transaction.status === 0 && !uploadState && <Pending
            transaction={transaction}
            cancel={cancel}
            cancelState={cancelState}
            toggleUpload={toggleUpload}/>}
          {uploadState && transaction.status === 0 && <UploadSlip
            auth={auth}
            transaction={transaction}
            toggleUpload={toggleUpload}
            loadTransaction={loadTransaction}/>}
          {transaction.status === 4 && <Processing uploadState={uploadState}/>}
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
