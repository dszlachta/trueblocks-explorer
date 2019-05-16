import React, { Component } from 'react'
import { BasePage, Row } from './common';

export class AccountDisplay extends Component {
  render() {
    let item = this.props.theData[0];
    console.log("item");
    console.log(item);
    return (
      <div key={this.props.hash}>
        <table width="100%"><tbody>
          <Row className="row_type_1" name="address" type="string" value={item.address} display={item.address} />
          <Row className="row_type_1" name="blockNumber" type="string" value={item.blockNumber} display={item.blockNumber} route="/blocks/" />
          <Row className="row_type_2" name="balance" type="string" value={item.balance} display={item.balance} />
          <Row className="row_type_2" name="ether" type="string" value={item.ether} display={item.ether} />
          <Row className="row_type_2" name="nonce" type="string" value={item.nonce} display={item.nonce} />
          <Row className="row_type_2" name="code" type="string" value={item.code} display={item.code} />
          <Row className="row_type_2" name="storage" type="string" value={item.storage} display={item.storage} />
          <Row className="row_type_3" name="deployed" type="string" value={item.deployed} display={item.deployed} route="/blocks/" />
          <Row className="row_type_3" name="accttype" type="string" value={item.accttype} display={item.accttype} />
        </tbody></table>
      </div>
    );
  }
}

export default class AccountsPage extends BasePage {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = {
      data: [],
    };
  }

  fetchData = async () => {
    let theID = this.props.match.params.theID;
    if (theID === undefined) theID = "0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359";
    var response = await fetch(`${process.env.REACT_APP_API_URL}/accounts/${theID}`, { mode: 'cors' });
    var result = await response.json();
    this.setState({ data: result });
  }
  
  fetchData1 = () => {
    let theID = this.props.match.params.theID;
    if (theID === undefined)
      theID = "0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359"; // tip jar if nothing else
    fetch(`${process.env.REACT_APP_API_URL}/accounts/${theID}`, { mode: 'cors' })
      .then ((response) => {
        this.setState({ data: [] })
          console.log("response");
          console.log(response);
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
          response.json().then((result) => {
            console.log("result");
            console.log(result);
            this.setState({ data: result })
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }

  componentDidMount() {
    console.log("I AM HERE - componentDidMount");
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    console.log("I WAS THERE - componentDidMount");
    if (this.props.match.params.theID !== prevProps.match.params.theID)
      this.fetchData();
  }

render() {
    this.makeContent = () => {
      if (this.state.data.length === 0)
        return "";
      return (<AccountDisplay key={this.state.data.data.address} theData={this.state.data.data} />);
    }

    var left = "Accounts Module";
    var middle = this.makeContent();
    var right = "The accounts component of TrueBlocks allows you to assign names to Ethereum addresses. From then on, anywhere that address appears in a TrueBlocks monitor, the name appears beside it. This makes understanding what's going on easier. You may also select names from ENS if you wish. If you choose to share the names you create, others will benefit from that information.";
    return (
      <BasePage
        lSection={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
}
