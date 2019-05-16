import React, { Component } from 'react'
import { BasePage, Row } from './common';

export class BlockDisplay extends Component {
  render() {
    let item = this.props.theData;
    let prev = item.blockNumber + (".prev");  // bounds
    let next = item.blockNumber + (".next");  // bounds
    return (
      <div key={this.props.name}>
        <table width="100%"><tbody>
          <Row name="blockNumber" type="amount:blk" value={item.blockNumber} bold={true}></Row>
          <Row className="row_type_1" name="date" type="date:date" value={item.date}></Row>
          <Row className="row_type_1" name="timestamp" type="date:ts" value={item.timestamp}></Row>
          <Row className="row_type_1" name="nTransactions" type="amount:num" value={item.transactions.length}></Row>
          <Row className="row_type_1" name="age" type="date:lights" value={item.age}></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row className="row_type_2" name="gasLimit" type="amount:wei" value={item.gasLimit}></Row>
          <Row className="row_type_2" name="gasUsed" type="amount:wei" value={item.gasUsed}></Row>
          <Row className="row_type_2" name="difficulty" type="amount:num" value={item.difficulty}></Row>
          {/*<Row name="price" type="amount:dollars" value={blk.price}></Row>*/}
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row className="row_type_3" name="miner" type="address" value={item.miner} route="/accounts/"></Row>
          <Row className="row_type_3" name="finalized" type="bool" value={item.finalized}></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row className="row_type_4" name="parentHash" type="hash:blk" value={item.parentHash} route="/blocks/"></Row>
          <Row className="row_type_4" name="hash" type="hash:blk" value={item.hash}></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          <Row name="previous" type="nav:prev" value={prev} route="/blocks/"></Row>
          <Row name="next" type="nav:next" value={next} route="/blocks/"></Row>
          <tr><td width="100%" colSpan="3" height="10px"></td></tr>
          if ({item.transactions.length > 0}) {
            item.transactions.map(trans => {
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

export default class BlocksPage extends BasePage {
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
    fetch(`${process.env.REACT_APP_API_URL}/blocks/${theID}`, { mode: 'cors' })
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
        return (<BlockDisplay key={dataObj.hash} theData={dataObj} />);
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
