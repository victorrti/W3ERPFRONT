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

export function MovimentacaoListagem(){
    return(
        <Container >        
            <Topo novo={"/financeiro/movimentacao"} titulo={"Movimentação"}></Topo>
            <Filtro>
               
                <GroupInput  inline={true} gap={"10px"}>
                        <ComboBox width={"263px"} inline={false}  label="Empresa" ></ComboBox>
                        <ComboBox width={"263px"} inline={false}  label="Tipo de vinculo" ></ComboBox>
                        <ComboBox width={"263px"} inline={false}  label="Tipo de Operação" ></ComboBox> 
                    </GroupInput> 
                    <GroupInput  inline={true} gap={"10px"}>
                        <Input name="" width={"263px"} inline={false}  label="Numero do chege/descrição/Observação"  ></Input>
                        <ComboBox width={"263px"} inline={false}  label="Projeto" ></ComboBox> 
                        <ComboBox width={"263px"} inline={false}  label="Centro de custo" ></ComboBox> 
                    </GroupInput>
                    <GroupInput avancado={true}  inline={true} gap={"10px"}>
                        <ComboBox name="" width={"263px"} inline={false}  label="Pagamento recebimento a"  ></ComboBox>
                        <Input width={"263px"} inline={false}  label="Colaborasdor/fornecedor/outros" ></Input> 
                        <ComboBox width={"263px"} inline={false}  label="Centro de custo" ></ComboBox>
                        <Input width={"263px"} inline={false}  label="Venda" ></Input> 
                    </GroupInput>                                             
                    
                               
            </Filtro> 
            <AcoesListagem></AcoesListagem>
            <Listagem>
                <Input name="Vinculo" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Data" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Historico" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Documento" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Cheque" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Operação" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Valor" width={"263px"} inline={false}  label=""  ></Input>
                <Input name="Situação" width={"263px"} inline={false}  label=""  ></Input>
            </Listagem>
            <TotalizadorListagem titulo={"Valores"}></TotalizadorListagem>
            <Rodape></Rodape>

                                    
        </Container>
    )
}