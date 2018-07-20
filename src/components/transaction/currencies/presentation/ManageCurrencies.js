import React from 'react'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'
import {Form, Card, Table, Button, Select, Alert, Icon, Tag} from 'antd'
const FormItem = Form.Item;

const CardStyle = {
  margin: '0px',
  padding: '0px',
  cursor:'auto'
}

export default ({form, currencies, addCurrency, makePrimary, deleteCurrency, buttonState, error, closeAlert}) => {
  const columns = [{
    title: 'Currency',
    dataIndex: 'code',
    width: 250,
    render: (text, record) => (
      record.primary
      ? <span><b>{text}</b> <Tag color="green"><Icon type="check-circle-o"/> Primary</Tag></span>
      : record.status ? <div className="currency-name"> {text} <Tag className="make-primary" onClick={makePrimary} currency={text}>Make Primary</Tag></div> : <div className="currency-name"> {text}</div>
    )
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
  },
  {
    title: 'Close Currency',
    dataIndex: 'status',
    width: 120,
    align: 'center',
    render: (text, record) => <div><Button size="small" type="danger" shape="circle" icon="minus" onClick={() => deleteCurrency(record.code, text)}/></div>
    //render: (text, record) => <div style={{textAlign:'center'}}><Switch checked={text} onClick={() => deleteCurrency(record.code, text)} currency={record.code} size="small"/></div>
  }];

  let FilterCurrencies = currencies.filter(currency => currency.status === true )

  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const CurrencyError = getFieldError('Currency')
  return (
    <Card
      hoverable
      loading={isEmpty(currencies)}
      title="Manage Currency"
      style={CardStyle}
      actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
      <p>Any payment received in new currency will be automatically credited to that balance. Primary currency will be used in sending or requesting payments.</p>
      <br/>
      <Form layout="inline" onSubmit={addCurrency} style={{marginBottom:'15px'}} autocomplete="off">
        <FormItem
          hasFeedback={isFieldTouched('Currency')}
          validateStatus={CurrencyError ? 'error' : 'success'}
          help={CurrencyError || ''}>
          {getFieldDecorator('Currency', {
            rules: [
              { required: true }
            ],
          })(
            <Select placeholder="Select a new currency"
              showSearch
              optionFilterProp="children"
              style={{ minWidth: 180 }}>
              <Select.Option value="php">PHP</Select.Option>
              {/*<Select.Option value="usd">USD</Select.Option>
              <Select.Option value="afn">AFN</Select.Option>
              <Select.Option value="aud">AUD</Select.Option>
              <Select.Option value="eur">EUR</Select.Option>
              <Select.Option value="all">ALL</Select.Option>*/}
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" icon="plus-circle-o" loading={buttonState}>Add</Button>
        </FormItem>
      </Form>
      {(error !== '') && (<Alert message={error} type="error" showIcon closable onClose={closeAlert}/>)}
      <Table rowKey="code" loading={isEmpty(FilterCurrencies)} columns={columns} dataSource={FilterCurrencies} pagination={{pageSize:10}} style={{marginTop:'10px'}} size="middle" bordered={false}/>
      <style jsx="true">{`
        .currency-name .make-primary{
          background-color: transparent !important;
          color: transparent !important;
          border-color: transparent !important;
        }
        .currency-name:hover .make-primary{
          background-color: #fafafa !important;
          color: rgba(0, 0, 0, 0.65) !important;
          border-color: #d9d9d9 !important;
        }
      `}</style>
    </Card>
  )
}
