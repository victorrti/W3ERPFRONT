import { Input } from '../input';
import { Listagem } from '../listagem';
import {useState,useEffect} from 'react'
import {Container,HeaderLine,ColumnHeader,PropertColumn,ItemListagem} from './styles'
import { ImBlocked } from "react-icons/im";
import { FaPlusCircle } from "react-icons/fa";

export function Detalhe(props){
    const [propriedades, setPropriedades] = useState([]);
    const [listagem,setListagem] = useState([]); 
    const [registroAux,setRegistroAux] = useState([]); 
    const [idListagem,setIdListagem] = useState(0)  
    const [registro,setRegistro] = useState(null);
    const[listagemRegistros,setListagemRegistros] = useState([]);
    
    
    
    let propertyes =[]
    if(props.listagem){
     propertyes = props.children
     if(propriedades.length == 0){
        setPropriedades(propertyes.map((item,index)=>{           
            let  newPropriedades = [...propriedades,<PropertColumn width={item.props.width} key={index}><Input width={item.props.width} name={item.props.name}></Input></PropertColumn>]
            return newPropriedades;
        }))
    }
     
    }
    
    const recuperaPropriedadesDetalhe= () =>{
        if(propriedades.length > 0 && propriedades != null && propriedades != []){
            return propriedades;
        }else{
            setPropriedades(propertyes.map((item,index)=>{
                let  newPropriedades = [...propriedades,<PropertColumn width={item.props.width} key={index}><Input width={item.props.width} name={item.props.name}></Input></PropertColumn>]
                return newPropriedades;
            }))
            return propriedades
        }
    }

    function  adicionarFilho () {       
      
        setIdListagem(idListagem + 1)
        setListagem([...listagem,idListagem]);
        

        

    };

    function removerFilho  (indexRemover,e) {  
        console.log(indexRemover)
         setListagem(listagem.filter( item => item != indexRemover ))       
       
        
    };

   useEffect(()=>{

   },[])
    
    
    
    return(
        <Container id={props.id} className={`Detalhe ${props.className}`} cellPadding="0" cellSpacing={"0"}>
             { props.listagem ? 
                     <>
                     <HeaderLine>          
                     { 
                     propertyes.map((property)=>{
                             return <ColumnHeader width={property.props.width}><p>{property.props.name}</p></ColumnHeader> 
                     })
                     
                         
                     } 
                     <ColumnHeader width={"50px"} ></ColumnHeader>  
                     </HeaderLine>
                     
                    {listagem.map((linha)=>{
                        
                        return ( <ItemListagem key={linha}>                                    
                                    {recuperaPropriedadesDetalhe()}
                                    <PropertColumn width={"50px"}>
                                        <button onClick={(e)=>{removerFilho(linha,e)}}><ImBlocked/></button>
                                    </PropertColumn>
                            </ItemListagem>)
                           
                        
                    })}
                     <button onClick={()=>{adicionarFilho()}}>Nova Linha<FaPlusCircle/></button>
                 </> 
              : 
              props.children 
            
            }
            
        </Container>
    )
}