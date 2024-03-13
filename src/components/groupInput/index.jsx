import {Container,GroupFiltros,Titulo,Line} from './styles'

export function GroupInput(props){
    return(
        <Container width={props.width}>
            
               {  props.titulo == "" || typeof props.titulo == "undefined"  ? 
                   "" :  <Titulo>{props.titulo}</Titulo> 
               }

               { 
               
               props.titulo == "" || typeof props.titulo == "undefined"  ? 
                   ""  : <Line></Line>
               }
                        
            <GroupFiltros  gap={props.gap} inline={props.inline}>
                {props.children}
            </GroupFiltros>            
        </Container>
    )
}