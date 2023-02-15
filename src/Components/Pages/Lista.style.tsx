import styled from 'styled-components';

export const Tabela = styled.table`
    display: block;
    justify-content: center;
    align-items: center;
    thead{
        font-size: 20px;
        background-color: #DD0426;
        color: #FFFFFF;
       
    };
    td{
        border: 1px solid #999;
        padding: 10px;
        text-align: center;
        color: #FFFFFF;
    
    };
    tbody:nth-child(even){
        background-color: #2E303A;
    };
    tbody:nth-child(odd){
        background-color: none;
    };
   
`;

export const Container = styled.div`
    display: flex;
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
    padding: 4px;
    button {
        padding: 5px;
        font-size: 15px;
        font-weight: 600;
        border: none;
        border-radius: 3px;
        width: 90px;
        height: 40px;
        cursor: pointer;
    };
    .editar{
        background-color: #3F84E5;
        color: #F0F2EF;
    };
    .excluir{
        background-color: #DD0426;
        color: #F0F2EF;
    };
    
`;

export const CadastrarArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Cadastrar = styled.div`
    display: flex;
    width: 38%;
    padding-right: 9px;
    justify-content: end;
    margin-bottom: 10px;
    button {
        padding: 5px;
        font-size: 15px;
        font-weight: 600;
        border: none;
        border-radius: 3px;
        width: 90px;
        height: 40px;
        cursor: pointer;
    };
    .cadastro{
        width: 150px;
        background-color: green;
        color: #F0F2EF;
        
    };

`;

