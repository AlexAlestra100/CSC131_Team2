async function importingJson(){
    const database = './data.json';
    const response = await fetch(database);
    const data = await response.json();
    return data;
} 
 
 async function combinedSearch(inputJSON) {
    let result = await importingJson();

    if(inputJSON.winner)                                        result = search(result, "winner", inputJSON.winner);
    if(inputJSON.year > 1927 && inputJSON.year < 2017)          result = search(result, "year", inputJSON.year);
    if(inputJSON.category)                                      result = search(result, "category", inputJSON.category);
    if(inputJSON.entity)                                        result = search(result, "entity", inputJSON.entity);

    return result;
}

function search(oscarsData, searchKey, query) {
    let searchResult =[];    

    for(let i = 0; i < oscarsData.length; i++){
        if(oscarsData[i][searchKey] == query){ 
            searchResult.push(oscarsData[i]);         
        }
    }

    return searchResult;
}
