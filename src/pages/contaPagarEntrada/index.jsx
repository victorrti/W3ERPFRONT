import {Container} from './styles'
//import '../../utilsJs/Detalhe'
import {Topo} from '../../components/topo'
import {Input} from '../../components/input'
import {Filtro} from '../../components/filtro'
import {GroupInput} from '../../components/groupInput'
import {Rodape} from '../../components/rodape'
import {MenuAction} from '../../components/menuAction'
import {DetalheCabecalho} from '../../components/detalheCabecalho'
import { Detalhe } from '../../components/detalhe'
import { EntradaDados } from '../../components/entradadados'
import { ComboBox } from '../../components/comboBox'
import {Checkbox} from '../../components/checkbox'





  function CarregaMenuDetalhe(){

  }

export function ContaPagar(){
    
    return(       
        <Container>        
            <Topo titulo={"Conta a pagar"} entrada={true} listagem={"/financeiro/contapagarListagem"}></Topo>
            <EntradaDados>                
                <DetalheCabecalho ></DetalheCabecalho> 
                <Detalhe name="teste" id="Entrada" className="Entrada"  listagem={false}>
                    <GroupInput inline={true} gap={"50px"} titulo="CONTA 12378">
                        <GroupInput inline={false}>
                            <ComboBox width={"38rem"} label={"Empresa"}></ComboBox>  
                            <Input label={"Documento"} width={"38rem"}></Input>
                            <ComboBox width={"38rem"} label={"Tipo de documento"}></ComboBox>
                            <ComboBox width={"38rem"} label={"Recebimento de"}></ComboBox>
                            <ComboBox width={"38rem"} label={"Vinculo Provisionado"}></ComboBox>
                            <Input type={"text"}  label={"Descricao"} width={"38rem"}></Input>
                        </GroupInput>   
                        <GroupInput inline={false}>
                            <ComboBox width={"16.6rem"} label={"Data de emissão"}></ComboBox>  
                            <Input label={"Data de Vencimento"} width={"16.6rem"}></Input>
                            <Input width={"16.6rem"} label={"Data de Competencia"}></Input>
                            <Input width={"26.3rem"} label={"Valor"}></Input>
                            <Input width={"26.3rem"} label={"Indice de correção"}></Input>
                            <ComboBox width={"26.3rem"} label={"Situação"}></ComboBox>
                            <Input label={"Codigo de barras"} width={"26.3rem"}></Input>
                            <Input label={"cheque"} width={"26.3rem"}></Input>
                        </GroupInput>                                   
                        
                    </GroupInput>                       
                </Detalhe>
                <Detalhe className={"Entrada"} listagem={false}>
                    <GroupInput titulo={"Rateio"} inline={false} gap={"10rem"}>
                                <ComboBox width={"38rem"} label={"Tipo de rateio"}></ComboBox> 
                                
                    </GroupInput> 
                </Detalhe>
                <Detalhe className={"Entrada"} listagem={true}>
                    <Input name={"Centro de custo"} label={"Centro de custo"} width={"10rem"}></Input>
                    <Input name={"Conta Gerencial"} label={"Conta Gerencial"} width={"20rem"}></Input>
                    <Input name={"Projeto"}  label={"Projeto"} width={"20rem"}></Input> 
                    <Input name={"valor"}  label={"valor"} width={"20rem"}></Input>   
                    <Input name={"percentual"}  label={"percentual"} width={"20rem"}></Input>                     
                            
                
                </Detalhe> 
                <Detalhe className={"Entrada"} listagem={false}>
                    <GroupInput gap={"10rem"} inline={true}>
                        <Checkbox inline={true} label={"Essa conta a receber faz parte de um financiamento ou e uma prestação"} pre={false}></Checkbox>
                        <Input  label={"Valor total"} width={"16.6rem"}></Input>
                        <Input  label={"Valor Restante"} width={"16.6rem"}></Input>
                    </GroupInput>
                
                </Detalhe>
                <Detalhe className={"Entrada"} listagem={true}>
                        <Input name={"Parcela"} label={"Parcela"} width={"16.6rem"}></Input>
                        <Input name={"Data de Vencimento"} label={"Data de Vencimento"} width={"16.6rem"}></Input>
                        <Input name={"valor"} label={"valor"} width={"16.6rem"}></Input>
                        <Input name={"Documento"} label={"Documento"} width={"16.6rem"}></Input>
                        <ComboBox  name={"situação"} label={"situação"} width={"16.6rem"}></ComboBox>                
                </Detalhe>
                <Detalhe id={"Taxa"} listagem={true}>
                    
                            <Input name={"TipoTaxa"} label={"Tipo de Taxa"} width={"16.6rem"}></Input>
                            <Input name={"Motivo"} label={"valor"} width={"16.6rem"}></Input> 
                            <Input name={"TipoCalculo"} label={"Tipo de calculo"} width={"16.6rem"}></Input> 
                            <Input name={"ValorPercentual"} label={"valor/percentual"} width={"16.6rem"}></Input>
                            <Input name={"DataLimite"} label={"data Limite"} width={"16.6rem"}></Input>                                                                 
                        
                </Detalhe>                 
            </EntradaDados>          
            <Rodape></Rodape>                                    
        </Container>

    )
}