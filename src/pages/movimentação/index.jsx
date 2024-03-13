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

export function Movimentacao(){
    
    return(       
        <Container>        
            <Topo listagem={"/financeiro/movimentacaoListagem"} titulo={"Movimentação"} entrada={true}></Topo>
            <EntradaDados>                
                <DetalheCabecalho ></DetalheCabecalho> 
                <Detalhe name="teste" id="Movimentação" className="Entrada"  listagem={false}>
                    <GroupInput inline={true} gap={"50px"} >
                        <GroupInput inline={false}>
                            <ComboBox width={"38rem"} label={"Tipo de operação"}></ComboBox>  
                            <ComboBox width={"38rem"} label={"Forma de pagamento"}></ComboBox>
                            <ComboBox width={"38rem"} label={"Tipo de vinculo"}></ComboBox>
                            <ComboBox width={"38rem"} label={"Empresa"}></ComboBox>
                            <Input  label={"Documento"} width={"38rem"}></Input>
                            <Input label={"valor"} width={"38rem"}></Input>
                            <Input label={"Data da movimentação"} width={"38rem"}></Input>
                            <Input label={"Historico"} width={"38rem"}></Input>
                            <Input label={"Observação"} width={"38rem"}></Input>                            
                        </GroupInput>                                                           
                        
                    </GroupInput>                       
                </Detalhe>
                

                <Detalhe id="Rateio" listagem={true}>
                    <ComboBox width={"18rem"} name={"Conta gerencial"} label={"Conta gerencial"}></ComboBox> 
                    <ComboBox width={"18rem"} name={"Centro de custo"}label={"Centro de custo"}></ComboBox> 
                    <ComboBox width={"18rem"} name={"Projeto"}label={"Projeto"}></ComboBox> 
                    <Input name={"Valor"} label={"Valor"} width={"18rem"}></Input>  
                    <Input name={"percentual"}label={"percentual"} width={"18rem"}></Input>
                    
                </Detalhe>
                              
            </EntradaDados>          
            <Rodape></Rodape>                                    
        </Container>

    )
}