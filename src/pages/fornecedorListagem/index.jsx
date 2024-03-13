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
import { Checkbox } from '../../components/checkbox'

export function FornecedorListagem(){
    return(
        <Container >        
            <Topo novo={"/sistema/empresa"} titulo={"Empresa"}></Topo>
            <Filtro>
               <GroupInput titulo={"Principal"} inline={true} gap={"5px"}>
                    <Input width={"200px"} inline={false}  label="Nome Fantasia"  ></Input>
                    <Input width={"200px"} inline={false}  label="Categoria"></Input>
                    <ComboBox width={"100px"} inline={false}  label="Fazenda"></ComboBox>
                    <ComboBox width={"100px"} inline={false}  label="Tipo de fornecedor"></ComboBox> 
                    <ComboBox width={"100px"} inline={false}  label="Tipo de pessoa"></ComboBox>                           
                </GroupInput> 
                <GroupInput avancado={true} inline={true} gap={"5px"}>
                    <Input width={"200px"} inline={false}  label="Razão Social"  ></Input>
                    <Input width={"200px"} inline={false}  label="Logradouro"></Input>
                    <Input width={"200px"} inline={false}  label="Bairro"></Input>
                    <Input width={"120px"} inline={false}  label="Telefone"></Input> 
                    <ComboBox width={"20px"} inline={false}  label="UF"></ComboBox>
                    <ComboBox width={"200px"} inline={false}  label="municipio"></ComboBox>                           
                </GroupInput>
                <GroupInput avancado={true} inline={true} gap={"5px"}>
                    <Input width={"200px"} inline={false}  label="Contato"  ></Input>
                    <Input width={"200px"} inline={false}  label="Avaliação"></Input>
                    <Input width={"200px"} inline={false}  label="Captador da associação"></Input>
                    <Input width={"200px"} inline={false}  label="Telefone"></Input> 
                    <ComboBox width={"200px"} inline={false}  label="Associação"></ComboBox>
                    <ComboBox width={"50px"} inline={false}  label="Captador"></ComboBox> 
                    <ComboBox width={"50px"} inline={false}  label="Triangulação"></ComboBox>                           
                </GroupInput> 
                <GroupInput avancado={true} inline={true} gap={"5px"}>                                   
                    <ComboBox width={"263px"} inline={false}  label="Sexo"></ComboBox>
                    <Input type={"date"} width={"263px"} inline={false}  label="Data de nascimento" ></Input>  
                    <Checkbox width={"263px"} inline={false} pre={true}  label="Exibir Nota Media CSV"></Checkbox> 
                                            
                </GroupInput>      
                               
            </Filtro> 
            <AcoesListagem></AcoesListagem>
            <Listagem>
                <Input name="Nome fantasia" width={"100px"} inline={false}  label=""  ></Input>
                <Input name="Tipo de pessoa" width={"100px"} inline={false}  label=""  ></Input>
                <Input name="CPF/CNPJ" width={"80px"} inline={false}  label=""  ></Input>
                <Input name="Telefones" width={"100px"} inline={false}  label=""  ></Input>
                <Input name="Fazenda" width={"20px"} inline={false}  label=""  ></Input>
                <Input name="Categorias" width={"100px"} inline={false}  label=""  ></Input>
                <Input name="Ativo" width={"20px"} inline={false}  label=""  ></Input>
            </Listagem>            
            <Rodape></Rodape>

                                    
        </Container>
    )
}