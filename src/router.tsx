import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { Cadastro } from './Components/Pages/Cadastro';
import { Lista } from './Components/Pages/Lista';

export const Router = () => {
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastro />}></Route>
                <Route path="/lista" element={<Lista />}></Route>
            </Routes>
        </BrowserRouter>

    )
}