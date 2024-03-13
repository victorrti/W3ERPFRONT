


import { Checkbox } from '../checkbox';
import {Container,Table,HeaderLine,ColumnHeader,PropertColumn,ItemListagem} from './styles'
import { FaEdit,FaSearch } from "react-icons/fa";

export function Listagem(props){
    console.log(props.children)
    let propertyes =[];
    if(Array.from(props.children).length < 1){
        propertyes.push(props.children)
    }else{
        propertyes = props.children
    }
     
    const listagemCabecalho = [];
    const pos=0;
    console.log(propertyes)
    
    propertyes.forEach(element => {
        console.log(element.props.width);
        const itemListagem = {
            name: element.props.name,
            width:element.props.width
        }
        listagemCabecalho.push(itemListagem);
    });
    console.log(listagemCabecalho)
    
   
    
   
    return(
        <Container>
            <Table cellPadding={0} cellSpacing={0}>
                <HeaderLine> 
                <ColumnHeader width="10px" ><Checkbox></Checkbox></ColumnHeader>           
                { 
                listagemCabecalho.map((itemListagem)=>{
                        return <ColumnHeader width={itemListagem.width} ><p>{itemListagem.name}</p></ColumnHeader> 
                })
                
                    
                }  
                <ColumnHeader width="10px" ></ColumnHeader>  
                </HeaderLine>
                {props.listagem ? props.listagem.map((item,index)=>{
                    
                    return(
                        
                    <ItemListagem key={item.Codigo} pos={index}> 
                        <PropertColumn width="10px"><Checkbox></Checkbox></PropertColumn>                                    
                        {    
                                               
                            listagemCabecalho.map((itemName,index)=>{
                                const propriedade = itemName.name;                       
                                return(  
                                  
                                        
                                        <PropertColumn width={itemName.width} key={propriedade}><p>{item[propriedade]}</p></PropertColumn> 
                                    
                                )                       
                            })
                        }
                        <PropertColumn width="10px"><div><a><FaEdit/></a><a><FaSearch/></a></div></PropertColumn>   
                    </ItemListagem>                
                        
                    )                
                    
                }) : ""} 
                
            </Table>
        </Container>
    )
    
}