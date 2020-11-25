function combinedSearch(inputJSON) {
    let result =  require("./data.json");

    if( parseWinnerKeyData(inputJSON))                          result = search(result, "winner", inputJSON.winner);
    if( inputJSON.category)                                     result = rangeSearch(result, "category", inputJSON.category);
    if( inputJSON.entity)                                       result = rangeSearch(result, "entity", inputJSON.entity);
    if( inputJSON.year)                                         result = rangeSearch(result, "year", inputJSON.year);

    return result;
}

function search(oscarsData, searchKey, query) {
    let searchResult = [];

    oscarsData.forEach(element => {
        if(element[searchKey] == query) searchResult.push(element);
    });

    return searchResult;
}

function rangeSearch(oscarsData, searchKey, query){
    let result = [];
    
    query.forEach(element => {
        result = result.concat(search(oscarsData, searchKey, element));
    });

    return result;
}

//Winner key in input JSON is base 3 value
//case 0 - Don't do a search
//case 1 - Do a search for true
//case 2 - Do a search for false
//return false otherwise
function parseWinnerKeyData(inputJSON) {    
    switch (inputJSON.winner)
    {
        case 0: return false;

        case 1: return inputJSON.winner = true;

        case 2: 
        {
            inputJSON.winner = false;

            return true;
        }

        default: return false;
    }
}
