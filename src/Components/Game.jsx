import React, {useState,useEffect} from 'react';
import Player from './Player';
import Header from './Header';
import MatchResult from './MatchResult';
import GameItems from './GameItems';
import './Game.css';
import Option from "./Option";

const MainScreen = () => {
    const [singlePlayer, setSinglePlayer] = useState(true)
    const [currentSelection, setCurrentSelection] = useState(null)
    const [playerOneSelection, setPlayerOneSelection] = useState(null)
    const [playerTwoSelection, setPlayerTwoSelection] = useState(null)
    const [result, setResult] = useState(null)
    const [playerOneVictories, setPlayerOneVictories] = useState(0)
    const [playerTwoVictories, setPlayerTwoVictories] = useState(0)
    const [gameStatus, setGameStatus] = useState('Waiting for Player One choice...')

    const resetGame = () => {
        setResult(false)
        setPlayerOneVictories(0)
        setPlayerTwoVictories(0)
        setPlayerOneSelection(null)
        setPlayerTwoSelection(null)
        setCurrentSelection(null)
        setGameStatus('Waiting for Player One choice...')
    }

    const playAgain = () => {
        setResult(false)
        setCurrentSelection(null)
        setPlayerOneSelection(null)
        setPlayerTwoSelection(null)
        setGameStatus('Waiting for Player One choice...')
    }

    const changeMode = (mode) => {
        if (singlePlayer !== mode){
            setSinglePlayer(mode)
            resetGame()
        }
    }

    useEffect(() => {
        let timeout;
        if (playerOneSelection && playerTwoSelection) {
            setGameStatus('Calculating match result...')
            timeout = setTimeout(() => {
                setResult(true);
            }, 2000);
        }
        else if (playerOneSelection && singlePlayer) {
            setPlayerTwoSelection(AutoSelection())
        }
        else if (playerOneSelection) {
            setGameStatus('Waiting for Player Two choice...')
        }
        return () => clearTimeout(timeout);
    }, [playerOneSelection, playerTwoSelection]);

    const AutoSelection = () => {
        return GameItems[Math.floor(Math.random()*GameItems.length)]
    }

    const handleConfirmSelection = () => {
        let timeout;
        if (playerOneSelection && playerTwoSelection) {
            setGameStatus("You can't change your selection")
        }
        else if (!playerOneSelection && currentSelection){
            setPlayerOneSelection(currentSelection)
            setCurrentSelection(null)
        }
        else if (playerOneSelection && !playerTwoSelection && currentSelection) {
            setPlayerTwoSelection(currentSelection)
            setCurrentSelection(null)
        }
        else if (!currentSelection && (gameStatus !== 'You must select an option first')) {
            let gamePrevStatus = gameStatus
            setGameStatus('You must select an option first')
            timeout = setTimeout(() => {
                setGameStatus(gamePrevStatus);
            }, 2000);
        }
        return ()=> clearTimeout(timeout)
    }

    return(
        <div className="main_screen">
            <div className='main_screen_header'>
                <Header
                    singlePlayer={singlePlayer}
                    changeMode={changeMode}
                    resetGame={resetGame}
                />
            </div>
            <div className='game_status'>
                <p>{!result ? gameStatus : ''}</p>
            </div>
            <div className='main_screen_body'>
                {result ?
                    (<>
                        <div className='main_screen_result'>
                            <MatchResult
                                playerOneSelection={playerOneSelection}
                                playerOneVictories={playerOneVictories}
                                setPlayerOneVictories={setPlayerOneVictories}
                                playerTwoSelection={playerTwoSelection}
                                playerTwoVictories={playerTwoVictories}
                                setPlayerTwoVictories={setPlayerTwoVictories}
                                playAgain={playAgain}
                            />
                        </div>
                    </>)
                    : (<>
                        <div className='main_screen_match'>
                            <div className='game_players'>
                                <Player
                                    currentSelection={currentSelection}
                                    hideSelection={playerOneSelection}
                                    victories={playerOneVictories}
                                    playerName={'Player One'}
                                />
                                <Player
                                    currentSelection={currentSelection}
                                    hideSelection={ !playerOneSelection || playerTwoSelection }
                                    victories={playerTwoVictories}
                                    playerName={'Player Two'}
                                />
                            </div>                        
                            <div className="options">
                                {GameItems.map((item)=>(
                                    <Option
                                        item={item}
                                        setCurrentSelection={setCurrentSelection}
                                        showAnimation={true}
                                        hideSelection={false}
                                    />
                                ))}
                            </div>
                            <div className="confirm_selection">
                                <button onClick={()=>handleConfirmSelection()}>Confirm selection</button>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    )
}
export default MainScreen