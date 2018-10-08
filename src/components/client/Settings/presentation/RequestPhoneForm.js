import React from 'react'
import { Card, Form, Select, Input, Button, Modal } from 'antd'
import { Country, Phone } from '../../../../services/api'

class RequestEmailForm extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      country:'Phillipines',
      callingCode: '63',
      phone: null,
      ButtonStatus:false,
    }
    this.onChangeCountry = this.onChangeCountry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }
  handleSubmit(event){
    this.setState({ButtonStatus:true})
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let CallingCode = values.Country.split("-")
        if(CallingCode[0] === 'Phillipines'){ CallingCode[1] = '63' }
        Phone(
          {'areaCode':CallingCode[1], 'phone':values['Phone Number']},
          {'x-access-token':this.props.auth.token})
        .Request()
        .then(res => {
          this.props.toggleRequest()
          this.props.showReset({phone:values['Phone Number'], code: CallingCode[1]})
          setTimeout(()=>this.setState({ButtonStatus:false}), 500)
        }).catch(err=>{
          setTimeout(()=>this.setState({ButtonStatus:false}), 500)
          Modal.error({
            title: 'Phone Number Error',
            content: err.response.data.message
          })
        })
      }else{
        setTimeout(()=>this.setState({ButtonStatus:false}), 500)
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
    //console.log(this.props)
    const { getFieldDecorator } = this.props.form
    return(
      <div style={{display:this.props.displayForm?'block':'none', margin:'-1px 0px 25px 0px'}}>
        <Card title="Enter New Phone Number">
          <Form onSubmit={this.handleSubmit} autoComplete="off">
            <Form.Item wrapperCol={{span:12}}>
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
            <Form.Item wrapperCol={{span:12}}>
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
                loading={this.state.ButtonStatus}
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
