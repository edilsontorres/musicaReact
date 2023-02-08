import * as C from '../Pages/Lista.style';
import * as Geral from '../../App.styles';
import { useState, useEffect } from 'react';
import { api } from '../Services/api';


export const Lista = () => {
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

    //apagando música do DB e filtrando para renderizar o que sobra de registros no DB
    const apagar = async(id:any) => {
        await api.delete(`/api/musica/${id}`)
        setMusicas(musicas.filter(musica => musica.id != id))
    }

    //funcão que formata a data recebida
    const dataBDFormatar = (date:any)=>{
        var strData = `${date.substr(8, 2)}/${date.substr(5, 2)}/${date.substr(0, 4)}`;
        return strData;
    }

    return(
        <>
            <Geral.Title>Musicas cadastradas</Geral.Title>
            <C.Container>
                <C.listContainer>
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
                                <td>{musica.id}</td>
                                <td>{musica.nomeArtista}</td>
                                <td>{musica.nomeMusica}</td>
                                <td>{dataBDFormatar(musica.data)}</td>
                                <td>
                                    <C.areaAcao>
                                        <C.Acao>
                                            <button className='editar'>Editar</button>
                                        </C.Acao>
                                        <C.Acao>
                                            <button className='excluir' onClick={()=> apagar(musica.id)}>Excluir</button>
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