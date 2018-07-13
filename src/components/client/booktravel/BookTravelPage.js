import React from 'react'
import {Row, Col} from 'antd'
import Navigation from '../common/Navigation'
import ComingSoon from '../common/ComingSoon'

class BookTravelPage extends React.PureComponent{
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

export default BookTravelPage
