import React, {useState,useEffect} from 'react';
import Player from './Player';
import Header from './Header';
import MatchResult from './MatchResult';
import './MainScreen.css';

const MainScreen = () => {
    const [playerOneChoice, setPlayerOneChoice] = useState(null)
    const [playerTwoChoice, setPlayerTwoChoice] = useState(null)
    const [allowSelection, setAllowSelection] = useState(true)
    const [result,setResult] = useState()

    useEffect(() => {
        if (playerOneChoice && playerTwoChoice) {
            setResult(true)
            console.log('result')
        }
        else if (playerOneChoice) {
            setAllowSelection(!allowSelection)
            console.log(allowSelection)
        }
    }, [playerOneChoice,playerTwoChoice]);

    return(
        <div className="main_screen">
            <div className='main_screen_header'>
                <Header/>
            </div>
            <div className='game_players'>
                {result ?
                    (<>
                        <MatchResult/>
                    </>)
                    : (<>
                        <Player setPlayerChoice={setPlayerOneChoice} allowSelection={allowSelection}/>
                        <Player setPlayerChoice={setPlayerTwoChoice} allowSelection={!allowSelection}/>
                    </>)
                }
                
                
            </div>
        </div>
    )
}

export default MainScreen