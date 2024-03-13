import {Routes,Route} from 'react-router-dom'
import {Login} from '../pages/Login'
import {ContaPagarListagem} from '../pages/contaPagarListagem'
import { ContaPagar } from '../pages/contaPagarEntrada'
import{TipoDocumento} from '../pages/tipoDocumentoEntrada'
import{TipoDocumentoListagem} from '../pages/tipoDocumentoListagem'
import { Movimentacao } from '../pages/movimentação'
import { MovimentacaoListagem } from '../pages/movimentacaoListagem'
import {Empresa} from '../pages/empresaEntrada'
import { EmpresaListagem } from '../pages/empresaListagem'
import {Fornecedor} from '../pages/fornecedorEntrada'
import { FornecedorListagem } from '../pages/fornecedorListagem'

export function AppRoutes(){
    return(
        <Routes>
            <Route path ="/" element={<Login/>}/>   
            <Route path ="/sistema/empresaListagem" element={<EmpresaListagem/>}/>   
            <Route path ="/sistema/empresa" element={<Empresa/>}/>  
            <Route path ="/financeiro/contapagar" element={<ContaPagar/>}/>   
            <Route path ="/financeiro/contapagarListagem" element={<ContaPagarListagem/>}/>  
            <Route path ="/financeiro/movimentacao" element={<Movimentacao/>}/>   
            <Route path ="/financeiro/movimentacaoListagem" element={<MovimentacaoListagem/>}/> 
            <Route path ="/sistema/tipoDocumento" element={<TipoDocumento/>}/>   
            <Route path ="/sistema/tipoDocumentoListagem" element={<TipoDocumentoListagem/>}/>   
            <Route path ="/suprimento/fornecedor" element={<Fornecedor/>}/>   
            <Route path ="/suprimento/fornecedorListagem" element={<FornecedorListagem/>}/>          
        </Routes>
    )
}