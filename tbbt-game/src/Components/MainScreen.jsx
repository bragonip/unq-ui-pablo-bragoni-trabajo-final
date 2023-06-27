import React, {useState,useEffect} from 'react';
import Player from './Player';
import Header from './Header';
import './MainScreen.css';

const MainScreen = () => {
    const [playerOneChoice, setPlayerOneChoice] = useState(null)
    const [playerTwoChoice, setPlayerTwoChoice] = useState(null)
    const [result,setResult] = useState()

    useEffect(() => {
        if (playerOneChoice && playerTwoChoice) {
            console.log('eeeeeeeeeeeeeeeeeeee')        
        }
      }, [playerOneChoice,playerTwoChoice]);

    return(
        <div className="main_screen">
            <div className='main_screen_header'>
                <Header/>
            </div>
            <div className='game_players'>
                <Player setPlayerChoice={setPlayerOneChoice}/>
                <Player setPlayerChoice={setPlayerTwoChoice}/>
            </div>
        </div>
    )
}

export default MainScreen