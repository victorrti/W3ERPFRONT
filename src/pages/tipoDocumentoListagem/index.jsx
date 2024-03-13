import {Container} from './styles'
import {Topo} from '../../components/topo'
import {Input} from '../../components/input'
import {Filtro} from '../../components/filtro'
import {GroupInput} from '../../components/groupInput'
import {AcoesListagem} from '../../components/acoeslistagem'
import {Listagem} from '../../components/listagem'
import {TotalizadorListagem} from '../../components/totalizadorListagem'
import {Rodape} from '../../components/rodape'

export function TipoDocumentoListagem(){
    return(
        <Container >        
            <Topo novo={"/sistema/tipoDocumento"} titulo={"Tipo de documento"}></Topo>
            <Filtro>
               <GroupInput titulo={"Principal"} inline={true} gap={"30px"}>
                    <Input width={"263px"} inline={false}  label="descrição" ></Input>                                                                
                </GroupInput>   
                               
            </Filtro> 
            <AcoesListagem></AcoesListagem>
            <Listagem>
                
                <Input name="Descricao" inline={false}  label=""  ></Input>
                
            </Listagem>
           
            <Rodape></Rodape>

                                    
        </Container>
    )
}