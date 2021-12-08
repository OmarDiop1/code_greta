function select(name, tab, selecteur) {
    var d = '<select name="' + name + '">';
    for (i = 0; i < tab.length; i++) {
        d += '<option>' + tab[i] + '</option>';
    }
    d += '</select>';
    document.querySelector(selecteur).innerHTML = d;
}


function exo1(a, b){
    let c = a + b ;
    return c; 
}



function liste (liste , listes){
    var l = '<ul>';
    for(i = 0; i< liste.length; i++) {
        l += '<li>' + liste[i] + '</li>';
    
    }
    l += '</ul>' ; 
    document.querySelector(listes).innerHTML = l ; 

}

function color(couleur){

    document.querySelector('body').style.backgroundColor = couleur ; 
}