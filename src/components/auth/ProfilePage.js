import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../../actions/authAction'
import { camelCase } from 'lodash'
import ProfileForm from './presentation/ProfileForm'
import * as profileActions from '../../actions/profileAction'
import { Form } from 'antd'
// import { createForm } from 'rc-form'

class ProfilePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      buttonState: false,
      countries: []
    }
    this.onClickCompleteButton = this.onClickCompleteButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
          if(index === 'Phone Number'){
            index = 'Phone'
          }
          if(index ==='Birth Date'){
            value = value.format('YYYY-MM-DD')
          }
          Data[camelCase(index)]=value
        })
        console.log(Data)
        axios.post(process.env.REACT_APP_API + '/profile', Data, {headers:{token:this.props.auth.token}})
        .then(res => {
          console.log(res)
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
    axios.get(process.env.REACT_APP_COUNTRIES)
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
  componentWillMount(){
    axios.get(process.env.REACT_APP_API + '/profile', {headers: {token:this.props.auth.token}})
    .then(res => {
      this.props.profileAction.loadProfile(res.data)
    })
  }
  render(){
    console.log(this.props)
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
