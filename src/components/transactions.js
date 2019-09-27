import React, { Component } from 'react'
import { BasePage, Row } from "./baserow"

export class TransDisplay extends Component {
  render() {
    let item = this.props.trans;
    return (
      <div key={this.props.name}>
        <table width="100%">
          <tbody>
            <Row name="transId" type="nav:cur" value={item.blockNumber + "." + item.transactionIndex} bold={true}></Row>
            <Row name="from" type="address" value={item.from} route="/accounts/"></Row>
            <Row name="to" type="address" value={item.to} route="/accounts/"></Row>
            <Row name="date" type="date:date" value={item.date}></Row>
            <Row name="value.wei" type="num:wei" value={item.value}></Row>
            <Row name="value.ether" type="num:ether" value={item.ether}></Row>
            <Row name="age" type="date:lights" value={item.age}></Row>

            <tr><td width="100%" colSpan="3" height="10px"></td></tr>
            <Row name="transactionIndex" type="num:txid" value={item.transactionIndex}></Row>
            <Row name="hash" type="hash:tx" value={item.hash} route="/transactions/"></Row>
            <Row name="date short" type="date:datesh" value={item.datesh}></Row>
            <Row name="time" type="date:time" value={item.time}></Row>
            <Row name="timestamp" type="date:ts" value={item.timestamp}></Row>
            <Row name="input" type="bytes" value={item.input} route="/transactions/"></Row>
            <Row name="gasUsed" type="num:gas" value={item.gasUsed}></Row>

            <tr><td width="100%" colSpan="3" height="10px"></td></tr>
            <Row name="receipt" type="obj:receipt" value={item.hash} display="<expand>" route="/receipts/"></Row>
            <Row name="traces" type="array:trace" value={item.hash} display="<expand>" route="/traces/"></Row>

            <tr><td width="100%" colSpan="3" height="10px"></td></tr>
            <Row name="blockNumber" type="num:blk" value={item.blockNumber} route="/blocks/"></Row>
            <Row name="blockHash" type="hash:blk" value={item.blockHash} route="/blocks/"></Row>

            <tr><td width="100%" colSpan="3" height="10px"></td></tr>
            <Row name="1st tx in prev blk" type="nav:prev" value={(item.blockNumber - 1) + "." + (1 + ".prev")} route="/transactions/"></Row>
            <Row name="1st tx in next blk" type="nav:next" value={item.blockNumber + ".10000.next"} route="/transactions/"></Row>
            <Row name="previous tx" type="nav:prev" value={item.blockNumber + "." + (item.transactionIndex + ".prev")} route="/transactions/"></Row>
            <Row name="next tx" type="nav:next" value={item.blockNumber + "." + (item.transactionIndex + ".next")} route="/transactions/"></Row>
            <Row name="first tx" type="nav:first" value="45000.0.next" route="/transactions/"></Row>
            <Row name="latest tx" type="nav:last" value={"latest"} route="/transactions/"></Row>
        </tbody>
        </table>
      </div>
    );
  }
}

export default class TransPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      account: ""
    };
  }

  fetchTx = async () => {
    console.log(`${process.env.REACT_APP_API_URL}`)
    let txID = this.props.match.params.trans;
    if (txID === undefined) txID = "latest";
//    var response = await fetch(`${process.env.REACT_APP_API_URL}/transactions?trans_list=${txID}`, { mode: 'cors' });
    var response = await fetch(`http://localhost:8080/transactions?trans_list=${txID}`, { mode: 'cors' });
    console.log(response);
    var result = await response.json();
    console.log(result)
    this.setState({ data: result.data });
  }

  componentDidMount() {
    this.fetchTx();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.trans !== prevProps.match.params.trans)
      this.fetchTx();
  }

  render() {
    this.makeContent = () => {
      if (this.state.data.length === 0)
        return "";
      return (
        <div>
        {this.state.data.map(trans => 
          <TransDisplay key={trans.hash} trans={trans} />
        )}
       </div>
      );
    }

    var left = "Transaction";
    var middle = this.makeContent();
    var right = "The transactions component of TrueBlocks allows you to assign names any Ethereum transactions. We've provided a number of default named transactions, but you may add your own. This makes understanding the timeline of your interactions with the blockchain easier. If you choose to share the names you create, others will benefit from that information.";
    return (
      <BasePage
        pageTitle={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
