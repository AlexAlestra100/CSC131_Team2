async function apiRequest(searchResults){
    const apiKey = "903ccd22";

    for(let i = 0; i < searchResults.length; i++){

    let url ="http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + searchResults[i].entity;
 

    let response = await fetch(url);
    let data = await response.json();

    if(data.Response === "False"){
        console.log('No movie title given');
    }
    else{
        searchResults[i].imdbLink = 'https://www.imdb.com/title/' + data.imdbID;
        searchResults[i].director = data.Director;
        searchResults[i].rating = data.Ratings;
        searchResults[i].plot = data.Plot;
        searchResults[i].time = data.Runtime;

    }


    }

    return searchResults;

}

