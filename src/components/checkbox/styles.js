import{styled} from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: ${({inline}) => inline ? "row" : "column"};
    gap:1rem;
    align-items : ${({inline}) => inline ? "center" : "flex-start"};    
    justify-content: space-between;
    label{
        font-size: 1.3rem;        
        color: #4e5767;
        font-weight: 400; 
       
        margin-right:${({marginLabel}) => marginLabel ? marginLabel : ""};     
        
    }
`