import React from 'react'
import { Form, Button, Select, Input, Avatar, Radio, Icon, DatePicker  } from 'antd'
//import {isEmpty} from 'lodash'

const StepStyle = {
  backgroundColor:'#a5cfe3',
  marginTop:'-5px'
}
export default ({form, submit, buttonState, disabledDates, dateSelected, availableTime}) => {
  const { getFieldDecorator } = form
  const AccountTypeSelector = getFieldDecorator('Account Type', {
    initialValue: 'email',
    rules: [
      { required: true }
    ],
  })(
    <Select style={{ minWidth: 110 }}>
      <Select.Option value="email">Email</Select.Option>
      <Select.Option value="username">Username</Select.Option>
      <Select.Option value="mobile">Mobile</Select.Option>
    </Select>
  );
  return(
    <Form onSubmit={submit} autoComplete="off">
      <p><Avatar size={22} style={StepStyle}>1</Avatar> Select Video Chat App</p>
      <Form.Item>
        {getFieldDecorator('Application', {
          rules: [
            { required: true }
          ],
        })(
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="facebook"><Icon type="facebook" theme="filled"/> Facebook</Radio.Button>
            <Radio.Button value="Skype"><Icon type="skype" theme="filled"/> Skype</Radio.Button>
          </Radio.Group>
        )}
      </Form.Item>
      <p><Avatar size={22} style={StepStyle}>2</Avatar> Enter Account Detail</p>
      <Form.Item>
        {getFieldDecorator('Account Detail', {
          rules: [{ required: true }],
        })(
          <Input addonBefore={AccountTypeSelector} style={{ width: '100%' }}/>
        )}
      </Form.Item>
      <p><Avatar size={22} style={StepStyle}>3</Avatar> Choose a date</p>
      <Form.Item>
        {getFieldDecorator('Date', {
          rules: [{ required: true}],
        })(
          <DatePicker
            disabledDate={disabledDates}
            onChange={dateSelected}
            style={{width:'100%'}}/>
        )}
      </Form.Item>
      <p><Avatar size={22} style={StepStyle}>4</Avatar> Choose a time</p>
      <Form.Item>
        {getFieldDecorator('Time', {
          rules: [{ required: true}],
        })(
          <Select>
           {availableTime.map((time, index) => <Select.Option key={index} value={time}>{time}</Select.Option>)}
          </Select>
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={buttonState}>
          {buttonState ? 'Submitting' : 'Submit'}
        </Button>
      </Form.Item>
    </Form>
  )
}