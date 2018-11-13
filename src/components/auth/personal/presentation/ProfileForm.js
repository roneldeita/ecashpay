import React from 'react'
import moment from 'moment'
import {Row, Col, Card, Icon, Button, Form, Input, Select, Radio, Divider, DatePicker} from 'antd'

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

const ProfileForm = ({name, birthDate, form, countries, provinces, cities, onProvinceChange, onSubmit, buttonState, onClickCompleteButton, sourceOfFunds, handleSourceOfFunds}) => {
  const SupportedCountries = countries.filter(country => country.name === "Philippines")
  const { getFieldDecorator } = form;
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
              <Form onSubmit={onSubmit} style={AntForm} autoComplete="off">
                <FormItem colon={false} label="Name" {...Label} className="name">
                  <Input disabled={true} size="large" value={name}/>
                </FormItem>
                <FormItem colon={false} label="Birthdate" {...Label} className="name">
                  <Input disabled={true} size="large" value={moment(birthDate).format('MMMM DD, YYYY')}/>
                </FormItem>
                {/*<FormItem
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
                </FormItem>*/}
                <FormItem
                  colon={false}
                  label="Gender"
                  required={false}
                  {...Label}>
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
                {/*<FormItem
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
                </FormItem>*/}
                <Divider>Complete Address</Divider>
                <FormItem
                  colon={false}
                  label="Country"
                  required={false}
                  {...Label}>
                  {getFieldDecorator('Country', {
                    initialValue: 'Philippines',
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Select placeholder="Please select a country"
                      showSearch
                      optionFilterProp="children"
                      size="large">
                      {SupportedCountries.map((country, index) =>{
                        return <Option value={country.name} key={index}><img src={country.flag} style={Flag} alt="flag" /> {country.name}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Province"
                  required={false}
                  {...Label}>
                  {getFieldDecorator('Province', {
                    rules: [
                      {required: true}
                    ],
                  })(
                    <Select 
                      placeholder="Please select your province"
                      showSearch
                      autoComplete="nope"
                      onChange={onProvinceChange()}
                      optionFilterProp="children"
                      size="large">
                      {provinces.map((province, index) =>{
                        return <Option province-key={province.key} value={province.name} key={index}> {province.name}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="City"
                  autoComplete="nope"
                  required={false}
                  {...Label}>
                  {getFieldDecorator('City', {
                    rules: [
                      {required: true}
                    ],
                  })(
                    <Select 
                      placeholder="Please select your city"
                      showSearch
                      optionFilterProp="children"
                      size="large">
                      {cities.map((city, index) =>{
                        return <Option value={city.name} key={index}> {city.name}</Option>
                      })}
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Unit/Bldg/Street/Village"
                  autoComplete="off"
                  required={false}
                  {...Label}>
                  {getFieldDecorator('Unit/Bldg/Street/Village', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Primary Currency"
                  required={false}
                  {...Label}>
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
                  colon={false}
                  required={false}
                  wrapperCol={{lg:{span:17, offset:7}}}>
                  {getFieldDecorator('Source of Funds', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <RadioGroup onChange={handleSourceOfFunds} style={{width:'100%'}}>
                      <Radio value="employed">Employed</Radio>
                      <Radio value="selfEmployed">Self-Employed</Radio>
                      <Radio value="unemployed">Unemployed</Radio>
                    </RadioGroup>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Occupation"
                  required={false}
                  style={{display:sourceOfFunds === "employed" ? 'block': 'none'}}
                  {...Label}>
                  {getFieldDecorator('Occupation', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Company"
                  required={false}
                  style={{display:sourceOfFunds === "employed" ? 'block': 'none'}}
                  {...Label}>
                  {getFieldDecorator('Company', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Position / Rank"
                  required={false}
                  style={{display:sourceOfFunds === "employed" ? 'block': 'none'}}
                  {...Label}>
                  {getFieldDecorator('Position / Rank', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Business Name"
                  required={false}
                  style={{display:sourceOfFunds === "selfEmployed" ? 'block': 'none'}}
                  {...Label}>
                  {getFieldDecorator('Business Name', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Registration Date"
                  required={false}
                  style={{display:sourceOfFunds === "selfEmployed" ? 'block': 'none'}}
                  {...Label}>
                  {getFieldDecorator('Registration Date', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <DatePicker style={{width:'100%'}} placeholder="YYYY-MM-DD"/>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Nature of Business"
                  required={false}
                  style={{display:sourceOfFunds === "selfEmployed" ? 'block': 'none'}}
                  {...Label}>
                  {getFieldDecorator('Nature of Business', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Years in Operation"
                  required={false}
                  style={{display:sourceOfFunds === "selfEmployed" ? 'block': 'none'}}
                  {...Label}>
                  {getFieldDecorator('Years in Operation', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  colon={false}
                  label="Source"
                  required={false}
                  style={{display:sourceOfFunds === "unemployed" ? 'block': 'none'}}
                  {...Label}>
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
                  <Button 
                    block
                    type="primary" 
                    htmlType="submit" 
                    size="large"
                    loading={buttonState} 
                    onClick={onClickCompleteButton}>{buttonState ? 'Completing...' : 'Complete Profile'}</Button>
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
          background-color: white;
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
