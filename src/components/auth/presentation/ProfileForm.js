import React from 'react'
// import moment from 'moment';
import {Row, Col, Card, Icon, Button, Form, Input, DatePicker, Select} from 'antd'

const FormItem = Form.Item;

const AntContainer = {
  margin: '80px 0px 100px 0px'
}
const Head = {
  backgroundColor: '#1dA1f2',
  color: '#ffffff',
  textAlign: 'center',
  padding: '40px 10px 5px 10px'
}
const UseIcon = {
  fontSize: '80px'
}
const Title = {
  fontSize: '32px',
  fontWeight: 500
}
const AntForm = {
  margin:'100px 0px'
}
const Flag = {
  width:'20px',
  marginTop: '-3px'
}
const Label = {
  labelCol: { span:6 },
  wrapperCol: { span:18 }
}

const ProfileForm = ({firstName, lastName, form, countries, onSubmit, buttonState, onClickCompleteButton}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  const FirstNameError =  getFieldError('First Name')
  const LastNameError =  getFieldError('Last Name')
  const BirthDateError =  getFieldError('Birth Date')
  const PhoneNumberError = getFieldError('Phone Number')
  const Address1Error = getFieldError('Address line 1')
  const Address2Error = getFieldError('Address line 2')
  const CityMunicipalityError = getFieldError('City / Municipality')
  const RegionStateProvinceError = getFieldError('Region / State / Province')
  const CountryError = getFieldError('Country')
  const CurrencyError = getFieldError('Currency')
  const prefixSelector = getFieldDecorator('Country Code', {
    initialValue: '63',
  })(
    <Select style={{ width: 70 }}>
      <Select.Option value="63">+63</Select.Option>
      <Select.Option value="86">+86</Select.Option>
      <Select.Option value="87">+87</Select.Option>
    </Select>
  );
  return(
    <Row type="flex" justify="center" style={AntContainer}>
      <Col sm={24} md={11}>
        <Card hoverable>
          <div style={Head}>
            <Icon type="user" style={UseIcon} className="user"/>
            <p style={Title}>Complete your personal profile</p>
          </div>
          <Row type="flex" justify="center">
            <Col span={20}>
              <Form onSubmit={onSubmit} style={AntForm}>
                <FormItem
                  label="First Name"
                  {...Label}
                  className="name"
                  hasFeedback={isFieldTouched('First Name')}
                  validateStatus={FirstNameError ? 'error' : 'success'}
                  help={FirstNameError || ''}>
                  {getFieldDecorator('First Name', {
                    initialValue: firstName,
                    rules: [
                      { required: true },
                      { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'First Name should only contain letters' }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Last Name"
                  {...Label}
                  className="name"
                  hasFeedback={isFieldTouched('Last Name')}
                  validateStatus={LastNameError ? 'error' : 'success'}
                  help={LastNameError || ''}>
                  {getFieldDecorator('Last Name', {
                    initialValue: lastName,
                    rules: [
                      { required: true },
                      { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'Last Name should only contain letters' }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Birthdate"
                  {...Label}
                  hasFeedback={isFieldTouched('Birth Date')}
                  validateStatus={BirthDateError ? 'error' : 'success'}
                  help={BirthDateError || ''}>
                  {getFieldDecorator('Birth Date', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <DatePicker size="large" placeholder="YYYY-DD-MM" format="YYYY-DD-MM" style={{width:'100%'}} />
                  )}
                </FormItem>
                <FormItem
                  label="Phone Number"
                  {...Label}
                  hasFeedback={isFieldTouched('Phone Number')}
                  validateStatus={PhoneNumberError ? 'error' : 'success'}
                  help={PhoneNumberError || ''}>
                  {getFieldDecorator('Phone Number', {
                    rules: [
                      { required: true },
                      { max: 10 },
                      { min: 10 },
                      { pattern: /^[0-9]+$/, message: 'Phone Number should only contain numbers' }
                    ],
                  })(
                    <Input addonBefore={prefixSelector} size="large" />
                  )}
                </FormItem>
                <FormItem
                  label="Address line 1"
                  {...Label}
                  hasFeedback={isFieldTouched('Address line 1')}
                  validateStatus={Address1Error ? 'error' : 'success'}
                  help={Address1Error || ''}>
                  {getFieldDecorator('Address line 1', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Address line 2"
                  {...Label}
                  hasFeedback={isFieldTouched('Address line 2')}
                  validateStatus={Address2Error ? 'error' : 'success'}
                  help={Address2Error || ''}>
                  {getFieldDecorator('Address line 2', {
                    rules: []
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="City / Municipality"
                  {...Label}
                  hasFeedback={isFieldTouched('City / Municipality')}
                  validateStatus={CityMunicipalityError ? 'error' : 'success'}
                  help={CityMunicipalityError || ''}>
                  {getFieldDecorator('City / Municipality', {
                    rules: [
                      {required: true}
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Region / State / Province"
                  {...Label}
                  hasFeedback={isFieldTouched('Region / State / Province')}
                  validateStatus={RegionStateProvinceError ? 'error' : 'success'}
                  help={RegionStateProvinceError || ''}>
                  {getFieldDecorator('Region / State / Province', {
                    rules: [
                      {required: true}
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Country"
                  {...Label}
                  hasFeedback={isFieldTouched('Country')}
                  validateStatus={CountryError ? 'error' : 'success'}
                  help={CountryError || ''}>
                  {getFieldDecorator('Country', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Select placeholder="Please select a country"
                    showSearch
                    optionFilterProp="children"
                    size="large">
                      {countries.map((country, index) =>{
                        return <Select.Option value={country.name} key={index}><img src={country.flag} style={Flag} alt="flag" /> {country.name}</Select.Option>
                      })}
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="Currency"
                  {...Label}
                  hasFeedback={isFieldTouched('Currency')}
                  validateStatus={CurrencyError ? 'error' : 'success'}
                  help={CurrencyError || ''}>
                  {getFieldDecorator('Currency', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Select placeholder="Currency"
                    showSearch
                    optionFilterProp="children"
                    size="large">
                      <Select.Option value="php">PHP - PH PESO</Select.Option>
                      <Select.Option value="usd">USD - US DOLLAR</Select.Option>
                    </Select>
                  )}
                </FormItem>
                <br/>
                <FormItem wrapperCol={{ span: 18, offset: 6 }}>
                  <Button type="primary" htmlType="submit" size="large" style={{width:'100%'}} loading={buttonState} onClick={onClickCompleteButton}>{buttonState ? 'Completing...' : 'Complete Profile'}</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
      <style jsx="true">{`
        .name .ant-input{
          color: #1890ff !important;
        }
        .anticon-user{
          display: inline-block;
          border-radius: 100px;
          border: 2px solid #ffffff;
          padding: 0.2em 0.2em;
        }
        .ant-card,
        .ant-card-wider-padding .ant-card-body,
        .ant-card-body{
          font-family: 'Work Sans', sans-serif !important;
          padding:0px;
        }
      `}
      </style>
    </Row>
  )
}

export default ProfileForm
