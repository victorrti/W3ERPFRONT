import {Container} from './styles'
import {Topo} from '../../components/topo'
import {Input} from '../../components/input'
import {Filtro} from '../../components/filtro'
import {GroupInput} from '../../components/groupInput'
import {AcoesListagem} from '../../components/acoeslistagem'
import {Listagem} from '../../components/listagem'
import {TotalizadorListagem} from '../../components/totalizadorListagem'
import {Rodape} from '../../components/rodape'
import { Periodo } from '../../components/Periodo'
import { ComboBox } from '../../components/comboBox'
import { Checkbox } from '../../components/checkbox'

export function ContaPagarListagem(){
    const listaContaApagar = [{
        Codigo:"01",
        Cliente:"Victor"
    },
    {
        Codigo:"02",
        Cliente:"Matheus"
    },
]
    return(
        <Container >        
            <Topo titulo={"Conta a pagar"} novo={"/financeiro/contapagar"}></Topo>
            <Filtro>
               <GroupInput titulo={"Principal"} inline={true} gap={"30px"}>
                    <Input width={"263px"} inline={false}  label="Conta"  ></Input>
                    <Input width={"263px"} inline={false}  label="Empresa"></Input>
                    <Input width={"263px"} inline={false}  label="Recebimento"></Input>
                    <Input width={"263px"} inline={false}  label="Cliente,Colaborador,Outros"></Input>                          
                </GroupInput>

                <GroupInput avancado={true} titulo={"Datas"} inline={false} gap={"30px"}>                    
                    <GroupInput  inline={true} gap={"10px"}>                    
                        <Periodo width={"166px"} inline={true} label ={"Periodo de emissão"} type={"date"}></Periodo>  
                        <Periodo width={"166px"} inline={true} label ={"Periodo de vencimento"} type={"date"}></Periodo> 
                        <Periodo width={"166px"} inline={true} label ={"Periodo do primeiro vencimento"} type={"date"}></Periodo>                      
                    </GroupInput>
                    <GroupInput  inline={true} gap={"10px"}>                    
                        <Periodo width={"166px"} inline={true} label ={"Periodo de baixa"} type={"date"}></Periodo>  
                        <Periodo width={"166px"} inline={true} label ={"Periodo de lançamento"} type={"date"}></Periodo>                                            
                    </GroupInput>                        
                </GroupInput>
                <GroupInput titulo={"Documento/Pagamento"} avancado={true} inline={false} gap={"30px"}>
                    <GroupInput inline={true} gap={"10px"}>
                        <ComboBox label={"Tipo de documento"}></ComboBox>
                        <Input type={"text"} label={"Documento/Descrição"}></Input>
                        <Periodo width={"166px"} inline={true} label ={"Documento"} type={"number"}></Periodo>
                    </GroupInput>
                    <GroupInput  inline={true} gap={"10px"}>
                        <ComboBox label={"Conta Bancaria do coleto"}></ComboBox>                    
                        <Periodo width={"166px"} inline={true} label ={"Valor"} type={"number"}></Periodo>
                    </GroupInput>  
                    <GroupInput  inline={true} gap={"10px"}>
                        <ComboBox label={"Tipo de vinculo"}></ComboBox>
                        <ComboBox label={"Vinculo"}></ComboBox>
                        <ComboBox label={"Mostrar"}></ComboBox>
                    </GroupInput> 
                    <GroupInput  inline={true} gap={"10px"}>
                        <Periodo width={"166px"} inline={true} label ={"Numero da nota"} type={"number"}></Periodo>
                        <Periodo width={"166px"} inline={true} label ={"Numero da NSF-E"} type={"number"}></Periodo>
                        <Periodo width={"166px"} inline={true} label ={"Emissçao da nota fiscal"} type={"date"}></Periodo>
                    </GroupInput> 
                </GroupInput>
                <GroupInput titulo={"Faturamento"} avancado={true} gap={"3rem"} inline ={false}>
                    <GroupInput>
                        <Periodo inline={true} label={"Numero da fatura"} type={"number"}></Periodo>
                    </GroupInput>
                    <GroupInput inline={true} gap={"1rem"}>
                        <Periodo inline={true} label={"Venda"} type={"number"}></Periodo>
                        <ComboBox label={"Vendedor"}></ComboBox>
                        <ComboBox label={"Tipo de contrato"}></ComboBox>
                        <ComboBox label={"Categoria"}></ComboBox>
                    </GroupInput>
                </GroupInput> 
                <GroupInput inline={true} avancado={true} titulo={"Rateio"}>
                    <ComboBox label={"Conta gerencial"}></ComboBox>
                    <Input label={"motivo da taxa"} type={"text"}></Input>
                    <ComboBox label={"Mostrar Projetos"}></ComboBox>
                    <ComboBox label={"Tipo de projeto"}></ComboBox>
                    <ComboBox label={"Tprojeto"}></ComboBox>
                </GroupInput> 
                <GroupInput inline={true} avancado={true} titulo={"Outros"}>
                    <ComboBox label={"Tipo de taxa"}></ComboBox>
                    <ComboBox label={"TMotivo"}></ComboBox>
                    <ComboBox label={"Motivo do cancelamento"}></ComboBox>
                    <ComboBox label={"Situação do protesto"}></ComboBox>
                </GroupInput>
                <GroupInput inline={true} avancado={true} titulo={"Situação"}>
                    <Checkbox inline = {true} label={"Cancelada"} pre={false}></Checkbox>
                    <Checkbox inline = {true} label={"Prevista"} pre={false}></Checkbox>
                    <Checkbox inline = {true} label={"Baixada"} pre={false}></Checkbox>
                    <Checkbox inline = {true} label={"Negociada"} pre={false}></Checkbox>
                </GroupInput>
                <GroupInput inline={true} avancado={true} titulo={"Ordenação"}>
                    <ComboBox label={"Tipo de Relatorio"}></ComboBox>
                    <ComboBox label={"Campo do relatorio a ser ordenado"}></ComboBox>
                    <ComboBox label={"Tipo de ordenação do relatorio"}></ComboBox>
                    <ComboBox label={"Resultados por pagina"}></ComboBox>
                </GroupInput>   
                               
            </Filtro> 
            <AcoesListagem></AcoesListagem>
            <Listagem listagem={listaContaApagar}>
                <Input name="Conta"  width={"1%"}inline={false}  label="" ></Input>
                <Input name="Vencimento" width={"10%px"}  inline={false}  label="" ></Input>
                <Input name="Data de pagamento" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="Parcela" width={"10%"} inline={false}  label="" ></Input>
                <Input name="Pagamento a" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="Documento" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="Descrição" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="Situação" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="Outros" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="Valor Atual" width={"10%"}  inline={false}  label="" ></Input>
            </Listagem>
            <TotalizadorListagem titulo={"Valores"}></TotalizadorListagem>
            <Rodape></Rodape>

                                    
        </Container>
    )
}