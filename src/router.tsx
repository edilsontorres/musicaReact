import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { Cadastro } from './Components/Pages/Cadastro';
import { Lista } from './Components/Pages/Lista';
import { Update } from './Components/Pages/Editar';

export const Router = () => {
    return(
        
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lista />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/editar/:id" element={<Update />}></Route>
            </Routes>
        </BrowserRouter>

    )
}