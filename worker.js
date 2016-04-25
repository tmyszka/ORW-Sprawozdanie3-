

    var i = 0;

    function Licz(){

        if(i < 100000){

            i = i + 1;

            postMessage(i);

        }

     

      

        setTimeout("Licz()", 500);

    }

    Licz();

