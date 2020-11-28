async function dRetrieval(){
    const database = 'data.json';
    const response = await fetch(database);
    const data = await response.json();

    return data;
}

const apiKey = "2c1f532b5ae9cd29e9cd937bcc1861b7";

async function tmdb_keywordSearch(searchType, keyword){    
    let movieUrl = "https://api.themoviedb.org/3/search/" + searchType + "?api_key=" + apiKey;
    
    movieUrl += "&query=" + keyword;
    
    let res = await fetch(movieUrl);
    let dat = await res.json();

    return dat;
}

async function tmdb_searchByID(searchType, tmdb_ID){    
    let movieUrl = "https://api.themoviedb.org/3/" + searchType + "/" + tmdb_ID + "?api_key=" + apiKey;
    
    
    let res = await fetch(movieUrl);
    let dat = await res.json();

    return dat;
}

function parseDateString(dateString){
    let resDateString = dateString
    let resYearString = resDateString.slice(0,4);

    return parseInt(resYearString, 10);
}
    
async function tDataAmmend(database){
    for(let d = 5000; d < 5500; d++){
        dat = await tmdb_keywordSearch("movie", database[d].entity);
        
        let resLength = dat.results.length;        
        
        if(resLength){
            for(let r = 0; r < resLength; r++){
                if(dat.results[r].hasOwnProperty('release_date')){
                    let resYearNum = parseDateString(dat.results[r].release_date);

                    if(database[d].year === resYearNum){
                        database[d].tid = dat.results[r].id;
                        database[d].movie = dat.results[r].title;
                        
                        let dat2 = await tmdb_searchByID("movie", dat.results[r].id);

                        database[d].imdbLink = "https://www.imdb.com/title/" + dat2.imdb_id;
                    }                        
                }
            }
        }

        else{
            database[d] = await personSearch(database[d]);
        }
    }
    
    return database;
}   

async function personSearch(database){

    dat = await tmdb_keywordSearch("person", database.entity);

    if(dat.results.length){
        for(let r = 0; r < dat.results.length; r++){
            
            for(let k = 0; k < dat.results[r].known_for.length; k++){
                
                if(dat.results[r].known_for[k].hasOwnProperty('release_date')){
                    let resYearNum = parseDateString(dat.results[r].known_for[k].release_date);                    

                    if(database.year === resYearNum){
                        database.tid = dat.results[r].known_for[k].id;
                        
                        let dat2 = await tmdb_searchByID("movie", database.tid);
                        
                        database.imdbLink = "https://www.imdb.com/title/" + dat2.imdb_id;
                        database.movie = dat2.title;
                        
                        return database;
                    }
                }
            }                 
        }
    }  
    
    return database;
}

async function testThisShit(){
    let data = await dRetrieval();

    let ammend = await tDataAmmend(data);
    
    return ammend;
} 

testThisShit().then(data => console.log(data));
