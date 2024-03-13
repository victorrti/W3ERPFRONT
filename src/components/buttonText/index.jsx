import {Container} from './styles'

export function ButtonText(props){
    return(
        <Container onClick={()=>props.execFunction()} placeholder={props.titulo}>{props.titulo}</Container>
    )
}