import React from 'react'
// import moment from 'moment';
import {Row, Col, Card, Icon, Button, Form, Input, DatePicker, Select, Radio, Divider} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

const AntContainer = {
  margin: '50px 0px 100px 0px'
}
const Head = {
  backgroundColor: '#1dA1f2',
  color: '#ffffff',
  textAlign: 'center',
  padding: '40px 10px 5px 10px'
}
const UseIcon = {
  fontSize: '60px'
}
const Title = {
  fontSize: '28px',
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
  labelCol: { xs:24, sm: 24, md:24, lg:7},
  wrapperCol: { xs:24, sm:24, md:24, lg:17 }
}

const ProfileForm = ({firstName, lastName, form, countries, onSubmit, buttonState, onClickCompleteButton, sourceOfFunds, handleSourceOfFunds}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  const FirstNameError =  getFieldError('First Name')
  const LastNameError =  getFieldError('Last Name')
  const GenderError = getFieldError('Gender')
  const BirthDateError =  getFieldError('Birth Date')
  //const PhoneNumberError = getFieldError('Phone Number')
  const Address1Error = getFieldError('Address line 1')
  const Address2Error = getFieldError('Address line 2')
  const CityMunicipalityError = getFieldError('City / Municipality')
  const RegionStateProvinceError = getFieldError('Region / State / Province')
  const CountryError = getFieldError('Country')
  const CurrencyError = getFieldError('Currency')
  const SourceOfFundsError = getFieldError('Source of Funds')
  //employed
  const OccupationError = getFieldError('Occupation')
  const CompanyError = getFieldError('Company')
  const PositionError = getFieldError('Position')
  //self-employed
  const BusinessNameError = getFieldError('Business Name')
  const RegistrationDateError = getFieldError('Registration Date')
  const BusinessNatureError = getFieldError('Nature of Business')
  const OperationYearsError = getFieldError('Years in Operation')
  return(
    <Row type="flex" justify="center" style={AntContainer}>
      <Col sm={24} md={22} lg={22} xl={13} className="">
        <Card hoverable>
          <div style={Head}>
            <Icon type="user" style={UseIcon}/>
            <p style={Title}>Complete your personal profile</p>
          </div>
          <Row type="flex" justify="center">
            <Col span={20} className="user">
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
                  label="Gender"
                  {...Label}
                  hasFeedback={isFieldTouched('Gender')}
                  validateStatus={GenderError ? 'error' : 'success'}
                  help={GenderError || ''}>
                  {getFieldDecorator('Gender', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <RadioGroup style={{width:'100%'}}>
                      <Radio value="1">Male</Radio>
                      <Radio value="0">Female</Radio>
                    </RadioGroup>
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
                    <DatePicker size="large" placeholder="YYYY-DD-MM" format="YYYY-DD-MM" style={{width:'100%'}} showToday={false} />
                  )}
                </FormItem>
                <Divider/>
                {/*<FormItem
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
                    <Input addonBefore={prefixSelector} size="large"/>
                  )}
                </FormItem>*/}
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
                  label="City/Municipality"
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
                  label="Region/State/Province"
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
                        return <Option value={country.name} key={index}><img src={country.flag} style={Flag} alt="flag" /> {country.name}</Option>
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
                    initialValue:'php',
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Select placeholder="Currency"
                    showSearch
                    optionFilterProp="children"
                    size="large">
                      <Option value="php">PHP</Option>
                    </Select>
                  )}
                </FormItem>
                <Divider/>
                <FormItem
                  label="Source of Funds"
                  {...Label}
                  hasFeedback={isFieldTouched('Source of Funds')}
                  validateStatus={SourceOfFundsError ? 'error' : 'success'}
                  help={SourceOfFundsError || ''}>
                  {getFieldDecorator('Source of Funds', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <RadioGroup onChange={handleSourceOfFunds} style={{width:'100%'}}>
                      <Radio value="1">Employed</Radio>
                      <Radio value="2">Self-Employed</Radio>
                      <Radio value="3" disabled>Unemployed</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  label="Occupation"
                  style={{display:sourceOfFunds === "1" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Occupation')}
                  validateStatus={OccupationError ? 'error' : 'success'}
                  help={OccupationError || ''}>
                  {getFieldDecorator('Occupation', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  label="Company"
                  style={{display:sourceOfFunds === "1" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Company')}
                  validateStatus={CompanyError ? 'error' : 'success'}
                  help={CompanyError || ''}>
                  {getFieldDecorator('Company', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  label="Position"
                  style={{display:sourceOfFunds === "1" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Position')}
                  validateStatus={PositionError ? 'error' : 'success'}
                  help={PositionError || ''}>
                  {getFieldDecorator('Position', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  label="Business Name"
                  style={{display:sourceOfFunds === "2" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Business Name')}
                  validateStatus={BusinessNameError ? 'error' : 'success'}
                  help={BusinessNameError || ''}>
                  {getFieldDecorator('Business Name', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  label="Registration Date"
                  style={{display:sourceOfFunds === "2" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Registration Date')}
                  validateStatus={RegistrationDateError ? 'error' : 'success'}
                  help={RegistrationDateError || ''}>
                  {getFieldDecorator('Registration Date', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  label="Nature of Business"
                  style={{display:sourceOfFunds === "2" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Nature of Business')}
                  validateStatus={BusinessNatureError ? 'error' : 'success'}
                  help={BusinessNatureError || ''}>
                  {getFieldDecorator('Nature of Business', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  label="Years in Operation"
                  style={{display:sourceOfFunds === "2" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Years in Operation')}
                  validateStatus={OperationYearsError ? 'error' : 'success'}
                  help={OperationYearsError || ''}>
                  {getFieldDecorator('Years in Operation', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <br/>
                <FormItem wrapperCol={{lg:{span:18, offset:6}}}>
                  <Button type="primary" htmlType="submit" size="large" style={{width:'100%'}} loading={buttonState} onClick={onClickCompleteButton}>{buttonState ? 'Completing...' : 'Complete Profile'}</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
      <style jsx="true">{`
        .ant-input-group{
          display:inline-table !important;
        }
        .name .ant-input{
          color: #1890ff !important;
        }
        .anticon-user{
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
