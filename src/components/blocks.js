import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section';

export class BlockItem extends Section {
  render() {
    var link = "http://etherscan.io/block/" + this.props.hash;
    return (
      <div key={this.props.name}>
        <div><pre>{this.props.date} ({this.props.timestamp}) <b><big>{this.props.name}</big></b> (<a rel="noopener noreferrer" target="_blank" href={link}>{this.props.blockNumber}</a>)<br/>
          <small><i>{this.props.hash}</i></small>
        </pre></div>
        <hr />
      </div>
    );
  }
}

export default class BlocksPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/blocks', { mode: 'cors' })
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }
  render() {
    this.makeContent = () => {
      return (
        this.state.data.length && this.state.data.map(item => {
          return (
            <BlockItem key={item.name}
              name={item.name}
              blockNumber={item.blockNumber}
              hash={item.hash}
              date={item.date}
              timestamp={item.timestamp}
            />
          );
        }
        ));
    }

    var left = "Blocks";
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
