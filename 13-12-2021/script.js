// * creee un formaulaire d'authentification html
 //* demander l'identifiant et mdp
 


 //* cree une fonction login
// * verifier le identifiant et le mdp soit remplis
//* si non remplis met les bordures des imputs en rouge 
 
// * verifier que le login et le mdp correspent aux information fournis par un tableau js

// * dans ce tableau j'ai 5 users avec "nom","prenom","identifiant","mdp"

 //* si tout est "ok" affiche dans un div un message "prenom nom tu es bien connecté" et cache le formulaire;

// * si non affiche un message d'erreue "identifiant ou mot de passe incorrecte"
 

let users = [
    //nom,prenom,identifiant,mdp
    ["bylykbashi", "esat", "be", "1234"],
    ["AAAAA", "Eeeee", "ae", "zzzz"],
    ["SSSSS", "Dddd", "sd", "eeee"],
    ["ZZZZZ", "Rrrr", "zr", "rrrr"],
    ["FFFFF", "Gggg", "fg", "tttt"]
];

function login() {

    let form = document.forms['authentification'];
    let identifiant = form['identifiant'];
    let mdp = form['mdp'];

    let message = document.querySelector('.message');

    if (identifiant.value == "") {
        identifiant.style.border = "red 2px solid";
    }
    if (mdp.value == "") {
        mdp.style.border = "red 2px solid";
    }

    for (let i = 0; i < users.length; i++) {
        // je recupere les informations du tableau users[]

        if (identifiant.value == users[i][2] && mdp.value == users[i][3]) {

            message.innerHTML = users[i][1] + " " + users[i][0] + " tu es bien connecté";

            message.classList.add('okMessage');
            message.classList.remove('erreurMessage');

            form.style.display = "none";
            return false;

        } else {
            message.innerHTML = "identifiant ou mot de passe incorrecte";

            message.classList.add('erreurMessage');
            message.classList.remove('okMessage');

        }
    }

    return false;

}