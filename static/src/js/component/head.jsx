import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../scss/header.scss'

export default class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='header'>
                <div>
                    <h1>In Remerance</h1>
                </div>
            </div>
        )
    }
}