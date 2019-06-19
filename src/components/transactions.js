import React, { Component } from 'react'
import { BasePage, Row } from "./common"
import { Link } from "react-router-dom";

class PrettyPrintJson extends React.Component {
  render() {
    var json = JSON.stringify(this.props.data, null, 2);
    return (<div><pre>{json}</pre></div>);
  }
}

export class TransDisplay extends Component {
  render() {
    return (
      <div key={this.props.name}>
        <div><PrettyPrintJson data={this.props.trans}/></div>
      </div>
    );
  }
}

export default class TransPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      account: ""
    };
  }

  fetchTx = async () => {
    let txID = this.props.match.params.trans;
    if (txID === undefined) return;
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
    if (this.state.data.length === 0)
      return "";
    return (<div><TransDisplay key={this.state.data[0].hash} trans={this.state.data[0]} /></div>);
  }
}
