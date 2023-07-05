import React from "react";
import './Header.css'

const Header = ({singlePlayer,setSinglePlayer}) => {
    return(
        <div className="header">
            <p>Rock - Paper - Scissors - Lizard - Spock</p>
            <div className='main_screen_game_config'>
                <div>
                    <div className='mode_selection'>
                        <button className={'button' + singlePlayer} onClick={()=>setSinglePlayer(true)}>One Player</button>
                        <button className={'button' + !singlePlayer} onClick={()=>setSinglePlayer(false)}>Two Players</button>
                    </div>
                    <button>Rules</button>
                </div>
            </div>
            
        </div>
    )
}
export default Header