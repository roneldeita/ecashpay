import React from 'react'
import { Link } from 'react-router-dom'
import UploadPobForm from './presentation/UploadPobForm'
import { Form, Row, Col, Card, Icon } from 'antd'

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

class SubmitPobPage extends React.Component{
  constructor(props){
    super(props)
    this.state={
      buttonState:false,
      filelist:[]
    }
    this.handleFileChange = this.handleFileChange.bind(this)
  }
  handleFileChange(info){
    let {fileList} = info
    this.setState({filelist:fileList});
  }
  render(){
    console.log(this.state)
    return (
      <Row justify="center" type="flex" style={{marginTop:'30px'}}>
        <Col md={12} lg={7}>
          <Card
            hoverable
            title={ <span>Submit Proof Of Billing</span> }
            style={CardStyle}
            actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
              <UploadPobForm
                form={this.props.form}
                filelist={this.state.filelist}
                change={this.handleFileChange}
                />
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Form.create()(SubmitPobPage)
