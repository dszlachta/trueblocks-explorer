import React, { Component } from 'react'
import { BasePage, Row } from './common';

export class LogDisplay extends Component {
  render() {
    function zz(item, index) {
      if (item !== undefined && item.topics !== undefined && item.topics.length !== undefined && item.topics.length > index) {
        return (<Row className="row_type_1" name="topic" type="hash:topic" value={item.topic[index]} route="/logs/"></Row>);
      } else {
        return (<Row className="row_type_1" name={"topic"+index} type="hash:topic" value="<na>"></Row>);
      }
    }
    let item = this.props.theData;
    let first = "45000.0.next";  // bounds
    let prev = item.blockNumber + "." + (item.transactionIndex + ".prev");  // bounds
    let prevblk = (item.blockNumber - 1) + "." + (1 + ".prev");  // bounds
    let next = item.blockNumber + "." + (item.transactionIndex + ".next");  // bounds
    let nextblk = item.blockNumber + ".10000.next";  // bounds
    return (
      <div key={this.props.hash}>
        <table width="100%"><tbody>
          <Row name="transId" type="amount:blk" value={item.blockNumber + "." + item.transactionIndex} bold={true}></Row>
          <Row className="row_type_1" name="address" type="address" value={item.address} bold={true}></Row>
          <Row className="row_type_1" name="removed" type="bool" value={item.removed} bold={true}></Row>
          <Row className="row_type_1" name="logIndex" type="amount:blk" value={item.logIndex} bold={true}></Row>
          <Row className="row_type_1" name="type" type = "string" value = {item.type} bold = {true} ></Row >
          <Row className="row_type_1" name="topics" type="array" bold={true} ></Row >
          {zz(item, 0)}
          {zz(item, 1)}
          {zz(item, 2)}
          {zz(item, 3)}
          <Row className="row_type_1" name="data" type="bytes" value={item.data} bold={true}></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row className="row_type_2" name="transactionHash" type="hash:tx" value={item.transactionHash} bold={true}></Row>
          <Row className="row_type_2" name="transactionIndex" type="amount:blk" value={item.transactionIndex} bold={true}></Row>
          <Row className="row_type_2" name="transactionLogIndex" type="amount:blk" value={item.transactionLogIndex} bold={true}></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row className="row_type_3" name="blockHash" type="hash:blk" value={item.blockHash} bold={true}></Row>
          <Row className="row_type_3" name="blockNumber" type="amount:blk" value={item.blockNumber} bold={true}></Row>
          <Row name="1st tx in prev blk" type="nav:prev" value={prevblk} route="/logs/"></Row>
          <Row name="1st tx in next blk" type="nav:next" value={nextblk} route="/logs/"></Row>
          <Row name="previous tx" type="nav:prev" value={prev} route="/logs/"></Row>
          <Row name="next tx" type="nav:next" value={next} route="/logs/"></Row>
          <Row name="first tx" type="nav:first" value={first} route="/logs/"></Row>
          <Row name="latest tx" type="nav:last" value={"latest"} route="/logs/"></Row>
        </tbody></table>
      </div>
    );
  }
}

export default class LogsPage extends BasePage {
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
    fetch(`${process.env.REACT_APP_API_URL}/logs?trans_list=${theID}`, { mode: 'cors' })
      .then(response => response.json())
      .then(result => {
        this.setState({ data: result })
      }
      ).catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.theID !== prevProps.match.params.theID)
      this.fetchData();
  }

  render() {
    this.makeContent = () => {
      if (this.state.data.length === 0)
        return "";
      return (this.state.data.map(dataObj => {
        return (<LogDisplay key={dataObj.hash} theData={dataObj} />);
      }
      ));
    }

    var left = "Logs Module";
    var middle = this.makeContent();
    var right = "The logs component of TrueBlocks allows you to assign names any Ethereum logs. We've provided a number of default named logs, but you may add your own. This makes understanding the timeline of your interactions with the logchain easier. If you choose to share the names you create, others will benefit from that information.";
    return (
      <BasePage
        lSection={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
