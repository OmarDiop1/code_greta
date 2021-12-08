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

for(let i=0; i<eleves.length;i++){
    document.querySelector("eleves").innerHTML+= "<tr><td>"  + eleves[i][0] + "</td></tr>"
}