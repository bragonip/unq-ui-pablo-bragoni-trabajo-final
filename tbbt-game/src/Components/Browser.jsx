import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from './MainScreen';
import NotFoundPage from './NotFoundPage';

const Browser = ()=> {
    <BrowserRouter> 
        <Routes>
            <Route path="/">
                <Route index element={<MainScreen/>} />
                <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
    </BrowserRouter>
}
export default Browser ;

 