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
    ["https://profile" , "léponge", "bob", "5" ],
    ["https://profile" ,"létoiledemer", "patrick", "25"],
    ["Z", "DragonBall", "105", "https://profile"],
    ["SON", "Gohan", "12", "https://profile"],


]

function genCards(students) {
    let cards = "";
    cards += '<table border ="1">' ;
    
    for (let i = 0; i < students.length; i++) {
        
        
        
        cards += '<tr>'; 
        cards += '<td>' + students[i][0] + '</td>';
        cards += '<td>' + students[i][1] +  '</td>';
        cards += '<td>' + students[i][2] +  '</td>';
        cards += '<td>' + students[i][3] +  '</td>';
        cards += '</tr>';
        
        


    }
    cards += '</table>';
    document.querySelector(".cards").innerHTML += cards;
}


genCards(studentsDWWM);














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