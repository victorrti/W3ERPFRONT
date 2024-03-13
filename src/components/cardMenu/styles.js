import {styled} from 'styled-components'
import {FaSearch} from 'react-icons/fa'





export const Container = styled.div`    
    gap:1.7rem;
    height: 8.4rem;
    
    >a:hover{
        border-bottom: 0.1rem black solid;
    }
`
export const Link = styled.a`
    gap:1rem;
    height: 8.4rem;
    display:flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 1.4rem;   
    color: #4e5767;
    align-items: center;
    justify-content: center;
   
    >img{
        height: 1.9rem;
    }
`