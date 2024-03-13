import {Container,Logo,Search,SelecionarEmpresa} from './styles'
import LogoW3erp from '../../assets/Logos/logo_w3erp.png'
import {FaSearch} from 'react-icons/fa'



export function Header(){
    return(
        <Container>            
            <Logo>
                <img src={LogoW3erp}></img>
            </Logo>
            <Search placeholder="Buscar">
                
            </Search>
           
            <SelecionarEmpresa required>
                <option value="" disabled selected hidden>Selecione uma empresa   </option>
            </SelecionarEmpresa>

            <SelecionarEmpresa required>
                <option value="" disabled selected hidden>Meus Atalhos</option>
            </SelecionarEmpresa>  

            <SelecionarEmpresa required>
                <option value="" disabled selected hidden>W3ERP</option>
            </SelecionarEmpresa>  
             
                                    
        </Container>
    )
}