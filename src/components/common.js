import React, { Component } from 'react'
import { Link } from "react-router-dom";
export { default as BasePage } from './basepage';
export { default as Section } from 'constructicon/section'
export { default as Grid } from 'constructicon/grid'
export { default as GridColumn } from 'constructicon/grid-column'

export class Row extends Component {
    render() {
        var isAddr = (this.props.type == "address");
        function l2(props) {
            if (!isAddr)
                return "";
            var addr = props.value;
            return (
                <td class="logo_col" align="center">
                    <a href="/accounting/"><img width="25" src="/accounting.png" /></a>&nbsp;&nbsp;
                    <a href="/auditing/"><img width="25" src="/auditing.png" /></a>&nbsp;&nbsp;
                    <a href="/notifications/"><img width="25" src="/monitoring.png" /></a>&nbsp;&nbsp;
                    <a href="/accounts/"><img width="25" src="/name.png" /></a>
                </td>
            )
        }
        function bb(props) {
            return (<div class={props.bold ? "data_boldHead" : "data_head"}>{props.name}</div>)
        }
        function dd(props) {
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
