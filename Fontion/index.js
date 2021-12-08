//Exo 4
//crée un variable produits avec dedans un tableau titre et  prix
//crée une fonction qui permet lister produits dans un tableau HTML
//crée bouton un bouton ajouter panier alimenter une balise div

const produitsOnline = [
  ["https://picsum.photos/500/300", "Avion", 2500],
  ["https://picsum.photos/500/301", "Voiture", 500],
  ["https://picsum.photos/500/302", "Maison", 1000],
  ["https://picsum.photos/500/303", "Bateau", 1500],
];

function produits(tab) {
  let tableau = "";
  for (let i = 0; i < tab.length; i++) {
    tableau += `<tr>`;
    tableau += `<td><img src="${tab[i][0]}" alt=""></td>`;
    tableau += `</tr>`;
    tableau += `<tr>`;
    tableau += `<td>${tab[i][1]}</td>`;
    tableau += `</tr>`;
    tableau += `<tr>`;
    tableau += `<td>${tab[i][2]}€</td>`;
    tableau += `</tr>`;
    tableau += `<tr>`;
    tableau += `<td><button onclick="ajoutProduits(${i})">Ajouter au Panier</button></td>`;
    tableau += `</tr>`;
  }
  document.querySelector(".table").innerHTML += tableau;
}
produits(produitsOnline);
let total = 0;
function ajoutProduits(chiffre) {
  total += produitsOnline[chiffre][2];
  let tableau = "";
  tableau += `<div class="margin">`;
  tableau += `<img style="width: 50px;" src="${produitsOnline[chiffre][0]}" alt="">`;
  tableau += `<div>${produitsOnline[chiffre][1]}</div>`;
  tableau += `<div>${produitsOnline[chiffre][2]}</div>`;
  tableau += `</div>`;
  document.querySelector(".ajoutPrix").innerHTML += tableau;
  document.querySelector(".totalPrix").innerHTML = `Total = ${total}€`;
}