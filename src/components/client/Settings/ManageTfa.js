import React from 'react'
import { List, Popover, Icon, Modal, Popconfirm } from 'antd'
import ShowQrCode from './presentation/ShowQrCode.js'
import VerifyTfa from './presentation/VerifyTfa.js'
import { Tfa } from '../../../services/api'

class ManageTfa extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      qrDisplay:false,
      verifyDisplay:false,
      requestStatus:false,
      tfa:{}
    }
    this.enableTfa = this.enableTfa.bind(this)
    this.cancelTfa = this.cancelTfa.bind(this)
    this.showVerify = this.showVerify.bind(this)
    this.cancelVerify = this.cancelVerify.bind(this)
    this.disableTfa = this.disableTfa.bind(this)
  }
  enableTfa(){
    this.setState({requestStatus:true})
    if(this.state.qrDisplay === false){
      Tfa(null,{'x-access-token':this.props.auth.token}).Request()
      .then(res=>{
        this.setState({tfa:res.data})
        this.setState({qrDisplay:true, requestStatus:false})
      }).catch(err=>{
        this.setState({requestStatus:false, qrDisplay:false})
      })
    }else {
      this.setState({requestStatus:false, qrDisplay:false})
    }
  }
  disableTfa(){
    this.setState({requestStatus:true})
    Tfa(null,{'x-access-token':this.props.auth.token}).Disable()
    .then(res=>{
      this.props.profileAction.loadProfile()
      this.setState({requestStatus:false})
      Modal.success({
        title: 'Success',
        content: 'Two-Factor Authentication is now disabled',
      })
    }).catch(err=>{
      console.log(err)
      //console.log(err.response.data)
      //this.setState({requestStatus:false, qrDisplay:false})
    })
  }
  cancelTfa(){
    this.setState({qrDisplay:false})
  }
  cancelVerify(){
    this.setState({verifyDisplay:false})
  }
  showVerify(){
    this.setState({qrDisplay:false, verifyDisplay:true})
  }
  render(){
    console.log(this.props.profile.tfa)
    return(
      <div>
        <List.Item actions={[
          <div>
            <a onClick={this.enableTfa} style={{display:this.props.profile.tfa ? 'none' : ''}}>{!(this.state.qrDisplay || this.state.verifyDisplay) && 'Enable 2FA'} </a>
            <Popconfirm placement="left" title="Are you sure disable Two-Factor Authentication?" onConfirm={this.disableTfa} okText="Yes" cancelText="No">
              <a style={{color:'#EE334B',display:!this.props.profile.tfa ? 'none' : ''}}>Disable 2FA</a>
            </Popconfirm>
            {this.state.requestStatus && <Icon type="loading"/>}
          </div>]}>
          <List.Item.Meta
            title={
              <div>
                Status <Popover placement="right" content='Two-factor authentication provides an extra layer of security for your account.'>
                  <Icon type='info-circle'/>
                </Popover>
              </div>}
            description={this.props.profile.tfa ? 'Enabled' : 'Disabled'}/>
        </List.Item>
        <ShowQrCode
          auth={this.props.auth}
          tfa={this.state.tfa}
          display={this.state.qrDisplay}
          cancel={this.cancelTfa}
          verify={this.showVerify}/>
        <VerifyTfa
          auth={this.props.auth}
          displayForm={this.state.verifyDisplay}
          cancel={this.cancelVerify}
          profile={this.props.profile}
          checkStatus={this.checkTfaStatus}
          profileAction={this.props.profileAction}/>
        <style>{`.ant-list-item{border:none}`}</style>
      </div>
    )
  }
}

export default ManageTfa
