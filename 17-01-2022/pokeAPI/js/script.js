function affichepokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=21'
    $.get(url, traiteapidatas)
    console.log('fin de affiche pokemon')
    const total = apidatas.count


}
function traiteapidatas(apidatas) {
    const total = apidatas.count
    const pokemon = apidatas.results

    html = '';
    const section = document.querySelector('section#pokemons');
    for (let i = 0; i < pokemon.length; i++) {
        const pokemons = pokemon[i];
        html += '<article>';
        html += '<header>' + $(pokemons.name) + '</header>';
        html += '<content>' + $(pokemons.url) + '</content>';
        html += '</article>';
    }
    section.innerHTML=html;


}
affichepokemons();