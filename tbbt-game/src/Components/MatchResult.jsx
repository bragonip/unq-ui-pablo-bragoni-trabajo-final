import React, { useState } from "react";
import Option from "./Option";
import './Player.css'
import GameItems from "./GameItems";

const MatchResult = ({playerOneSelection,playerTwoSelection}) => {

    
    const MatchWinner = () => {
        if (playerOneSelection === playerTwoSelection){
            return 'empate'
        }
        else if (GameItems[playerOneSelection].beats.includes(playerTwoSelection)){
            return 'gano player one'
        }
        else if (GameItems[playerTwoSelection].beats.includes(playerOneSelection)){
            return 'gano player two'
        }
        else {
            return 'mostrar pagina de error'
        }
    }
    
    return(
        <div className="match_result">
            {playerOneSelection.name}
            <p>beats</p>
            {playerTwoSelection.name}
        </div>
    )
}

export default MatchResult