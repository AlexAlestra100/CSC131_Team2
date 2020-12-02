function singleton(singleSearch){
    const omdbKey = '903ccd22';
    const tmdbKey = '2c1f532b5ae9cd29e9cd937bcc1861b7';
    let fetch = require('node-fetch');

    let omdbUrl = "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + singleSearch.movie;
    let tmdbUrl = 'https://api.themoviedb.org/3/movie/' + singleSearch.tid + '?api_key=' + tmdbKey;

    //Fetching Ratings, plot synopsis, and other info
    fetch(omdbUrl)
    .then(res => res.json())
    .then(json =>
        {
            //check if OMDB call doesn't have error/if call limit is reached
            if(json.hasOwnProperty('Error')){
                fetch(tmdbUrl)
                .then(res => res.json())
                .then(json => {

                    singleSearch.popularity = json.popularity;
                    singleSearch.plot = json.overview;
                    singleSearch.time = json.runtime;
                })
            }
            else{
            singleSearch.ratings = json.Ratings;
            singleSearch.plot = json.Plot;
            singleSearch.time = json.Runtime;
            singleSearch.director = json.Director;
            singleSearch.cast = json.Actors;
            


            }
        });
    //fetch watch providers
    tmdbUrl = 'https://api.themoviedb.org/3/movie/' + singleSearch.tid + '/watch/providers?api_key=' + tmdbKey;
    fetch(tmdbUrl)
    .then(res => res.json())
    .then(json => {
        if(!json.results.hasOwnProperty('US')){
            singleSearch.watchProvider = "No Watch Providers Available";
        }
        else{
            singleSearch.watchProvider = json.results.US.link;
            }
        
    })
    
    
}


let testObj = {"movie": "The Patent Leather Kid", "tid": 68718}

let test = singleton(testObj);
console.log(test);