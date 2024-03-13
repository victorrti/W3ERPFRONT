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
        conta:"01",
        vencimento:"Victor",
        dataPagamento:"02/10/1222",
        Parcela:"1",
        Pagamentoa:"Victor",
        documento:"1234/1",
        descricao:"pagamento funcionario",
        situacao:"Baixado",
        outros:"",
        valorAtual:"122,00"
    },
    {
        conta:"02",
        vencimento:"Lais",
        dataPagamento:"02/10/1222",
        Parcela:"1",
        Pagamentoa:"Victor",
        documento:"1234/1",
        descrição:"pagamento funcionario x",
        situacao:"Baixado",
        outros:"",
        valorAtual:"122,00"
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
                    <GroupInput  inline={true} gap={"3rem"}>                    
                        <Periodo width={"166px"} inline={true} label ={"Periodo de emissão"} type={"date"}></Periodo>  
                        <Periodo width={"166px"} inline={true} label ={"Periodo de vencimento"} type={"date"}></Periodo> 
                        <Periodo width={"166px"} inline={true} label ={"Periodo do primeiro vencimento"} type={"date"}></Periodo>                      
                    </GroupInput>
                    <GroupInput  inline={true} gap={"3rem"}>                    
                        <Periodo width={"166px"} inline={true} label ={"Periodo de baixa"} type={"date"}></Periodo>  
                        <Periodo width={"166px"} inline={true} label ={"Periodo de lançamento"} type={"date"}></Periodo>                                            
                    </GroupInput>                        
                </GroupInput>
                <GroupInput titulo={"Documento/Pagamento"} avancado={true} inline={false} gap={"10px"}>
                    <GroupInput inline={true} gap={"3rem"}>
                        <ComboBox width={"36.2rem"} label={"Tipo de documento"}></ComboBox>
                        <Input type={"text"} width="36.2rem" label={"Documento/Descrição"}></Input>
                        <Periodo width={"16.6rem"} inline={true} label ={"Documento"} type={"number"}></Periodo>
                    </GroupInput>
                    <GroupInput  inline={true} gap={"3rem"}>
                        <ComboBox width={"36.2rem"} label={"Conta Bancaria do coleto"}></ComboBox>                    
                        <Periodo width={"16.6rem"} inline={true} label ={"Valor"} type={"number"}></Periodo>
                    </GroupInput>  
                    <GroupInput  inline={true} gap={"3rem"}>
                        <ComboBox width={"36.2rem"} label={"Tipo de vinculo"}></ComboBox>
                        <ComboBox  width={"36.2rem"}label={"Vinculo"}></ComboBox>
                        <ComboBox width={"36.2rem"} label={"Mostrar"}></ComboBox>
                    </GroupInput> 
                    <GroupInput  inline={true} gap={"3rem"}>
                        <Periodo width={"16.6rem"} inline={true} label ={"Numero da nota"} type={"number"}></Periodo>
                        <Periodo width={"16.6rem"} inline={true} label ={"Numero da NSF-E"} type={"number"}></Periodo>
                        <Periodo width={"16.6rem"} inline={true} label ={"Emissão da nota fiscal"} type={"date"}></Periodo>
                    </GroupInput> 
                </GroupInput>
                <GroupInput titulo={"Faturamento"} avancado={true} gap={"3rem"} inline ={false}>
                    <GroupInput>
                        <Periodo width={"16.6rem"} inline={true} label={"Numero da fatura"} type={"number"}></Periodo>
                    </GroupInput>
                    <GroupInput inline={true} gap={"1rem"}>
                        <Periodo width={"16.6rem"} inline={true} label={"Venda"} type={"number"}></Periodo>
                        <ComboBox width={"24.3rem"} label={"Vendedor"}></ComboBox>
                        <ComboBox width={"26.4rem"} label={"Tipo de contrato"}></ComboBox>
                        <ComboBox width={"16.5rem"} label={"Categoria"}></ComboBox>
                    </GroupInput>
                </GroupInput> 
                <GroupInput inline={true} gap={"3rem"} avancado={true} titulo={"Rateio"}>
                    <ComboBox width={"16.6rem"} label={"Conta gerencial"}></ComboBox>
                    <Input width={"16.6rem"} label={"motivo da taxa"} type={"text"}></Input>
                    <ComboBox width={"26.4rem"} label={"Mostrar Projetos"}></ComboBox>
                    <ComboBox width={"16.6rem"} label={"Tipo de projeto"}></ComboBox>
                    <ComboBox width={"16.6rem"}label={"Projeto"}></ComboBox>
                </GroupInput> 
                <GroupInput inline={true} gap={"3rem"}avancado={true} titulo={"Outros"}>
                    <ComboBox label={"Tipo de taxa"}></ComboBox>
                    <ComboBox label={"Motivo"}></ComboBox>
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
                <Input name="conta"  width={"1%"}inline={false}  label="" ></Input>
                <Input name="vencimento" width={"10%px"}  inline={false}  label="" ></Input>
                <Input name="dataPagamento" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="Parcela" width={"10%"} inline={false}  label="" ></Input>
                <Input name="Pagamentoa" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="documento" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="descricao" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="situacao" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="outros" width={"10%"}  inline={false}  label="" ></Input>
                <Input name="valorAtual" width={"10%"}  inline={false}  label="a" ></Input>
            </Listagem>
            <TotalizadorListagem titulo={"Valores"}></TotalizadorListagem>
            <Rodape></Rodape>

                                    
        </Container>
    )
}