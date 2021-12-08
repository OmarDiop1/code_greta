// Boucle sous forme de liste sans toucher au html (sans ul)
document.querySelector(".liste"). innerHTML += "<ul>";


for (i = 0; i<= 10; i++){
    document.querySelector(".liste").innerHTML += "<li>" + i + "</li>";

}

document.querySelector(".liste").innerHTML += "</ul>";



// boucle sur les enfants de li 

for(let i=0; i<=101 ; i++){

    document.querySelector(".liste2").innerHTML += "<li>" + i + "</li>" ;
}