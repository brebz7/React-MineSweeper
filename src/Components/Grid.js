import React from 'react';
import Tile from './Tile';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridValues: this.spawnGrid(),
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

    render() {

        return (
            <div className="grid">
                {
                    this.state.gridValues.map((tile, index) => <Tile key={index} value={this.state.gridValues[index]} />)
                }
            </div>
        );
    }
}

export default Grid;