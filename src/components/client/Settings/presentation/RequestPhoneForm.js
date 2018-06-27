import React from 'react'
import { Card, Form, Select, Input, Button} from 'antd'
import { Country } from '../../../../services/api'

class RequestEmailForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      country:'Phillipines',
      callingCode: '63',
      phone: null,
    }
    this.onChangeCountry = this.onChangeCountry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleSubmit(event){
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.toggleRequest()
        this.props.showReset()
      }
    })
    event.preventDefault()
  }
  handleCancel(){
    this.props.form.resetFields()
    this.props.cancel()
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
    const { getFieldDecorator, isFieldTouched, getFieldError } = this.props.form
    const CountryError = getFieldError('Country')
    const PhoneNumberError = getFieldError('Phone Number')
    return(
      <div style={{display:this.props.displayForm?'block':'none', margin:'-1px 0px 25px 0px'}}>
        <Card title="Enter New Phone Number">
          <Form onSubmit={this.handleSubmit}>
            <Form.Item
              wrapperCol={{span:12}}
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
                  onChange={this.onChangeCountry}>
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
              wrapperCol={{span:12}}
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
                  placeholder="Phone Number"/>
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{marginRight:8}}>
                Send Code
              </Button>
              <Button onClick={this.handleCancel}>Cancel</Button>
            </Form.Item>
          </Form>
        </Card>
        <style jsx="true">{`
          .ant-input-group{
            display:inline-table !important;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Form.create()(RequestEmailForm)