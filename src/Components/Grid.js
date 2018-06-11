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

    handleClick(i) {
        this.setState(prevState => ({
            isHidden: prevState.isHidden.map((hideStatus, index) => {
                if (index === i)
                    return !hideStatus;
                else
                    return hideStatus;
            })
        }));
    }

    render() {
        return (
            <div className="grid">
                {
                    this.state.gridValues.map((tileValue, index) => {
                        if (tileValue === 9)
                            return <Mine key={index} onClick={() => this.handleClick(index)} isHidden={this.state.isHidden[index]} />
                        else
                            return <Tile key={index} value={tileValue} onClick={() => this.handleClick(index)} isHidden={this.state.isHidden[index]} />
                    })
                }
            </div>
        );
    }
}
export default Grid;