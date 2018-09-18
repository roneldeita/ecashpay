import React from 'react'
import { Link } from 'react-router-dom'
import { Alert, Button, Row, Col } from 'antd'

export default () => {
  return(
    <Row type="flex" justify="center">
      <Col md={18}>
        <Alert
          message="Congratulations!"
          description="Your Upgrade Level 2 was successfully approved!"
          type="success"
          showIcon
        />
        <div style={{textAlign:'center', marginTop:'20px'}}>
          <Link to="/client/dashboard">
            <Button>Continue</Button>
          </Link>
        </div>
      </Col>
    </Row>
  )
}
