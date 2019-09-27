import React, { Component } from 'react'
import { Link } from "react-router-dom";

export { default as BasePage } from './basepage';
export { default as Section } from 'constructicon/section'
export { default as Grid } from 'constructicon/grid'
export { default as GridColumn } from 'constructicon/grid-column'


export class Row extends Component {

    render() {

        //----------------------------------------------------------------------------------------------------
        function addrLinks(props) {
            return (
                <div>
                    {/* <a href={"/accounts/" + props.value}><img alt="" width="25" src="/name.png" /></a>&nbsp;
                    <a href="/accounting/"><img alt="" width="25" src="/accounting.png" /></a>&nbsp;
                    <a href="/auditing/"><img alt="" width="25" src="/auditing.png" /></a>&nbsp;
                    <a href="/notifications/"><img alt="" width="25" src="/monitoring.png" /></a>&nbsp; */}
                </div>
            )
        }

        //----------------------------------------------------------------------------------------------------
        function navLinks(props) {
            return (
                <div>
                    {/* <a href="/blocks/"><img alt="" width="25" src="/name.png" /></a> */}
                </div>
            )
        }

        //----------------------------------------------------------------------------------------------------
        function dispValue(props) {
            if (props.value === undefined || props.value == null)
                return props.value;

            if (props.type === "date:lights") {
                var image = "/redlight.png";
                if (props.value > 300)
                    image = "/greenlight.png"
                else if (props.value > 30)
                    image = "/yellowlight.png"
                return (
                    <div className="data_value"><img alt="" width="35" src={image} /> {props.value} seconds</div>
                );
            }

            var string = (props.display !== undefined ? props.display : props.value.toString());
            if (string.length > 66)
                string = string.substring(0, 63) + "...";
            return string;
        }

        //----------------------------------------------------------------------------------------------------
        function rowHeader(props) {
            return (
                <div className={props.bold ? "data_boldHead" : "data_head"}>{props.name}
                    <div className="data_type">({props.type})</div>
                </div>
            );
        }

        //----------------------------------------------------------------------------------------------------
        function rowBody(props) {
            if (props.route === undefined)
                return (<div className="data_value">{dispValue(props)}</div>);
            return (
                <div>
                    <Link className="data_link" to={props.route + props.value}>{dispValue(props)}</Link>
                </div>
            );
        }

        //----------------------------------------------------------------------------------------------------
        var isAddr = (this.props.type === "address");
        if (isAddr) {
            return (
                <tr className={this.props.className}>
                    <td width="20%" nowrap="true">{rowHeader(this.props)}</td>
                    <td>{rowBody(this.props)}</td>
                    <td width="30%" className="icon_column" align="right">{addrLinks(this.props)}</td>
                </tr>
            );
        }

        //----------------------------------------------------------------------------------------------------
        var isNav = (this.props.type.substring(0,4) === "nav:" && !this.props.type.includes("prev") && !this.props.type.includes("next"));
        if (isNav) {
            return (
                <tr className={this.props.className}>
                    <td width="20%" nowrap="true">{rowHeader(this.props)}</td>
                    <td>{rowBody(this.props)}</td>
                    <td width="30%" className="icon_column" align="right">{navLinks(this.props)}</td>
                </tr>
            );
        }

        //----------------------------------------------------------------------------------------------------
        return (
            <tr className={this.props.className}>
                <td width="20%" nowrap="true">{rowHeader(this.props)}</td>
                <td colSpan="2">{rowBody(this.props)}</td>
            </tr>
        );
    }
}
