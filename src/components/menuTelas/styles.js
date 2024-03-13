import { Link } from 'react-router-dom';
import {styled} from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin: 0 auto;
    padding:0 36rem;
    background-color: #f4f4f4;
`

export const MenuContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: start;
    position: relative;
    
   
    
    list-style-type: none;    
    a{
        text-decoration: none;
    }
    
`;

export const MenuItem = styled.li`
    background-color: ${({index})=> index  ? "#f4f4f4" : "#fff"} ;
    padding: 10px;    
    position: relative;
    font-size: 14px;
    list-style-type: none;   
    color: #4e5767;
    font-weight: 400;
    display: flex;
    align-items: center;
    font-size: 14px;
    max-height: 40px;
    
    
    
    
  
    a{
        text-decoration: none;
    }
    &:hover {
        background-color: #ddd;
    }
`;

export const SubMenu = styled.ul`
    display: none;
    position: absolute;
    top: 0;
    max-height: 40px;
    
    background-color: #fff;
    min-width: 25rem;
    z-index: 1;
    top:${({primeiroMenu})=>primeiroMenu?"100%":"0%"};
   
    left:${({primeiroMenu})=>primeiroMenu?"0%":"100%"};
   
    ${MenuItem}:hover >& {
        display: block;
    }
`;

export const SubMenuItem = styled.li`
    padding: 10px;
    display:none;
    font-size: 14px;
    display: flex;
    align-items: center;
    width: 20rem;
    
    
    
    color: #4e5767;
    font-weight: 400;

    &:hover {
        background-color: #fff;
    }
`;

export const LinkRoute = styled(Link)`
    text-decoration: none;
    color: #4e5767;

`


