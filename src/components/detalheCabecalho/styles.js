import {styled} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap:0.3rem;   
    span:hover{
       cursor:pointer;
       filter: brightness(0.3);
       border-bottom:1px  #4e5767 solid;
    }
    border-bottom: 1px #d8d9dd solid;
    margin-bottom: 2.5rem;
 
`
export const Span = styled.span`
    font-size: 1.8rem;    
    color: #4e5767;
    font-weight: 400; 
     
`