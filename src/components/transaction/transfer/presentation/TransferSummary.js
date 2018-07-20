import React from 'react'
import {Divider, Icon} from 'antd'

const DividerStyle = {
  marginTop:5,
  marginBottom:5
}
const rightContent = {
  float:'right',
  fontWeight: 500
}
export default ({transfer,okState}) => {
  return(
    <div>
      <p>Recipient Account ID <span style={rightContent}>{transfer.targetAccount}</span></p>
      <Divider dashed style={DividerStyle}/>
      <p>Transfer Amount <span style={rightContent}>{transfer.amount} {transfer.currency}</span></p>
      <Divider dashed style={DividerStyle}/>
      <p>Transfer Fee <Icon type="info-circle-o"/> <span style={rightContent}>0 {transfer.currency}</span></p>
      <Divider style={DividerStyle} />
      <p><b>Amount Due <span style={{float:'right'}}>{parseFloat(transfer.amount)+0+' '+ transfer.currency}</span></b></p>
    </div>
  )
}
