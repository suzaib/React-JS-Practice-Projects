import { useState,useEffect } from "react"
import SingleCard from "./components/SingleCard";
import './components/SingleCard.css';

// Making an array to store all cards

const cardImages=[
  {"src" : "../public/images/helmet-1.png",matched:false},
  {"src" : "../public/images/potion-1.png",matched:false},
  {"src" : "../public/images/ring-1.png",matched:false},
  {"src" : "../public/images/scroll-1.png",matched:false},
  {"src" : "../public/images/shield-1.png",matched:false},
  {"src" : "../public/images/sword-1.png",matched:false},
]

function App() {

  const [cards,setCards]=useState([]);
  const [turns,setTurns]=useState(0);
  const [choiceOne,setChoiceOne]=useState(null);
  const [choiceTwo,setChoiceTwo]=useState(null);
  const [disabled,setDisabled]=useState(false);

  //Duplicating each card once

  //Shuffling Cards

  const shuffleCards=()=>{

    //Making a new Array consisting of 12 cards(6*2)
    const shuffledCards=[...cardImages,...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card,id:Math.random()}))

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }

  //Handling a choice

  const handleChoice=(card)=>{
    choiceOne? setChoiceTwo(card):setChoiceOne(card);

  }

  //Compare two selected cards

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true);
      if(choiceOne.src===choiceTwo.src){
        setCards(prevCards=>{
          return prevCards.map(card=>{
            if(card.src===choiceOne.src){
              return {...card,matched:true};
            }
            else{
              return card;
            }
          })
        })
        resetTurn();
      }
      else{
        setTimeout(()=>resetTurn(),600)
      }
    }
  },[choiceOne,choiceTwo]);

  // reset choices & increase turn

  const resetTurn=()=>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns=>prevTurns+1);
    setDisabled(false);
  }

  useEffect(()=>{
    shuffleCards();
  },[])

  return (
    <>
    <div className="app">
        <h1>Magic Match</h1>
        <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
          {cards.map(card=>(
            <SingleCard 
              key={card.id} 
              card={card}
              handleChoice={handleChoice}
              flipped={card===choiceOne || card===choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p>Turns : {turns}</p>
    </div>
    </>
  )
}

export default App
