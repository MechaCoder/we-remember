import React, { Component } from "react";
import ReactDOM from "react-dom";

import Item from "../component/item.jsx"

export default class Board extends Component {
    constructor() {
        super();
        this.state = {
            'dead': 5373,
            'refresh': 0
        }
        this.getdata = this.getdata.bind(this)
    }

    getdata(){
        fetch('/getcount').then((req)=>{
            return req.json();
        }).then((json)=>{
            this.setState({'dead': json['count']});
        })
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({'refresh': (this.state.refresh + 1) });
            this.getdata();
        }, 30000)
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
            <div className="board" data-r={this.state.refresh}>
                {eles}
            </div>
        )
    }
}