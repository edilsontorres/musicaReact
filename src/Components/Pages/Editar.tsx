import { useNavigate, useParams } from 'react-router-dom';
import Editar from "../Editar/Editar.form";
import { api } from "../Services/api";

export const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
 
    //Atualizando informações no DB
    const atualizar = async(dados:any) => {
        
        if(id !== ''){
            await api.put(`/api/musica/${id}`, dados)
            .then(response => {
                if(response.status === 200){
                    alert("Musica atualizada com sucesso!");
                    navigate('/');
                }
            })
        }
        
    }
    
    return(
        <>
           <Editar atualizar={atualizar} />
           
           
        </>
    );
}