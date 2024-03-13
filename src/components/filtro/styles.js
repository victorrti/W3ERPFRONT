import {styled} from 'styled-components'

export const Container = styled.div`
    width:144rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    //padding-left:10.4rem;
    margin: 0 auto;  
    
    align-items: center;
    >div:nth-child(1){
        padding:4.2rem 0.5rem;
        display:flex;
        flex-direction:column;
        gap:2rem;
        width:114rem;        
        border-bottom:0.1rem #d8d9dd solid;
        border-top:0.1rem #d8d9dd solid;
    }
`

export const SaveFiltro = styled.div`
    width:114rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    > button:nth-child(1){        
        margin-right:1.3rem;
    }
    > svg:nth-child(2){
        margin-top: 0.5rem;
        margin-right:3.2rem;
        color: #4e5767;
    }
    > button:nth-child(3){
        margin-top: 1rem;
        margin-right:38rem;
        
    }
    
`

export const InputSelectFiltro = styled.select`
    width:  45.8rem;
    height: 3rem;   
    background-color: #ffffff;
    border: 0.1rem solid #4e5767;       
    border-radius: 2px;       
    padding: 0px 1.5rem;
    font-size: 1.3rem;    
    color: #4e5767;
    font-weight: 400;
    appearance: none;    
    background-repeat: no-repeat;
    background-position: right 0.5rem top 50%;    
    background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'%3E%3C/path%3E%3C/svg%3E"); 


`
