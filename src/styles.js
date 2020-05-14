import styled from "styled-components";

export const Container = styled.div`
    background-color: #B388EB;
    min-width: 100%;
    min-height: 900px;

    h1 {
        text-align: center;
        padding-top: 30px;
        font-size: 30px;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }
    
`;

export const Box = styled.div`
    background-color: #fff;
    margin-left: 400px;  /* margem das laterais */
    margin-right: 400px;
    border-radius: 15px; 
    height: 650px;
`;

export const AdicionarItems = styled.form` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
    border-radius: 7px;
    align-items: center;

    input {
    width: 477px;
    height: 35px;
    font-size: 16px;
    border: 1px solid #eee;
    border-radius: 10px;
    padding-left: 10px;
    };
`;



export const SubmitButton = styled.button` 
    width: 34px;
    height: 34px;
    border-radius: 10px;
    border: 1px solid #B388EB;
    margin-left: 10px;
  

`;

export const ButtonText = styled.span`
        color: #B388EB;
        font-size: 15px;
        font-weight: bold;
`;

export const List = styled.ul`
    list-style-type: none;
    padding-top: 20px;
    padding-left: 45px;
    padding-right: 45px;
   

    li {
        border: 1px solid #B388EB;
        flex: 1;
        height: 35px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding-left: 10px;
        border-radius: 7px;
        background-color: #B388EB;
    }
`;

export const Tarefa = styled.div`
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        padding-left: 10px;
        color: #fff;
`;

export const TodoButton = styled.button`
    background-color: ${props => (props.activeButton ? '#72DDF7' : '#eee')};
    border: 0;
    width: 10px;
    height: 15px;

`;