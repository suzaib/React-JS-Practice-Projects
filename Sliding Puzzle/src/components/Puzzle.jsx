import React, { useState, useEffect } from "react";

const Puzzle = () => {
  // Initial state for the puzzle
  const initialBlocks = Array.from({ length: 15 }, (_, i) => i + 1).concat(null);

  const [blocks, setBlocks] = useState(initialBlocks);
  const [isWinner, setIsWinner] = useState(false);

  // Shuffle the blocks when the game starts
  useEffect(() => {
    shuffleBlocks();
  }, []);

  //Function to shuffle the blocks, the function keeps shuffling the blocks unless a pattern is obtained which can be solved
  const shuffleBlocks = () => {
    const shuffled = [...blocks];
    do {
      shuffled.sort(() => Math.random() - 0.5);
    } while (!isSolvable(shuffled));
    setBlocks(shuffled);
    setIsWinner(false);
  };

  //A function to check whether the pattern of blocks generated can be solved or not
  //In such games of moving blocks , if the blocks array has even total inversion , then only the blocks can be moved in to correct order
  const isSolvable = (blocks) => {
    const array = blocks.filter((block) => block !== null);
    let inversions = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) inversions++;
      }
    }
    return inversions % 2 === 0;
  };

  //Handling click of blocks
  const handleClick = (index) => {

    //First we find the empty index
    const emptyIndex = blocks.indexOf(null);

    //Then we check whether are there empty spaces in neighbourhood of the clicked block(the empty spaces should be within the grid), if there are, then that move is valid
    const isValidMove =
      [index - 1, index + 1, index - 4, index + 4].includes(emptyIndex) &&
      !(index % 4 === 0 && emptyIndex === index - 1) &&
      !(index % 4 === 3 && emptyIndex === index + 1);

    //If the move is valid then we swap the block clicked with the empty space change the block array accordingly
    if (isValidMove) {
      const newBlocks = [...blocks];
      [newBlocks[index], newBlocks[emptyIndex]] = [
        newBlocks[emptyIndex],
        newBlocks[index],
      ];
      setBlocks(newBlocks);
    }
  };

  //We use the useEffect hook to run the checkWinner function each time the blocks array is modified
  useEffect(() => {
    checkWinner();
  }, [blocks]);

  //Function to check Winner
  //Function checks whether all the blocks are in their correct order or not, if they are, then setIsWinner is updated to true
  const checkWinner = () => {
    const isCorrect =
      blocks.slice(0, 15).every((block, i) => block === i + 1) &&
      blocks[15] === null;
    setIsWinner(isCorrect);
  };

  return (
    <div className="game-container">
      <h1>Sliding Puzzle Game</h1>
      <div className={`grid ${isWinner ? "winner" : ""}`}>
        {blocks.map((block, index) => (
          <div
            key={index}
            className={`block ${block === null ? "empty" : ""}`}
            onClick={() => handleClick(index)}
          >
            {block !== null && (
              <img
                src={`../public/${block}.png`}
                alt={`Block ${block}`}
                className="block-image"
              />
            )}
          </div>
        ))}
      </div>
      {isWinner && <div className="message">🎉 You Win! 🎉</div>}
      <button onClick={shuffleBlocks}>Restart</button>
    </div>
  );
};

export default Puzzle;


