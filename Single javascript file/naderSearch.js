
 
  function combinedSearch(inputJSON) {
    let result =  require('./testDataJson.json');

    if(parseWinnerKeyData(inputJSON))                           result = search(result, "winner", inputJSON.winner);
    if(inputJSON.year > 1927 && inputJSON.year < 2017)          result = search(result, "year", inputJSON.year);
    if(inputJSON.category)                                      result = search(result, "category", inputJSON.category);
    if(inputJSON.entity)                                        result = search(result, "entity", inputJSON.entity);

    return result;
}

function search(oscarsData, searchKey, query) {
    let searchResult = [];    

    for(let i = 0; i < oscarsData.length; i++){
        if(oscarsData[i][searchKey] == query){ 
            searchResult.push(oscarsData[i]);         
        }
    }

    return searchResult;
}

//Winner key in input JSON is base 3 value
//case 0 - Don't do a search
//case 1 - Do a search for true
//case 2 - Do a search for false
//return false otherwise
function parseWinnerKeyData(inputJSON) {    
    switch (inputJSON.winner){
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

//test lines
let testInputJSON = {"winner" : 1};

console.log(combinedSearch(testInputJSON));