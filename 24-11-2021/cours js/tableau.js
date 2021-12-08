//const ul = document.querySelector('ul#numero');
//const limit = parseInt(prompt ("Jusqu'a combien on compte ? " , "10 "));

//for(let i =0; i< limit + 1 ; i++){
  // ul.innerHTML += "<li>" + i + "</li>"
//}


const ul = document.querySelector('ul#numero');
const eleves = ["OMAR","Omar","Diallo"];

for(let i =0; i< eleves.length ;i++){
  
  ul.innerHTML += "<li>" + eleves[i] + "</li>"    

}


