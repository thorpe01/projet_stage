// git Refactor : motCle -> keyWord
function Search(keyWord, data){

    // Nouveau tableau enregistrant les lignes correspondantes au keyWord
    const searchResult = []

    // Algorithme de comparaison et enregistrement des lignes validés dans le tableau 
    for (let index = 0; index < data.length; index++) {
        if (keyWord.toUpperCase() === data[index].nom.toUpperCase()) {
            searchResult.push(data[index])
        }

    }

    return searchResult
}

export default Search