function Search(motCle, data){

    // Nouveau tableau enregistrant les lignes correspondantes au mot clé
    const searchResult = []

    // Algorithme de comparaison et enregistrement des lignes validés dans le tableau 
    for (let index = 0; index < data.length; index++) {
        if (motCle.toUpperCase() === data[index].nom.toUpperCase()) {
            console.log('validé')
            searchResult.push(data[index])
        }

    }

    return searchResult
}

export default Search