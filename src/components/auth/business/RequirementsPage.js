import React from 'react'
import { Form } from 'antd'
import RequirementsForm from  './presentation/RequirementsForm'

class RequirementsPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      type:'Sole Proprietorship',
      soleProprietorship:[
        { name:'DTI Permit', description: ''},
        { name:"Mayor's Permit", description: ''},
        { name:"BIR 2303", description: "Certificate of Registration"},
        { name:"Two (2) Government-issued IDs", description: ""},
        { name:"Passport Size Colored Photos", description: ""},
        { name:"Two (2) Proof of Billing", description: ""},
        { name:"Bank Certificate", description: ""},
        { name:"NBI Clearance", description: ""},
        { name:"BSP License", description: "For BSP regulated companies (Option: N/A)"}
      ],
      cooperative:[
        { name:'BIR 2303', description: 'Certified True Copy of the BIR Certificate of Registration of the Cooperative'},
        { name:'Certificate of Cooperation', description: ''},
        { name:'Notarized Board Resolution', description: 'For Authorized Signatories and Authorization to enter into agreement'},
        { name:"Two (2) Government-issued IDs", description: "Authorized Signatories duly authenticated by Board Secretary"},
        { name:"Bank Certificate", description: ""},
        { name:"BSP License", description: ""}
      ],
      corporation:[
        { name:'SEC Certificate of Registration', description: ''},
        { name:'Articles of Incorporation and By Laws', description: ''},
        { name:'Latest General Information Sheet', description: ''},
        { name:'Notarized Board Resolution', description: 'For Authorized Signatories and Authorization to enter into agreement'},
        { name:'Notarized Secretry Certificate', description: 'For Authorized Signatories and Authorization to enter into agreement'},
        { name:"Two (2) Government-issued IDs", description: "Authorized Signatories duly authenticated by Corp. Secretary"},
        { name:"Bank Certificate", description: ""},
        { name:"BSP License", description: "For BSP regulated companies (Option: N/A)"}
      ],
      fileOne:[]
    }
    this.changeType = this.changeType.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  changeType(e){
    this.setState({type:e.target.value})
  }
  handleSubmit(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if(!err){
        console.log(values)
      }else{
        setTimeout(()=>{
          this.setState({buttonState:false})
        }, 800)
      }
    })
    event.preventDefault()
  }
  render(){
    return(
      <RequirementsForm
        form={this.props.form}
        buttonState={this.state.buttonState}
        type={this.state.type}
        changeType={this.changeType}
        soleProprietorship={this.state.soleProprietorship}
        cooperative={this.state.cooperative}
        corporation={this.state.corporation}
        submit={this.handleSubmit}
        fileOne={this.state.fileOne}/>
    )
  }
}

export default Form.create()(RequirementsPage)
