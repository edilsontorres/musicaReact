import * as C from './Editar.styles';
import * as Geral from '../../App.styles';
import { useState, useEffect } from 'react';
import { api } from "../Services/api";
import { useParams } from 'react-router-dom';
import { Home } from '../Home/Home';
import { format } from 'date-fns';




const Form = (props:any) => {
    const { id } = useParams();
    const [artista, setArtista] = useState<string>();
    const [musica, setMusica] = useState<string>();
    const [data, setData] = useState<any>();

    useEffect(()=>{
        api.get(`/api/musica/${id}`)
        .then(res => {
            setArtista(res.data.nomeArtista);
            setMusica(res.data.nomeMusica);
            setData(res.data.data)
        })
  
    }, [id])

    const atualizar = () => {
        const dados = {
            NomeArtista: artista,
            NomeMusica: musica,
            data: data
        }
        props.atualizar(dados);
        
    }
        const dateIsValid = (date:any) => {
            return !Number.isNaN(new Date(date).getTime());
        }

        let dataForm = '';

        if(dateIsValid(data)){
            const formatData = (data:any)=>{

                let dataId = format(new Date(data), 'yyyy-MM-dd');
                return dataId;
            }
            dataForm = formatData(data);
        }
       
    
    
    return(
        <>
            <Home />
            <Geral.Title> 
                <Geral.AreaTitle>
                    Atualizar informações
                </Geral.AreaTitle>
            </Geral.Title>
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
                                <input className="data" type="date"
                                    defaultValue={dataForm} onChange={(e)=> setData(e.target.value)}
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