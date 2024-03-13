import {Container,Totais,CardTotal,Conteudo} from './styles'
import {Titulo} from '../titulo'
import { Checkbox } from '../checkbox'


export function TotalizadorListagem(props){
    return(
        <Container className="totalizador">
            <Conteudo>
                <Titulo fontSize={"2.1rem"} titulo={props.titulo}></Titulo>
                <Checkbox titulo={"Exibir Totais"} inline={true} pre={false}></Checkbox>
                <Totais>
                    <CardTotal><span>1.300,00</span></CardTotal>
                    <CardTotal><span>1.300,00</span></CardTotal>
                    <CardTotal><span>1.300,00</span></CardTotal>
                    <CardTotal><span>1.300,00</span></CardTotal>
                </Totais>
            </Conteudo>
        </Container>
    )
}