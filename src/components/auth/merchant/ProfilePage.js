import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../../actions/authAction'
import * as profileActions from '../../../actions/profileAction'
//lodash
import { camelCase } from 'lodash'
//ant design
import { Form } from 'antd'
//services
import { Auth, Country } from '../../../services/api'
//child component
import ProfileForm from './presentation/ProfileForm'

class ProfilePage extends React.PureComponent{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      countries: []
    }
    this.onClickCompleteButton = this.onClickCompleteButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    document.title="Complete Profile - Ecashpay"
  }
  onClickCompleteButton(event){
    this.setState({buttonState:true})
  }
  handleSubmit(event){
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const Data = {}
        Object.entries(values).forEach(([index,value])=>{
          if(index === 'Business Name'){
            index = 'Name'
          }
          if(index === 'Nature of Business'){
            index = 'Nature'
          }
          if(index === 'Contact Number'){
            index = 'Contact'
          }
          if(index === 'Business Registration No'){
            index = 'Registration'
          }
          if(index === 'City / Municipality'){
            index = 'City'
          }
          if(index === 'Region / State / Province'){
            index = 'Region'
          }
          if(index === 'Zip Code'){
            index = 'Zip'
          }
          Data[camelCase(index)]=value
        })
        console.log(Data)
        Auth(Data, {'x-access-token':this.props.auth.token}).MerchantProfile()
        .then( res => {
          window.location.href = '/'
        })
        .catch(err => {
          console.log(err)
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
          businessName={this.props.profile.name}
          form={this.props.form}
          buttonState={this.state.buttonState}
          onClickCompleteButton={this.onClickCompleteButton}
          countries={this.state.countries}
          onSubmit={this.handleSubmit}
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
