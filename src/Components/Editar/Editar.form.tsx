import * as C from './Editar.styles';
import * as Geral from '../../App.styles';
import { useState, useEffect } from 'react';
import { api } from "../Services/api";
import { useParams } from 'react-router-dom';

const Form = (props:any) => {
    const { id } = useParams();
    const [nomeArtista, setnomeArtista] = useState<string>();
    const [nomeMusica, setnomeMusica] = useState<string>();

    //pegando informações do Id
    useEffect(()=>{
        api.get(`/api/musica/${id}`)
        .then(res => {
            setnomeArtista(res.data.nomeArtista);
            setnomeMusica(res.data.nomeMusica);
            
        })
    })

    const [artista, setArtista] = useState<string>();
    const [musica, setMusica] = useState<string>();
    const [data, setData] = useState<any>();

    const atualizar = () => {
        const dados = {
            NomeArtista: artista,
            NomeMusica: musica,
            data: data
        }
        props.atualizar(dados);
        
    }

    return(
        <>
            <Geral.Title>Atualizar cadastro</Geral.Title>
            <C.Container>
                <C.FormContainer>
                    <C.Title><h3>Preencha os campos</h3></C.Title>
                    <C.Form>
                        <C.formulario>
                            <form>
                                <h3>Nome do Artista:</h3>
                                <input type="text" autoComplete="off"
                                defaultValue={nomeArtista} onChange={(e)=> setArtista(e.target.value)} 
                                />
                                <h3>Nome da Música:</h3>
                                <input type="text" autoComplete="off" 
                                    defaultValue={nomeMusica} onChange={(e)=> setMusica(e.target.value)}  
                                />
                                <h3>Data:</h3>
                                <input className="data" type="date" name="dataInicial" autoComplete="off"
                                    onChange={(e)=> setData(e.target.value)}
                                />
                                <C.Botao type='button' onClick={atualizar}>
                                    Atualizar
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