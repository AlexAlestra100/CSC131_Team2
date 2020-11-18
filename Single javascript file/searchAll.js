async function Data(){  // pretty much kendall's code
    const obj = './refrence.json'

    const response = await fetch(obj);
    const oscarsData = await response.json();

    return oscarsData;
}
var category = document.getElementById('category').value;

var entity = document.getElementById('entity').value;

var winner = document.getElementById('winner').value;

var year = document.getElementById('year').value;

const button = document.getElementById('search');
  
// button.addEventListener('click', Data().then(data =>console.log(SearchAll(data, category , entity, winner , year))));

 function SearchAll(Arr, category, entity, winner, year){
    
  // let data =  Data();

    let ret = [];
    

    for(let i = 0; i < Arr.length; i++)
   {
        if(Arr[i].category === category  && Arr[i].year == year && Arr[i].entity == entity && Arr[i].winner == winner)
        {
        ret.push(Arr[i]);
        
        }
        
    }

    
    return ret;
}

// just testing purposes 
// function Do(){

 Data().then(data =>console.log(SearchAll(data, 'ACTOR' , 'Richard Barthelmess', false , 1927)));
// }
//////////////////////////////////////////////////
//// CATEGORY SEARCH FUNCTION ///////////////

// async function categorySearch(Arr, category){
//     // const database = 'testDataJson.json';
//     // const response = await fetch(database);
//     // const data = await response.json();
//      let ret =[];


//     //used for testing function logic
//     //let resultCounter = 0;

//     for(let i = 0; i < data.length; i++){
//         if(data[i].category === searchKey){


//             //adds in the results from the database to object in the array
//             searchResult.push(data[i]);
            
//             //loging search results to check
//             //console.log(searchResult[resultCounter].category + ' ' + searchResult[resultCounter].entity + ' ' + searchResult[resultCounter].winner + ' ' + searchResult[resultCounter].year);

//             //used for testing function logic
//             //resultCounter++;


//             //logging database for checking
//             //console.log(data[i].category + ' ' + data[i].entity + ' ' + data[i].winner + ' ' + data[i].year);
        
//         }
//     }
//     return searchResult;
// }


// //////////////////////////////////////////
// // SEARCH TITLE FUNCTION ////////////////

// let DATA = [];

// window.addEventListener('load', () => {
//     fetch("data.json")
//         .then(res => {
//             return res.json()
//         })
//         .then(Res => {
//             DATA = (Res)
//             SearchByName(title)

//         })
//         .catch(err => {
//             console.log('cant fetch the JSON');
//         })
// })
// let title = window.prompt("Enter Title Name");

// let SearchByName = async(name) => {
//     let FilteredData = DATA.filter(a => a.entity == name ? a : null)

//     FilteredData.forEach(data => {
//         console.log('Entity: ' + data.entity + " Year: " + data.year + " Category: " + data.category, " Winner " + data.winner);
//     })
// }

// ///////////////////////////////////////////
// //// SEARCH WINNER FUNCTION

// async function winnerSearch(searchKey){
//     const database = 'testDataJson.json';
//     const response = await fetch(database);
//     const data = await response.json();
//     let searchResult =[];

//     //used for testing function logic
//     let resultCounter = 0;

//     for(let i = 0; i < data.length; i++){
//         if(data[i].winner == searchKey){

//             //test if it works
//             console.log(data[i].category + ' ' + data[i].entity + ' ' + data[i].winner + ' ' + data[i].year);
//             //adds in the results from the database to object in the array
//             searchResult.push(data[i]);
            
//             //loging search results to check
//             console.log( searchResult[resultCounter].winner );

//             //used for testing function logic
//             resultCounter++;


//             //logging database for checking
//             //console.log(data[i].category + ' ' + data[i].entity + ' ' + data[i].winner + ' ' + data[i].year);
        
//         }
//     }
//     return searchResult;
// }