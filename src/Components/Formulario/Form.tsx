import * as C from './Form.styles';
import * as Geral from '../../App.styles';
import { useState } from 'react';
import { Home } from '../Home/Home';



const Form = (props:any) => {
    const [artista, setArtista] = useState<string>();
    const [musica, setMusica] = useState<string>();
    const [data, setData] = useState<any>();

    
    const cadastro = () => {
        const dados = {
            NomeArtista: artista,
            NomeMusica: musica,
            data: data
        }
        props.cadastrar(dados);
        
    }

    return(
        <>
            <Home />
            <Geral.Title> 
                <Geral.AreaTitle>
                    Cadastro de Músicas
                </Geral.AreaTitle>
            </Geral.Title>
            <C.Container>
                <C.FormContainer>
                    <C.Title><h3>Preencha os campos</h3></C.Title>
                    <C.Form>
                        <C.formulario>
                            <form>
                                <h3>Nome do Artista:</h3>
                                <input type="text" name="nomeArtista" autoComplete="off"
                                    onChange={(e)=> setArtista(e.target.value)}
                                />
                                <h3>Nome da Música:</h3>
                                <input type="text" name="nomeMusica" autoComplete="off" 
                                    onChange={(e)=> setMusica(e.target.value)}
                                />
                                <h3>Data:</h3>
                                <input className="data" type="date" name="dataInicial" autoComplete="off"
                                    onChange={(e)=> setData(e.target.value)}
                                />
                                <C.Botao type='button' onClick={cadastro}>
                                    Cadastrar
                                </C.Botao>
                            </form>    
                        </C.formulario>
                    </C.Form>
                </C.FormContainer>
            </C.Container>
        </>
        
    )
}
    
export default Form;