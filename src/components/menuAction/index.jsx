import { Container ,Actions} from "./styles"; 
import {Titulo} from '../titulo'
import {Button} from '../button'
import { FaArrowLeft } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { FaSave } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { IoIosHelpCircle } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";

export function MenuAction({titulo,entrada,listagem,novo}){
    return(
    <Container>
        <div>
            <Titulo titulo={titulo}></Titulo>
        </div>
        {
            entrada ? 
            <Actions>
                <Button route={listagem} color={" #4e5767"} titulo={"Retornar Listagem"}><FaArrowLeft></FaArrowLeft></Button> 
                <Button color={"green"} titulo={"Salvar"}><FaSave></FaSave></Button> 
                <Button color={" #4e5767"} titulo={"Editar"}><GrEdit></GrEdit></Button>
                <Button color={"red"} titulo={"Cancelar"}><TiDelete></TiDelete></Button>
                <Button color={" #4e5767"} titulo={"Ajuda"}><IoIosHelpCircle></IoIosHelpCircle></Button>
            </Actions>
                
              : 
              <Actions>
                    <Button route={novo} color={"green"} titulo={"Novo"}><FaPlusCircle></FaPlusCircle></Button> 
                    <Button color={ "#4e5767"} titulo={"Adicionar Atalho"}><FaArrowUpWideShort></FaArrowUpWideShort></Button>
                    <Button color={ "#4e5767"} titulo={"Ajuda"}><IoMdHelpCircle></IoMdHelpCircle></Button>  
              </Actions>
        }
        
    </Container>
    )
}