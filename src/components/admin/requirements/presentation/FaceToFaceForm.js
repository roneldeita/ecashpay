import React from 'react'
import moment from 'moment'
import { Form, DatePicker, InputNumber, TimePicker, Row, Col, Button } from 'antd'

export default ({form, buttonState}) => {
  const {getFieldDecorator} = form 
  return(
    <Form>
      <Row gutter={15}>
        <Col span={24}>
          <p style={{marginBottom:8}}>Appointment Date (YYYY-MM-DD):</p>
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
          <p style={{marginBottom:8}}>Appointment Time (HH:mm):</p>
          <Row gutter={15}>
            <Col span={12}>
              <Form.Item>
                {getFieldDecorator('Start', {
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
                {getFieldDecorator('End', {
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
              <p style={{marginBottom:8}}>Number of slots:</p>
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
              loading={buttonState}
              block>
              {buttonState ? 'Adding' : 'Add'}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}