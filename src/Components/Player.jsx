import React from "react";
import Option from "./Option";
import './Player.css'

const Player = ({currentSelection,hideSelection,victories,playerName}) => {
    return(
        <div className="player">
            <p>{playerName}</p>
            <div className="current_selection">
                <Option
                    item={currentSelection}
                    showAnimation={false}
                    hideSelection={hideSelection}
                />
            </div>
            <div className="player_info">
                <p>Victories</p>
                <p>{victories}</p>
            </div>
        </div>
    )
}
export default Player