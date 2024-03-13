import {useState} from 'react'
import {MenuItem,MenuContainer,SubMenu,SubMenuItem,Container,LinkRoute,DivConteudo} from './styles'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';

export function MenuTelas(props){
  const [openMenus, setOpenMenus] = useState([]);



    const Financeiro = [
        {
            id:2,
            nome:"Agendamento",
            sub: false
        },
        {
            id:2,
            nome:"Conta pagar",
            sub: false,
            route:"/financeiro/contapagarListagem"
        },
        {
            id:2,
            nome:"Conta a receber",
            sub: false
        },
        {
            id:3,
            nome:"Movimentacao financeira",
            sub:true,
            subItens:[
                {
                    id:3,
                    nome:"gerenciar movimentações",
                    sub:false,
                    route:"/financeiro/movimentacaoListagem"                 

                },
                {
                    id:4,
                    nome:"Tranferencia interna",
                    sub:false                    
                },
                {
                    id:4,
                    nome:"Extrato de conta",
                    sub:false                    
                },
                {
                    id:4,
                    nome:"Fechamento financeiro",
                    sub:false                    
                }
            ]
        },
        {
            id:3,
            nome:"Serviços bancarios",
            sub:true,
            subItens:[
                {
                    id:3,
                    nome:"Arquivo bancario",
                    sub:false,                 

                },
                {
                    id:4,
                    nome:"Processamento de extrato cartao de credito",
                    sub:false                    
                },
                {
                    id:4,
                    nome:"Processamento arquivo retorno",
                    sub:true,
                    subItens:[
                        {
                        id:10,
                        nome:"Arquivo pre definido",
                        sub:false                        
                         },
                         {
                            id:10,
                            nome:"Arquivo configuravel",
                            sub:true,
                            subItens:[
                                {
                                    id:10,
                                    nome:"Exemplo",
                                    sub:false,
                                }
                            ]                        
                        },
                        {
                            id:10,
                            nome:"Exemplo",
                            sub:false
                           

                        }
                    ]                  
                }
               
            ]
        },
       
    ]

    const configuracao =[
        {
            id:2,
            nome:"Empresa",
            sub: false,
            route:"/sistema/empresaListagem"
        },
        {
            id:2,
            nome:"Configurações dos modulos",
            sub:true,
            subItens:[
                {
                    id:10,
                    nome:"Faturamento",
                    sub:true,
                    subItens:[
                        {
                            id:10,
                            nome:"Tipo de documento",
                            sub:false,
                            route:"/sistema/tipoDocumentoListagem"
                        }
                    ]
                    
                }
            ]
            
        }
    ]
    const suprimento = [
        {
            id:2,
            nome:"Fornecedor",
            sub: false,
            route:"/suprimento/fornecedorListagem"
        }
    ]
    const Faturamento = [
        {
            id:2,
            nome:"Conta pagar",
            sub: false
        },
        {
            id:2,
            nome:"Movimentacao",
            sub:true,
            subItens:[
                {
                    id:3,
                    nome:"Gerenciar movimentações",
                    sub:false,                 

                },
                {
                    id:4,
                    nome:"Atalho",
                    sub:true,
                    subItens:[
                        {
                            id:5,
                            nome:"Conta pagar",
                            sub:true, 
                            subItens:[
                                {
                                id:6,
                                nome:"Atalho",
                                sub:false
                                },
                                {
                                    
                                        id:6,
                                        nome:"Atalho",
                                        sub:false
                                    

                                }
                            ]                
        
                        },
                        {
                            id:5,
                            nome:"Conta pagar",
                            sub:false
                        }
                        

                    ]
                }
            ]
        },
       
    ]
    const modulos =  [{id:1,modulo:Financeiro},{id:2,modulo:Faturamento},{id:13,modulo:configuracao},{id:3,modulo:suprimento}]

    const renderSubMenu = (subItens,primeirosub) => (
       
        <SubMenu primeiroMenu={primeirosub}>
            {subItens.map((subItem) => (
                
                <MenuItem index={false} key={subItem.id}>
                    {subItem.sub? <>{subItem.nome} <MdKeyboardArrowDown></MdKeyboardArrowDown></>:<LinkRoute to={subItem.route}>{subItem.nome} </LinkRoute>}
                    {subItem.sub && renderSubMenu(subItem.subItens,false)}
                    
                </MenuItem>
            ))}
        </SubMenu>
    );
    
    const renderMenuItems = (items) => (
        items.map((item,index) => (
            <MenuItem index={true} key={item.id}>
                {item.sub ? <>{item.nome}<MdKeyboardArrowDown></MdKeyboardArrowDown></>:<LinkRoute to={item.route}>{item.nome}</LinkRoute>}
                {item.sub && renderSubMenu(item.subItens,true)}
                
            </MenuItem>
        ))
    );
    
    const Menu = ({ items }) => (
        <MenuContainer>
            {renderMenuItems(items)}
        </MenuContainer>
    );
    

   
     
    return(

        <Container>
            <DivConteudo>
                {modulos.map((modulo) => (
                    modulo.id == props.idModulo ?
                    <Menu key={modulo.id} items={modulo.modulo} /> :""
                ))}
            </DivConteudo>
        </Container>

    )
}