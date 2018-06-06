import React from 'react';
import Mine from './Mine';
import Tile from './Tile';

const tilesArray = new Array(90);
for (let i = 0; i < tilesArray.length; i++)
    tilesArray[i] = 0;

class Grid extends React.Component {

    render() {
        return (
            <div className="grid">
                {tilesArray.map((tile, index) => <Tile key={index} />)}
            </div>
        );
    }
}

export default Grid;