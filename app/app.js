//background-color: #3ab723;

//#25f700

var display = document.getElementById("minhaDiv").style.display;
    document.getElementById("minhaDiv").style.display = 'none';
        function Mudarestadoes(el) {
                display = document.getElementById("minhaDiv").style.display;
                     display = document.getElementById(el).style.display;
                        if(display == "none"){
                            document.getElementById(el).style.display = 'block'; blurIN()}
                        else{
                            document.getElementById(el).style.display = 'none';blurOUT() }
        }




