let telephone = "06.01.02.03.04";
var resultat = /^0[1-9]{1,1}[0-9]{8,8}/.test(telephone);

function validation(type, valeur) {
    let result = false;

    switch (type) {
        case "email":
            result = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(valeur);
            break;
        case "tel":
            result = /^0[1-9]{1,1}[0-9]{8,8}/.test(valeur);
            break;
        case "cp":
            result = /^[0-9] {5,5}$/.test(valeur);
            break;
        case "prenom":
            result = /^[a-zA-Z]{1,30}$/.test(valeur);
            break;
    }
    return result


}
alert(validation("prenom", "omar"));
