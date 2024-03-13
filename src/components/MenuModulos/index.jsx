import {Container} from './styles'
import {Card} from '../cardMenu'
import Logo from '../../assets/Logos/logo_w3erp.png'
import Faturamento from '../../assets/icons/faturamento.png'
import Financeiro from '../../assets/icons/financeiro.png'
import Suprimento from '../../assets/icons/suprimento.png'
import Fiscal from '../../assets/icons/fiscal.png'
import crm from '../../assets/icons/crm.png'
import rh from '../../assets/icons/rh.png'
import servicos from '../../assets/icons/servicos.png'
import projetos from '../../assets/icons/projetos.png'
import producao from '../../assets/icons/producao.png'
import juridico from '../../assets/icons/juridico.png'
import veiculos from '../../assets/icons/veiculos.png'
import veterinaria from '../../assets/icons/veterinaria.png'
import configuracoes from '../../assets/icons/configuracoes.png'

export function MenuModulo(props){
    return(
        <Container>
            <img src={Logo} ></img>
            <Card setIdModulo={props.setIdModulo} idCard={1} titulo={"Financeiro"} iconMenu={Financeiro}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={2} titulo={"Faturamento"} iconMenu={Faturamento}></Card>            
            <Card setIdModulo={props.setIdModulo} idCard={3} titulo={"Suprimento"} iconMenu={Suprimento} ></Card>
            <Card setIdModulo={props.setIdModulo} idCard={4}  titulo={"Fiscal"} iconMenu={Fiscal}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={5} titulo={"CRM"} iconMenu={crm}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={6} titulo={"RH"} iconMenu={rh}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={7} titulo={"Servicos"} iconMenu={servicos}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={8} titulo={"Projetos"} iconMenu={projetos}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={9} titulo={"Producao"} iconMenu={producao}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={10} titulo={"Juridico"} iconMenu={juridico}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={11} titulo={"Veiculos"} iconMenu={veiculos}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={12} titulo={"Veterinária"} iconMenu={veterinaria}></Card>
            <Card setIdModulo={props.setIdModulo} idCard={13} titulo={"Configurações"} iconMenu={configuracoes}></Card>
        </Container>
    )
}