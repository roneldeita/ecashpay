import React from 'react'
import Menu from './presentation/Menu'
import {Row, Col} from 'antd'

class ClientDashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loader:true
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({loader:false})
    },2000)
  }
  render(){
    return(
      <Row type="flex" justify="center">
        <Col className="" span={18}>
          <Menu loader={this.state.loader} />
        </Col>
      </Row>
    )
  }
}

export default ClientDashboard
