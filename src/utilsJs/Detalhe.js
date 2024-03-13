window.onload = function(e) {
    //e.preventDefault();
    //ocultaCabecalhoDetalhe();
    
    
};

function ocultaCabecalhoDetalhe(){
    let detalhes = document.getElementsByClassName('Detalhe');   
    let detalhecabecalho = document.getElementById("detalheCabecalho")   
    alert(detalhes.length)
   
    if(detalhes == null && detalhes.length === 0){  
        console.log("teste")
        detalhecabecalho.style.display = 'none';      
    }

}
