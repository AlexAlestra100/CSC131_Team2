
async function categorySearch(searchKey){
    const database = 'testDataJson.json';
    const response = await fetch(database);
    const data = await response.json();
    let searchResult =[];
    let resultCounter = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].category === searchKey){

            //set current point in array as an object
            searchResult[resultCounter] = {};

            //adds in the results from the database to object in the array
            searchResult[resultCounter].category = data[i].category;
            searchResult[resultCounter].entity = data[i].entity;
            searchResult[resultCounter].winner = data[i].winner;
            searchResult[resultCounter].year = data[i].year;
            
            //loging search results to check
            //console.log(searchResult[resultCounter].category + ' ' + searchResult[resultCounter].entity + ' ' + searchResult[resultCounter].winner + ' ' + searchResult[resultCounter].year);

            resultCounter++;
            //logging database for checking
            //console.log(data[i].category + ' ' + data[i].entity + ' ' + data[i].winner + ' ' + data[i].year);
        
        }
    }
    return searchResult;
}

categorySearch("ACTOR");