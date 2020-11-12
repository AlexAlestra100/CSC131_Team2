async function apiRequest(titleSearch){
    const apiKey = "903ccd22";
    let url = "http://www.omdbapi.com/?apikey=" + apiKey;


    //Use Paramaters section in this website for reference: http://www.omdbapi.com/

    
    //SEARCH BY SEARCH

    //adding in title to url using search by title in api
    url += "&s=" + titleSearch;

    let response = await fetch(url);
    let data = await response.json();

    //log json with multiple movies with signs in the title
    console.log(data);


    //SEARCH BY ID OR TITLE

    //adding in title to url for using search by id in api
    url ="http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + titleSearch;
 

    response = await fetch(url);
    data = await response.json();

    //log json with single movie with signs in the title
    console.log(data);


}

apiRequest("signs");