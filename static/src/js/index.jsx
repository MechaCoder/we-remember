import React, { Component } from "react";
import ReactDOM from "react-dom";
import Test from './component/test.jsx';

class App extends Component {
    render(){
        return (
            <div>
                <Test />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("App")
)