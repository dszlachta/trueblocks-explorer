import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section';

export class NameItem extends Section {
  render() {
    var link = "http://etherscan.io/address/" + this.props.addr;
    return (
      <div key={this.props.name}>
        <div><b>Name:</b> {this.props.name} ({this.props.symbol})</div>
        <div>Address: <a href={link}>{this.props.addr}</a></div>
        <div>Desciption: {this.props.description}</div>
        <div>Logo: <img src="./images/{this.props.logo}" /></div>
        <hr />
      </div>
    );
  }
}

export default class NamesPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
      fetch('http://localhost:8080/names?search1=0x12', { mode: 'cors' })
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }
  render() {
    this.makeContent = () => {
      return (
        this.state.data.length && this.state.data.map(item => {
          return (
            <NameItem
              name={item.name}
              description={item.description}
              addr={item.addr}
              symbol={item.symbol}
              logo={item.logo}
            />
          );
        }
      ));
    }

    var left = "Names";
    var middle = this.makeContent();
    var right = "The names component of TrueBlocks allows you to assign names to Ethereum addresses. From then on, anywhere that address appears in a TrueBlocks monitor, the name appears beside it. This makes understanding what's going on easier. You may also select names from ENS if you wish. If you choose to share the names you create, others will benefit from that information.";
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
