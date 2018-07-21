import React from 'react'
import { Row, Col} from 'antd'
import { Document, Page } from 'react-pdf';
import Terms from '../../assets/pdf/EcashpayTermsAndConditions.pdf'
import Logo from '../../assets/images/Ecashpay_Logo_Orig.png'

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
        <img src={Logo} style={{width:'200px', padding:'20px 0 20px 0'}}/>
          <div>
            <a onClick={this.handlePrev} style={{marginRight:'10px'}}>Prev</a>
            <a onClick={this.handleNext}>Next</a>
          </div>
        <Document
          className="doc"
          file={Terms}
          onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <p>Page {pageNumber} of {numPages}</p>
          <a onClick={this.handlePrev} style={{marginRight:'10px'}}>Prev</a>
          <a onClick={this.handleNext}>Next</a>
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