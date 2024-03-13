import {useEffect,useState} from 'react'
import { Container } from './styles';

export function EntradaDados(props){
    
    const [existedetalhe, setExistedetalhe] = useState();
    const [detalhecabecalho,setDetalhecabecalho] = useState();
    const [itemsMenus,setItemsMenus] = useState();

    function carregaMenuDetalhe(){
       
       props.children.map(child=>{
        if(child.type.name == "Detalhe"){
            setExistedetalhe(true);
        }
      
       
       })

    }
    
    
    
    useEffect(() => {      
        carregaMenuDetalhe(); 
      },[]);


    return(
            <Container>
                {props.children.map(child=>{               
                       
                    if(child.type.name === "DetalheCabecalho" && !existedetalhe){
                        return null;
                    }else{
                        return child;
                    }
                })}
            </Container>
    )
}