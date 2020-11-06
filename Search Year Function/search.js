const obj = JSON.parse(JSON.stringify('refrence.json'));

// copy data from object to another object
const obj2 ={} // empty object that will store search results of object


var inYear = window.prompt('Input year');
var numOfMovies = 0;

async function searchData(){
    const response = await fetch(obj);
    const data = await response.json();
    const {year} = data;
    //document.getElementById("A").textContent = year;
    
    document.write('Year : ' + inYear);
    for (let i= 0; i < data.length; i++)
     {
    //console.log(data[i].year);
    
    if(inYear == data[i].year)
    {
       numOfMovies++;       // increments each time search for year is found
         
        document.write(' Category:   ' + data[i].category + ' Entity:   ' + data[i].entity + ' Year:   ' + data[i].year);
       document.write("<br><br>");
        console.log(data[i].year);
        
    }
    
}

document.write(" Number of Movies nominated in the year" + inYear + " is " + numOfMovies);

}

searchData();

