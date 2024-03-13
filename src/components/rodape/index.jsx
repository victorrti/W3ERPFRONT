import {Container,Conteudo,Logo} from './styles'
import logo from '../../assets/Logos/logo_w3erp.png'

export function Rodape(){
    return(
        <Container>            
            <Conteudo>
                <Logo>
                    <img src={logo} alt="" />
                </Logo>
                <span>V264</span>
                <div>
                    <span>4004-4004</span><br/>
                    <span>www.w3erp.com.br</span><br/>
                </div>

            </Conteudo>
        </Container>
    )
}