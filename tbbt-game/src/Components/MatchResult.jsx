import React, { useState, useEffect } from "react";
import Option from "./Option";
import './MatchResult.css'

const MatchResult = ({playerOneSelection,
                    playerOneVictories,
                    setPlayerOneVictories,
                    playerTwoSelection,
                    playerTwoVictories,
                    setPlayerTwoVictories,
                    setPlayAgain}) => {

    const [winner,setWinner] = useState(null)
    const [losser,setLosser] = useState(null)
    const [winnerPlayer,setWinnerPlayer] = useState(null)
    const [sameChoice,setSameChoice] = useState(false)
    const [showResult,setShowResult] = useState(false)

    useEffect(() => {
        if (playerOneSelection === playerTwoSelection) {
            setSameChoice(true)
            setWinner(playerOneSelection)
            setLosser(playerTwoSelection)
        }
        result()
    }, []);

    const result = () => {
        if (playerOneSelection.beats.includes(playerTwoSelection.id)){
            setWinner(playerOneSelection)
            setLosser(playerTwoSelection)
            setPlayerOneVictories(playerOneVictories+1)
            setWinnerPlayer('Player One')
        }
        else if (playerTwoSelection.beats.includes(playerOneSelection.id)){
            setWinner(playerTwoSelection)
            setLosser(playerOneSelection)
            setPlayerTwoVictories(playerTwoVictories+1)
            setWinnerPlayer('Player Two')
        }
        setShowResult(true)
    }
    
    return( showResult &&
        <div className="match_result">
            <div className="players_choices">
                <Option
                    key={playerOneSelection.id}
                    item={playerOneSelection}
                    showAnimation={false}
                    hideSelection={false}
                />
                <p className="final_result">{winner.name} {sameChoice ? 'ties' : 'beats'} {losser.name}</p>
                <Option
                    key={playerTwoSelection.id}
                    item={playerTwoSelection}
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