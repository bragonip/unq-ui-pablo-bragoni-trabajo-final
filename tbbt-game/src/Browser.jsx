import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage';
import Game from './Components/Game';

const Browser = () => 
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Game/>} index/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>

export default Browser