import React from "react";
import Option from "./Option";
import './MatchResult.css'

const MatchResult = ({winner,losser,winnerPlayer,setPlayAgain}) => {

    const sameChoice = (winner.id === losser.id)
    
    return(
        <div className="match_result">
            <div className="players_choices">
                <Option
                    key={winner.id}
                    item={winner}
                    showAnimation={false}
                    hideSelection={false}
                />
                <p className="final_result">{winner.name} {sameChoice ? 'ties' : 'beats'} {losser.name}</p>
                <Option
                    key={losser.id}
                    item={losser}
                    showAnimation={false}
                    hideSelection={false}
                />
            </div>
            <p className="final_result">{sameChoice ? 'Tied Round' : winnerPlayer + ' wins!'}</p>
            <button onClick={()=>setPlayAgain(true)}>Play Again!</button>
        </div>
    )
}
export default MatchResult