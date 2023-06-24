import Player from './Player';
import Header from './Header';
import './MainScreen.css';

const MainScreen = () => {

    return(
        <div className="main_screen">
            <div className='main_screen_header'>
                <Header/>
            </div>
            <div className='game_players'>
                <Player/>
                <Player/>
            </div>
        </div>
        )

}

export default MainScreen