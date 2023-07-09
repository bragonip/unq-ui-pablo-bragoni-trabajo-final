import React, {useState,useEffect} from 'react';
import Player from './Player';
import Header from './Header';
import MatchResult from './MatchResult';
import GameItems from './GameItems';
import './MainScreen.css';
import Option from "./Option";

const MainScreen = () => {
    const [singlePlayer, setSinglePlayer] = useState(true)
    const [allowSelection, setAllowSelection] = useState(true)
    const [currentSelection,setCurrentSelection] = useState(null)
    const [hideSelection,setHideSelection] = useState(false)
    const [playerOneSelection, setPlayerOneSelection] = useState(null)
    const [playerTwoSelection, setPlayerTwoSelection] = useState(null)
    const [result, setResult] = useState(null)
    const [winner,setWinner] = useState(null)
    const [losser,setLosser] = useState(null)
    const [playerOneVictories,setPlayerOneVictories] = useState(0)
    const [playerTwoVictories,setPlayerTwoVictories] = useState(0)
    const [winnerPlayer,setWinnerPlayer] = useState('')
    const [gameStatus,setGameStatus] = useState('Waiting for Player One choice...')
    const [playAgain,setPlayAgain] = useState(false)

    useEffect(() => {
        setPlayerOneSelection(null)
        setPlayerTwoSelection(null)
        setPlayerOneVictories(0)
        setPlayerTwoVictories(0)
        setWinnerPlayer('')
        setPlayAgain(!playAgain)
    },[singlePlayer]);

    useEffect(() => {
        if (playerOneSelection && singlePlayer) {
            setPlayerTwoSelection(AutoSelection())
        }
        else if (playerOneSelection) {
            setGameStatus('Waiting for Player Two choice...')
            setAllowSelection(!allowSelection)
        }
    }, [playerOneSelection]);

    useEffect(() => {
        let timeout;
        setGameStatus('Calculating match result...')
        if (playerTwoSelection) {
          timeout = setTimeout(() => {
            setResult(true);
          }, 2000);
        }
        return () => clearTimeout(timeout);
      }, [playerTwoSelection]);

    useEffect(() => {
        matchResult()
    }, [result]);

    useEffect(() => {
        setAllowSelection(true)
        setCurrentSelection(null)
        setHideSelection(false)
        setResult(false)
        setWinner(null)
        setLosser(null)
        setWinnerPlayer(null)
        setPlayerOneSelection(null)
        setPlayerTwoSelection(null)
        setPlayAgain(false)
        setGameStatus('Waiting for Player One choice...')
    },[playAgain]);

    const matchResult = () => {
        if (playerOneSelection === playerTwoSelection){
            setWinner(playerOneSelection)
            setLosser(playerTwoSelection)
        }
        else if (playerOneSelection.beats.includes(playerTwoSelection.id)){
            setWinner(playerOneSelection)
            setLosser(playerTwoSelection)
            setPlayerOneVictories(playerOneVictories+1)
            setWinnerPlayer('Player One')
        }
        else if (playerTwoSelection.beats.includes(playerOneSelection.id)){
            setWinner(playerTwoSelection)
            setLosser(playerOneSelection)
            setPlayerTwoVictories(playerTwoVictories+1)
            setWinnerPlayer('Player Two')
        }
    }

    const AutoSelection = () => {
        return GameItems[Math.floor(Math.random()*5)]
    }

    const handleConfirmSelection = () => {
        if (playerOneSelection && currentSelection) {
            setPlayerTwoSelection(currentSelection)
        }
        else if (currentSelection){
            setPlayerOneSelection(currentSelection)
            setHideSelection(true)
            setCurrentSelection(null)
        }
    }

    return(
        <div className="main_screen">
            <div className='main_screen_header'>
                <Header
                    singlePlayer={singlePlayer}
                    setSinglePlayer={setSinglePlayer}
                />
            </div>
            <div className='game_status'>
                <p>{!result ? gameStatus : ''}</p>
            </div>
            <div className='main_screen_body'>
                {(winner && losser) ?
                    (<>
                        <div className='main_screen_result'>
                            <MatchResult
                                winner={winner}
                                losser={losser}
                                winnerPlayer={winnerPlayer}
                                setPlayAgain={setPlayAgain}
                            />
                        </div>
                    </>)
                    : (<>
                        <div className='main_screen_match'>
                            <div className='game_players'>
                                <Player
                                    currentSelection={currentSelection}
                                    allowSelection={allowSelection}
                                    hideSelection={hideSelection}
                                    setCurrentSelection={setCurrentSelection}
                                    victories={playerOneVictories}
                                    playerName={'Player One'}
                                />
                                <Player
                                    currentSelection={currentSelection}
                                    allowSelection={!allowSelection}
                                    hideSelection={!hideSelection}
                                    setCurrentSelection={setCurrentSelection}
                                    victories={playerTwoVictories}
                                    playerName={'Player Two'}
                                />
                            </div>                        
                            <div className="options">
                                {GameItems.map((item)=>(
                                    <Option
                                        key={item.id}
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