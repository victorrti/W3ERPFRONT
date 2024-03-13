import {styled} from 'styled-components'
import { TiArrowSortedDown } from "react-icons/ti";



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
    
    border: 0.1rem solid #4e5767;
    padding: 1.4rem;   
    border-radius: 0.2rem;
    -webkit-appearance: none;
    -moz-appearance:    none;   
        /* for Safari, Chrome, Opera */
       
    appearance:         none;
    
    //background:  url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' version='1.2' baseProfile='tiny' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z'%3E%3C/path%3E%3C/svg%3E") 95.5% 50% no-repeat ;
    


`

export const OptionsActions = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap:0.9rem;
   > button{
        background: none;
        border: none;
    }
`