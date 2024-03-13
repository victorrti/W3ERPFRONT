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

export function TipoDocumento(){
    
    return(       
        <Container>        
            <Topo titulo={"Tipo de Documento"} entrada={true}></Topo>
            <EntradaDados>                
                <DetalheCabecalho ></DetalheCabecalho> 
                <Detalhe name="teste" id="Entrada" className="Entrada"  listagem={false}>
                <GroupInput inline={false} gap={"5rem"}  >
                    <GroupInput inline={false} gap={"5px"} >
                        <Input width={"38rem"}   name={"descricao"} label={"Descrição"}  inline={true}></Input>
                        <Input width={"38rem"}  name={"contaGerencialTaxa"} label={"Conta Gerencia da Taxa"}    inline={true}></Input>
                        <Input width={"38rem"}  name={"centroCustoTaxa"} label={"Centro de custo da taxa"} inline={true}></Input>
                        <ComboBox width={"38rem"}   label={"Tipo de calculo"} inline={true}></ComboBox> 
                        <ComboBox width={"38rem"}   label={"Tipo de documento(LCDPR)"}inline={true}></ComboBox>   
                        <Input width={"38rem"}  name={"taxa"} label={"Taxa"}  inline={true}></Input>
                        <Checkbox  pre={true}  label={"Permitir Venda sem analise de credito"}inline={true}></Checkbox>
                        <Checkbox    pre={true} label={"Nota fiscal"}inline={true}></Checkbox>
                        <Checkbox   pre={true} label={"Boleto"}inline={true}></Checkbox>
                        <Checkbox  pre={true} label={"Cartão"}inline={true}></Checkbox>
                        <Checkbox    pre={true} label={"Adiantamento"}inline={true}></Checkbox>
                        <Checkbox  pre={true} label={"Prencher data do banco"}inline={true}></Checkbox>
                        <Input width={"38rem"}   name={"codigoFinalizadora"} label={"Codigo da Finalizadora (ECF)"}   inline={true}></Input>
                        <Input width={"38rem"}    name={"iDMeep"} label={"ID Meep"}  inline={true}></Input>
                        <ComboBox width={"38rem"}    label={"Tipo de Tributo"} inline={true}></ComboBox> 
                        <ComboBox width={"38rem"}    label={"Forma de pagamento (Credito)"}inline={true}></ComboBox>
                        <ComboBox width={"38rem"}     label={"Forma de pagamento (Debito)"} inline={true}></ComboBox> 
                        <ComboBox width={"38rem"}   label={"Conta destino baixa"}inline={true}></ComboBox>
                        <Input width={"38rem"}    name={"iDMeep"} label={"Dias para receber"}  inline={true}></Input>
                        <Checkbox  pre={true}    label={"Permitir Venda sem analise de credito"}inline={true}></Checkbox>
                        <Checkbox   pre={true} label={"Nota fiscal"}inline={true}></Checkbox>
                        <Checkbox   pre={true} label={"Boleto"}inline={true}></Checkbox>
                        <ComboBox width={"38rem"}     label={"Tipo de Tributo"} inline={true}></ComboBox> 
                        <ComboBox width={"38rem"}   label={"Forma de pagamento (Credito)"}inline={true}></ComboBox>                       
                    </GroupInput> 
                    
                    <GroupInput titulo={"CONFIGURAÇÃO NF-E"} inline={false}>
                        <ComboBox width={"38rem"}     label={"Meio de pagamento"} inline={true}></ComboBox> 
                        <ComboBox width={"38rem"}   label={"Tipo de Integração para pagamento"}inline={true}></ComboBox> 
                        <Input width={"38rem"}   name={"codigoFinalizadora"} label={"CNPJ da credenciadora de cartão de credito e/ou debito"}    inline={true}></Input>
                        <ComboBox width={"38rem"}   label={"Bandeira da credenciadora de cartão de credito e/ou debito"}inline={true}></ComboBox>
                    </GroupInput>  
                </GroupInput>                    
                </Detalhe>

               
                               
            </EntradaDados>          
            <Rodape></Rodape>                                    
        </Container>

    )
}