const database = 'testDataJson.json';

async function categorySearch(searchKey){
    const response = await fetch(database);
    const data = await response.json();

    for(let i = 0; i < data.length; i++){
        if(data[i].category === searchKey)
            console.log(data[i].category + ' ' + data[i].entity + ' ' + data[i].winner + ' ' + data[i].year);
    }
}

categorySearch("ENGINEERING EFFECTS");