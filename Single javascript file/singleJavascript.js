//Importing the json up here
//THIS GLOBAL FUNCTION DOSENT WORK!!!!!
async function importingJson(){
   const database = 'testDataJson.json';
   const response = await fetch(database);
   const data = await response.json();
   return data;//returning json obj
} 


//win function,accepts bool true or false
 async function winnerSearch(searchKey){
   
   const data = importingJson();// data set to json //DOSENT WORK
    let searchResult =[];

    //used for testing function logic
    let resultCounter = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].winner == searchKey){ //searchkey = true in html file

            searchResult.push(data[i]);
            
            
            //NOT OUTPUTING ANYTHING
            console.log(data[i].winner + "+" + data[i].catagory);
            resultCounter++;
            console.log(resultCounter);
        
        }
    }
    return searchResult;
}
/*
//categorysearch
async function categorySearch(searchKey){
    const database = 'testDataJson.json';
    const response = await fetch(database);
    const data = await response.json();
    let searchResult =[];

    //used for testing function logic
    //let resultCounter = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].category === searchKey){


            //adds in the results from the database to object in the array
            searchResult.push(data[i]);
            
            
        
        }
    }
    return searchResult;
}
//reworked name functoin
async function nameSearch(searchKey){
   // const database = 'testDataJson.json';
   // const response = await fetch(database);
   // const data = await response.json();
    let searchResult =[];

    //used for testing function logic
    //let resultCounter = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].name === searchKey){


            //adds in the results from the database to object in the array
            searchResult.push(data[i]);
            
           
        
        }
    }
    return searchResult;
}
//name, also lets you search
let DATA = [];

window.addEventListener('load', () => {
    fetch("data.json")
        .then(res => {
            return res.json()
        })
        .then(Res => {
            DATA = (Res)
            SearchByName(title)

        })
        .catch(err => {
            console.log('cant fetch the JSON');
        })
})
let title = window.prompt("Enter Title Name");

let SearchByName = async(name) => {
    let FilteredData = DATA.filter(a => a.entity == name ? a : null)

    FilteredData.forEach(data => {
        console.log('Entity: ' + data.entity + " Year: " + data.year + " Category: " + data.category, " Winner " + data.winner);
    })
}
const obj = JSON.parse(JSON.stringify('refrence.json'));



// copy data from object to another object
const obj2 = [{}]; // empty object that will store search results of object

//Year function, needs fixed input
var inYear = window.prompt('Input year');
var numOfMovies = 0;

async function searchYear(){
    const response = await fetch(obj);
    const data = await response.json();
    const {year} = data;//maybe dont need this
    //document.getElementById("A").textContent = year;
    
    document.write('Year : ' + inYear);
    for (let i= 0; i < data.length; i++)
     {
    //console.log(data[i].year);
    
    if(inYear == data[i].year)
    {
        Object.assign(obj2, data[i])
      
       numOfMovies++;       // increments each time search for year is found
       // document.write(' Category:   ' + data[i].category + ' Entity:   ' + data[i].entity + ' Year:   ' + data[i].year);
       //document.write("<br><br>");
       // console.log(data[i].year);

        console.log(obj2);
        document.write("<br><br>");
        document.write ('category: ' + obj2.category + ' entity: ' + obj2.entity + ' winner: ' + obj2.winner + ' year: ' + obj2.year);
       
    }
    
}
console.log("/n");
document.write(" Number of Movies nominated in the year " + inYear + " is " + numOfMovies);

}

searchYear();

*/