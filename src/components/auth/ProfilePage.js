import React from 'react'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
import * as profileActions from '../../actions/profileAction'
//lodash
import { camelCase } from 'lodash'
//ant design
import { Form } from 'antd'
//services
import { Auth, Country } from '../../services/api'
//child component
import ProfileForm from './presentation/ProfileForm'

class ProfilePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      countries: [],
      sourceOfFunds: 0,
    }
    this.onClickCompleteButton = this.onClickCompleteButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSourceOfFunds = this.handleSourceOfFunds.bind(this)
  }
  handleSourceOfFunds(e){
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
          if(index === 'Address line 1'){
            index = 'Address1'
          }
          if(index === 'City / Municipality'){
            index = 'City'
          }
          if(index === 'Region / State / Province'){
            index = 'Region'
          }
          // if(index === 'Phone Number'){
          //   index = 'Phone'
          // }
          if(index ==='Birth Date'){
            value = value.format('YYYY-MM-DD')
          }
          if(index === 'Source of Funds'){
            if(value === '1'){
              Data['employed'] = {}
            }else if(value === '2'){
              Data['selfEmployed'] = {}
            }else if(value === '3'){
              Data['unemployed'] = {}
            }
          }
          Data[camelCase(index)]=value
        })
        if(values['Source of Funds'] === "1"){
          Data['employed']['occupation'] = values.Occupation
          Data['employed']['company'] = values.Company
          Data['employed']['position'] = values.Position
        }
        //console.log(Data)
        Auth(Data, {'x-access-token':this.props.auth.token}).completeProfile()
        .then( res => {
          sessionStorage.removeItem('profile');
          this.props.profileAction.loadProfile(this.props.auth.token)
          window.location.href = '/client/dashboard'
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
