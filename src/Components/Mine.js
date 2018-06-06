import React from 'react';
import '../styles.css';

export default class Mine extends React.Component {
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
            <div onClick={this.handleClick}>
                {this.state.isHidden ?
                <div className="mine-hidden"></div>
                :
                <div className="mine"></div>
                }
            </div>
        )
    }
}