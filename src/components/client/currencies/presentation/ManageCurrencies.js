import React from 'react'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'
import {Form, Card, Table, Button, Select, Alert, Icon, Tag, Switch} from 'antd'
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
    render: (text, record) => <div style={{textAlign:'center'}}><Switch checked={text} onClick={() => deleteCurrency(record.code, text)} currency={record.code} size="small"/></div>
  }];
  const Arr = Object.keys(currencies).map(key=>(currencies[key]))
  const { getFieldDecorator, isFieldTouched, getFieldError } = form
  const CurrencyError = getFieldError('Currency')
  return (
    <Card
      hoverable
      title="Manage Your Currencies"
      style={CardStyle}
      actions={[<Link to="/client/dashboard"><Icon type="left-circle-o"/> Return to Dashboard</Link>]}>
      {/*<p style={Title}>Manage Your Currencies</p>*/}
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
      <br/>
      <Form layout="inline" onSubmit={addCurrency} style={{marginBottom:'15px'}}>
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
              <Select.Option value="usd">USD</Select.Option>
              <Select.Option value="afn">AFN</Select.Option>
              <Select.Option value="aud">AUD</Select.Option>
              <Select.Option value="eur">EUR</Select.Option>
              <Select.Option value="all">ALL</Select.Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" icon="plus-circle-o" loading={buttonState}>Add</Button>
        </FormItem>
      </Form>
      {(error !== '') ? (<Alert message={error} type="error" showIcon closable onClose={closeAlert}/>) : null }
      <Table rowKey="code" loading={isEmpty(Arr)} columns={columns} dataSource={Arr} pagination={{pageSize:5}} style={{marginTop:'10px'}} size="middle" bordered={false}/>
      {/*<Link to="/client/dashboard" style={{marginTop:'20px'}} icon="left"><Icon type="caret-left" style={{fontSize:'11px'}}/> Back to Dashboard</Link>*/}
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
