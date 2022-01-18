const banque = [
    { "operation": "KebabSansTomate", "montant": "7.50", "date": "12/12" },
    { "operation": "Japon", "montant": "750", "date": "21/12" },
    { "operation": "Spaghetti", "montant": "8", "date": "23/12" },
    { "operation": "Clavier", "montant": "20", "date": "26/12" },
    { "operation": "Manette", "montant": "50", "date": "28/12" },
    { "operation": "Jogging", "montant": "75", "date": "31/12" },
]


const livretA = [


    { "operation": "virementMaman", "montant": "150", "date": "01/08" },
    { "operation": "virementPapa", "montant": "100", "date": "03/08" },
    { "operation": "CliniquePrivée", "montant": "1300", "date": "15/08" },
    { "operation": "compteCourant", "montant": "2050", "date": "17/08" },
    { "operation": "omar", "montant": "550", "date": "19/08" },
]

const tirelireCochon= [


    { "operation": "grenouille", "montant": "0.50", "date": "07/08" },
    { "operation": "grenouille", "montant": "1.50", "date": "08/08" },
    { "operation": "grenouille", "montant": "3.50", "date": "09/08" },

]



function compte(table,selecteur) {
    let compteepargne = "";
    compteepargne += '<table border = 1>';
    for (i = 0; i < table.length; i++) {
        let first = table[i]
        compteepargne += '<tr>';
        compteepargne += '<td>' + first["operation"] + '</td>';
        compteepargne += '<td>' + first["montant"] + '</td>';
        compteepargne += '<td>' + first["date"] + '</td>';
        compteepargne += '</tr>';

    }
    compteepargne += '</table>';
    compteepargne += '<br>' ;
    
    document.querySelector(selecteur).innerHTML += compteepargne;


}

function resultat (table,selecteur){
    let total = 10 ;
    for(i=0 ; i<table.length ; i++){
        total -= table[i]["montant"] ;
    }
    return document.querySelector(selecteur).innerHTML = total;
}
resultat(banque,'.totalMontant');
resultat(livretA,'.totalMontant1');
resultat(tirelireCochon,'.totalMontant2');

compte(banque,'.compteCourant');
compte(livretA,'.livretA');
compte(tirelireCochon,'.tirelireCochon');







