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
  fontSize: '32px',
  fontWeight: 200
}
const AntForm = {
  margin:'50px 0px'
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
  const StreetError = getFieldError('Street')
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
  //Unemployed
  const SourceError = getFieldError('Source')
  return(
    <Row type="flex" justify="center" style={AntContainer}>
      <Col sm={24} md={22} lg={22} xl={13} className="">
        <Card hoverable>
          <div style={Head}>
            <Icon id="user" type="user" style={UseIcon}/>
            <p style={Title}>Complete your personal profile</p>
          </div>
          <Row type="flex" justify="center">
            <Col span={20} className="user">
              <Form onSubmit={onSubmit} style={AntForm}>
                <FormItem
                  label="First Name"
                  required={false}
                  {...Label}
                  className="name"
                  hasFeedback={isFieldTouched('First Name')}
                  validateStatus={FirstNameError ? 'error' : ''}
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
                  required={false}
                  {...Label}
                  className="name"
                  hasFeedback={isFieldTouched('Last Name')}
                  validateStatus={LastNameError ? 'error' : ''}
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
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Gender')}
                  validateStatus={GenderError ? 'error' : ''}
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
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Birth Date')}
                  validateStatus={BirthDateError ? 'error' : ''}
                  help={BirthDateError || ''}>
                  {getFieldDecorator('Birth Date', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <DatePicker size="large" placeholder="YYYY-DD-MM" format="YYYY-DD-MM" style={{width:'100%'}} showToday={false} />
                  )}
                </FormItem>
                <Divider>Complete Address</Divider>
                <FormItem
                  label="Street"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Street')}
                  validateStatus={StreetError ? 'error' : ''}
                  help={StreetError || ''}>
                  {getFieldDecorator('Street', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="City/Municipality"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('City / Municipality')}
                  validateStatus={CityMunicipalityError ? 'error' : ''}
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
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Region / State / Province')}
                  validateStatus={RegionStateProvinceError ? 'error' : ''}
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
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Country')}
                  validateStatus={CountryError ? 'error' : ''}
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
                  label="Primary Currency"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Currency')}
                  validateStatus={CurrencyError ? 'error' : ''}
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
                <Divider>Source of funds</Divider>
                <FormItem
                  label=""
                  required={false}
                  wrapperCol={{lg:{span:17, offset:7}}}
                  hasFeedback={isFieldTouched('Source of Funds')}
                  validateStatus={SourceOfFundsError ? 'error' : ''}
                  help={SourceOfFundsError || ''}>
                  {getFieldDecorator('Source of Funds', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <RadioGroup onChange={handleSourceOfFunds} style={{width:'100%'}}>
                      <Radio value="1">Employed</Radio>
                      <Radio value="2">Self-Employed</Radio>
                      <Radio value="3">Unemployed</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  label="Occupation"
                  required={false}
                  style={{display:sourceOfFunds === "1" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Occupation')}
                  validateStatus={OccupationError ? 'error' : ''}
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
                  required={false}
                  style={{display:sourceOfFunds === "1" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Company')}
                  validateStatus={CompanyError ? 'error' : ''}
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
                  label="Position / Rank"
                  required={false}
                  style={{display:sourceOfFunds === "1" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Position')}
                  validateStatus={PositionError ? 'error' : ''}
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
                  required={false}
                  style={{display:sourceOfFunds === "2" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Business Name')}
                  validateStatus={BusinessNameError ? 'error' : ''}
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
                  required={false}
                  style={{display:sourceOfFunds === "2" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Registration Date')}
                  validateStatus={RegistrationDateError ? 'error' : ''}
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
                  required={false}
                  style={{display:sourceOfFunds === "2" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Nature of Business')}
                  validateStatus={BusinessNatureError ? 'error' : ''}
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
                  required={false}
                  style={{display:sourceOfFunds === "2" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Years in Operation')}
                  validateStatus={OperationYearsError ? 'error' : ''}
                  help={OperationYearsError || ''}>
                  {getFieldDecorator('Years in Operation', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  label="Source"
                  required={false}
                  style={{display:sourceOfFunds === "3" ? 'block': 'none'}}
                  {...Label}
                  hasFeedback={isFieldTouched('Source')}
                  validateStatus={SourceError ? 'error' : ''}
                  help={SourceError || ''}>
                  {getFieldDecorator('Source', {
                    initialValue: "Remittance",
                    rules: [
                      { required: true }
                    ],
                  })(
                    <RadioGroup>
                      <Radio value="Remittance">Remittance</Radio>
                      <Radio value="Pension">Pension</Radio>
                      <Radio value="Allowance">Allowance</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <br/>
                <FormItem wrapperCol={{lg:{span:17, offset:7}}}>
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
        #user.anticon-user{
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
