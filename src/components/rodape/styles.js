import {styled} from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 3.3rem 0;
    border-top: 1px #d8d9dd solid ;
    
`

export const Conteudo = styled.div`
    width: 144rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    >span{
    font-size: 13px;
    
    text-transform: uppercase;
    color: #c3c5ca;
    font-weight: 400;    
    }
    :nth-child(3){
        >span:nth-child(1){
            width: 108px;
            height: 23px;
            font-size: 16px;
            line-height: 24px;
            color: #4e5767;
            font-weight: 700;
            font-family: "Roboto";
        }
        >span:nth-child(2){
            width: 153px;
            height: 23px;
            font-size: 16px;
            line-height: 24px;
            color: #4e5767;
            font-weight: 300;
            font-family: "Roboto";
        }
    }

`

export const Logo = styled.div`     
    >img{
        width: 68px;
        height: 15px; 
    }
`