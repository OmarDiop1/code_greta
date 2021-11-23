/**
 * 
 */
var a = "hello";

switch(a){
    case "bonjour":
    alert("je suis dans le cas bonjour");
    break;
    case "hello":
    alert("je suis dans la case hello");
    break;

    default : alert("je suis dans aucun cas");
}

//equivalent avec IF

if (a == "bonjour"){
    alert("je suis dans le cas bonjour");
} 
else if ( a == "hello") {
    alert("je suis dans le cas hello");
}
else{
    alert("je suis dans aucun cas");
}


//exmeple Switch

var nom = prompt("quelle est votre nom ?");
var age = prompt("quelle est ton age ?");

alert("votre nom est"  + nom);

switch(nom){
    case "Omar":
        alert( nom+" tu es eleve");
        break;
        default:
        alert( nom +" tu est eleve et tu a " + age + "ans" );
    }
