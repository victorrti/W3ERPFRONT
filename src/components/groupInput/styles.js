import { styled } from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;
    width: ${({width})=> width != null ? width : "max-content"} ;
    
    
`
export const GroupFiltros = styled.div`
    display: flex;
    flex-direction: ${({inline}) => inline ? "row" : "column"};
    //align-items : ${({inline}) => inline ? "center" : "flex-start"};
    gap: ${({gap}) => gap ? gap : "5px"};
    
    
`
export const Titulo = styled.span`
    font-size: 2.1rem;
    line-height: 2.9rem;
    color: #4e5767;
    font-weight: 900;
    
`
export const Line = styled.div`
    height: 0.1rem;
    border:0.2rem #d8d9dd solid; 
    width: 3rem;
`    
  