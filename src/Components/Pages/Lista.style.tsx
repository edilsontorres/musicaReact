import styled from 'styled-components';

export const Tabela = styled.table`
    display: block;
    justify-content: center;
    align-items: center;
    border-collapse: collapse;
    thead{
        font-size: 20px;
        
    };
    td{
        padding: 5px;
        text-align: center;
        color: #2E303A;
        border-bottom: 1px solid #ccc;
        
        
    };
    tbody:nth-child(even){
        font-size: 20px;
        p{
            background: #BCD4E6;
            min-width: 100%;
            
        }
       
    };
    tbody:nth-child(odd){
        font-size: 20px;
        p{
            background: transparent;
        }
    };
    
   
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`;

export const listContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    border: none;
`;

export const areaAcao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Acao = styled.div`
    flex: 1;
    width: 100%;
    margin: 2px;
    button {
        font-size: 20px;
        border: none;
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
    };
    .editar{
        background-color: #99C1DE;
        color: #2E303A;
    };
    .excluir{
        background-color: red;
        color: #FFFFFF;
    };
    
`;

export const CadastrarArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const  FiltroArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;

`;

export const Filtro = styled.div`
    display: flex;
    background-color: #D6E2E9;
    width: 100%;
    button {
        padding: 5px;
        font-size: 15px;
        font-weight: 600;
        border: none;
        cursor: pointer;
    };
    .filtro{
        background-color: transparent;
        color: #2E303A;
        font-size: 20px;
        
    };

`;

export const Cadastrar = styled.div`
    display: flex;
    background-color: #D6E2E9;
    width: 100%;
    button {
        padding: 5px;
        font-size: 15px;
        font-weight: 600;
        border: none;
        cursor: pointer;
    };
    .cadastro{
        background-color: transparent;
        color: #2E303A;
        font-size: 20px;
        
    };

`;

