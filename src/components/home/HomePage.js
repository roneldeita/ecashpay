import React from 'react'
import Banner from './presentation/Banner.js'
// import DebitCard from './presentation/DebitCard.js'
// import GlobalTrust from './presentation/GlobalTrust.js'
// import Services from './presentation/Services.js'

class HomePage extends React.PureComponent{
  constructor(props){
    super(props)
    document.title=this.props.title
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    return(
      <div>
        <Banner/>
        {/*<DebitCard/>
        <GlobalTrust/>
        <Services/>*/}
      </div>
    )
  }
}

HomePage.defaultProps = {
  title:'Ecashpay Asia'
}

export default HomePage
