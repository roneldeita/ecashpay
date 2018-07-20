import React from 'react'
import { Row, Col, Card } from 'antd'

const AntContainer = {
  margin: '50px 0px 100px 0px'
}
const Head = {
  backgroundColor: '#1dA1f2',
  color: '#ffffff',
  textAlign: 'center',
  padding: '40px 10px 5px 10px'
}
const RocketIcon = {
  fontSize: '60px',
  fontWeight: 200
}
const Title = {
  fontSize: '32px',
  fontWeight: 200
}
export default () => {
  return(
    <Row type="flex" justify="center" style={AntContainer}>
      <Col sm={24} md={22} lg={22} xl={13}>
        <Card hoverable>
          <div style={Head}>
            <span className="pe-7s-rocket" style={RocketIcon}/>
            <p style={Title}>Registration Completed</p>
          </div>
          <div style={{margin:50, fontSize: 20, fontWeight: 300, textAlign:'center'}}>
              Approval status will be sent through email/text within 1-5 business days
          </div>
        </Card>
      </Col>
      <style jsx="true">{`
        .pe-7s-rocket{
          border-radius: 100px;
          border: 2px solid #ffffff;
          padding: 0.29em 0.46em;
        }
        .ant-card,
        .ant-card-wider-padding .ant-card-body,
        .ant-card-body{
          font-family: 'Work Sans', sans-serif !important;
          padding:0px;
        }
      `}
      </style>
    </Row>
  )
}
