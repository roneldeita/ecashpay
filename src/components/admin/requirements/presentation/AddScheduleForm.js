import React from 'react'
import moment from 'moment'
import { Form, DatePicker, InputNumber, TimePicker, Row, Col, Button, Modal } from 'antd'
import {camelCase} from 'lodash'
import {Ftf} from '../../../../services/api'

class AddScheduleForm extends React.PureComponent{
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
        const Data = {}
        Object.entries(values).forEach(([index,value])=>{
          if(index ==='Date'){
            value = value.format('YYYY-MM-DD')
          }
          if(index === 'Time End' || index === 'Time Start'){
            value = value.format('HH:mm')
          }
          if(index === 'Slot'){
            value = value.toString()
          }
          Data[camelCase(index)]=value
        })
        Data['active'] = true
        Ftf(Data, {'x-access-token':this.props.auth.token}).ManageSchedule()
        .then(res =>{
          Modal.success({
            title: 'Success',
            content: 'New Schedule has been added',
          });
          this.props.getAllSchedules()
          this.props.form.resetFields(['Date', 'Time Start', 'Time End'])
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
            <p style={{marginBottom:8}}>Appointment Date (YYYY-MM-DD)</p>
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
            <p style={{marginBottom:8}}>Appointment Time (HH:mm)</p>
            <Row gutter={15}>
              <Col span={12}>
                <Form.Item>
                  {getFieldDecorator('Time Start', {
                    rules: [
                      {required: true}
                    ],
                  })(
                    <TimePicker
                      size="large" 
                      format="HH:mm" 
                      placeholder="Start" 
                      style={{width:'100%'}}/>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item>
                  {getFieldDecorator('Time End', {
                    rules: [
                      {required: true}
                    ],
                  })(
                    <TimePicker
                      size="large"
                      format="HH:mm" 
                      placeholder="End" 
                      style={{width:'100%'}}/>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={15}>
              <Col span={24}>
                <p style={{marginBottom:8}}>Number of slots</p>
                <Form.Item>
                  {getFieldDecorator('Slot', {
                    initialValue:3,
                    rules: [
                      {required: true}
                    ],
                  })(
                    <InputNumber
                      size="large" 
                      min={1} 
                      max={10} 
                      style={{width:'100%'}}/>
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
                {this.state.buttonState ? 'Adding' : 'Add'}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Form.create()(AddScheduleForm)