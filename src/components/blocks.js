import React, { Component } from 'react'
import { BasePage, Row } from './common';

export class BlockDisplay extends Component {
  render() {
    let blk = this.props.block;
    let prev = blk.blockNumber + (".prev");  // bounds
    let next = blk.blockNumber + (".next");  // bounds
    return (
      <div key={this.props.name}>
        <table width="100%"><tbody>
          <Row name="blockNumber" type="amount:blk" value={blk.blockNumber} bold={true}></Row>
          <Row class="row_type_1" name="date" type="date:date" value={blk.date}></Row>
          <Row class="row_type_1" name="timestamp" type="date:ts" value={blk.timestamp}></Row>
          <Row class="row_type_1" name="nTransactions" type="amount:num" value={blk.transactions.length}></Row>
          <Row class="row_type_1" name="age" type="date:lights" value={blk.age}></Row>
          <div>&nbsp;</div>
          <Row class="row_type_2" name="gasLimit" type="amount:wei" value={blk.gasLimit}></Row>
          <Row class="row_type_2" name="gasUsed" type="amount:wei" value={blk.gasUsed}></Row>
          <Row class="row_type_2" name="difficulty" type="amount:num" value={blk.difficulty}></Row>
          {/*<Row name="price" type="amount:dollars" value={blk.price}></Row>*/}
          <div>&nbsp;</div>
          <Row class="row_type_3" name="miner" type="address" value={blk.miner} route="/accounts/"></Row>
          <Row class="row_type_3" name="finalized" type="bool" value={blk.finalized}></Row>
          <div>&nbsp;</div>
          <Row class="row_type_4" name="parentHash" type="hash:blk" value={blk.parentHash} route="/blocks/"></Row>
          <Row class="row_type_4" name="hash" type="hash:blk" value={blk.hash}></Row>
          <div>&nbsp;</div>
          <Row name="previous" type="nav:prev" value={prev} route="/blocks/"></Row>
          <Row name="next" type="nav:next" value={next} route="/blocks/"></Row>
          <div>&nbsp;</div>
          if ({blk.transactions.length > 0}) {
            blk.transactions.map(trans => {
              return (
                <Row name="tx" type="hash:tx" value={trans.hash} route="/transactions/"></Row>
              );
            })
          }
        </tbody></table>
      </div>
    );
  }
}

//var cnt = 0;
export default class BlocksPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchBlock = () => {
    let blockNum = this.props.match.params.block;
    if (blockNum === undefined)
      blockNum = "latest";
    console.log(this.props.match);
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

  componentDidMount() {
    console.log("didMount");
    this.fetchBlock();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.block !== prevProps.match.params.block)
      this.fetchBlock();
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
    return (
      <BasePage
        lSection={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
} 
