import {styled} from 'styled-components'
import FundoServicos from '../../assets/Fundos/fundo_servicos.png'
import {Link} from 'react-router-dom'
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:url(${FundoServicos}) no-repeat center center;

`
export const Logo = styled.div`
    width: 37.4rem;
    height: 39.6rem;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: center;
    >img{
        width: 20rem;
        height: 4.8rem;
    }
`

export const DivForm = styled.div`
    width: 37.6rem;
    height: 39.6rem;
    background-color: #ffffff;
    padding:9.7rem 5.3rem 3rem;
    text-align: center;
    >a{
        font-size: 1.5rem;
        line-height: 2.9rem;
        //color: #2a3359;
        font-weight: 400;
        text-align: center;
        
    }
    >p{
        font-size: 1.4rem;
        line-height: 13rem;
        text-transform: uppercase;
        color: #2a3359;
        font-weight: 400;
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    gap:2.9rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`
export const Input = styled.input`
    width: 27.7rem;
    height: 3.6rem;
    border-radius: 0.6rem;
    background-color: #f9f9fa;
    border: 0.1rem solid #c3c5ca;
    font-size: 1.4rem;
    line-height: 2.9rem;
    color: #97959a;
    font-weight: 400;
    font-family: "Roboto";
    padding: 0.9rem 1rem;
    
`
export const Button = styled(Link)`
    width: 27.7rem;
    height: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border:none;
    color: #ffffff;
    border-radius: 0.6rem;
    background-color: #2a3359;
    font-size: 1.6rem;
    line-height: 2.9rem;
    text-transform: uppercase;
    
    font-weight: 400;
    
    margin-top:2.6rem;
    margin-bottom:2.7rem;
`