import {Container,Span} from './styles'
import{useEffect,useState,useLayoutEffect} from 'react'




export function DetalheCabecalho(props){ 
  const [idsDetalhe,setIdsDetalhe] = useState([]);
  
  function handleDetalhe(detalhe){
    console.log(detalhe)
      const detalhes = Array.from(document.getElementsByClassName("Detalhe"))
      detalhes.map((detalheItem,index) =>{
        const classes = Array.from(detalheItem.classList)
        console.log(index)     
        
        if(detalheItem.id == detalhe || classes.indexOf(detalhe[0]) != -1 ){
          detalheItem.style.display = "block";
        }else{
          detalheItem.style.display = "none";
        }
      
      })
    
            
   
     
   
  }
  
  useLayoutEffect(() => {
    const detalhes = Array.from(document.getElementsByClassName("Detalhe"))
    let primeiroIndex = null;
    setIdsDetalhe(detalhes.map((detalhe,index)=>{
      if (idsDetalhe.indexOf(detalhe.id) == -1){      
        
        const newId = [...idsDetalhe,detalhe.id]
        return newId
      }
      
    }));
    handleDetalhe([detalhes[0].id])
    
    
   
  }, []);
  
    return(
        <Container id='detalheCabecalho'>         
          {idsDetalhe.map((detalhe,index)=>{            
            return <Span onClick={() =>{handleDetalhe(detalhe)}}>{detalhe}</Span>
          })}          
              
               
          
        </Container>
    )
}