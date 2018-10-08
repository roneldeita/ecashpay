import React from 'react'
import moment from 'moment'
import { Form, DatePicker, Input, Row, Col, Button, Modal } from 'antd'
import {Ftf} from '../../../../services/api'

class BlockDateForm extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false
    }
  }
  handleSubmit = (e) => {
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if(!err){
        const Data = {
          date: values.Date.format('YYYY-MM-DD'),
          reasonToBeBlocked: values.Reason,
          active: false
        }
        Ftf(Data, {'x-access-token':this.props.auth.token}).ManageSchedule()
        .then(res =>{
          console.log(res.data)
          Modal.success({
            title: 'Success',
            content: 'Selected Date has been blocked',
          });
          this.props.getAllSchedules()
          this.props.form.resetFields(['Date', 'Reason'])
          setTimeout(()=>{
            this.setState({buttonState:false})
          }, 800)
        }).catch(err => {
          Modal.error({
            title: 'Error',
            content: err.response.data.message,
          })
          setTimeout(()=>{
            this.setState({buttonState:false})
          }, 800)
        })
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }
    })
    e.preventDefault()
  }
  render(){
    const {getFieldDecorator} = this.props.form 
    return(
      <Form onSubmit={this.handleSubmit}>
        <br/>
        <Row gutter={15}>
          <Col span={24}>
            <p style={{marginBottom:8}}>Select Date (YYYY-MM-DD)</p>
            <Form.Item>
              {getFieldDecorator('Date', {
                rules: [
                  {required: true}
                ],
              })(
                <DatePicker
                  size="large" 
                  disabledDate={ current => moment(current) < moment().endOf('day') }
                  style={{width:'100%'}}/>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Row gutter={15}>
              <Col span={24}>
                <p style={{marginBottom:8}}>Reason</p>
                <Form.Item>
                  {getFieldDecorator('Reason', {
                    rules: [
                      {required: true}
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button
                size="large" 
                type="primary" 
                htmlType="submit" 
                loading={this.state.buttonState}
                block>
                {this.state.buttonState ? 'Blocking' : 'Block'}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Form.create()(BlockDateForm)