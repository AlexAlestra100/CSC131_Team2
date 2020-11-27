
async function dRetrieval(){
const database = 'oscar.json';
const response = await fetch(database);
const data = await response.json();

tDataAmmend(data);
}

async function tDataAmmend(database){
    const apiKey = "2c1f532b5ae9cd29e9cd937bcc1861b7";
    

    for(let d = 0; d < database.length; d++){

        let movieUrl = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey;

        movieUrl += "&query=" + database[d].entity;

        let res = await fetch(movieUrl);
        let dat = await res.json();
        
        let resLength = dat.results.length;

        if (dat.results.length !== 0){
        for(let r = 0; r < resLength; r++){
            if(dat.results[r].hasOwnProperty('release_date')){
            let resDateString = dat.results[r].release_date
            let resYearString = resDateString.slice(0,4);
            

            let resYearNum = parseInt(resYearString, 10);
            

            if(database[d].year === resYearNum){
                database[d].tid = dat.results[r].id;
                
                movieUrl = "https://api.themoviedb.org/3/movie/" + dat.results[r].id + "?api_key=" + apiKey;
            
                res = await fetch(movieUrl);
                dat = await res.json();

                database[d].imdbLink = "https://www.imdb.com/title/" + dat.id;
                database[d].movie = dat.title;
                
            }
            
        } 
        
        }
        let pd = personSearch(database[d]);
        database[d].tid = pd.tid;
        database[d].imdbLink = pd.imdbLink;
        database[d].imdbLink = pd.imdbLink;

    }
    else{
        let pd = personSearch(database[d]);
        
        database[d].tid = pd.tid;
        database[d].movie = pd.movie;
        database[d].imdbLink = pd.imdbLink;
    }

}
    console.log(database);
    console.log('done');

}

async function personSearch(database){
    const apiKey = "2c1f532b5ae9cd29e9cd937bcc1861b7";
    
    let movieUrl = "https://api.themoviedb.org/3/search/person?api_key=" + apiKey;
    
    movieUrl += "&query=" + database.entity;
    
    let res = await fetch(movieUrl);
    let dat = await res.json();

    if(dat.results !== null){
        for(let r = 0; r < dat.results.length; r++){
            if(dat.results[r].known_for !== null){
            for(let k = 0; k < dat.results[r].known_for.length; k++){
                if(dat.results[r].known_for[k].hasOwnProperty('release_date')){
                let resDateString = dat.results[r].known_for[k].release_date
                let resYearString = resDateString.slice(0,4);
                let resYearNum = parseInt(resYearString, 10);
                

                if(dat.year === resYearNum){
                    database.tid = dat.results[r].known_for[k].id;
                    
                    movieUrl = "https://api.themoviedb.org/3/movie/" + dat.results[r].known_for[k].id + "?api_key=" + apiKey;

                    res = await fetch(movieUrl);
                    dat = await res.json();
                    
                    database.imdbLink = "https://www.imdb.com/title/" + dat.id;
                    database.movie = dat.title;
                    return database;
                }
                else{
                    database.movie = 0;
                    return database;
                }
            }
            }
            
        }else{database.movie = 0; return database;}
        
    }
    }
    else{
        database.movie = 0;
        return database;
    }

    

}

dRetrieval();

