import React from 'react';

import Mine from './Mine';
import '../styles.css';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            tileValue: Math.floor(Math.random() * 9) + 1,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isHidden: !prevState.isHidden
        }));
    }

    render() {
        if (this.state.tileValue === 9) {
            return (
                <Mine />
            );
        } else {
            return (
                <div className="tile" onClick={this.handleClick}>
                    {this.state.isHidden ?
                        <span className="tileCloak">{this.state.tileValue}</span>
                        :
                        <span>{this.state.tileValue}</span>}
                </div>
            );
        }


    }
}