import {Container} from './styles'
export function InputSelect(props){
    return(
        <Container width = {props.width}>
            <option value="" disabled selected hidden>{props.titulo}</option>
            {props.children}
        </Container>
    )
}