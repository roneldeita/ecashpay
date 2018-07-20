import React from 'react'
import { Card, Row, Col, Icon, List, Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import QueueAnim from 'rc-queue-anim'

const CardStyle = {
  margin: '50px 0px 0px 0px',
  padding: '0px',
  cursor:'auto'
}

export default ({form, accounts, addAccount, deleteAccount, buttonState}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const AccountIdError = getFieldError('Account ID')
  return(
    <Row type="flex" justify="center">
      <Col className="" xs={22} md={16} lg={8}>
        <QueueAnim type={['top', 'bottom']} delay="300" ease={['easeOutBack', 'easeInOutCirc']}>
          <div key="0">
            <Card
              style={CardStyle}
              hoverable
              title="Manage Known Accounts"
              actions={[
                <Link to="/client/dashboard">
                  <Icon type="left-circle-o"/> Return to Dashboard
                </Link>]}>
              <Form layout="inline" onSubmit={addAccount} style={{marginBottom:'15px'}} autocomplete="off">
                <Form.Item
                  hasFeedback={isFieldTouched('Account ID')}
                  validateStatus={AccountIdError ? 'error' : 'success'}
                  help={AccountIdError || ''}>
                  {getFieldDecorator('Account ID', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input placeholder="Enter Account ID" style={{width:'200px'}}/>
                  )}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" icon="plus-circle-o" loading={buttonState}>Add</Button>
                </Form.Item>
              </Form>
              <List
                id="account-list"
                dataSource={accounts}
                renderItem={item => (
                  <List.Item>
                    {item.account}
                    <Button
                      size="small"
                      type="danger"
                      shape="circle"
                      icon="minus"
                      onClick={() => deleteAccount(item.id)}
                      style={{float:'right'}}/>
                  </List.Item>
                )}>
              </List>
            </Card>
          </div>
        </QueueAnim>
      </Col>
      <style jsx="true">{`
        .ant-list-item-content{
          display: block
        }
      `}
      </style>
    </Row>
  )
}
