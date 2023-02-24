import * as C from '../Pages/Lista.style';
import * as Geral from '../../App.styles';
import { useState, useEffect } from 'react';
import { api } from '../Services/api';
import { useNavigate } from 'react-router-dom';



export const Lista = () => {
    const navigate = useNavigate();
    const [musicas, setMusicas] = useState<any[]>([]);
 
    const listar = async() => {
        await api.get('/api/musica')
        .then((res) => {
            setMusicas(res.data);
        })
    }
    useEffect(()=>{
        listar();
    }, [])

    const cadastrar = () =>{
        navigate('/cadastro')
    }

    //apagando música do DB e filtrando para renderizar o que sobra de registros no DB
    const apagar = async(id:any) => {
        await api.delete(`/api/musica/${id}`)
        setMusicas(musicas.filter(musica => musica.id !== id))
    }

    //Função pega pelo id e envia para a pagina de edição
    const editar = async(id:any) => {
        if(id !== ''){
            navigate(`/editar/${id}`);
        }
    }

    //funcão que formata a data recebida
    const dataBDFormatar = (date:any)=>{
        const dataId = new Date(date);
        let data = new Intl.DateTimeFormat('pt-BR').format(dataId);
        return data;
    }

    return(
        <>
            <Geral.Title> 
                <Geral.AreaTitle>
                    Musicas cadastradas
                </Geral.AreaTitle>
            </Geral.Title>

            <C.Container>
                <C.listContainer>
                    <C.CadastrarArea>
                        <C.Cadastrar>
                            <button className='cadastro' onClick={cadastrar}>
                                ✛ Nova Musica
                            </button>
                        </C.Cadastrar>
                    </C.CadastrarArea>
                    <C.Tabela>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Nome do Artista</td>
                                <td>Nome da Musica</td>
                                <td>Data</td>
                                <td>Ação</td>
                            </tr>
                        </thead>
                        {musicas.map((musica, index)=> 
                            <tbody key={index}>
                                <tr>
                                    <td><p>{musica.id}</p></td>
                                    <td><p>{musica.nomeArtista}</p></td>
                                    <td><p>{musica.nomeMusica}</p></td>
                                    <td><p>{dataBDFormatar(musica.data)}</p></td>
                                    <td>
                                        <C.areaAcao>
                                            <C.Acao>
                                                <button className='editar'
                                                    onClick={()=> editar(musica.id)}>
                                                    Editar
                                                </button>
                                            </C.Acao>
                                            <C.Acao>
                                                <button className='excluir' 
                                                    onClick={()=> apagar(musica.id)}>
                                                    Excluir
                                                </button>
                                            </C.Acao>
                                        </C.areaAcao>
                                    </td>
                                    
                                </tr>
                            </tbody>
                    
                        )}
                            
                    </C.Tabela>
                </C.listContainer>
            </C.Container>
        
           
            
            
        </>
    )
}