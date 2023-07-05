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
    const [currentSelection,setCurrentSelection] = useState(GameItems[0])
    const [hideSelection,setHideSelection] = useState(false)
    const [playerOneSelection, setPlayerOneSelection] = useState(null)
    const [playerTwoSelection, setPlayerTwoSelection] = useState(null)
    const [result, setResult] = useState(null)
    const [winner,setWinner] = useState(null)
    const [losser,setLosser] = useState(null)
    const [playerOneVictories,setPlayerOneVictories] = useState(0)
    const [playerTwoVictories,setPlayerTwoVictories] = useState(0)
    const [winnerPlayer,setWinnerPlayer] = useState('')

    const [playAgain,setPlayAgain] = useState(false)

    useEffect(() => {
        setAllowSelection(true)
        setCurrentSelection(GameItems[0])
        setHideSelection(false)
        setResult(false)
        setWinner(null)
        setLosser(null)
        setWinnerPlayer(null)
        setPlayerOneSelection(null)
        setPlayerTwoSelection(null)
        setPlayAgain(false)
    },[playAgain]);

    useEffect(() => {
        if (playerOneSelection && singlePlayer) {
            setPlayerTwoSelection(AutoSelection())
        }
        else if (playerOneSelection) {
            setAllowSelection(!allowSelection)
        }
    }, [playerOneSelection]);

    useEffect(() => {
        if (playerTwoSelection) {
            setResult(true)
            console.log(playerOneSelection)
            console.log(playerTwoSelection)
        }
    }, [playerTwoSelection]);

    useEffect(() => {
        matchResult()
    }, [result]);

    const matchResult = () => {
        if (playerOneSelection === playerTwoSelection){
            return 'empate'
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
        else {
            return 'mostrar pagina de error'
        }
    }

    const AutoSelection = () => {
        return GameItems[Math.floor(Math.random()*5)]
    }

    const handleConfirmSelection = () => {
        if (playerOneSelection) {
            setPlayerTwoSelection(currentSelection)
        }
        else {
            setPlayerOneSelection(currentSelection)
            setHideSelection(true)
            setCurrentSelection(GameItems[0])
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
                                />
                                <Player
                                    currentSelection={currentSelection}
                                    allowSelection={!allowSelection}
                                    hideSelection={!hideSelection}
                                    setCurrentSelection={setCurrentSelection}
                                    victories={playerTwoVictories}
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