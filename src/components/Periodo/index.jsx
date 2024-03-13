import {Container, ContainerInputs } from "./styles";
import { Input } from "../input";

export function Periodo({width,label,inline,marginLabel,placeholder,value,type,block}){
    console.log(inline,"teste")
    return(
        <Container>
            <span>{label}</span>
        <ContainerInputs inline={inline}>                      
            <Input inline = {false}  width={width} value={value} block={block}  type={type}></Input>
            <span>Até</span>
            <Input inline={false}  width={width} value={value} block={block} type={type}></Input>
        </ContainerInputs>
        </Container>
    )
}

