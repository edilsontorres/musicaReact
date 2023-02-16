import * as C from './Editar.styles';
import * as Geral from '../../App.styles';
import { useState, useEffect } from 'react';
import { api } from "../Services/api";
import { useParams } from 'react-router-dom';


const Form = (props:any) => {
    const { id } = useParams();
    const [artista, setArtista] = useState<string>();
    const [musica, setMusica] = useState<string>();
    const [data, setData] = useState<any>();

    

    //funcão que formata a data recebida
    const dataBDFormatar = (date:any)=>{
        var strData = `${date.substr(8, 2)}/${date.substr(5, 2)}/${date.substr(0, 4)}`;
        return strData;
    }
    
    useEffect(()=>{
        api.get(`/api/musica/${id}`)
        .then(res => {
            setArtista(res.data.nomeArtista);
            setMusica(res.data.nomeMusica);
            setData(res.data.data);
        })
        
    }, [])

    const atualizar = () => {
        const dados = {
            nomeArtista: artista,
            nomeMusica: musica,
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
                                    defaultValue={artista} onChange={(e)=> setArtista(e.target.value)} 
                                />
                                <h3>Nome da Música:</h3>
                                <input type="text" autoComplete="off" 
                                    defaultValue={musica} onChange={(e)=> setMusica(e.target.value)}  
                                />
                                <h3>Data:</h3>
                                <input className="data" type="date" name="dataInicial" autoComplete="off"
                                  defaultValue={data} onChange={(e)=> setData(e.target.value)}
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