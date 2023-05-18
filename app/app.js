//background-color: #3ab723;

//#25f700



var display = document.getElementById("minhaDiv").style.display;
    document.getElementById("minhaDiv").style.display = 'none';
        function Mudarestadoes(el) {
            let eleme = document.getElementById('trava-01');
                display = document.getElementById("minhaDiv").style.display;
                     display = document.getElementById(el).style.display;
                       
                        if(display == "none"){
                            document.getElementById(el).style.display = 'block';
                            eleme.classList.add('trava');
                        }
                        else{
                            document.getElementById(el).style.display = 'none';
                            eleme.classList.remove('trava');}
        }

function luz(){ 
    var fundo = document.getElementById('body-bc').style.backgroundColor;

    if(fundo == "white"){
        
        document.getElementById('body-bc').style.backgroundColor = "#0c0b19"
        document.getElementById('text-geral-02-red').style.color = "#828282"
        document.getElementById('text-sobre-01-red').style.color = "white"
        document.getElementById('contato-01').style.color = "white"
        document.getElementById('contato-02').style.color = "white"
        document.getElementById('contato-03').style.color = "white"
        document.getElementById('contato-04').style.color = "white"
        document.getElementById('text-red-02').style.color = "white"
        document.getElementById('contato-tx-geral-red').style.color = "white"
        document.getElementById('text-geral-00-red').style.color = "white"
        document.getElementById('text-red-02').style.color = "white"
        document.getElementById('minhaDiv').style.color = "white"
        document.getElementById('text-geral-00-red-r').style.color = "white"
    
    }else{
      
    document.getElementById('body-bc').style.backgroundColor = "white"
    document.getElementById('text-geral-02-red').style.color = "#828282"
    document.getElementById('text-sobre-01-red').style.color = "black"
    document.getElementById('contato-01').style.color = "black"
    document.getElementById('contato-02').style.color = "black"
    document.getElementById('contato-03').style.color = "black"
    document.getElementById('contato-04').style.color = "black"
    document.getElementById('text-red-02').style.color = "black"
    document.getElementById('contato-tx-geral-red').style.color = "black"
    document.getElementById('text-geral-00-red-r').style.color = "black"
    document.getElementById('text-geral-00-red').style.color = "black"
    document.getElementById('text-red-02').style.color = "black"
    document.getElementById('minhaDiv').style.color = "black"   
    }


    




    
   

    
}






    /* document.getElementById('body-bc').style.backgroundColor = "#F9F9F9"
    document.getElementById('text-geral-02-red').style.color = "black"
    document.getElementById('text-sobre-01-red').style.color = "black"
    document.getElementById('contato-01').style.color = "black"
    document.getElementById('contato-02').style.color = "black"
    document.getElementById('contato-03').style.color = "black"
    document.getElementById('contato-04').style.color = "black"
    document.getElementById('text-red-02').style.color = "black"
    document.getElementById('contato-tx-geral-red').style.color = "black"
    document.getElementById('text-geral-00-red').style.color = "black"
    document.getElementById('text-red-02').style.color = "black"
    document.getElementById('minhaDiv').style.color = "black"




    document.getElementById('body-bc').style.backgroundColor = "#F9F9F9"  
    */