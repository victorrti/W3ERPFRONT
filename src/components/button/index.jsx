import {LinkButton,ButtonAction} from './styles'
import {FaPlusCircle} from 'react-icons/fa'
import { FaArrowUpWideShort } from "react-icons/fa6";
export function Button(props){
    console.log(props.route)
    return(
        <>
          { props.route ?
                <LinkButton to={props.route} color={props.color}>
                    {props.children}
                <   span>{props.titulo}</span>
                </LinkButton>
           :
           <ButtonAction color={props.color}>
                {props.children}
                <span>{props.titulo}</span>
          </ButtonAction>
           }
        </>
       
    )
}