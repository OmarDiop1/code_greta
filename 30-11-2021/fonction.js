/*let inputuser = prompt("nom?");
let inputpassword = prompt("mdp?");
let user = "Marc";
let password = "mdp";

function login(){
    if (inputuser == user && inputpassword == password){
        alert ("ok")
    }
    else{
        alert("non connecté");
    }
}
login();*/

//correction 
/*
function login2(user = "Omar" , password = "Azerty") {
    const inputuser = prompt ("nom?");
    const inputpassword = prompt("mdp?");
    {
        
    if (inputuser == user && inputpassword == password){
        alert ("ok")
    }
    else{
        alert("non connecté");
    }
    }
    const info = document.querySelector ("button#login2 + p.message");
    info.innerHTML = "Ici la fonction prend l'user et le mdp en entrée " ;
}


//correction2

function askUser () {
    const inputuser = prompt ("nom?");
    const inputpassword = prompt ("mdp?");

    return [inputuser , inputpassword ];

}
function isconnected (input, userinfo ){
    const inputuser = input [0];
    const inputpassword = input [1];

    const user = userinfo [0];
    const password = userinfo [1];

    return inputpassword = password && inputuser == user
}

function login3 (user ="Omar" , password = "azerty")

const res = askUser();
const inputuser = res[0]
const inputpassword = res[1]

if (isconnected(input[user , password])) {
    alert("connecté");
}

    else {
        alert("non connecté")
    }


    

    /* ETAPES
    
    faire un tableau avec les differentes valeurs strig voulu 
    faire des let avec leur nom et des valeurs 
    creer les differentes constantes
    j'ai besoin de faire



   
    




*/


const studentsDWWM = [
    ["https://casoar.org/wp-content/uploads/2020/10/Bob-leponge.png", "léponge", "bob", "5"],
    ["https://static.wikia.nocookie.net/mugenpedia/images/f/f8/200px-Patrick_Star.svg.png/revision/latest/scale-to-width-down/200?cb=20130812201248&path-prefix=fr", "létoiledemer", "patrick", "25"],
    ["https://www.micromania.fr/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dw304945bf/images/logos/DragonBallZ-Logo.png", "Z", "DragonBall", "105", ],
    ["zf", "SON", "Gohan", "12", ],


]

function genCards(students) {
    let cards = "";
    for (let i = 0; i < students.length; i++) {

        cards += genPrincipalCards(students[i]);
    }
    document.querySelector(".cards").innerHTML += cards;
}


genCards(studentsDWWM);





function genPrincipalCards(firstcard) {
    let principalCards = "";
    principalCards += '<article>';

    principalCards += '<header><img style="width: 150px;" src="' + firstcard[0]+ '">' + '</header>';
    principalCards += '<main>' + firstcard[1] + firstcard[2] + '</main>';
    principalCards += '<footer>' + firstcard[3] + '</footer>';

    principalCards += '</article>';


    return principalCards;
}










/*function genCards(studentsDWWM ) {


    for(i=0; i<students.length; i++){
        document.querySelector("").innerHTML += students[i]
    }
}











function genCard(student) {}

function getStudentInfos(student) {}

function genHtmlCard(header, content, footer) {}

document.querySelector("div#students").innerHTML = genCards(studentsDWWM);




/**
 *
 * @param {Array} students Tableau de tableaux [ [nom, prenom, age, avatar], ]
 * @returns {string} Le html de toutes les cards de tous les étudiants
 */
/*function genCards(students) {
   let cards = "";
   for (let i = 0; i < students.length; i++) {
       let currentStudent = students[i];
       const card = genCard(currentStudent);
       cards += card;
   }
   return cards;
}

/**
*
* @param {Array} student [nom, prenom, age, avatar]
* @returns {string} La card html pour un étudiant
*/
/*function genCard(student) {}

function getStudentInfos(student) {}

function genHtmlCard(header, content, footer) {}
document.querySelector("div#students").innerHTML = genCards(studentsDWWM);

for (let i = 0; i < studentsDWWM.length; i++) {
    document.querySelector("#avatars").innerHTML += "<img src='" + studentsDWWM[i][3] + "'/>";
}




const eleves = ["sangoku"];
/**
 *
 * @param {Array} eleves
 * @param {string} texte
 */
/*function salutation(eleves, texte) {
    //let nom = "Mustapha";
    for (let i = 0; i < eleves.length; i++) {
        let nom = eleves[i];
        alert(texte + " " + nom);
    }
}
const elevesDWWM = ["Mustapha", "Diallo", "Xavier"];
salutation(elevesDWWM, "bonjour");

//une fonction c'est un traitement qui prend des données en entrée et renvoie un résultat en sortie;
*/