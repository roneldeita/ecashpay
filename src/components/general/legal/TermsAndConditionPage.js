import React from 'react'
import { Document, Page } from 'react-pdf';
import Terms from '../../../assets/pdf/EcashpayTermsAndConditions.pdf'
import Logo from '../../../assets/images/Ecashpay_Logo_Orig.png'

class TermsAndConditionsPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  handlePrev(){
    this.setState({pageNumber:this.state.pageNumber-1})
  }
  handleNext(){
    this.setState({pageNumber:this.state.pageNumber+1})
  }
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div style={{textAlign:'center'}}>
        <img src={Logo} style={{width:'200px', padding:'20px 0 20px 0'}} alt="logo"/>
          <div>
            <span style={{color:'#1890ff', marginRight:'10px'}} onClick={this.handlePrev}>Prev</span>
            <span style={{color:'#1890ff'}} onClick={this.handleNext}>Next</span>
          </div>
        <Document
          className="doc"
          file={Terms}
          onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>Page {pageNumber} of {numPages}</p>
          <span style={{color:'#1890ff', marginRight:'10px'}} onClick={this.state.pageNumber !== 1 && this.handlePrev}>Prev</span>
          <span style={{color:'#1890ff'}} onClick={this.state.pageNumber !== 16 && this.handleNext}>Next</span>
        </div>
        <style jsx="true">{`
            .doc{
              display: flex;
              justify-content: center;
            }
            .react-pdf__Page__canvas{
            }
        `}</style>
      </div>
    );
  }
}

export default TermsAndConditionsPage
