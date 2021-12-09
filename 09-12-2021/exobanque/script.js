function jour() {
    let jour = document.querySelector(".jour").value;
    return (jour);

}



function montant(){
    let moula = document.querySelector(".montant").value;
    return (moula)

}



function resultat() {
    let calcul = montant() * jour();
    document.querySelector(".resultat").innerHTML = + calcul;

}




