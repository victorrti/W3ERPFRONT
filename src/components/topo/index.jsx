import{useState,useEffect}from "react"
import {Container} from './styles'
import {Header} from '../../components/header'
import {MenuModulo} from '../../components/MenuModulos'
import {MenuTelas} from '../../components/menuTelas'

import {MenuAction} from '../../components/menuAction'


export function Topo({titulo,entrada,listagem,novo}){
    const [idModulo,setIdModulo] = useState();
    useEffect(()=>{
       console.log(idModulo);
    },[idModulo])
    return(
        <Container>
            <Header/> 
            <MenuModulo setIdModulo={setIdModulo} ></MenuModulo> 
            <MenuTelas idModulo={idModulo}/> 
            <MenuAction novo={novo} listagem={listagem} titulo={titulo} entrada={entrada}></MenuAction>

        </Container>
    )
}