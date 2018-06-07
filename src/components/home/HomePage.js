import React from 'react'
// import Banner from './presentation/Banner.js'
import Banner from './presentation/Banner.js'
import DebitCard from './presentation/DebitCard.js'
import GlobalTrust from './presentation/GlobalTrust.js'
import Services from './presentation/Services.js'

class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      selectOption:[{}],
      selectedSenderVal:{},
      selectedRecepientVal:{}
    }
    this.handleSenderValue = this.handleSenderValue.bind(this)
    this.handleRecepientValue = this.handleRecepientValue.bind(this)
  }
  handleSenderValue(value) {
		this.setState({selectedSenderVal:value });
	}
  handleRecepientValue(value) {
		this.setState({selectedRecepientVal:value });
	}
  componentWillMount(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        const currencyAlterations = data.map( val => {
          val.value=val.currencies.map(currency => currency)[0]['code']
          val.currencySymbol=val.currencies.map(currency => currency)[0]['symbol']
          val.currencyName=val.currencies.map(currency => currency)[0]['name']
          val.label=val.currencies.map(currency => currency)[0]['name']+ ' ' + val.name
          if(val.value === 'PHP'){
            this.setState({selectedSenderVal:val})
          }
          if(val.value === 'USD'){
            this.setState({selectedRecepientVal:val})
          }
          return val
        })
        this.setState({selectOption:currencyAlterations})
      }
    )
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    //console.log(this.props)
    return(
      <div>
        <Banner/>
        <DebitCard/>
        <GlobalTrust/>
        <Services/>
      </div>
    )
  }
}

export default HomePage