import React from 'react';
import '../styles.css';

export default class Tile extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.onClick()}>
                {
                    this.props.isHidden ?
                        <div className="tile"><span className="tile-hidden">{this.props.value}</span></div>
                        :
                        <div className="tile tile-reveal">{this.props.value}</div>
                }
            </div>
        );
    }
}