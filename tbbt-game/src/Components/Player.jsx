import React, { useState } from "react";
import Option from "./Option";
import './Player.css'
import GameItems from "./GameItems";

const Player = () => {
    const [selectedOption,setSelectedOption] = useState('lala')

    return(
        <div className="player">
            <div className="selected_option">
                <Option item={selectedOption} />
            </div>
            <div className="player_name">
                <p>Player</p>
                <p>10</p>
            </div>
            <div className="options">
                {GameItems.map((item)=>{
                    <Option item={item.id} onClick={()=>setSelectedOption('Rock')}/>
                })}



                </div>
        </div>
        )
}

export default Player


// <Option item={'Rock'} onClick={()=>setSelectedOption('Rock')}/>
// <Option item={'Paper'} onClick={()=>setSelectedOption('Paper')}/>
// <Option item={'Scissors'} onClick={()=>setSelectedOption('Scissors')}/>
// <Option item={'Lizard'} onClick={()=>setSelectedOption('Lizard')}/>
// <Option item={'Spock'} onClick={()=>setSelectedOption('Spock')}/>