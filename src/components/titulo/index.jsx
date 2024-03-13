import {Container,Line} from './styles'

export function Titulo({titulo,fontSize}){
    return(
        <Container fontSize={fontSize}>
            <p>{titulo}</p>
            <Line></Line>
        </Container>
    )
}