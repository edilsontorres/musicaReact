import Form from "../Formulario/Form";
import { api } from "../Services/api";
import { useNavigate } from 'react-router-dom'

export const Cadastro = ()=>{
    const navigate = useNavigate();
    
    //Gravando dados no DB
    const cadastrar = async(dados:any) => {
        await api.post('/api/musica', dados)
        .then(response => {
            if(response.status === 201){
                alert("Musica cadastrada com sucesso!");
                navigate('/');
            }
        })
        .catch(error =>{
            console.log(error)
        });
       
       
    }

    return(
        <>
            <Form cadastrar={cadastrar}/> 
        </>
    )

}