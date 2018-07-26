import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../../actions/authAction'
import * as profileActions from '../../../actions/profileAction'
//lodash
import { camelCase } from 'lodash'
//ant design
import { Form, Modal } from 'antd'
//services
import { Auth, Country } from '../../../services/api'
//child component
import ProfileForm from './presentation/ProfileForm'

class ProfilePage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      countries: [],
      sourceOfFunds: '',
    }
    this.onClickCompleteButton = this.onClickCompleteButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSourceOfFunds = this.handleSourceOfFunds.bind(this)
    document.title="Complete Profile - Ecashpay"
  }
  handleSourceOfFunds(e){
    if(e.target.value === "unemployed"){
      this.props.form.setFieldsValue({'Business Name':'x', 'Registration Date': 'x', 'Nature of Business': 'x', 'Years in Operation': 'x'})
      this.props.form.setFieldsValue({'Occupation':'x','Company':'x', 'Position':'x'})
    }else if(e.target.value === "selfEmployed"){
      this.props.form.resetFields(['Business Name', 'Registration Date', 'Nature of Business', 'Years in Operation'])
      this.props.form.setFieldsValue({'Occupation':'x','Company':'x', 'Position':'x'})
    }else if(e.target.value === "employed"){
      this.props.form.resetFields(['Occupation', 'Company', 'Position'])
      this.props.form.setFieldsValue({'Business Name':'x', 'Registration Date': 'x', 'Nature of Business': 'x', 'Years in Operation': 'x'})
    }
    this.setState({sourceOfFunds:e.target.value})
  }
  onClickCompleteButton(event){
    this.setState({buttonState:true})
  }
  handleSubmit(event){
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const Data = {}
        Object.entries(values).forEach(([index,value])=>{
          if(index === 'City / Municipality'){
            index = 'City'
          }
          if(index === 'Region / State / Province'){
            index = 'Region'
          }
          if(index ==='Birth Date'){
            value = value.format('YYYY-MM-DD')
          }
          if(index === 'Source of Funds'){
            if(value === 'employed'){
              Data['employed'] = {}
            }else if(value === 'selfEmployed'){
              Data['selfEmployed'] = {}
            }else if(value === 'unemployed'){
              Data['unemployed'] = {}
            }
          }
          Data[camelCase(index)]=value
        })
        if(values['Source of Funds'] === "employed"){
          Data['employed']['occupation'] = Data['occupation'].toString()
          Data['employed']['company'] = Data['company'].toString()
          Data['employed']['position'] = Data['position'].toString()
        }else if(values['Source of Funds'] === "selfEmployed"){
          Data['selfEmployed']['business'] = Data['businessName'].toString()
          Data['selfEmployed']['registrationDate'] = Data['registrationDate'].toString()
          Data['selfEmployed']['nature'] = Data['natureOfBusiness'].toString()
          Data['selfEmployed']['yearsInOperation'] = Data['yearsInOperation'].toString()
        }else if(values['Source of Funds'] === "unemployed"){
          Data['unemployed']['source'] = Data['source'].toString()
        }
        Auth(Data, {'x-access-token':this.props.auth.token}).completeProfile()
        .then( res => {
          window.location.href = '/client/profile'
        })
        .catch(err => {
          Modal.error({
            title: 'Login Error',
            content: err.response.data.message,
          })
          setTimeout(() => {
            this.setState({buttonState:false})
          }, 800)
        })
      }else{
        console.log(err)
        setTimeout(() => {
          this.setState({buttonState:false})
        }, 800)
      }
    });
    event.preventDefault()
  }
  componentDidMount(){
    Country().All()
    .then(res => {
      const Countries = []
      Object.entries(res.data).forEach(([index,value])=>{
        Countries[index]={name:value.name, flag: value.flag}
      })
      this.setState({countries:Countries})
    })
    .catch(error => {
      console.log(error)
    })
  }
  render(){
    return(
      <div>
        <ProfileForm
          firstName={this.props.profile.firstName}
          lastName={this.props.profile.lastName}
          form={this.props.form}
          buttonState={this.state.buttonState}
          onClickCompleteButton ={this.onClickCompleteButton}
          countries={this.state.countries}
          onSubmit={this.handleSubmit}
          sourceOfFunds={this.state.sourceOfFunds}
          handleSourceOfFunds={this.handleSourceOfFunds}
        />
      </div>
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
    authActions: bindActionCreators(authActions, dispatch),
    profileAction: bindActionCreators(profileActions, dispatch),
  }
}

export default Form.create()(connect(mapStateToProps, mapDispatchToProps)(ProfilePage))
