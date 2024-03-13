import {useState,useEffect,useLayoutEffect} from 'react'
import {Container,SaveFiltro,InputSelectFiltro} from './styles'
import {FaSave} from 'react-icons/fa'
import {Input} from '../input'
import {InputSelect} from '../inputSelect'
import { ButtonText } from '../buttonText'


export function Filtro(props){
    
    const [exibirAvancado,setExibirAvancado] = useState();
    const [exibiTotalizador,setExibiTotalizador] = useState();
    function exibirFiltroAvancado(){
        console.log("ok")
        setExibirAvancado(!exibirAvancado);
    }
    function exibirTotalizadores(){
        console.log("ok")
        setExibiTotalizador(!exibiTotalizador);
    }

    
    
    useEffect(()=>{

    },[exibirAvancado])


    
   

    return(
        <Container>
            
            <div>
                <SaveFiltro>
                    <InputSelectFiltro >
                        <option value="" disabled selected hidden>Selecionar um filtro</option>
                    </InputSelectFiltro>
                    <FaSave></FaSave>
                    <ButtonText execFunction={()=>{exibirTotalizadores}}  titulo={"Exibir Valores"}></ButtonText>
                    <ButtonText  execFunction={exibirFiltroAvancado} onClick={()=>{exibirFiltroAvancado()}} titulo={"Expandir Filtro"}>Expandir Filtro</ButtonText>
                </SaveFiltro>
                {Array.from(props.children).map(item =>{
                    {
                        return   item.props.avancado   ? exibirAvancado ? item : "" :  item
                    }
                
                    
                })}
            </div>
           
        </Container>
    )
}