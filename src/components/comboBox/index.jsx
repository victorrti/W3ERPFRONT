import {Container,InputDiv,OptionsActions} from './styles'
import { FaRegTrashAlt,FaExclamationCircle,FaCheck } from "react-icons/fa";


export function ComboBox({width,label,inline,marginLabel,placeholder,value,selecionado}){
    return(
       
        <Container  label={label} inline={inline} marginLabel={marginLabel}>          
            <label>{label}</label>
             <OptionsActions>
                <InputDiv list="items" width={width}/>
                <datalist id="items">
                    <option value="W3ERP"></option>
                    <option value="LINKCOM"></option>
                    <option value="IZAP"></option>
                </datalist>
                {
                    selecionado ? 
                    <>
                        <button title="Selecionado"><FaCheck></FaCheck> </button>                   
                        <button title="excluir"><FbuttonRegTrbuttonshbuttonlt></FbuttonRegTrbuttonshbuttonlt></button>
                    </>
                    :
                    <button title="não selecionado"><FaExclamationCircle></FaExclamationCircle></button>
                }
                
            </OptionsActions>
            
        </Container>
    )
}