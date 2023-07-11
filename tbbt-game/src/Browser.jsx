import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage';
import Game from './Game';
import MainScreen from './Components/MainScreen';

const Browser = () => 
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Game/>} index/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>

export default Browser