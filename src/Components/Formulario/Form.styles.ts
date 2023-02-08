import styled from 'styled-components';

export const Topo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: none;
    color: #FFFFFF;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 30px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    border-radius: 5px 5px 0px 0px;
    border: none;
    background-color: #fff;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    h3{
        margin: 0;
        font-weight: 600;
    };
    input{
        width: 97%;
        height: 40px;
        margin-bottom: 20px;
        border-radius: 5px;
        border: 1px solid #979dac;
        outline: none;
        font-size: 20px;
        padding-left: 15px;
    };

    input.data{
        height: 45px;
        padding-right: 5px;
    }
`;

export const Title = styled.div`
    display: flex;
    width: auto;
    height: 80px;
    background-color: #DD0426;
    color: #fff;
    border-radius: 5px 5px 0px 0px;
    border: none;
    padding-left: 15px;
    font-size: 20px;
`;

export const Botao = styled.button`
    background-color: #2875E2;
    color: #fff;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    width: 100%;
    height: 40px;
    font-size: 20px;
    :hover {
        background-color: #3F84E5;
        border: none;
    }
`