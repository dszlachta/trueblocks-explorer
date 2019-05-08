import React, { Component } from 'react'
import BasePage from './basepage';
//import Section from 'constructicon/section';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

export class Row extends Component {
  render() {
    var link = "/blocks/" + this.props.value;
    if (this.props.bold) {
      if (this.props.link) {
        return (
          <tr><td width="20%">
            <b>{this.props.name}:</b>
          </td><td>
            <Link to={link}>{this.props.value}</Link>
            </td></tr>);
      } else {
        return (<tr><td width="20%"><b>{this.props.name}:</b></td><td><b>{this.props.value}</b></td></tr>);
      }
    } else {
      if (this.props.link) {
        return (
          <tr><td width="20%">
            <b>{this.props.name}:</b>
          </td><td>
              <Link to={link}>{this.props.value}</Link>
            </td></tr>);
      } else {
        return (<tr><td width="20%">{this.props.name}:</td><td>{this.props.value}</td></tr>);
      }
    }
  }
}

export class BlockDisplay extends Component {
  render() {
    var link = "/blocks/" + this.props.blockNumber;
    return (
      <div key={this.props.name}>
        <table><tbody>
          <Row name="blockNumber" value={this.props.block.blockNumber} bold={true} link={true}></Row>
          <Row name="hash" value={this.props.block.hash} link={true}></Row>
          <Row name="parentHash" value={this.props.block.parentHash} link={true}></Row>
          <Row name="miner" value={this.props.block.miner} link={true}></Row>
          <Row name="date" value={this.props.block.date}></Row>
          <Row name="timestamp" value={this.props.block.timestamp}></Row>
          <Row name="gasLimit" value={this.props.block.gasLimit}></Row>
          <Row name="gasUsed" value={this.props.block.gasUsed}></Row>
          <Row name="difficulty" value={this.props.block.difficulty}></Row>
          <Row name="nTransactions" value={this.props.block.transactions.length}></Row>
          if ({this.props.block.transactions.length > 0}) {
            this.props.block.transactions.map(trans => {
              return (
                <Row name="tx" value={trans.hash} link={true}></Row>
              );
          })
        }
        </tbody></table>
        <hr />
      </div>
    );
//    <Row name="price" value={this.props.block.price}></Row>
//    <Row name="finalized" value={this.props.block.finalized}></Row>
  }
}

//var cnt = 0;
export default class BlocksPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      prevBlock: "123-129"
    };
  }

  componentDidMount() {
    console.log("didMount");
    let blockNum = this.props.match.params.block;
    if (blockNum == undefined) return;
    fetch(`${process.env.REACT_APP_API_URL}/blocks/${blockNum}`, { mode: 'cors' })
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

  render() {
    console.log("render");
    this.makeContent = () => {
      console.log("data: ");
      console.log(this.state.data);
      if (this.state.data.length === 0)
        return "";

      return (this.state.data.map(block => {
        return (<BlockDisplay key={block.name} block={block} />);
      }
      ));
    }

    var left = "Blocks Module";
    var middle = this.makeContent();
    var right = "The blocks component of TrueBlocks allows you to assign names any Ethereum blocks. We've provided a number of default named blocks, but you may add your own. This makes understanding the timeline of your interactions with the blockchain easier. If you choose to share the names you create, others will benefit from that information.";
    var button = "Push";
    return (
      <BasePage
        lSection={left}
        lButton={button}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
