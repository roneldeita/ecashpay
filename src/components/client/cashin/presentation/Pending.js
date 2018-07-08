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
        <p style={Title}>Complete your payment</p>
        <ol>
          <li>
            <p>Complete payment at any <span style={{fontWeight:600}}>{transaction.outletName}</span> branch to the following account</p>
            <ul>
              <li>Amount due: <span style={{fontWeight:600}}>{transaction.totalAmount}</span></li>
              <li>Account name: <span style={{fontWeight:600}}>ECASHPAY INC.</span></li>
              <li>Account number: <span style={{fontWeight:600}}>000910028667</span></li>
              <li>Account type: <span style={{fontWeight:600}}>CHECKING</span></li>
            </ul>
            <br/>
            <p>Please ensure the amount and reference number match your order. Check deposits and payments through third-party agents and international wire transfer are not accepted.</p>
          </li>
          <li>
            <p>After completing your payment, click on Mark as paid button.</p>
              <div style={{textAlign:'center'}}>
                <Popconfirm placement="leftBottom" title="Are you sure you want to cancel this order?" onConfirm={cancel} okText="Yes" cancelText="No">
                  <Button style={{marginRight:'8px'}}>{cancelState ? 'Canceling...' : 'Cancel'}</Button>
                </Popconfirm>
                <Button type="primary" onClick={toggleUpload}>Mark as paid</Button>
              </div>
          </li>
        </ol>
      </div>
    </QueueAnim>
  )
}
