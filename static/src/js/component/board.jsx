import React, { Component } from "react";
import ReactDOM from "react-dom";

import Item from "../component/item.jsx"

export default class Board extends Component {
    constructor() {
        super();
        this.state = {
            'dead': 3605
        }
    }

    componentDidMount(){

        fetch('/getcount').then((req)=>{
            return req.json();
        }).then((json)=>{
            this.setState({'dead': json['count']});
        })

    }


    render() {

        var eles = []


        for(var i = 0; i<=this.state.dead; i++){
            eles.push(<Item key={i} id={i} max={this.state.dead} />);
        }
        if(this.state.dead === 0){
            eles = []
        }
        return (
            <div className="board">
                {eles}
            </div>
        )
    }
}