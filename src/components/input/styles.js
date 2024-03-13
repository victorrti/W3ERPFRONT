import {styled} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: ${({inline}) => inline ? "row" : "column"};
    gap:1rem;
    align-items : ${({inline}) => inline ? "center" : "flex-start"};
    justify-content: space-between;
    
    
    >label{
        font-size: 1.3rem;        
        color: #4e5767;
        font-weight: 400; 
       
        margin-right:${({marginLabel}) => marginLabel ? marginLabel : ""};     
        
    }
   
`
export const InputDiv = styled.input`
    width:${({width})=> width != null ? width : "200px" };
    height: 3rem;   
    //background-color: ${({disabled})=> !disabled ?"#ffffff":"#d8d9dd" } ;
    border: 0.1rem solid #4e5767;
    padding: 1.4rem;   
    border-radius: 0.2rem;
    &:disabled{
        background: #d8d9dd;
    }
    


`