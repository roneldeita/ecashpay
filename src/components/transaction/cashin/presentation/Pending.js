import React from 'react'
import { Popconfirm, Button } from 'antd'
import QueueAnim from 'rc-queue-anim'

const Title = {
  fontSize:'28px',
  fontWeight: 300,
  textAlign: 'center'
}

export default ({transaction, cancel, cancelState, toggleUpload}) => {
  return(
    <QueueAnim type={['bottom', 'top']} ease={['easeOutBack', 'easeInOutCirc']}>
      <div key="0">
        <p style={Title}>Complete Your Payment</p>
        <p style={{textAlign:'center'}}>Please complete your payment in 24 hours.</p>
        <ol>
          <li>
            <p>Complete payment at any <span style={{fontWeight:600}}>{transaction.outletName}</span> with the following account</p>
            <ul>
              <li>Account name: <span style={{fontWeight:600}}>ECASHPAY INC.</span></li>
              <li>Account number: <span style={{fontWeight:600}}>000910028667</span></li>
              <li>Account type: <span style={{fontWeight:600}}>CHECKING</span></li>
              <li>Amount due: <span style={{fontWeight:600}}>{transaction.totalAmount}</span></li>
            </ul>
          </li>
          <li>
            <p>Secure a copy of official receipt / deposit slip.</p>
          </li>
          <li>
            <p>Upon completion of payment, click on Mark as paid button.</p>
          </li>
        </ol>
        <div style={{textAlign:'center'}}>
          <Popconfirm placement="leftBottom" title="Are you sure you want to cancel this transaction?" onConfirm={cancel} okText="Yes" cancelText="No">
            <Button style={{marginRight:'8px'}}>{cancelState ? 'Canceling...' : 'Cancel'}</Button>
          </Popconfirm>
          <Button type="primary" onClick={toggleUpload}>Mark as paid</Button>
        </div>
      </div>
    </QueueAnim>
  )
}
