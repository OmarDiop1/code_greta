const studentsDWWM = [
    { "nom": "léponge", "prenom": "bob", "age": "5", "avatar": "https://i.pravatar.cc/100?u=léponge" },
    { "nom": "létoiledemer", "prenom": "patrick", "age": "25", "avatar": "https://i.pravatar.cc/100?u=létoiledemer" },
    { "nom": "z", "prenom": "dragonball", "age": "105", "avatar": "https://i.pravatar.cc/100?u=z" },
    { "nom": "son", "prenom": "gohan", "age": "12", "avatar": "https://i.pravatar.cc/100?u=han" },
    { "nom": "seagal", "prenom": "steven", "age": "?", "avatar": "https://www.stevensegallery.com/100/100" },
    { "nom": "émorti", "prenom": "rik", "age": "99", "avatar": "https://www.stevensegallery.com/100/100" },
]

function tab(eleves) {
    let tableau = "";
    tableau += '<table border = 1>';
    for (i = 0; i < eleves.length; i++) {
        let eleve = eleves[i]
        tableau += '<tr>'
        tableau += '<td>' + eleve["nom"] + '</td>';
        tableau += '<td>' + eleve["prenom"] + '</td>';
        tableau += '<td>' + eleve["age"] + '</td>';
        tableau += '<td>' + '<img src = "' + eleve["avatar"] + '">' + '</td>';
        tableau += '</tr>';

    }
    tableau += '</table>';
    document.querySelector('.tableau').innerHTML += tableau;

}
tab(studentsDWWM);






/**
 * Génère une ligne "tr"  d'un "table" html.
 * 
 * @param {{nom: string, prenom: string, age: string, avatar: string}} student - L'élève en cours 
 * @returns {string} - String qui contient le `<tr>` en html
 */
 function genTableRow(student) {
    let tr = '<tr>';
    tr += '<td>' + student['nom'] + '</td>';
    tr += '<td>' + student['prenom'] + '</td>';
    tr += '<td>' + student.age + '</td>';
    // <img src="https://picsum.photos/100/100/3" />
    tr += '<td><img src="' + student['avatar'] + '" /></td>';
    tr += '</tr>';
    return tr;
}

/**
 * Affiche les élèves sous forme de tableau HTML
 * 
 * @param {Array<{nom: string, prenom: string, age: string, avatar: string}>} students - Tableau d'élèves
 * @returns {void}
 */
function showStudentTable(students) {
    let table = ''
    for (let index = 0; index < students.length; index++) {
        const student = students[index];
        table += genTableRow(student);
    }
    document.querySelector('#students').innerHTML = table;
}
showStudentTable(studentsDWWM);