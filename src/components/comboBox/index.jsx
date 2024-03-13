import {Container,InputDiv} from './styles'
export function ComboBox({width,label,inline,marginLabel,placeholder,value}){
    return(
       
        <Container  label={label} inline={inline} marginLabel={marginLabel}>          
            <label>{label}</label>
             
            <InputDiv list="items" width={width}/>
            <datalist id="items">
                <option value="W3ERP"></option>
                <option value="LINKCOM"></option>
                <option value="IZAP"></option>
            </datalist>
        </Container>
    )
}