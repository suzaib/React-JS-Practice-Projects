import React from 'react'

const SingleCard = ({card,handleChoice,flipped,disabled}) => {

    const handleClick=()=>{
        if(!disabled){
            handleChoice(card);
        }
    }

  return (
    <div className="card">
        <div className={flipped? "flipped":""}>
            <img className="front" src={card.src} alt="card-front"/>
            <img className="back" src="../public/images/cover.png" alt="card-back"
                onClick={handleClick} />
        </div>
  </div>
  )
}

export default SingleCard