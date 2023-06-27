import React, { useState } from "react";
import Option from "./Option";
import './Player.css'
import GameItems from "./GameItems";

const Player = ({setPlayerChoice}) => {
    const [chosenOption,setChosenOption] = useState(null)

    const setChoiceToShow = (item) =>{
        setChosenOption(item)
        setPlayerChoice(item)
    }

    return(
        <div className="player">
            <div className="selected_option">
                <Option item={chosenOption} setChoiceToShow={setChoiceToShow}/>
            </div>
            <div className="player_name">
                <p>Victorias</p>
                <p>10</p>
                <button>Set selection</button>
                <button>Auto selection</button>
            </div>
            <div className="options">
                {GameItems.map((item)=>(
                    <Option
                        key={item.id}
                        item={item.id}
                        setChoiceToShow={setChoiceToShow}
                    />
                ))}
            </div>
        </div>
    )
}

export default Player