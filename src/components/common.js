import React, { Component } from 'react'
import { Link } from "react-router-dom";
export { default as BasePage } from './basepage';
export { default as Section } from 'constructicon/section'
export { default as Grid } from 'constructicon/grid'
export { default as GridColumn } from 'constructicon/grid-column'

export class Row extends Component {
    render() {
        function l2(props) {
            return (
                <div>
                    <a href="/accounts/"><img alt="" width="25" src="/name.png" /></a> 
                    <a href="/accounting/"><img alt="" width="25" src="/accounting.png" /></a>&nbsp;&nbsp;
                    <a href="/auditing/"><img alt="" width="25" src="/auditing.png" /></a>&nbsp;&nbsp;
                    <a href="/notifications/"><img alt="" width="25" src="/monitoring.png" /></a>&nbsp;&nbsp;
                </div>
            )
        }
        function l3(props) {
            return (
                <div>
                    <a href="/blocks/"><img alt="" width="25" src="/name.png" /></a> 
                </div>
            )
        }
        function bb(props) {
            return (<div className={props.bold ? "data_boldHead" : "data_head"}>{props.name}</div>)
        }
        function dd(props) {
            if (props.value === undefined)
                return props.value;
            if (props.type === "date:lights") {
                var ret1 = <div className="data_value">{props.value} seconds</div>
                if (props.value > 300)
                    ret1 = <div className="data_value"><img alt="" width="35" src="/greenlight.png" /> {ret1}</div>;
                else if (props.value > 30)
                    ret1 = <div className="data_value"><img alt="" width="35" src="/yellowlight.png" /> {ret1}</div>;
                else
                    ret1 = <div className="data_value"><img alt="" width="35" src="/redlight.png" /> {ret1}</div>;
                return ret1;
            }
            var string = props.value.toString();
            var length = 60;
            var ret = string.length > length ? string.substring(0, length - 3) + "..." : string;
            return (ret);
        }
        function ll(props) {
            var tt = <div className="data_type">({props.type})</div>;
            if (props.route === undefined)
                return <div className="data_value">{dd(props)} {tt}</div>;
            return (<div><Link className="data_link" to={props.route + props.value}>{dd(props)}</Link> {tt}</div>)
        }

        var isAddr = (this.props.type === "address");
        if (isAddr) {
            return (<tr className={this.props.className}>
                <td width="20%" nowrap="true">{bb(this.props)}</td>
                <td>{ll(this.props)}</td>
                <td className="logo_col" align="center">{l2(this.props)}</td>
            </tr>);
        }
        var isNav = (this.props.type.substring(0,4) === "nav:" && !this.props.type.includes("prev") && !this.props.type.includes("next"));
        if (isNav) {
            return (<tr className={this.props.className}>
                <td width="20%" nowrap="true">{bb(this.props)}</td>
                <td>{ll(this.props)}</td>
                <td className="logo_col" align="center">{l3(this.props)}</td>
            </tr>);
        }
        return (<tr className={this.props.className}>
            <td width="20%" nowrap="true">{bb(this.props)}</td>
            <td colSpan="2">{ll(this.props)}</td>
            </tr>);
    }
}
