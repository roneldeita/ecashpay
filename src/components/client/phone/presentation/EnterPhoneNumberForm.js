import React from 'react'
import { Form, Select, Input, Button, Modal } from 'antd'
import { Country, Phone } from '../../../../services/api'

class StepOne extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      countries: [],
      country:'Phillipines',
      callingCode: '63',
      phone: null,
    }
    this.onChangeCountry = this.onChangeCountry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if(!err){
        let CallingCode = values.Country.split("-")
        if(CallingCode[0] === 'Phillipines'){ CallingCode[1] = '63' }
        Phone({'areaCode':CallingCode[1], 'phone':values['Phone Number']}, {'x-access-token':this.props.auth.token}).Request()
        .then(res => {
          this.props.changeStep({step:1, phone:values['Phone Number'], code: CallingCode[1]})
          this.setState({buttonState:false})
        }).catch(err => {
          Modal.error({
            title: 'Phone verification error',
            content: err.response.data.message,
          })
          setTimeout(()=>{
            this.setState({buttonState:false})
          }, 800)
        })
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }
    })
    event.preventDefault()
  }
  onChangeCountry(selected){
    let code = selected.split("-")
    this.setState({callingCode:code[1]})
  }
  componentDidMount(){
    Country().All()
    .then(res => {
      const Countries = []
      Object.entries(res.data).forEach(([index,value])=>{
        Countries[index]={name:value.name, code:value.callingCodes[0]}
      })
      this.setState({countries:Countries})
    })
    .catch(error => {
      console.log(error)
    })
  }
  render(){
    const Label = {
      labelCol: { span:7 },
      wrapperCol: { span:17 }
    }
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form
    const CountryError = getFieldError('Country')
    const PhoneNumberError = getFieldError('Phone Number')
    return (
      <Form
        onSubmit={this.handleSubmit}>
        <Form.Item
          label="Country"
          {...Label}
          hasFeedback={isFieldTouched('Country')}
          validateStatus={CountryError ? 'error' : ''}
          help={CountryError || ''}>
          {getFieldDecorator('Country', {
            initialValue:this.state.country,
            rules: [
              { required: true }
            ],
          })(
            <Select
              placeholder="Please select a country"
              showSearch
              optionFilterProp="children"
              size="large"
              onSelect={this.onChangeCountry}>
              {this.state.countries.map((country, index) =>{
                return (<Select.Option
                  value={country.name+'-'+ country.code}
                  key={index}>{country.name}
                  </Select.Option>)
              })}
            </Select>
          )}
        </Form.Item>
        <Form.Item
          label="Phone Number"
          {...Label}
          hasFeedback={isFieldTouched('Phone Number')}
          validateStatus={PhoneNumberError ? 'error' : ''}
          help={PhoneNumberError || ''}>
          {getFieldDecorator('Phone Number', {
            initialValue:this.props.phone,
            rules: [
              { required: true },
              { min: 10 },
              { max: 10 }
            ],
          })(
            <Input
              addonBefore={'+' + this.state.callingCode}
              size="large"
              placeholder="Phone Number"/>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 17, offset: 7 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={this.state.buttonState}>
            {this.state.buttonState ? 'Sending Verification...' : 'Send Verification Code'}
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create()(StepOne)
