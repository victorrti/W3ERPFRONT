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

export function Empresa(){
    
    return(       
        <Container>        
            <Topo listagem={"/sistema/empresaListagem"} titulo={"EMPRESA"} entrada={true}></Topo>
            <EntradaDados>                
                <DetalheCabecalho ></DetalheCabecalho> 
                <Detalhe name="teste" id="Empresa" className="Empresa"  listagem={false}>
                    <GroupInput inline={true} gap={"50px"} >
                        <GroupInput inline={false}>
                            <Input inline={true}  label={"NOME (RAZÃO SOCIAL)"} width={"38rem"}></Input>                     
                            
                            <Input inline={true} label={"RAZÃO SOCIAL"} width={"38rem"}></Input>
                            <Input inline={true} label={"NOME FANTASIA"} width={"38rem"}></Input>
                            <Input inline={true} label={"IDENTIFICAÇÃO PARA ORDEM DE COMPRA"} width={"38rem"}></Input>
                            <Input inline={true} label={"RESPONSAVEL PARA CONTATO"} width={"38rem"}></Input>
                            <Input inline={true} label={"EMAIL"} width={"38rem"}></Input>
                            <Input inline={true} label={"EMAIL PARA ORDEM DE COMPRA"} width={"38rem"}></Input>                              
                            <Input inline={true} label={"EMAIL FINANCEIRO"} width={"38rem"}></Input>                              
                            <Input inline={true} label={"SITE"} width={"38rem"}></Input>
                            <Checkbox inline={true} pre={true} label={"FAZENDA"}></Checkbox> 
                            <Input inline={true} label={"CNPJ"} width={"38rem"}></Input> 
                            <Input inline={true} label={"INSCRIÇÃO ESTADUAL"} width={"38rem"}></Input>  
                            <Input inline={true} label={"INSCRIÇÃO MUNICIPAL"} width={"38rem"}></Input> 
                            <Input inline={true} label={"INSCRIÇÃO ESTADUAL ST"} width={"38rem"}></Input>  
                            <Input inline={true} label={"CODIDO DA EMPRESA"} width={"38rem"}></Input> 
                            <Input inline={true} label={"N DO CREDENCIAMENTO DA ADAF"} width={"38rem"}></Input>
                            <Checkbox inline={true} pre={true} label={"PRINCIPAL"}></Checkbox>
                            <Checkbox inline={true} pre={true} label={"ATIVO"}></Checkbox>  
                            <Checkbox inline={true} pre={true} label={"ORGANIZAÇÃO"}></Checkbox> 
                            <ComboBox inline={true} width={"38rem"} name={"EMPRESA PRINCIPAL"} label={"EMPRESA PRINCIPAL"}></ComboBox>  
                            <Checkbox inline={true} pre={true} label={"INTEGRACAO COM AWS"}></Checkbox> 
                            <Input inline={true} label={"URL DA INTEGRAÇÃO COM AWS"} width={"38rem"}></Input>
                            <Input inline={true} label={"LOJA DA INTEGRACAO PDV"} width={"38rem"}></Input> 
                            <Input inline={true} label={"INTEGRACAO CONTABIL"} width={"38rem"}></Input>                      
                        </GroupInput>                                                           
                        
                    </GroupInput>                       
                </Detalhe>
                

                <Detalhe className="Empresa" listagem={true}>                     
                    <Input name={"Telefone"} label={"TELEFONE"} width={"18rem"}></Input>  
                    <Input name={"Tipo de telefone"}label={"TIPO DE TELEFONE"} width={"18rem"}></Input>
                    
                </Detalhe>

                <Detalhe className="Empresa" listagem={true}>                     
                    <Input name={"CODIGO CNAE"} label={""} width={"18rem"}></Input>  
                    <Input name={"PRINCIPAL"}label={""} width={"18rem"}></Input>                    
                </Detalhe>

                <Detalhe  className="Empresa"  listagem={false} >
                <GroupInput gap={"50px"}>
                    <GroupInput titulo={"SPED"} inline={true} gap={"60px"} >
                        <GroupInput inline={false}>
                            <Checkbox inline={true} pre={true} label={"GERAÇÃO SPED ICMS/IPI"}></Checkbox>                            
                            <ComboBox inline={true} width={"38rem"} name={"EMPRESA PRINCIPAL"} label={"EMPRESA PRINCIPAL"}></ComboBox>
                            <Input inline ={true}  name={""}label={"DIA DE  GERAÇÃO SPED ICMS/IPI"} width={"38rem"}></Input> 
                            <Checkbox inline={true} pre={true} label={"GERAÇÃO SPED PIS/COFINS"}></Checkbox> 
                            <Input inline ={true} name={""}label={"DIA DE  GERAÇÃO SPED PIS/COFINS"} width={"38rem"}></Input>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"ESCRITORIO CONTABILISTA"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"CONTABILISTA"}></ComboBox>
                            <Input inline ={true} name={""}label={"CRC"} width={"38rem"}></Input> 
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"PERFIL DE APRESENTAÇÃO FISCAL"}></ComboBox>
                            <Checkbox inline={true} pre={true} label={"CALCULAR QUANTIDADE PARA TRANSPORTE"}></Checkbox> 
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"TIPO DE ATIVIDADE FISCAL"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"TIPO DE ATIVIDADE EFD-CONTRIBUIÇÕES"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"MUNICIPIO DO DOMICILIO FISCAL"}></ComboBox>
                          </GroupInput>  
                    </GroupInput> 
                    <GroupInput titulo={"CONTA A RECEBER"} inline={true} gap={"50px"} >
                            <GroupInput inline={false}>                            
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"CONTA BANCARIA PARA BOLETO"}></ComboBox>                           
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"CARTEIRA"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"VINCULO BAIXA (DINHEIRO)"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"VINCULO BAIXA (CHEQUE)"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"VINCULO BAIXA (CREDITO EM CONTA)"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"VINCULO BAIXA (CREDITO EM CONTA)"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"FORMA DE ENVIO DE BOLETO"}></ComboBox>
                            <ComboBox inline={true} width={"38rem"} name={"ESCRITORIO CONTABILISTA"} label={"TEMPLATE PADRÃO DE ENVIO DE E-MAIL DE BOLETO"}></ComboBox>                            
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"MDF-E"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={"PROXIMO NUMERO MDF-E"} label={"PROXIMO NUMERO MDF-E"}></Input>                          
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"NOTA FISCAL"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={"PROXIMO NUMERO DE NOTA FISCAL DE SERVIÇO"} label={"PROXIMO NUMERO MDF-E"}></Input>  
                            <Input inline={true} name={"PROXIMO NUMERO DE NOTA FISCAL DE SERVIÇO"} label={"INCENTIVO FISCAL"}></Input>
                            <Input inline={true} name={"PROXIMO NUMERO DE NOTA FISCAL DE SERVIÇO"} label={"PROXIMO NUMERO DE NOTA FISCAL DE PRODUTO"}></Input>
                            <ComboBox inline={true} name={""} label={"SERIE NF-E"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"NATUREZA DE OPERAÇÃO"}></ComboBox>        
                            <ComboBox inline={true} name={""} label={"REGIME ESPECIAL DE TRIBUTAÇÃO"}></ComboBox>        
                            <Input inline={true} name={"PROXIMO NUMERO DE NOTA FISCAL DE SERVIÇO"} label={"ITEM DA LISTA DE SERVIÇOS"}></Input>
                            <ComboBox inline={true} name={""} label={"CÓDIGO DE REGIME TRIBUTÁRIO"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"CÓD. SIT. TRIB. PIS"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"CÓD. SIT. TRIB. COFINS"}></ComboBox> 
                            <Checkbox inline={true} pre={true} label={"TRIBUTAÇÃO NO MUNICÍPIO DO CLIENTE"}></Checkbox> 
                            <Checkbox inline={true} pre={true} label={"NÃO PREENCHER DATA DE SAÍDA"}></Checkbox>
                            <Input inline={true} name={"PROXIMO NUMERO DE NOTA FISCAL DE SERVIÇO"} label={"ESPÉCIE"}></Input>
                            <Input inline={true} name={"MARCA"}  label={"MARCA"}></Input> 
                            <Checkbox inline={true} pre={true} label={"DISCRIMINAR SERVIÇO, QUANTIDADE E VALOR"}></Checkbox> 
                            <Checkbox inline={true} pre={true} label={"CALCULAR DIFAL"}></Checkbox>
                            <Checkbox inline={true} pre={true} label={"CONSIDERAR O ID DO PNEU COMO CÓDIGO DO PRODUTO"}></Checkbox>
                            <ComboBox inline={true} name={""} label={"TEMPLATE PADRÃO DE ENVIO DE E-MAIL DE NOTA FISCAL	"}></ComboBox> 
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"NFC-E"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={"PRÓXIMO NÚMERO"} label={"PRÓXIMO NÚMERO"}></Input>  
                            <Input inline={true} name={"PROXIMO NUMERO DE NOTA FISCAL DE SERVIÇO"} label={"SÉRIE"}></Input>
                           
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"CONTRATO"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={"PRÓXIMO NÚMERO"} label={"PRÓXIMO IDENTIFICADOR DO ORÇAMENTO"}></Input>  
                            <Checkbox inline={true} pre={true} name={"PROXIMO NUMERO DE NOTA FISCAL DE SERVIÇO"} label={"EMISSÃO AUTOMÁTICA DE COMPROVANTE	"}></Checkbox>
                           
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"PEDIDO DE VENDA"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={"PRÓXIMO NÚMERO"} label={"PRÓXIMO IDENTIFICADOR DO PEDIDO DE VENDA"}></Input>  
                            <Checkbox inline={true} pre={true} name={"PROXIMO NUMERO DE NOTA FISCAL DE SERVIÇO"} label={"EMISSÃO AUTOMÁTICA DE COMPROVANTE	"}></Checkbox>
                           
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"VENDA"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                        <ComboBox inline={true} name={""} label={"CENTRO DE CUSTO"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"CONTA GERENCIAL"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"CONTA GERENCIAL (OUTRAS DESPESAS)"}></ComboBox> 
                            <ComboBox inline={true}  label={"CONTA GERENCIAL (SEGURO)"}></ComboBox> 
                            <Input inline={true} name={"PRÓXIMO NÚMERO"} label={"PRÓXIMO IDENTIFICADOR DA VENDA"}></Input> 
                            <ComboBox inline={true} label={"ORIGEM DA OPERAÇÃO	"}></ComboBox>
                            <ComboBox inline={true} label={"INDICATIVO DE INTERMEDIADOR"}></ComboBox>                           
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"COMPRA"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                        <ComboBox inline={true} name={""} label={"ICMS"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"ICMS ST"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"IPI"}></ComboBox> 
                            <ComboBox inline={true}  label={"ISS"}></ComboBox>                            
                            <ComboBox inline={true} label={"PIS"}></ComboBox>
                            <ComboBox inline={true} label={"COFINS"}></ComboBox>
                            <ComboBox inline={true} label={"FRETE"}></ComboBox>
                            <ComboBox inline={true} label={"IMPOSTO IMPORTAÇÃO"}></ComboBox>                             
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"DESPESA DE VIAGEM"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <ComboBox inline={true} name={""} label={"CENTRO DE CUSTO	"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"CONTA GERENCIAL CRÉDITO (ACERTO)"}></ComboBox> 
                            <ComboBox inline={true} name={""} label={"CONTA GERENCIAL DÉBITO (ACERTO)"}></ComboBox> 
                            <ComboBox inline={true}  label={"CONTA GERENCIAL (ADIANTAMENTO)"}></ComboBox>                           
                                                        
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"FATURAMENTO DE LOCAÇÃO"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={""} label={"PRÓXIMO NÚMERO DE FATURA DE LOCAÇÃO	"}></Input>
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"OPORTUNIDADE"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={""} label={"PPRÓXIMO IDENTIFICADOR DA OPORTUNIDADE"}></Input>
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"VEICULO DE USO"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <ComboBox inline={true} name={""} label={"CENTRO DE CUSTO"}></ComboBox>
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"COMPROVANTES CONFIGURAVEIS"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <ComboBox inline={true} name={""} label={"CENTRO DE COMPROVANTE CONFIGURÁVEL DE PEDIDO DE VENDA	"}></ComboBox>
                            <ComboBox inline={true} name={""} label={"COMPROVANTE CONFIGURÁVEL DE VENDA"}></ComboBox>
                            <ComboBox inline={true} name={""} label={"COMPROVANTE CONFIGURÁVEL DE ORÇAMENTO	"}></ComboBox>
                            <ComboBox inline={true} name={""} label={"COMPROVANTE CONFIGURÁVEL DE COLETA"}></ComboBox>
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"MODULO DE VETERINARIA"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={""} label={"PRÓXIMO NÚMERO DE ANIMAL	"}></Input>
                            
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"ORDEM DE SERVIÇO"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={""} label={"PRÓXIMO NÚMERO DA ORDEM DE SERVIÇO"}></Input>
                            
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"TRANSFERENCIA INTERNA"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <ComboBox inline={true} name={""} label={"CONTA GERENCIAL (CRÉDITO)"}></ComboBox>
                            <ComboBox inline={true} name={""} label={"CONTA GERENCIAL (DÉBITO)"}></ComboBox>
                            <ComboBox inline={true} name={""} label={"CENTRO DE CUSTO"}></ComboBox>
                            <ComboBox inline={true} name={""} label={"VÍNCULO DEVOLUÇÃO"}></ComboBox>
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"DEVOLUÇÃO DE CHEQUE"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <ComboBox inline={true} name={""} label={"DEVOLUÇÃO CRÉDITO"}></ComboBox>
                            <ComboBox inline={true} name={""} label={"DEVOLUÇÃO DÉBITO"}></ComboBox>
                            
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"CARGO DO COLABORADOR"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={""} label={"PRÓXIMO NÚMERO DE MATRÍCULA"}></Input>
                            
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"PRODUÇÃO"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={""} label={"LOCA DE BAIXA PRODUTO FINAL (CHÃO DE FÁBRICA)"}></Input>
                            <Input inline={true} name={""} label={"LOCAL DE BAIXA (MATÉRIA-PRIMA)"}></Input>
                            
                        </GroupInput>
                    </GroupInput>
                    <GroupInput titulo={"EXPEDIÇÃO"} inline={true} gap={"50px"} >
                        <GroupInput inline={false}>                            
                            <Input inline={true} name={""} label={"PRÓXIMO IDENTIFICADOR DO CARREGAMENTO"}></Input>
                           
                            
                        </GroupInput>
                    </GroupInput>
                    </GroupInput>                        
                </Detalhe>
                              
            </EntradaDados> 
            <Detalhe id="Cliente" listagem={true}>
                <Input  inline={true} name={"teste1"} label={"PRÓXIMO IDENTIFICADOR DO CARREGAMENTO"}></Input>
                <Input  inline={true} name={"teste2"} label={"PRÓXIMO IDENTIFICADOR DO CARREGAMENTO"}></Input>
            </Detalhe>          
            <Rodape></Rodape>
                                               
        </Container>

    )
}