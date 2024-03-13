import {styled} from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { IoIosArrowDown } from "react-icons/io";
import Seta from '../../assets/icons/seta.svg'





export const Container = styled.div`
  max-width: 114rem;
  height: 6rem;  
  border: 0.1 solid #d8d9dd;  
  display: flex;
  justify-content: center;  
  align-items: center;
  gap:6.5rem;
  >:nth-child(2){
    margin-left: 6.2rem;
  }
  >:nth-child(3){
    margin-left: 16rem;
  }
  >:nth-child(5){
    width: 10rem;
  }
  color:#4e5767;

  input::placeholder {
      color: #4e5767;
      opacity: 1; 
  } 

  select::after {
          
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
        }

  

`
export const Logo = styled.div`     
    >img{
        width: 68px;
        height: 15px; 
    }
`

export const Search = styled.input`
    width: 264px;
    height: 30px;
    border-radius: 15px;
    background-color: #f4f4f4;
    border:none;
    appearance: none;
    -webkit-appearance: none;
    background-image: url(FaSearch);
    background-repeat: no-repeat;
    background-position: right 24px top 50%;
    padding: 11px 15px;
    font-size: 13px;
    line-height: 30px;
    color: #4e5767;
    font-weight: 400;

    
            
        
   
`

export const SelecionarEmpresa = styled.select`
   
    height: 30px;
    border-radius: 15px;   
    border:none;
    
    padding: 0px 15px;
    font-size: 13px;
    line-height: 30px;
    color: #4e5767;
    font-weight: 400;
    appearance: none;    
    background-repeat: no-repeat;
    background-position: right -2px top 50%;
    border: none;
    background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'%3E%3C/path%3E%3C/svg%3E"); 

    
            
            
    
`

