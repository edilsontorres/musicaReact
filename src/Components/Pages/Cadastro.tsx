import Form from "../Formulario/Form";
import { api } from "../Services/api";


export const Cadastro = ()=>{

    //Gravando dados no DB
    const cadastrar = async(dados:any) => {
        await api.post('/api/musica', dados)
        .then(response => {
            console.log(response.data)
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