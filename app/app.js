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




