import React from 'react'
import {Row, Col, Card, Form, Input, Button} from 'antd'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if(!err){
        //console.log(values)
      }
    })
    event.preventDefault()
  }
  render(){
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form
    const EmailError = getFieldError('New Email')
    return(
      <Row type="flex" justify="center">
        <Col span={16}>
          <Card title="Link New Email" style={{marginTop:'15px', marginBottom:'50px'}}>
            <Form onSubmit={this.handleSubmit} layout="inline">
              <Form.Item
                hasFeedback={isFieldTouched('Email')}
                validateStatus={EmailError ? 'error' : ''}
                help={EmailError || ''}>
                {getFieldDecorator('New Email', {
                  rules: [
                    { required: true },
                    { type: 'email' }
                  ],
                })(
                  <Input placeholder="user@gmail.com" style={{width:'250px'}}/>
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit">
                  Send Code
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    )
  }
}
