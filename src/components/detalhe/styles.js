import {styled} from 'styled-components'

export const Container = styled.table`
    width: 100%;
    display: none;
     
    margin-bottom: 5rem;
    >button{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap:3px;
        font-size: 16px;       
        color: #4e5767;
        appearance: none;
        border: none;
        background: none;
        background-color: none;
        font-weight: bold;
    }
    

`
export const HeaderLine = styled.tr`
   
    width: 100%;  
    margin-top: 2rem;
    

`
export const ColumnHeader = styled.th`
   
    width:${({width})=> width != null ? width : "100%"};
    background-color: #4e5767;
    padding:10px 0px;
    color:#ffffff;
    border-left:1px  #d8d9dd solid;
    font-size: 12px;
`

export const PropertColumn = styled.td`
    
    width:${({width})=> width != null ? width : "100%"};   
    color: #4e5767;
    font-size: 1.2rem;
    padding: 3px;
    
    align-items: center;
    
    >button{
        
        appearance: none;
        border: none;
        background-color: none;
        color:#4e5767;
        
        
        
    }
    
    

`
export const ItemListagem = styled.tr`
    
    width: 100%;
    height: 4.5rem;
    background-color:${({pos}) => pos%2 == 0 ? "#ffffff": "#f4f4f4;"}; 

`