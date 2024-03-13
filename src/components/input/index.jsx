import {Container,InputDiv} from './styles'
export function Input({width,label,inline,marginLabel,placeholder,value,type,block}){
    console.log(block)
    return(
       
        <Container  label={label} inline={inline} marginLabel={marginLabel}>          
            <label>{label}</label> 
            <InputDiv disabled={block} type={type} width={width} value={value} placeholder={placeholder}></InputDiv>
        </Container>
    )
}