import {styled} from 'styled-components'

export const Container = styled.div`
    width:max-content;
    display: flex;
    flex-direction: column;
    font-size: ${({fontSize})=> fontSize != null ? fontSize : "2.8rem" };;
    line-height: 2.9rem;
    color: #4e5767;
    font-weight: 900;  
    gap:1.2rem; 
    
`
export const Line = styled.div`
    height: 0.1rem;
    border:0.2rem #d8d9dd solid;    
    width: 3rem;
`