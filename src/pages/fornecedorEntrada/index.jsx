import { useState,useEffect } from 'react'
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


export function Fornecedor(){
    const [acesso,setAcesso] = useState(false);
    
    
    useEffect(()=>{
        
    },[acesso])
    return(       
        <Container>        
            <Topo titulo={"Fornecedor"} entrada={true}></Topo>
            <EntradaDados>                
                <DetalheCabecalho ></DetalheCabecalho> 
                <Detalhe name="teste" id="Entrada" className="Entrada"  listagem={false}>
                <GroupInput inline={true} gap={"5rem"}  >
                    <GroupInput inline={false} gap={"5rem"} >
                        <GroupInput titulo={"Dados Cadastrais"} inline={false} gap={"5px"} >
                            <Input label={"IDENTIFICADOR"} inline={true}></Input>
                            <Input label={"NOME FANTASIA"} inline={true}></Input>  
                            <Input label={"SITE"} inline={true}></Input>
                            <Input label={"E-MAIL"} inline={true}></Input> 
                            <Input label={"CNPJ"} inline={true}></Input>  
                            <Input label={"CPF"} inline={true}></Input>   
                            <Input label={"INSCRIÇÃO ESTADUAL"} inline={true}></Input>
                            <Input label={"INSCRIÇÃO MUNICIPAL"} inline={true}></Input>  
                            <Input label={"TICKET MÉDIO POR KG"} inline={true}></Input> 
                            <Checkbox label={"TRANSPORTADOR"} pre={true} inline={true}></Checkbox>
                            <Checkbox label={"TRIANGULAÇÃO"} pre={true} inline={true}></Checkbox>
                            <Checkbox label={"FABRICANTE"} pre={true} inline={true}></Checkbox> 
                            <Checkbox label={"ATIVO"} pre={true} inline={true}></Checkbox> 
                            <Checkbox label={"AGENCIA VENDA"} pre={true} inline={true}></Checkbox>  
                            <Checkbox label={"MARKTPLACE"} pre={true} inline={true}></Checkbox> 
                            <Input label={"OBSERVAÇÃO"} inline={true}></Input>  
                            <ComboBox width={"38rem"}     label={"CONTA GERENCIAL"} inline={true}></ComboBox>  
                            <ComboBox width={"38rem"}     label={"OPERAÇÃO CONTABIL"} inline={true}></ComboBox> 
                            <Checkbox label={"ASSOCIAÇÃO"} pre={true} inline={true}></Checkbox>  
                            <Checkbox label={"CAPTADOR"} pre={true} inline={true}></Checkbox>
                            <Input label={"NATUREZA DA OPERAÇÃO"} inline={true}></Input> 
                            <Checkbox label={"CREDENCIADORA"} pre={true} inline={true}></Checkbox>                           
                        </GroupInput>
                        <GroupInput titulo={"CONDIÇÃO DE PAGAMENTO"}>
                            <ComboBox width={"38rem"}     label={"PRAZO DE PGTO"} inline={true}></ComboBox> 
                        </GroupInput>
                        <Detalhe  className="Entrada" listagem={true}>
                            <Input name="Numero"></Input>
                            <Input name="Tipo"></Input>
                        </Detalhe> 
                        <GroupInput titulo={"HISTORICO"}> 
                            <Input label={"HISTORICO"} inline={true}></Input>   
                        </GroupInput>                                            
                    </GroupInput>
                    <GroupInput inline={false} gap={"5rem"} >    
                        <GroupInput titulo={"DADOS BANCARIOS"} inline={false}>
                            <ComboBox width={"38rem"}     label={"BANCO"} inline={true}></ComboBox>
                            <GroupInput width={"10rem"}>
                                <GroupInput width={"20rem"}  inline={true}>
                                    <Input width={"8rem"}   label={"AGENCIA"}inline={true}></Input> <span>-</span>  
                                    <Input width={"1rem"}   label={""}inline={true}></Input>  
                                </GroupInput>                                               
                                <GroupInput  inline={true}>
                                    <Input  marginLabel={"12px"} width={"8rem"}   label={"CONTA"}inline={true}></Input> <span>-</span>  
                                    <Input width={"1rem"}   label={""}inline={true}></Input>  
                                </GroupInput> 
                            </GroupInput>
                            <Input width={"38rem"}   label={"OPERAÇÃO"} inline={true}></Input>
                            <ComboBox width={"38rem"}  label={"TIPO DE CONTA"} inline={true}></ComboBox>
                            <ComboBox width={"38rem"}  label={"TIPO DE CHAVE PIX"} inline={true}></ComboBox>
                            <Input width={"38rem"}   label={"CHAVE PIX"}inline={true}></Input>                             
                        </GroupInput>
                        <GroupInput titulo={"DADOS DE ACESSO"} inline={false}>
                                <Checkbox exFunction={setAcesso} label={"ACESSO"} pre={true} inline={true}></Checkbox>
                                <Input block={!acesso} width={"38rem"}   label={"LOGIN"}inline={true}></Input>
                                <Input block={!acesso} width={"38rem"}   label={"SENHA"}inline={true}></Input>
                            </GroupInput> 
                    </GroupInput>  
                        
                </GroupInput>                    
                </Detalhe>

               
                               
            </EntradaDados>          
            <Rodape></Rodape>                                    
        </Container>

    )
}