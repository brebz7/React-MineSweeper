import React from 'react';
import Mine from './Mine';
import '../styles.css';

export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            mineGenerator: Math.floor(Math.random() * 9) + 1,

        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isHidden: !prevState.isHidden
        }));
    }

    render() {
        if (this.props.value === 9) {
            return (
                <Mine />
            );
        } else {
            return (
                <div onClick={this.handleClick}>
                {
                    this.state.isHidden ?
                    <div className="tile"><span className="tile-hidden">{this.props.value}</span></div>
                    :
                    <div className="tile tile-reveal">{this.props.value}</div>
                }
                </div>
            );
        }
    }
}