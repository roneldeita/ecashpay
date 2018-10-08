import React from 'react'
import { Modal, Form, Select, Input } from 'antd'

class RejectF2fForm extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState:false,
      remarks: [
        'Did not answered to call.',
        'Another reason for rejection.',
        'Other'
      ],
      requireOther:false
    }
  }
  handleSelect = (selected) =>{
    if(selected === 'Other'){
      this.setState({requireOther:true})
    }else{
      this.props.form.resetFields(['Other'])
      this.setState({requireOther:false})
    }
  }
  onSubmit = (e) =>{
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if(!err){
        if(values.Remarks !== 'Other'){
          this.props.decline(values.Remarks)
        }else{
          this.props.decline(values.Other)
        }
        this.props.form.resetFields(['Remarks', 'Other'])
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }
    })
    e.preventDefault()
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return(
      <Modal
        title="Reject KYC 1"
        okText={this.state.buttonState ? 'Rejecting' : 'Reject'}
        onCancel={this.props.close}
        onOk={this.onSubmit}
        confirmLoading={this.state.buttonState}
        visible={this.props.visible}
        destroyOnClose={true}
        width={700}>
        <Form>
          <Form.Item>
            {getFieldDecorator('Remarks', {
              rules: [
                {required: true}
              ],
            })(
              <Select
                placeholder="Choose"
                showSearch
                optionFilterProp="children"
                onSelect={this.handleSelect}>
                {this.state.remarks.map((remark, index) =>{
                  return (<Select.Option
                    value={remark}
                    key={index}>{remark}
                    </Select.Option>)
                })}
              </Select>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('Other', {
              rules: [
                {required: this.state.requireOther}
              ],
            })(
              <Input.TextArea rows={3} placeholder="Specify remarks" disabled={!this.state.requireOther}/>
            )}
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(RejectF2fForm)