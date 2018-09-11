import React from 'react'
// import moment from 'moment';
import {Row, Col, Card, Button, Form, Input, DatePicker, Select, Divider} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

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
  fontSize: '60px',
  fontWeight: 200
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

const ProfileForm = ({businessName, form, countries, onSubmit, buttonState, onClickCompleteButton}) => {
  const { getFieldDecorator, isFieldTouched, getFieldError } = form;
  const BusinessNameError =  getFieldError('Business Name')
  const NatureOfBusinessError =  getFieldError('Nature of Business')
  const PhoneNumberError = getFieldError('Phone Number')
  const StreetError = getFieldError('Street')
  const CityError = getFieldError('City / Municipality')
  const StateError = getFieldError('Region / State / Province')
  const CountryError = getFieldError('Country')
  const ZipCodeError = getFieldError('Zip Code')
  const WebsiteError =  getFieldError('Website')
  const BusinessRegNoError =  getFieldError('Business Registration No')
  const DateStartedError =  getFieldError('Date Started')

  return(
    <Row type="flex" justify="center" style={AntContainer}>
      <Col sm={24} md={22} lg={22} xl={13} className="">
        <Card hoverable>
          <div style={Head}>
            <span className="pe-7s-portfolio" style={UseIcon}/>
            <p style={Title}>Tell us more about your business</p>
          </div>
          <Row type="flex" justify="center">
            <Col span={20} className="user">
              <Form onSubmit={onSubmit} style={AntForm} autoComplete="off">
                <FormItem
                  label="Business Name"
                  required={false}
                  {...Label}
                  className="name"
                  hasFeedback={isFieldTouched('Business Name')}
                  validateStatus={BusinessNameError ? 'error' : ''}
                  help={BusinessNameError || ''}>
                  {getFieldDecorator('Business Name', {
                    initialValue: businessName,
                    rules: [
                      { required: true },
                      { pattern: /^[a-zA-Z\s-'ñÑ_]+$/, message: 'Business Name should only contain letters' }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Nature of Business"
                  required={false}
                  {...Label}
                  className="name"
                  hasFeedback={isFieldTouched('Nature of Business')}
                  validateStatus={NatureOfBusinessError ? 'error' : 'success'}
                  help={NatureOfBusinessError || ''}>
                  {getFieldDecorator('Nature of Business', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Select
                      showSearch
                      optionFilterProp="children"
                      size="large">
                      <Option value="Advertising / Marketing / Promotion / PR">Advertising / Marketing / Promotion/ PR</Option>
                      <Option value="Banking / Financial Services">Banking / Financial Services</Option>
                      <Option value="Call Center / IT-Enabled / BPO">Call Center / IT-Enabled Services / BPO</Option>
                      <Option value="Computer / Information Technology">Computer / Information Technology</Option>
                      <Option value="Education">Education</Option>
                      <Option value="Entertainment / Media / Journalism">Entertainment / Media / Journalism</Option>
                      <Option value="Food & Beverage/ Catering/ Restaurant">Food & Beverage/ Catering / Restaurant</Option>
                      <Option value="General & Wholesale Trading">General & Wholesale Trading</Option>
                      <Option value="Government / Defence">Government / Defence</Option>
                      <Option value="Healthcare / Medical">Healthcare / Medical</Option>
                      <Option value="Hotel / Hospitality">Hotel / Hospitality</Option>
                      <Option value="Human Resources Management / Consulting">Human Resources Management / Consulting</Option>
                      <Option value="Manufacturing / Production">Manufacturing / Production</Option>
                      <Option value="Non-Profit Organization / Social Services / NGO">Non-Profit Organization / Social Services / NGO</Option>
                      <Option value="Property / Real Estate">Property / Real Estate</Option>
                      <Option value="Retail / Merchandise">Retail / Merchandise</Option>
                      <Option value="Telecommunication">Telecommunication</Option>
                      <Option value="Transportation / Logistics">Transportation / Logistics</Option>
                      <Option value="Travel / Tourism">Travel / Tourism</Option>
                      <Option value="Others">Others</Option>
                </Select>
                  )}
                </FormItem>
                <FormItem
                  label="Phone Number"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Phone Number')}
                  validateStatus={PhoneNumberError ? 'error' : 'success'}
                  help={PhoneNumberError || ''}>
                  {getFieldDecorator('Phone Number', {
                    rules: [
                      { required: true },
                      { max: 10, message: 'Phone Number must be at least 10 characters. '},
                      { pattern: /^[0-9]+$/, message: 'Phone Number should only contain numbers. ' }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Website (Optional)"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Website')}
                  validateStatus={WebsiteError ? 'error' : 'success'}
                  help={WebsiteError || ''}>
                  {getFieldDecorator('Website', {
                    rules: [
                      { required: false }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Business Registration No."
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Business Registration No')}
                  validateStatus={BusinessRegNoError ? 'error' : 'success'}
                  help={BusinessRegNoError || ''}>
                  {getFieldDecorator('Business Registration No', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Date Started"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Date Started')}
                  validateStatus={DateStartedError ? 'error' : 'success'}
                  help={DateStartedError || ''}>
                  {getFieldDecorator('Date Started', {
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
                  validateStatus={StreetError ? 'error' : 'success'}
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
                  label="City / Municipality"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('City / Municipality')}
                  validateStatus={CityError ? 'error' : 'success'}
                  help={CityError || ''}>
                  {getFieldDecorator('City / Municipality', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <FormItem
                  label="Region / State / Province"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Region / State / Province')}
                  validateStatus={StateError ? 'error' : 'success'}
                  help={StateError || ''}>
                  {getFieldDecorator('Region / State / Province', {
                    rules: [
                      { required: true }
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
                        return <Option value={country.name} key={index}>
                                <img src={country.flag} style={Flag} alt="flag" /> {country.name}
                              </Option>
                      })}
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="Zip Code"
                  required={false}
                  {...Label}
                  hasFeedback={isFieldTouched('Zip Code')}
                  validateStatus={ZipCodeError ? 'error' : 'success'}
                  help={ZipCodeError || ''}>
                  {getFieldDecorator('Zip Code', {
                    rules: [
                      { required: true }
                    ],
                  })(
                    <Input size="large"/>
                  )}
                </FormItem>
                <br/>
                <FormItem wrapperCol={{lg:{span:17, offset:7}}}>
                  <Button type="primary" htmlType="submit" size="large" style={{width:'100%'}} loading={buttonState} onClick={onClickCompleteButton}>{buttonState ? 'Submitting...' : 'Submit'}</Button>
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
        .pe-7s-portfolio{
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
