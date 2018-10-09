import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Icon, Modal } from 'antd'
//services
import { Auth } from '../../../services/api'

const AntContainer = {
  margin: '50px 0px 100px 0px'
}
const Head = {
  backgroundColor: '#1dA1f2',
  color: '#ffffff',
  textAlign: 'center',
  padding: '40px 10px 5px 10px'
}
const Title = {
  color:'#ffffff',
  fontSize: '32px',
  fontWeight: 300
}
class RejectedPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.handleRevert = this.handleRevert.bind(this)
  }
  handleRevert(){
    const modal = Modal.info({
      closable:false,
      title: (<div><Icon type="loading"/> Redirecting</div>)
    });
    Auth({id:this.props.profile.id, status:'submissionOfRequirements'}, {'x-access-token':this.props.auth.token})
    .HandleMerchantAccount()
    .then(res=>{
      setTimeout(() => modal.destroy());
      window.location.href = '/merchant/pending'
    })
    .catch(err=>{
      console.log(err)
      setTimeout(() => modal.destroy(), 1000);
    })
  }
  render(){
    return(
      <Row type="flex" justify="center" style={AntContainer}>
        <Col sm={24} md={22} lg={22} xl={13}>
          <Card hoverable>
            <div style={Head}>
              <p style={Title}>{`We're sorry.`}</p>
            </div>
            <div style={{margin:50, fontSize: 20, fontWeight: 300, textAlign:'center'}}>
                Please try to <span onClick={this.handleRevert} style={{color:'#1890ff'}}>upload</span> valid requirements.
            </div>
          </Card>
        </Col>
        <style jsx="true">{`
          .ant-confirm-btns,
          .anticon-info-circle{
            display:none
          }
          .ant-confirm-title{
            text-align:center
          }
          .ant-card,
          .ant-card-wider-padding .ant-card-body,
          .ant-card-body{
            font-family: 'Work Sans', sans-serif !important;
            padding:0px;
          }
        `}
        </style>
      </Row>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
    profile: state.profile
  }
}

export default connect(mapStateToProps)(RejectedPage)
