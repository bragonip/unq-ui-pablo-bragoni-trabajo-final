import React, { useState } from "react";
import Option from "./Option";
import './Player.css'

const Player = ({currentSelection,allowSelection,hideSelection,setCurrentSelection}) => {
    return(
        <div className="player">
            <div className="current_selection">
                <Option
                    item={currentSelection}
                    setCurrentSelection={setCurrentSelection}
                    show={allowSelection}
                    showAnimation={false}
                    hideSelection={hideSelection}
                />
            </div>
            <div className="player_info">
                <p>Victorias</p>
                <p>10</p>
            </div>
        </div>
    )
}
export default Player