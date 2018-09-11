import React from 'react'
import {Row, Col} from 'antd'
import Navigation from '../common/Navigation'
import ComingSoon from '../../../components/general/ComingSoon'

class PayBillsPage extends React.PureComponent{
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render(){
    //console.log(this.props)
    return(
      <div>
      <Navigation location={this.props.location}/>
        <Row type="flex" justify="center">
          <Col className="" xs={20} sm={18} md={18} lg={16} xl={14} xxl={11}>
            <ComingSoon/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PayBillsPage
