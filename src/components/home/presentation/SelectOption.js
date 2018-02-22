import React from 'react'

class SelectOption extends React.Component{
  constructor(props){
    super(props)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleMouseDown (event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSelect(this.props.option, event);
	}
	handleMouseEnter (event) {
		this.props.onFocus(this.props.option, event);
	}
	handleMouseMove (event) {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, event);
	}
  render(){
  //  console.log(this.props)
    let flagStyle = {
      width:'25px',
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
		};
    return (
      <div className={this.props.className}
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}>
        <img src={this.props.option.flag} style={flagStyle} alt={this.props.option.name}/>
         {this.props.option.value}<span style={{fontSize:'12px', color:'grey'}}> {this.props.option.name}</span>
      </div>
    )
  }
}

export default SelectOption

// Some people say life sucks, But it isn't life that sucks, it's your thinking that sucks
