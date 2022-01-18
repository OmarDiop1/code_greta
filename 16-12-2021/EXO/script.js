const navbar = ["Produits", "Panier", "Service", "Contact", "Connexion", "Inscription"]

function menu(table, selecteur) {
    let bar = "";
    bar += '<table>'
    for (i = 0; i < table.length; i++) {
        bar += '<div>' + table[i] + '</div>';

    }
    bar += '</table>';
    document.querySelector(selecteur).innerHTML += bar;
}
menu(navbar, '.menu');


const produits = [
    { "Nom": "Apple", "Photo": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000", "Prix": "350" },
    { "Nom": "Huawei", "Photo": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000", "Prix": "350" },
    { "Nom": "Samsung", "Photo": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000", "Prix": "350" },
    { "Nom": "Xiaomi", "Photo": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000", "Prix": "350" },
  
]

function telephone(table, selecteur) {
    let tel = "";

    for (i = 0; i < table.length; i++) {
        let phone = table[i];

        tel += '<div>' + '<img src = "' + phone["Photo"] + '">'+ '<br>' + phone["Nom"] + '<br>' + phone["Prix"] + '</div>';
        tel+= `<div><button onclick="resultat(produits ,'.panier',${i})">Ajout</button></div>`
    }

    document.querySelector(selecteur).innerHTML += tel;

}
telephone(produits, '.produits');

let ajout="";
function resultat (table,selecteur,i){
    ajout += `<div><img src="${table[i].Photo}">${table[i].Nom} ${table[i]["Prix"]}</div>`
    return document.querySelector(selecteur).innerHTML = ajout;
}

function bloc() 
  {

    let btn = document.querySelector(".btn").innerHTML;
    if(btn=="Afficher")
    {
    document.querySelector(".fenetre").style.display= "block";
    document.querySelector(".btn").innerHTML="Cacher";
    }
    else
    {

    document.querySelector(".fenetre").style.display= "none";
    document.querySelector(".btn").innerHTML="Afficher"; 
    }

  }




