import React from "react";
import './Header.css'

const Header = ({singlePlayer,setSinglePlayer}) => {
    return(
        <div className="header">
            <h1>Rock - Paper - Scissors - Lizard - Spock</h1>
            <div className='main_screen_game_config'>
                <div>
                    <div className='mode_selection'>
                        <button
                            className={'button' + singlePlayer}
                            onClick={()=>setSinglePlayer(true)}>
                                One Player
                        </button>
                        <button
                            className={'button' + !singlePlayer}
                            onClick={()=>setSinglePlayer(false)}>
                                Two Players
                        </button>
                    </div>
                </div>
                <a className='rules' href='https://www.youtube.com/watch?v=pIpmITBocfM' target="_blank">Rules</a>
            </div>
            
        </div>
    )
}
export default Header