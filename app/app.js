//background-color: #3ab723;

//#25f700

var displayio = document.getElementById('minhaDiv').style.display;
alert(displayio)

function Mudarestado() {
    displayio = document.getElementById("minhaDivpp").style.display;
   alert(displayio)
    if(displayio == "none"){
        
                document.getElementById("minhaDivpp").style.display = 'block';}

                if(displayio == "block"){
                    
                            document.getElementById("minhaDivpp").style.display = 'none';}
   
}
    

