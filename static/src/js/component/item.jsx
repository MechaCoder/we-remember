import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../../scss/item.scss"

export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            'url': [
                'https://media.giphy.com/media/11S1Zy5SPIqv84/giphy.gif',
            ]
        }
        this.getRandomGif = this.getRandomGif.bind(this);
    }

    getRandomGif(){
        return this.state.url[Math.floor(Math.random() * this.state.url.length)]
    }

    render() {
        return (
            <div className='item' data-id={this.props.id}>
                <div className="text">
                    <div className="inner">
                        <img src={this.getRandomGif()} />
                    </div>
                </div>
                <div className="index">
                    {this.props.id + 1 } of {this.props.max}
                </div>
            </div>
        )
    }
}