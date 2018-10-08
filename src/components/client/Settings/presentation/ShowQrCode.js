import React from 'react'
import {Card, Tag, Icon, Button} from 'antd'
import QRCode from 'qrcode.react'

export default ({display, tfa, cancel, verify}) => (
  <div style={{display:display?'block':'none', margin:'-1px 0px 25px 0px'}}>
    <Card title="Enable Two-Factor Authentication.">
      <div style={{display:'flex', alignItems:'stretch', marginBottom:25}}>
        <div style={{marginRight:15}}>{tfa.url !== undefined && <QRCode value={tfa.url} size={130}/>}</div>
        <div>
          <p>Scan this QR code using your Google Authenticator.</p>
          <p>If you are unable to scan the code, you can also install the following private key in your authentication app. You may also backup it on paper.</p>
          <Tag color='blue' style={{fontSize:15}}>{tfa.key} <Icon type='copy'/></Tag>  
        </div>
      </div>
      <Button
        type="primary"
        htmlType="submit"
        style={{marginRight:8}}
        onClick={verify}>
        Verify code
      </Button>
      <Button 
        onClick={cancel}>
        Cancel
      </Button>
    </Card>
  </div>
)