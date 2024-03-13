import {styled} from 'styled-components'

export const Container = styled.div`
    width: 137.5rem;
    display:flex;
    
    margin:5px auto;
`

export const Table = styled.table`
    width: 100%;
    margin:0 auto;

`
export const HeaderLine = styled.tr`   
    width: 100%;
    margin-top: 2rem;  
    height: 4.5rem;
    
`
export const ColumnHeader = styled.th`   
    width:${({width})=> width  ? width : "100%"};
    background-color: #4e5767;
    color:#ffffff;
    border-left:1px  #d8d9dd solid;
    font-size: 12px;    
    text-align: center;

    input{
        display: block;
        margin: 0 auto;
    }
    
    
    
`

export const PropertColumn = styled.td`    
    width:${({width})=> width  ? width : "100%"};   
    color: #4e5767;
    font-size: 1.2rem; 
   
    text-align: center;

    input{
        display: block;
        margin: 0 auto;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
    

`
export const ItemListagem = styled.tr`    
    width: 100%;
    height: 4.5rem;
    background-color:${({pos}) => pos%2 == 0 ? "#ffffff": "#f4f4f4;"};

`
