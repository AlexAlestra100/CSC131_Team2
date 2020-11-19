   const url = './testDataJson.json';

    const response = await fetch(url);
    const oscarsData = await response.json();
    
    return oscarsData;
}

function Search (Arr, year,winner,entity) {
    
    let ret = [];

    
    for(var i=  0;i<Arr.length;i++){//for loop dosent match logic
        
    if(Arr[i].year === year && year == !null){
        ret.push(Arr[i])
    }
    
    
    if(Arr[i].winner === winner && winner == !null){
        ret.push(Arr[i]);
    } 
    
    if(Arr[i].entity === entity && entity == !null  ) 
    
    {ret.push(Arr[i])};
    }
            

    return ret;
    

}

//Waits for the async getOscarsData() to complete before searching and then logging to the console.
getOscarsData().then(data => console.log(Search(data, 1999,true,"Kevin Spacey")));
