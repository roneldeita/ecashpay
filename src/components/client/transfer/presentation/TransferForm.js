import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Select, Input, Card, Form, Tag, Icon, Button } from 'antd'
import { isEmpty } from 'lodash'

export default ({currencies, primary, form, buttonState, submit}) => {
  console.log(primary)
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const CurrencyError =  getFieldError('Currency')
  const AmountError =  getFieldError('Amount')
  const AccountNumerError =  getFieldError('Account Number')
  return(
    <Card
      loading={isEmpty(currencies) && primary === ''}
      title="Transfer to other Ecash"
      actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
      <Card><Icon type="check-circle-o"/> Send money using Ecash account number.</Card>
      <Form onSubmit={submit}>
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              label="Source Currency"
              required={false}
              hasFeedback={isFieldTouched('Currency')}
              validateStatus={CurrencyError ? 'error' : ''}
              help={CurrencyError || ''}>
              {getFieldDecorator('Currency', {
                initialValue: primary,
                rules: [
                  { required: true }
                ],
              })(
                <Select placeholder="Select Currency"
                  size="large"
                  showSearch
                  optionFilterProp="children"
                  style={{ minWidth: 180 }}>
                  {currencies.map((currency, index) =>{
                    return <Select.Option value={currency.code} key={index}><Tag>{currency.code}</Tag>{currency.balance}</Select.Option>
                  })}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Amount"
              required={false}
              hasFeedback={isFieldTouched('Amount')}
              validateStatus={AmountError ? 'error' : ''}
              help={AmountError || ''}>
              {getFieldDecorator('Amount', {
                rules: [
                  { required: true }
                ],
              })(
                <Input type="number" size="large" placeholder="0.00"/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Receiver"
          required={false}
          hasFeedback={isFieldTouched('Account Numer')}
          validateStatus={AccountNumerError ? 'error' : ''}
          help={AccountNumerError || ''}>
          {getFieldDecorator('Account Numer', {
            rules: [
              { required: true }
            ],
          })(
            <Input size="large" placeholder="Receiver's Ecash Account Number"/>
          )}
        </Form.Item>
        <Form.Item>
          <div style={{textAlign:'center'}}>
            <Button
              size="large"
              style={{marginRight:'8px'}}>
              Cancel
            </Button>
            <Button
              id="submit"
              type="primary"
              htmlType="submit"
              size="large"
              loading={buttonState}>
              {buttonState ? 'Transfering...' : 'Transfer'}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  )
}
