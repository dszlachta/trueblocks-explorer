import React, { Component } from 'react'
import { BasePage, Row } from './common';

export class TraceActionDisplay extends Component {
  render() {
    let item = this.props.theData;
    return (
      <div key={this.props.hash}>
        <table width="100%"><tbody>
          <Row name="address" type="string" value={item.address} display={item.address} route="" />
          <Row name="balance" type="string" value={item.balance} display={item.balance} route="" />
          <Row name="callType" type="string" value={item.callType} display={item.callType} route="" />
          <Row name="from" type="string" value={item.from} display={item.from} route="" />
          <Row name="gas" type="string" value={item.gas} display={item.gas} route="" />
          <Row name="init" type="string" value={item.init} display={item.init} route="" />
          <Row name="input" type="string" value={item.input} display={item.input} route="" />
          <Row name="refundAddress" type="string" value={item.refundAddress} display={item.refundAddress} route="" />
          <Row name="to" type="string" value={item.to} display={item.to} route="" />
          <Row name="value" type="string" value={item.value} display={item.value} route="" />
          <Row name="ether" type="string" value={item.ether} display={item.ether} route="" />
        </tbody></table>
      </div>
    );
  }
}

export class TraceResultDisplay extends Component {
  render() {
    let item = this.props.theData;
    return (
      <div key={this.props.hash}>
        <table width="100%"><tbody>
          <Row name="address" type="string" value={item.address} display={item.address} route="" />
          <Row name="code" type="string" value={item.code} display={item.code} route="" />
          <Row name="gasUsed" type="string" value={item.gasUsed} display={item.gasUsed} route="" />
          <Row name="output" type="string" value={item.output} display={item.output} route="" />        </tbody></table>
      </div>
    );
  }
}

export class TraceDisplay extends Component {
  render() {
    let array = this.props.theData;
    console.log(array);
    console.log(array[0]);
    var item = array[0];
    return (
      <div key={this.props.hash}>
        <div>Trace</div>
        <table width="100%"><tbody>
          <Row name="subtraces" type="string" value={item.subtraces} display={item.subtraces} route="" />
          <Row name="traceAddress" type="string" value={item.traceAddress} display={item.traceAddress} route="" />
          <Row name="transactionHash" type="string" value={item.transactionHash} display={item.transactionHash} route="" />
          <Row name="transactionPosition" type="string" value={item.transactionPosition} display={item.transactionPosition} route="" />
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row name="type" type="string" value={item.type} display={item.type} route="" />
          <Row name="error" type="string" value={item.error} display={item.error} route="" />
          <Row name="articulatedTrace" type="string" value={item.articulatedTrace} display={item.articulatedTrace} route="" />
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
        </tbody></table>
        <div>Trace Action</div>
        <TraceActionDisplay theData={item.action} />
        <div>Trace Result</div>
        <TraceResultDisplay theData={item.result} />
       </div>
    );
  }
}

export default class TracePage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchData = async () => {
    let theID = this.props.match.params.theID;
    if (theID === undefined)
      theID = "latest";
    try {
      var response = await fetch(`${process.env.REACT_APP_API_URL}/traces?trans_list=${theID}`, { mode: 'cors' });
      var result = await response.json();
      console.log("result: ");
      console.log(result);
      this.setState({ data: result })
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    console.log("DidMount");
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
      console.log("this.state.data[0]: ");
      console.log(this.state.data[0]);
      return (<TraceDisplay key={0} theData={this.state.data} />);
    }

    var left = "Trace Module";
    var middle = this.makeContent();
    var right = "The traces component of TrueBlocks allows you to assign names any Ethereum traces. We've provided a number of default named traces, but you may add your own. This makes understanding the timeline of your interactions with the blockchain easier. If you choose to share the names you create, others will benefit from that information.";
    return (
      <BasePage
        lSection={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
