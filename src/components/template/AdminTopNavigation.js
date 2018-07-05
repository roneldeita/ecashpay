import React from 'react'
import { Icon } from 'antd'

const ToggleStyle = {
  fontSize: '20px',
  padding:'10px',
  cursor:'pointer'
}
class AdminTopNavigation extends React.PureComponent{
  render() {
    return (
      <div style={{backgroundColor:'#ffffff', height:'40px',}}>
        <Icon
          style={ToggleStyle}
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
      </div>
    );
  }
}

export default AdminTopNavigation
