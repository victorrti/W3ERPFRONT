import {styled} from 'styled-components'


export const Container = styled.div`
    display:flex;
    max-width: 114rem;    
    flex-direction: row;    
    gap:10px;    
    justify-content: end;
    margin-top:1rem;
    margin-left:37rem;
    margin: 0.5rem auto;  
`

export const Button = styled.button`
  border:none;
  background: none;
  font-size: 1.3rem;
  color: #4e4e4e;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:0.5rem;
  svg{
    
    height: 2.8rem;
    
    
  }
  
`
export const MaisAções = styled.select`
    width: 16.6rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: #ffffff;
    border: 0.1rem solid #4e5767;     
    border-radius: 0.2rem;       
    padding: 0rem 1.5rem;
    font-size: 1.3rem;    
    color: #4e5767;
    font-weight: 400;
    appearance: none;    
    background-repeat: no-repeat;
    background-position: right 0.5rem top 50%;    
    background-image: url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'%3E%3C/path%3E%3C/svg%3E"); 


`