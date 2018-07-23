import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../../actions/authAction'
import { Form, Modal } from 'antd'
//services
import { Auth } from '../../../services/api'
//components
import RequirementsForm from  './presentation/RequirementsForm'

class RequirementsPage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      type:'Sole Proprietorship',
      soleProprietorship:[
        { required: true, id:1, name:'DTI Permit', description: ''},
        { required: true, id:2, name:"Mayor's Permit", description: ''},
        { required: true, id:3, name:"BIR 2303", description: "Certified True Copy of the BIR Certificate of Registration"},
        { required: true, id:4, name:"Government-issued ID 1", description: ""},
        { required: true, id:5, name:"Government-issued ID 2", description: ""},
        { required: true, id:6, name:"Passport Size Colored Photo", description: ""},
        { required: true, id:7, name:"Proof of Billing 1", description: ""},
        { required: true, id:8, name:"Proof of Billing 2", description: ""},
        { required: true, id:9, name:"Bank Certificate", description: ""},
        { required: true, id:10, name:"NBI Clearance", description: ""},
        { required: false, id:11, name:"BSP License", description: "For BSP Regulated Companies Only(Optional)"}

      ],
      cooperative:[
        { required: true, id:12, name:'BIR 2303', description: 'Certified True Copy of the BIR Certificate of Registration'},
        { required: true, id:13, name:'Certificate of Registration', description: 'Issued by Cooperative Development Authority'},
        { required: true, id:14, name:'Notarized Board Resolution', description: 'For Authorized Signatories Only *Authorization to enter into Agreement'},
        { required: true, id:15, name:"Government-issued ID 1", description: "Authorized Signatories Only *Duly authenticated by Corporate Secretary"},
        { required: true, id:16, name:"Government-issued ID 2", description: "Authorized Signatories Only *Duly authenticated by Corporate Secretary"},
        { required: true, id:17, name:"Bank Certificate", description: ""},
        { required: false, id:18, name:"BSP License", description: "For BSP Regulated Companies Only (Optional)"}
      ],
      corporation:[
        { required: true, id:19, name:'BIR 2303', description: 'Certified True Copy of the BIR Certificate of Registration'},
        { required: true, id:20, name:'Business Permit', description: ''},
        { required: true, id:21, name:'SEC Certificate of Registration', description: ''},
        { required: true, id:22, name:'Articles of Incorporation & By Laws', description: ''},
        { required: true, id:23, name:'Latest General Information Sheet', description: ''},
        { required: true, id:24, name:'Notarized Board Resolution', description: 'For Authorized Signatories Only *Authorization to enter into Agreement'},
        { required: true, id:25, name:'Notarized Secretry Certificate', description: 'For Authorized Signatories Only *Authorization to enter into Agreement'},
        { required: true, id:26, name:"Government-issued ID 1", description: "Authorized Signatories Only *Duly authenticated by Corporate Secretary"},
        { required: true, id:27, name:"Government-issued ID 2", description: "Authorized Signatories Only *Duly authenticated by Corporate Secretary"},
        { required: true, id:28, name:"Bank Certificate", description: ""},
        { required: false, id:29, name:"BSP License", description: "For BSP Regulated Companies Only (Optional)"}
      ]
    }
    this.changeType = this.changeType.bind(this)
    this.validateFile = this.validateFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  changeType(e){
    this.setState({type:e.target.value})
  }
  validateFile = (rule, value, callback) => {
    if(value !== undefined){
      const Invalid = value.fileList.map(file => {
        if(file.type !== 'image/jpeg' && file.type !== 'application/pdf' && file.type !== 'image/png'){
          return true
        }
        return false
      })
      if(Invalid.includes(true)){
        callback('Invalid File')
      }
      if(value.fileList.length > 1){
        callback('Only 1 file is allowed')
      }
      // if(value.fileList.length === 0){
      //   callback('File is required')
      // }
    }
    callback()
  }
  handleSubmit(event){
    this.setState({buttonState:true})
    this.props.form.validateFields((err, values) => {
      if(!err){
        const formData = new FormData()
        Object.keys(values).forEach(function(objectKey, index) {
          let value = values[objectKey]
          if(values[objectKey] !== undefined){
            //
            formData.append('files', value.file)
          }
        })
        Auth(formData, {'x-access-token':this.props.auth.token, 'Content-type':'multipart/form-data'}).MerchantsRequirementsProfile()
        .then(res => {
          window.location.href = '/'
          setTimeout(()=>{
            this.setState({buttonState:false})
          }, 800)
        }).catch(err => {
          Modal.error({
            title: 'Sumission Error',
            content: err.response.data.message
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
        validateFile={this.validateFile}/>
    )
  }
}
function mapStateToProps(state, ownProps){
  return {
    auth: state.auth,
    profile: state.profile
  }
}
function mapDispatchToProps(dispatch){
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(RequirementsPage))
//when everything falls apart remember that there are other beautiful things.
// Beautifu Music, Movie, art, movies etc.
