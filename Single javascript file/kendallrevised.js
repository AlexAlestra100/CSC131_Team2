async function importingJson(){
    const database = './data.json';
    const response = await fetch(database);
    const data = await response.json();
    return data;
 } 
 
 async function combinedSearch(inputJSON) {
    let result = await importingJson();

    if(inputJSON.winlose) result = winnerSearch(result, inputJSON.winlose);
    if(inputJSON.year) result = yearSearch(result, inputJSON.year);
    if(inputJSON.category) result = categorySearch(result, inputJSON.category);
    if(inputJSON.entity) result = entitySearch(result, inputJSON.entity);

    return result;
 }
 
function winnerSearch(oscarsData, searchKey){
    let searchResult =[];

    for(let i = 0; i < oscarsData.length; i++){
        if(oscarsData[i].winner == searchKey){ 
            searchResult.push(oscarsData[i]);         
        }
    }
    return searchResult;
}

function yearSearch(oscarsData,  searchKey){
    let searchResult =[];

    for(let i = 0; i < oscarsData.length; i++){
        if(oscarsData[i].year == searchKey){ 
            searchResult.push(oscarsData[i]);         
        }
    }
    return searchResult;
}

function categorySearch(oscarsData,  searchKey){
    let searchResult =[];

    for(let i = 0; i < oscarsData.length; i++){
        if(oscarsData[i].category == searchKey){ 

            searchResult.push(oscarsData[i]);         
        }
    }
    return searchResult;
}

function entitySearch(oscarsData,  searchKey){
    let searchResult =[];

    for(let i = 0; i < oscarsData.length; i++){
        if(oscarsData[i].entity == searchKey){ 

            searchResult.push(oscarsData[i]);         
        }
    }
    return searchResult;
}
