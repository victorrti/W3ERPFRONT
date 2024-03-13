import {Container,Link} from './styles'


export function Card({titulo,iconMenu,setIdModulo,idCard}){
    function handleMenuTelas(){
        setIdModulo(idCard);
    }
    return(
        
        <Container>
             
            <Link onClick={()=>handleMenuTelas()}>
                <img src={iconMenu}></img>
                {titulo}
            </Link>
        </Container>
    )
}