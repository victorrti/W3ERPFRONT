import {styled} from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkButton = styled(Link)`  
    display  :flex ;
    flex-direction: row;
    gap:5px;
    padding: 1.2rem 2.9rem;
    align-items: center;
    justify-content: center;
    height: 3.6rem;
    border-radius: 0.6rem;
    background-color: #f8f8f8;
    font-size: 1.3rem;
    color: #4e4e4e;
    font-weight: 900;
    border:none;
     >svg{   
        height: 1.7rem;
        color:${({color})=>color != null ? color : ""};
    }
`
export const ButtonAction = styled.button`  
    display  :flex ;
    flex-direction: row;
    gap:5px;
    padding: 1.2rem 2.9rem;
    align-items: center;
    justify-content: center;
    height: 3.6rem;
    border-radius: 0.6rem;
    background-color: #f8f8f8;
    font-size: 1.3rem;
    color: #4e4e4e;
    font-weight: 900;
    border:none;
     >svg{   
        height: 1.7rem;
        color:${({color})=>color != null ? color : ""};
    }
`
