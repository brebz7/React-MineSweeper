import React, { Component } from 'react';
import '../styles.css';


export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isHidden: !prevState.isHidden
        }));
    }

    render() {
        return (
            <div className="tile" onClick={this.handleClick}>
                {this.state.isHidden ?
                    <span className="tileCloak">{this.props.tileValue}</span>
                    :
                    <span>{this.props.tileValue}</span>}
            </div>
        );
    }
}