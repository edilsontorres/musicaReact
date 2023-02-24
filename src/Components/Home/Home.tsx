import { useNavigate } from "react-router-dom"
import * as C from "./Home.style";

export const Home = () => {
    const navigate = useNavigate();

    const voltarHome = () => {
        navigate('/');
    }
    return(
        <C.Botao onClick={voltarHome}>
            ⇦
        </C.Botao>
        
    )
}