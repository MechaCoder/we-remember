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
                    <h1>We Remember</h1>
                    <span> Each candle repesents someone who has died becouse of covid-19 in the UK </span>
                </div>
            </div>
        )
    }
}