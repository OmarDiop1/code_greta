var tab =[ "Omar" , "DIOP" , 23 , true , ["hello ", "bonjour"]];




var eleves = ["Ismael" , "Diallo", "Mustapha", " Djamel" , "Xavier" , "Habib" , "Brandon " ];

eleves [3];

var nEleves = eleves.length ;
document.querySelector(".listeElevesTotal").innerHTML+= nEleves;


for(i = 0; i < nEleves; i++){
    document.querySelector(".listeEleves").innerHTML += " <li>" + eleves[i] + "</li>" ;
}

