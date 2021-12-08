// il s'agit d'un concept 
//une fonction est un traitement qui prend des arguments en entree et qui renvoie le resultat du traitement effectué sur les arguments données 
//Fonctionnement boite noire : la fonction ne doit pas changer au fil du temps (cf : document.querySelector('selecteurCss')).

// ** Meme resultat pour meme argument en entrée ! **


/// ***2 etapess

/// 1.Defintion 
// Syntaxe en javascript : 
/* function nomDeMaFonction(argument1,argument2){
ici traitement en javascript 
par exemple :

let somme = argument 1 + argument 2 
return somme;
}



// 2.Execution
ou utiliser la fonction ?
js
let valeur1 = "valeur 1"
let valeur2 = "valeur 2"
const resultat nomDeMaFonction(valeur1,valeur2);
//Question :
resultat contient quoi ? 
Resultat -> "valeur1 "



*/

let nombre = prompt("au carré?");

function carre (nombre) {
    let result = nombre*nombre ;
 
    return result ; 
} 
let result = carre(nombre)

document.querySelector("ul#nombre").innerHTML=result+;



