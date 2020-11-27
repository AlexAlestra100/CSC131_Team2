const obj = JSON.parse(JSON.stringify('refrence.json'));

// copy data from object to another object
const obj2 = [{}]; // empty object that will store search results of object


var inYear = window.prompt('Input year');
var numOfMovies = 0;

async function searchYear(){
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

