import {styled} from 'styled-components'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    
    color: #4e5767;

`

export const ContainerInputs = styled.div`
    display: flex ;
    flex-direction: ${({inline}) => inline ? "row" : "column"};
    gap:1rem;
    align-items : ${({inline}) => inline ? "center" : "flex-start"};
    justify-content: space-between;
    font-size: 13px;   
    color: #4e5767;
    ::-webkit-calendar-picker-indicator{
        background: url("");
       
    }
`

export const InputDate = styled.input`
  
    width:${({width})=> width != null ? width : "200px" };
    
`