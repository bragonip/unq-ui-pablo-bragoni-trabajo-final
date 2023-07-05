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
    const [result,setResult] = useState()

    useEffect(() => {
        if (playerOneSelection && playerTwoSelection) {
            setResult(true)
        }
        else if (playerOneSelection && singlePlayer) {
            setPlayerTwoSelection(GameItems[AutoSelection()])
        }
        else if (playerOneSelection) {
            setAllowSelection(!allowSelection)
        }
    }, [playerOneSelection,playerTwoSelection]);
    
    const AutoSelection = () => {
        return Math.floor(Math.random()*5)
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
            <div className='game_players'>
                {result ?
                    (<>
                        <MatchResult playerOneSelection={playerOneSelection} playerTwoSelection={playerTwoSelection}/>
                    </>)
                    : (<>
                        <Player
                            currentSelection={currentSelection}
                            allowSelection={allowSelection}
                            hideSelection={hideSelection}
                            setCurrentSelection={setCurrentSelection}
                        />
                        <Player
                            currentSelection={currentSelection}
                            allowSelection={!allowSelection}
                            hideSelection={!hideSelection}
                            setCurrentSelection={setCurrentSelection}
                        />
                    </>)
                }
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
    )
}

export default MainScreen