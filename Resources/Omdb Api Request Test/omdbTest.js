async function apiRequest(titleSearch){
    const apiKey = "903ccd22";
    let url = "http://www.omdbapi.com/?apikey=" + apiKey;
    
    if(titleSearch !== null){
        url += "&s=" + titleSearch;
    }

    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    if(titleSearch !== null){
        url ="http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + titleSearch;
    }

    response = await fetch(url);
    data = await response.json();

    console.log(data);


}

apiRequest("signs");