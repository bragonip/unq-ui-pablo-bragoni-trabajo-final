import React from "react";
import './Player.css'

const MatchResult = ({winner,losser,winnerPlayer,setPlayAgain}) => {
    return(
        <div className="match_result">
            {winner.name}
            <p>beats</p>
            {losser.name}
            
            <p>{winnerPlayer} wins!</p>
            <button onClick={()=>setPlayAgain(true)}>Play Again!</button>
        </div>
    )
}
export default MatchResult