

async function getData()
{
    var api_URL = "localhost:3000/?ID=" + i_d;
    console.log(api_URL);
    
    //var uRl = "Data/Test.json";
    const response = await fetch(api_URL);
    const data = await response.json();
    console.log(data);
}