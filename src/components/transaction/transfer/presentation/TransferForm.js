import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Select, Input, Card, Form, Tag, Icon, Button} from 'antd'
import { isEmpty } from 'lodash'

export default ({currencies, primary, form, submit, summaryVisible}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const CurrencyError =  getFieldError('Currency')
  const AmountError =  getFieldError('Amount')
  const AccountNumberError =  getFieldError('Account Number')
  const NoteError = getFieldError('Note')
  return(
    <Card
      loading={isEmpty(currencies) && primary === ''}
      title="Transfer to other Ecash"
      actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
      {/*<Card><Icon type="check-circle-o"/> Transfer money using Ecashpay account number.</Card>*/}
      <Form onSubmit={submit} autoComplete="off">
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
                  { required: true },
                  { pattern: /^(0|[1-9][0-9]*)$/, message: 'Invalid Amount'}
                ],
              })(
                <Input type="number" size="large" min="0" placeholder="0"/>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Receiver"
          required={false}
          hasFeedback={isFieldTouched('Account Number')}
          validateStatus={AccountNumberError ? 'error' : ''}
          help={AccountNumberError || ''}>
          {getFieldDecorator('Account Number', {
            rules: [
              { required: true }
            ],
          })(
            <Input type="number" size="large" placeholder="Receiver's Ecash Account Number"/>
          )}
        </Form.Item>
        <Form.Item
          label="Remark (Optional)"
          required={false}
          hasFeedback={isFieldTouched('Note')}
          validateStatus={NoteError ? 'error' : ''}
          help={NoteError || ''}>
          {getFieldDecorator('Note', {
            rules: [
              { required: false }
            ],
          })(
            <Input.TextArea rows={3}/>
          )}
        </Form.Item>
        <Form.Item>
          <div style={{textAlign:'center'}}>
            <Button
              id="submit"
              type="primary"
              htmlType="submit"
              size="large"
              disabled={summaryVisible}>
              Continue
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  )
}
