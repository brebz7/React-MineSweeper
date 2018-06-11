import React from 'react';
import '../styles.css';

export default class Mine extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.onClick()}>
                {this.props.isHidden ?
                <div className="mine-hidden"></div>
                :
                <div className="mine"></div>
                }
            </div>
        )
    }
}