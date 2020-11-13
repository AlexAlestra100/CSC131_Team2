async function winnerSearch(searchKey){
    const database = 'testDataJson.json';
    const response = await fetch(database);
    const data = await response.json();
    let searchResult =[];

    //used for testing function logic
    let resultCounter = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].winner == searchKey){

            //test if it works
            console.log(data[i].category + ' ' + data[i].entity + ' ' + data[i].winner + ' ' + data[i].year);
            //adds in the results from the database to object in the array
            searchResult.push(data[i]);
            
            //loging search results to check
            console.log( searchResult[resultCounter].winner );

            //used for testing function logic
            resultCounter++;


            //logging database for checking
            //console.log(data[i].category + ' ' + data[i].entity + ' ' + data[i].winner + ' ' + data[i].year);
        
        }
    }
    return searchResult;
}