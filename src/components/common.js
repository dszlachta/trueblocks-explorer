import React, { Component } from 'react'
import { Link } from "react-router-dom";
export { default as BasePage } from './basepage';
export { default as Section } from 'constructicon/section'
export { default as Grid } from 'constructicon/grid'
export { default as GridColumn } from 'constructicon/grid-column'

export class Row extends Component {
    render() {
        var isAddr = (this.props.type === "address");
        function l2(props) {
            if (!isAddr)
                return "";
            return (
                <td class="logo_col" align="center">
                    <a href="/accounts/"><img alt="" width="25" src="/name.png" /></a>
                    <a href="/accounting/"><img alt="" width="25" src="/accounting.png" /></a>&nbsp;&nbsp;
                    <a href="/auditing/"><img alt="" width="25" src="/auditing.png" /></a>&nbsp;&nbsp;
                    <a href="/notifications/"><img alt="" width="25" src="/monitoring.png" /></a>&nbsp;&nbsp;
                </td>
            )
        }
        function bb(props) {
            return (<div class={props.bold ? "data_boldHead" : "data_head"}>{props.name}</div>)
        }
        function dd(props) {
            if (props.value === undefined)
                return props.value;
            if (props.type === "date:lights") {
                var ret = <div class="data_value">{props.value} seconds</div>
                if (props.value > 300)
                    ret = <div class="data_value"><img alt="" width="35" src="/greenlight.png" /> {ret}</div>;
                else if (props.value > 30)
                    ret = <div class="data_value"><img alt="" width="35" src="/yellowlight.png" /> {ret}</div>;
                else
                    ret = <div class="data_value"><img alt="" width="35" src="/redlight.png" /> {ret}</div>;
                return ret;
            }
            var string = props.value.toString();
            var length = 80;
            var ret = string.length > length ? string.substring(0, length - 3) + "..." : string;
            return (ret);
        }
        function ll(props) {
            var tt = <div class="data_type">({props.type})</div>;
            if (props.route === undefined)
                return <div class="data_value">{dd(props)} {tt}</div>;
            return (<div><Link class="data_link" to={props.route + props.value}>{dd(props)}</Link> {tt}</div>)
        }
        return (
            <tr class={this.props.class}>
                <td width="20%" nowrap>{bb(this.props)}</td>
                <td colspan={isAddr?1:2}>{ll(this.props)}</td>
                {l2(this.props)}
            </tr>);
    }
}
