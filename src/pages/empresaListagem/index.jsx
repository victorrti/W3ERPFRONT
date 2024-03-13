import {Container} from './styles'
import {Topo} from '../../components/topo'
import {Input} from '../../components/input'
import {Filtro} from '../../components/filtro'
import {GroupInput} from '../../components/groupInput'
import {AcoesListagem} from '../../components/acoeslistagem'
import {Listagem} from '../../components/listagem'
import {TotalizadorListagem} from '../../components/totalizadorListagem'
import {Rodape} from '../../components/rodape'
import {ComboBox} from '../../components/comboBox'

export function EmpresaListagem(){
    return(
        <Container >        
            <Topo novo={"/sistema/empresa"} titulo={"Empresa"}></Topo>
            <Filtro>
               <GroupInput titulo={"Principal"} inline={true} gap={"30px"}>
                    <Input width={"263px"} inline={false}  label="Nome"  ></Input>
                    <Input width={"263px"} inline={false}  label="Razão Social"></Input>
                    <ComboBox width={"263px"} inline={false}  label="Fazenda"></ComboBox>
                    <ComboBox width={"263px"} inline={false}  label="Mostrar"></ComboBox>                          
                </GroupInput>     
                               
            </Filtro> 
            <AcoesListagem></AcoesListagem>
            <Listagem>
                <Input name="Nome fantasia" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Razão social" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="CPF/CNPJ" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Principal" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Fazenda" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Ativo" width={"263px"} inline={false}  label=""  ></Input>
            </Listagem>            
            <Rodape></Rodape>

                                    
        </Container>
    )
}