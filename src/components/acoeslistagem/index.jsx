import {Container,Button,MaisAções} from './styles'
import { FaRegFilePdf,FaFileCsv,FaFilter } from 'react-icons/fa'
import { TfiReload } from "react-icons/tfi";

export function AcoesListagem(){
    return(
        <Container>
            <Button><FaFilter/>Filtrar</Button>
            <Button><TfiReload/>Reiniciar</Button>
            <Button><FaFileCsv/>Gerar CSV</Button>
            <Button><FaRegFilePdf/>Gerar PDF</Button>
            <MaisAções>
                <option value="" disabled selected hidden>Mais ações</option>
            </MaisAções>

        </Container>
    )
}