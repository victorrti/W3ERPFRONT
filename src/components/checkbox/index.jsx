import {Container} from './styles'

export function Checkbox({inline,pre,label,marginLabel,exFunction}){
    function setvalue(target){
        const isChecked =  target.checked        
        exFunction(isChecked)
    }
    return(
        <Container marginLabel={marginLabel} inline={inline}>  
        {
            pre ? 
            <>      
                <label>{label}</label>           
                <input onClick={(e)=>{setvalue(e.target)}} type="checkbox"></input>
                
            </>
            
            
            : 
            <>
                
                <input onClick={()=>{setvalue(this)}} type="checkbox"></input>
                <label>{label}</label>
            </>
            
        }          
            
        </Container>
    )
}