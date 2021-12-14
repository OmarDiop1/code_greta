

let users = [
    //nom,prenom,identifiant,mdp
    ["diop", "omar", "do", "0902"],
    ["son", "goku", "sg", "7"],
    ["v", "vegeta", "v", "77"],
    ["jr", "piccolo", "jp", "777"],

];

function login(type, valeur) {
    let result = false;
    switch (type) {
        case "email":
            result = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/.test(valeur);
            break;
        case "identifiant":
            result = /^[a-zA-Z0-9]$/.test(valeur);
            break;
        case "mdp":
            result = /^[a-zA-Z0-9]$/.test(valeur);
            break;
        case "confirmmdp":
            result = /^[a-zA-Z0-9]$/.test(valeur);
            break;
        case "telephone":
            result = /^0[1-9]{1,1}[0-9]{8,8}/.test(valeur);
            break;
        case "cp":
            result = /^[0-9] {5,5}$/.test(valeur);
            break;

    }
    return result;
}


function form() {
    let form = document.forms['authentification'];
    let email = form['email'];
    let identifiant = form['identifiant'];
    let mdp = form['mdp'];
    let confimmdp = form['confirmmdp'];
    let telephone = form['telephone'];
    let cp = form["cp"];



}













