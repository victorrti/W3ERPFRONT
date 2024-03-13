import {Container,Logo,DivForm,Form,Input,Button} from './styles'
import LogoW3erp from '../../assets/Logos/logo_w3erp.png'
import FundoServicos from '../../assets/Fundos/fundo_servicos.png'



export function Login(){
    return(
        <Container fundo={FundoServicos}>            
            <Logo>
                <img src={LogoW3erp}></img>
            </Logo>
            <DivForm>
                <Form>
                    <Input placeholder='Login'></Input>
                    <Input placeholder='Senha'></Input>
                </Form>
                <Button  to="/financeiro/contapagar">
                    Entrar
                </Button>
                <a>Esqueceu sua senha?</a>
                <p>V267</p>
            </DivForm>                      
        </Container>
    )
}