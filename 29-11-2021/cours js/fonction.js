function nomdeLafonction(){
    //code a executer
}
// je declare la fonction bonjour 


function bonjour () {
    alert('bonjour');
}

//j'execute la function bonjour ()
bonjour();

/** je declare la fonction hello() avec pour parametre "nom" */
function hello(nom) ;{
    alert('bonjour' + nom);
}

// j'execute la fonction hello ("Esat" ); et hello ("Diallo");

function addition(a,b){
    var c = a + b ;
    alert(c);
} 

addition(10,20);
addition(5,5);

function select (name , tab , selecteur ) {
    var select = '<select name="' + name + '">';
    for (i = 0; i < tab.length; i++) {
        select += '<option>' + tab[i] + '</option>';

    }
    select += '</select>';
    document.querySelector (selecteur).innerHTML = select;
}


