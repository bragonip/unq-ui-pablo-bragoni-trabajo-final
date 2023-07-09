import React from "react";
import './Player.css'

const MatchResult = ({winner,losser,winnerPlayer,setPlayAgain}) => {
    return(
        <div className="match_result">
            {(winner.id === losser.id) ?
                (<>
                    <div className='match_result_tie'>
                        <p>Tied Round</p>
                    </div>
                </>)
                : (<>
                    <div className='match_result_winner'>
                        {winner.name}
                        <p>beats</p>
                        {losser.name}
                        <p>{winnerPlayer} wins!</p>
                    </div>
                </>)
            }
            <button onClick={()=>setPlayAgain(true)}>Play Again!</button>
        </div>
    )
}
export default MatchResult