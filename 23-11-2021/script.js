//const username = prompt("Quel est votre nom ?" , "bel.le inconnu.e");

//const elementH1 = document.querySelector('H1');
//const greeting = elementH1.innerHTML; // -> "Bonjour"

//const result = greeting + " " + username ; // -> "Bonjour bel.le inconnu.e"

//elementH1.innerHTML = result


//v2
//const username_V2 = prompt("Quel est votre nom ?" , "Omar");
//const elementH1_V2 = document.querySelector('h1');
// On simplifie la syntaxe ppour la V2 :
// on se sert de l'équivalence de notation :
// x = x "test"  --->    x+= "test"

 //elementH1_V2.innerHTML+= " " +username_V2;

 const ul = document.querySelector('ul#numero');
 const limit = parseInt(prompt ("Jusqu'a combien on compte ? " , "10 "));

for(let i =0; i< limit + 1 ; i++){
    ul.innerHTML += "<li>" + i + "</li>"
}


















