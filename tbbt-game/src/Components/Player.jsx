import React, { useState } from "react";
import Option from "./Option";
import './Player.css'
import GameItems from "./GameItems";

const Player = ({setPlayerChoice, allowSelection}) => {
    const [currentSelection,setCurrentSelection] = useState(GameItems[0])

    const setChoiceToShow = (item) =>{
        if (allowSelection){
            setCurrentSelection(item)
        }
        else {
            //mensaje
        }
    }

    const handleSetSelection = () =>{
        setPlayerChoice(currentSelection)
    }

    const autoSelection = () =>{
    }
    
    return(
        <div className="player">
            <div className="selected_option">
                <Option item={currentSelection} setChoiceToShow={setChoiceToShow} show={allowSelection}/>
            </div>
            <div className="player_name">
                <p>Victorias</p>
                <p>10</p>
                <button onClick={()=>handleSetSelection()}>Set selection</button>
                <button onClick={()=>autoSelection()}>Auto selection</button>
            </div>
            <div className="options">
                {GameItems.map((item)=>(
                    <Option
                        key={item.id}
                        item={item}
                        setChoiceToShow={setChoiceToShow}
                        show={allowSelection}
                    />
                ))}
            </div>
        </div>
    )
}

export default Player