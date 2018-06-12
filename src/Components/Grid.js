import React from 'react';
import Tile from './Tile';
import Mine from './Mine';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridValues: this.spawnGrid(),
            isHidden: Array(81).fill(true)
        }

    }

    spawnGrid() {
        let gridValues = Array(81).fill(null);
        for (let row = 0; row < 9; row++)
            for (let col = 0; col < 9; col++) {
                let mine = Math.floor(Math.random() * 9) + 1;
                if (mine === 9) {
                    gridValues[row * 9 + col] = 9;
                    //RIGHT
                    if (gridValues[row * 9 + col + 1] !== 9 && col !== 8)
                        gridValues[row * 9 + col + 1] += 1;
                    //LEFT
                    if (gridValues[row * 9 + col - 1] !== 9 && col !== 0)
                        gridValues[row * 9 + col - 1] += 1;
                    //TOP
                    if (gridValues[(row - 1) * 9 + col] !== 9 && row !== 0)
                        gridValues[(row - 1) * 9 + col] += 1;
                    //BOTTOM
                    if (gridValues[(row + 1) * 9 + col] !== 9 && row !== 8)
                        gridValues[(row + 1) * 9 + col] += 1;
                    //TOP LEFT
                    if (gridValues[(row - 1) * 9 + col - 1] !== 9 && col !== 0 && row !== 0)
                        gridValues[(row - 1) * 9 + col - 1] += 1;
                    //TOP RIGHT
                    if (gridValues[(row - 1) * 9 + col + 1] !== 9 && col !== 8 && row !== 0)
                        gridValues[(row - 1) * 9 + col + 1] += 1;
                    //BOTTOM RIGHT
                    if (gridValues[(row + 1) * 9 + col + 1] !== 9 && col !== 8 && row !== 8)
                        gridValues[(row + 1) * 9 + col + 1] += 1;
                    //BOTTOM LEFT
                    if (gridValues[(row + 1) * 9 + col - 1] !== 9 && col !== 0 && row !== 8)
                        gridValues[(row + 1) * 9 + col - 1] += 1;
                }
            }
        return gridValues;
    }

    handleClick(index) {
        if (this.state.gridValues[index] !== null)
            this.setState(prevState => ({
                isHidden: prevState.isHidden.map((hideStatus, indexHide, HideStatusArray) => {
                    if (indexHide === index)
                        return false;
                    else
                        return hideStatus;
                })
            }));

        if (this.state.gridValues[index] === null && index > 8)
            this.setState(prevState => ({
                isHidden: prevState.isHidden.map((hideStatus, indexHide, HideStatusArray) => {
                    if ((indexHide + 10) === index) {
                        HideStatusArray[indexHide + 1] = false;
                        HideStatusArray[indexHide + 2] = false;
                        HideStatusArray[indexHide + 9] = false;
                        HideStatusArray[indexHide + 10] = false;
                        HideStatusArray[indexHide + 11] = false;
                        HideStatusArray[indexHide + 18] = false;
                        HideStatusArray[indexHide + 19] = false;
                        HideStatusArray[indexHide + 20] = false;
                        return false;   //current iteration
                    }
                    else
                        return hideStatus;
                })
            }));
        if (this.state.gridValues[index] === null && index === 0)
            this.setState(prevState => ({
                isHidden: prevState.isHidden.map((hideStatus, indexHide, HideStatusArray) => {
                    if (indexHide === 0) {
                        HideStatusArray[indexHide + 1] = false;

                        HideStatusArray[indexHide + 9] = false;
                        HideStatusArray[indexHide + 10] = false;
                        return false;
                    }
                    else
                        return hideStatus;


                })
            }))
        if (this.state.gridValues[index] === null && index === 8)
            this.setState(prevState => ({
                isHidden: prevState.isHidden.map((hideStatus, indexHide, HideStatusArray) => {
                    if (indexHide === 7 || indexHide === 8 || indexHide === 16 || indexHide === 17)
                        return false;
                    else
                        return hideStatus;
                })
            }))
        if (this.state.gridValues[index] === null && index > 0 && index < 8)
            this.setState(prevState => ({
                isHidden: prevState.isHidden.map((hideStatus, indexHide, HideStatusArray) => {
                    if (index === 1 && (indexHide === 0 || indexHide === 1 || indexHide === 2 || indexHide === 9 || indexHide === 10 || indexHide === 11)) {
                        return false;
                    }
                    else if (index === 2 && (indexHide === 1 || indexHide === 2 || indexHide === 3 || indexHide === 10 || indexHide === 11 || indexHide === 12)) {
                        return false;
                    }
                    else if (index === 3 && (indexHide === 2 || indexHide === 3 || indexHide === 4 || indexHide === 11 || indexHide === 12 || indexHide === 13) ) {
                        return false;
                    }
                    else if (index === 4 && (indexHide === 3 || indexHide === 4 || indexHide === 5 || indexHide === 12 || indexHide === 13 || indexHide === 14) ) {
                        return false;
                    }
                    else if (index === 5 && (indexHide === 4 || indexHide === 5 || indexHide === 6 || indexHide === 13 || indexHide === 14 || indexHide === 15) ) {
                        return false;
                    }
                    else if (index === 6 && (indexHide === 5 || indexHide === 6 || indexHide === 7 || indexHide === 14 || indexHide === 15 || indexHide === 16) ) {
                        return false;
                    }
                    else if (index === 7 && (indexHide === 6 || indexHide === 7 || indexHide === 8 || indexHide === 15 || indexHide === 16 || indexHide === 17) ) {
                        return false;
                    }
                    else
                        return hideStatus;
                })
            }))
    }

    render() {
        return (
            <div className="grid">
                {
                    this.state.gridValues.map((tileValue, index) => {
                        if (tileValue === 9)
                            return <Mine
                                key={index}
                                onClick={() => this.handleClick(index)}
                                isHidden={this.state.isHidden[index]}
                            />
                        else
                            return <Tile
                                key={index}
                                value={tileValue}
                                onClick={() => this.handleClick(index)}
                                isHidden={this.state.isHidden[index]}
                            />
                    })
                }
            </div>
        );
    }
}
export default Grid;