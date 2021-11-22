var a = 10;
var b = 20;


// conditions TERNAIRE
/**
 * la condition ternaire s'ecrit sur un ligne 
 * et elle alimente la variable par le resultat
 */
 var c = (a ==b) ? "a = b " : "a est different de b";

//equivalent avec la confition IP
var c ;
if ( a==b ) {
    c = "a=b";

} else{
    c= "a est different de b";
}

// multiple condition à éviter 
var c = (a == b) ? "a = b" : ((a==10) ? "a=10" : "a different de 10") ;



