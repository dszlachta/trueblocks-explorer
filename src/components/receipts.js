import React, { Component } from 'react'
import { BasePage, Row } from './common';

export class ReceiptDisplay extends Component {
  render() {
    let item = this.props.theData;
    let first = "45000.0.next";  // bounds
    let prev = item.blockNumber + "." + (item.transactionIndex + ".prev");  // bounds
    let prevblk = (item.blockNumber - 1) + "." + (1 + ".prev");  // bounds
    let next = item.blockNumber + "." + (item.transactionIndex + ".next");  // bounds
    let nextblk = item.blockNumber + ".10000.next";  // bounds
    let status1 = item.status;
    if (status1 === null)
      status1 = "null";
    return (
      <div key={this.props.hash}>
        <table width="100%"><tbody>
          <Row name="blockNumber" type="amount:blk" value={item.blockNumber} bold={true}></Row>
          <Row className="row_type_1" name="contractAddress" type="address " value={item.contractAddress}></Row>
          <Row className="row_type_1" name="status" type="status" value={status1}></Row>
          <Row className="row_type_1" name="cumulativeGasUsed" type="amount:wei" value={item.cumulativeGasUsed}></Row>
          <Row className="row_type_1" name="gasUsed" type="amount:gas" value={item.gasUsed}></Row>
          <Row className="row_type_1" name="logs" type="array:logs" value={item.transactionHash} display="expand" route="/logs/"></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row className="row_type_2" name="from" type="address " value={item.from} route="/accounts/"></Row>
          <Row className="row_type_2" name="to" type="address" value={item.to} route="/accounts/"></Row>
          <Row className="row_type_2" name="logsBloom" type="bytes" value={item.logsBloom}></Row>
          <Row className="row_type_2" name="root" type="bytes" value={item.root}></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row className="row_type_3" name="transactionHash" type="hash:tx" value={item.transactionHash} route="/transactions/"></Row>
          <Row className="row_type_3" name="transactionIndex" type="amount:blk" value={item.transactionIndex}></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row className="row_type_4" name="blockHash" type="hash:blk" value={item.blockHash} route="/blocks/"></Row>
          <Row className="row_type_4" name="blockNumber" type="amount:blk" value={item.blockNumber}></Row>
          <Row name="1st tx in prev blk" type="nav:prev" value={prevblk} route="/receipts/"></Row>
          <Row name="1st tx in next blk" type="nav:next" value={nextblk} route="/receipts/"></Row>
          <Row name="previous tx" type="nav:prev" value={prev} route="/receipts/"></Row>
          <Row name="next tx" type="nav:next" value={next} route="/receipts/"></Row>
          <Row name="first tx" type="nav:first" value={first} route="/receipts/"></Row>
          <Row name="latest tx" type="nav:last" value={"latest"} route="/receipts/"></Row>
        </tbody></table>
      </div>
    );
  }
}

export default class ReceiptPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchData = () => {
    let theID = this.props.match.params.theID;
    if (theID === undefined)
      theID = "latest";
    fetch(`${process.env.REACT_APP_API_URL}/receipts/${theID}`, { mode: 'cors' })
      .then(response => response.json())
      .then(result => {
        this.setState({ data: result })
      }
      ).catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    console.log("DidMount");
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    console.log("DidUpdate");
    console.log(this.props.match.params.theID);
    console.log(prevProps.match.params.theID);
    if (this.props.match.params.theID !== prevProps.match.params.theID)
      this.fetchData();
  }

  render() {
    this.makeContent = () => {
      if (this.state.data.length === 0)
        return "";
      return (this.state.data.map(dataObj => {
        console.log(dataObj);
        return (<ReceiptDisplay key={dataObj.hash} theData={dataObj} />);
      }
      ));
    }

    var left = "Receipt Module";
    var middle = this.makeContent();
    var right = "The receipts component of TrueBlocks allows you to assign names any Ethereum receipts. We've provided a number of default named receipts, but you may add your own. This makes understanding the timeline of your interactions with the blockchain easier. If you choose to share the names you create, others will benefit from that information.";
    return (
      <BasePage
        lSection={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
