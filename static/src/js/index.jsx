import React, { Component } from "react";
import ReactDOM from "react-dom";

import Board from './component/board.jsx';
import Header from './component/head.jsx';

import '../scss/app.scss'

class App extends Component {
    render(){
        return (
            <div>
                <Header />
                <Board />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("App")
)