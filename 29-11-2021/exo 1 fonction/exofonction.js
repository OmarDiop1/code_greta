var compte = 0;

function plus(){
   if(compte < 9){
    compte = compte +1;
    

    document.querySelector(".compte").innerHTML= compte + 1;
}

}

function moins(){
    if (compte >=1) {
    compte = compte - 1 ;
    document.querySelector(".compte").innerHTML= compte-1;
 }
}


function plusMoins(){
    if(type == "plus"){
        if(compte2 < 10 ){
            compte2 = compte2 +1;
            document.querySelector(".compte2").innerHTML= compte2 + 1;

        }

    }
    else if (type == "moins") {
        if(compte2 > 0 )
        compte2 = compte2 - 1 ;
        document.querySelector (".compte2").innerHTML= compte2 -1
    }





}



