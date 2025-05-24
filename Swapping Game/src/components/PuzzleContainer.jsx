import React, { useState } from 'react'

const PuzzleContainer = () => {

    //Here we declare the original order or tiles
    const solvedTiles = [{
        id: 1,
        imageSrc: 1,
        isSelected:false,
    },
    {
        id: 2,
        imageSrc: 2,
        isSelected:false,
    },
    {
        id: 3,
        imageSrc: 3,
        isSelected:false,
    },
    {
        id: 4,
        imageSrc:4,
        isSelected:false,
    },    
    {
        id: 5,
        imageSrc: 5,
        isSelected:false,
    },
    {
        id: 6,
        imageSrc:6,
        isSelected:false,
    },
    {
        id: 7,
        imageSrc: 7,
        isSelected:false,
    },
    {
        id: 8,
        imageSrc: 8,
        isSelected:false,
    },
    {
        id: 9,
        imageSrc: 9,
        isSelected:false,
    },]

    //Declaring a function that swaps tiles
    //It first creates a copy of the solved tiles , and then swaps each element with a randomly generated index tile
    const shuffleTiles=(solvedTiles)=>{
        const copy=[...solvedTiles];
        for(let i=solvedTiles.length-1;i>0;i--){
            const randomIdx=Math.floor(Math.random()*(i+1));
            [copy[i],copy[randomIdx]]=[copy[randomIdx],copy[i]];
        }

        return copy;
    }

    //Defining states for selected tiles as well as current order of tiles
    const [selectedTiles,setSelectedTiles]=useState([]);
    const [currTiles,setCurrTiles]=useState(shuffleTiles(solvedTiles));

    //Function to handle swapping of two tiles
    const swapTiles=(tile1,tile2)=>{
        //It swaps the order of the two selected tiles and then re renders the tiles again
        setCurrTiles((prevTiles)=>{
            const newTiles=[...prevTiles];

            const index1=newTiles.findIndex(tile=>tile.id===tile1.id);
            const index2=newTiles.findIndex(tile=>tile.id===tile2.id);

            [newTiles[index1],newTiles[index2]]=[newTiles[index2],newTiles[index1]];
            newTiles.forEach((tile)=>{
                tile.isSelected=false;
            })

            return newTiles;
        })
    }

    //Each time the tiles are re rendered , the checkVictory function checks if the order is correct, if yes it returns true
    const checkVictory=(currTiles,solvedTiles)=>{
        return currTiles.every((tile,index)=>tile.id==solvedTiles[index].id);
    }

    //Handling click on tile
    //First click select a tile
    //Second click on the same tile deselects it
    //Second click on another tile selects it and swaps it with the first tile by calling the swap tiles function
    const handleClick=(tile,tileId)=>{
        setCurrTiles(prevTiles=>
            prevTiles.map((tile)=>tile.id===tileId?{...tile,isSelected:!tile.isSelected}:tile)
        )
        if(selectedTiles.length===0){
            setSelectedTiles((prev)=>[...prev,tile]);
        }
        else if(selectedTiles.length===1){
            swapTiles(selectedTiles[0],tile)
            setSelectedTiles([]);
        }
        }
        return (
            <div className="App">
                {checkVictory(currTiles, solvedTiles) && <h2>Congratulations!!</h2>}
                <div className="puzzle-grid">
                    {currTiles.map((tile) => (
                        <div key={tile.id}>
                            <img
                                className={`puzzle-piece ${tile.isSelected ? "selected" : ""}`}
                                src={`../public/${tile.imageSrc}.png`}
                                alt="puzzle-piece"
                                onClick={() => handleClick(tile, tile.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
        
}

export default PuzzleContainer
