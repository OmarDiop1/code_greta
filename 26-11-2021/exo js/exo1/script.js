


var eleves = ["Ismael" , "Diallo", "Mustapha", " Djamel" , "Xavier" , "Habib" , "Brandon", "omar" , "omar" , "omar" ];



var nEleves = eleves.length ;
document.querySelector(".liste1").innerHTML+= nEleves;




for(i =0 ; i < nEleves; i++ ){
    if(i>4 && i <= 6 ){
        document.querySelector(".liste2").innerHTML += " <li style='color:red'>" + eleves[i] + "</li>" ;
    }
    else if (i>=7){
        document.querySelector(".liste2").innerHTML += " <li style='color:blue'>" + eleves[i] + "</li>" ;

    }
    else{ document.querySelector(".liste2").innerHTML += " <li>" + eleves[i] + "</li>" ;}




    
}

//multidimension

var eleves =

[
    ["DIOP" , "Omar" , 23]
    ["BYLYKBASHI" , "Esat" , 40]
    ["AMADOU" , "Diallo" , 46]
    ["BOUJENFA", "Ismail" , 21]



];

eleves[2][0];//AMADOU
eleves[2][3];//46

var nEleves = eleves.length;

eleves[1].length