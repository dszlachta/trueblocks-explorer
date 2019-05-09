import React, { Component } from 'react'
import { BasePage, Row } from "./common"

export class TransDisplay extends Component {
  render() {
    let tx = this.props.trans;
    let cur = tx.blockNumber + "." + tx.transactionIndex;
    let prev = tx.blockNumber + "." + (tx.transactionIndex + ".prev");  // bounds
    let next = tx.blockNumber + "." + (tx.transactionIndex + ".next");  // bounds
    return (
      <div key={this.props.name}>
          <table width="100%"><tbody>
          <Row name="transId" type="nav:cur" value={cur} bold={true}></Row>
          <Row class="row_type_1" name="from" type="address" value={tx.from} route="/accounts/"></Row>
          <Row class="row_type_1" name="to" type="address" value={tx.to} route="/accounts/"></Row>
          <Row class="row_type_1" name="date" type="date:date" value={tx.date}></Row>
          <Row class="row_type_1" name="value.wei" type="num:wei" value={tx.value}></Row>
          <Row class="row_type_1" name="value.ether" type="num:ether" value={tx.ether}></Row>
          {/*<Row class="row_type_1" name="price" type="num:dollars" value={tx.price}></Row>*/}
          <div>&nbsp;</div>
          <Row class="row_type_2" name="transactionIndex" type="num:txid" value={tx.transactionIndex}></Row>
          <Row class="row_type_2" name="hash" type="hash:tx" value={tx.hash} route="/transactions/"></Row>
          <Row class="row_type_2" name="date short" type="date:datesh" value={tx.datesh}></Row>
          <Row class="row_type_2" name="time" type="date:time" value={tx.time}></Row>
          <Row class="row_type_2" name="timestamp" type="date:ts" value={tx.timestamp}></Row>
          <Row class="row_type_2" name="input" type="bytes" value={tx.input} route="/transactions/"></Row>
          <Row class="row_type_2" name="gasUsed" type="num:gas" value={tx.gasUsed}></Row>
          <div>&nbsp;</div>
          <Row class="row_type_3" name="receipt" type="receipt" value="<expand>" route="/receipts/"></Row>
          <Row class="row_type_3" name="traces" type="trace" value="<expand>" route="/traces/"></Row>
          <div>&nbsp;</div>
          <Row class="row_type_4" name="blockNumber" type="num:blk" value={tx.blockNumber} route="/blocks/"></Row>
          <Row class="row_type_4" name="blockHash" type="hash:blk" value={tx.blockHash} route="/blocks/"></Row>
          <div>&nbsp;</div>
          <Row name="previous" type="nav:prev" value={prev} route="/transactions/"></Row>
          <Row name="next" type="nav:next" value={next} route="/transactions/"></Row>
        }
        </tbody></table>
      </div>
    );
  }
}

//var cnt = 0;
export default class TransPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchBlock = () => {
    let txID = this.props.match.params.trans;
    if (txID == undefined)
      txID = "latest";
    console.log(this.props.match);
    fetch(`${process.env.REACT_APP_API_URL}/transactions/${txID}`, { mode: 'cors' })
      .then(response => response.json())
      .then(result => {
        console.log("data: ");
        console.log(this.state.data);
        console.log("result: ");
        console.log(result);
        this.setState({ data: result })
        console.log("data: ");
        console.log(this.state.data);
      }
      ).catch((e) => {
        console.log(e)
      });
  }

  componentDidMount() {
    console.log("didMount");
    this.fetchBlock();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.trans !== prevProps.match.params.trans)
      this.fetchBlock();
  }

  render() {
    console.log("render");
    this.makeContent = () => {
      console.log("data: ");
      console.log(this.state.data);
      if (this.state.data.length === 0)
        return "";

      return (this.state.data.map(trans => {
        return (<TransDisplay key={trans.name} trans={trans} />);
      }
      ));
    }

    var left = "Trans Module";
    var middle = this.makeContent();
    var right = "The transactions component of TrueBlocks allows you to assign names any Ethereum transactions. We've provided a number of default named transactions, but you may add your own. This makes understanding the timeline of your interactions with the blockchain easier. If you choose to share the names you create, others will benefit from that information.";
    return (
      <BasePage
        lSection={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
