// git Refactor : motCle -> keyWord
function Search(keyWord, data){

    // Nouveau tableau enregistrant les lignes correspondantes au keyWord
    const searchResult = []

    // Algorithme de comparaison et enregistrement des lignes validés dans le tableau 
    // git Change : changement de la fonction dans la condition
    for (let index = 0; index < data.length; index++) {
        if (data[index].nom.includes(keyWord)) {
            searchResult.push(data[index])
        }

    }

    return searchResult
}

export default Search