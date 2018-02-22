import React from 'react'

class SelectValue extends React.Component{
  render(){
    var flagStyle = {
      width:'25px',
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
		};
    return(
      <div className="Select-value">
				<span className="Select-value-label">
          <img src={this.props.value.flag} style={flagStyle} alt={this.props.value.label}/>
           {this.props.value.value}
           <span style={{color:'grey'}}>
              <span style={{color:'#cccccc'}}> (</span>
                {this.props.value.currencySymbol}
              <span style={{color:'#cccccc'}}>)</span><
            /span>
				</span>
			</div>
    )
  }
}

export default SelectValue
