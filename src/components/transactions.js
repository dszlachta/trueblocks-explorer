import React, { Component } from 'react'
import { BasePage, Row } from "./common"
import { Link } from "react-router-dom";

class TransSeek extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listResults: []
    };
  }

  fetchList = (address) => {
    fetch(`${process.env.REACT_APP_API_URL}/list?address=${address}`, { mode: 'cors' })
      .then((res) => {
        //console.log(res.text());
        return res.text()
      }).then((res) => {
        this.setState({listResults: res.replace(/[^\S\r\n]/g, ".").trim().split("\n")});
      })
    .catch((e) => {
        console.log(e)
      });
  }

  componentDidMount = () => {
    this.props.account !== "" && this.fetchList(this.props.account);
  }

  render = () => {

    this.makeList = (chifraList) => {
      return <div>
        {chifraList.map((bnTxid) => {
          return (<span><Link key={bnTxid} to={`/transactions/${bnTxid}`}>{bnTxid}</Link>&nbsp;&nbsp;&nbsp;</span>)
        })
      }
      </div>
    }

    return (
      <div>
        Account filter: {this.props.account}
        {this.makeList(this.state.listResults)}
      </div>
    )
      
  }
}

export class TransDisplay extends Component {
  render() {
    let item = this.props.trans;
    let cur = item.blockNumber + "." + item.transactionIndex;
    let first = "45000.0.next";  // bounds
    let prev = item.blockNumber + "." + (item.transactionIndex + ".prev");  // bounds
    let prevblk = (item.blockNumber - 1) + "." + (1 + ".prev");  // bounds
    let next = item.blockNumber + "." + (item.transactionIndex + ".next");  // bounds
    let nextblk = item.blockNumber + ".10000.next";  // bounds
    return (
      <div key={this.props.name}>
        <table width="100%">
          <tbody>
            <Row name="transId" type="nav:cur" value={cur} bold={true}></Row>
            <Row className="row_type_1" name="from" type="address" value={item.from} route="/accounts/"></Row>
            <Row className="row_type_1" name="to" type="address" value={item.to} route="/accounts/"></Row>
            <Row className="row_type_1" name="date" type="date:date" value={item.date}></Row>
            <Row className="row_type_1" name="value.wei" type="num:wei" value={item.value}></Row>
            <Row className="row_type_1" name="value.ether" type="num:ether" value={item.ether}></Row>
            <Row className="row_type_1" name="age" type="date:lights" value={item.age}></Row>
            <tr><td width="100%" colSpan="3" height="10px"></td></tr>
            <Row className="row_type_2" name="transactionIndex" type="num:txid" value={item.transactionIndex}></Row>
            <Row className="row_type_2" name="hash" type="hash:tx" value={item.hash} route="/transactions/"></Row>
            <Row className="row_type_2" name="date short" type="date:datesh" value={item.datesh}></Row>
            <Row className="row_type_2" name="time" type="date:time" value={item.time}></Row>
            <Row className="row_type_2" name="timestamp" type="date:ts" value={item.timestamp}></Row>
            <Row className="row_type_2" name="input" type="bytes" value={item.input} route="/transactions/"></Row>
            <Row className="row_type_2" name="gasUsed" type="num:gas" value={item.gasUsed}></Row>
            <tr><td width="100%" colSpan="3" height="10px"></td></tr>
            <Row className="row_type_3" name="receipt" type="obj:receipt" value={item.hash} display="<expand>" route="/receipts/"></Row>
            <Row className="row_type_3" name="traces" type="array:trace" value={item.hash} display="<expand>" route="/traces/"></Row>
            <tr><td width="100%" colSpan="3" height="10px"></td></tr>
            <Row className="row_type_4" name="blockNumber" type="num:blk" value={item.blockNumber} route="/blocks/"></Row>
            <Row className="row_type_4" name="blockHash" type="hash:blk" value={item.blockHash} route="/blocks/"></Row>
            <tr><td width="100%" colSpan="3" height="10px"></td></tr>
            <Row name="1st tx in prev blk" type="nav:prev" value={prevblk} route="/transactions/"></Row>
            <Row name="1st tx in next blk" type="nav:next" value={nextblk} route="/transactions/"></Row>
            <Row name="previous tx" type="nav:prev" value={prev} route="/transactions/"></Row>
            <Row name="next tx" type="nav:next" value={next} route="/transactions/"></Row>
            <Row name="first tx" type="nav:first" value={first} route="/transactions/"></Row>
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

  fetchTx = () => {
    let txID = this.props.match.params.trans;
    if (txID === undefined) txID = "latest";
    var response = await fetch(`${process.env.REACT_APP_API_URL}/transactions/${txID}`, { mode: 'cors' });
    var result = await response.json();
    this.setState({ data: result });
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
        <TransSeek account={this.props.account}/>
        {this.state.data.map(trans => 
          <TransDisplay key={trans.hash} trans={trans} />
        )}
       </div>
      );
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
