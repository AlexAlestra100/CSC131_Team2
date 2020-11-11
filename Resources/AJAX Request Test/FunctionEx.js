async function getOscarsData() {    
    const url = './data.json';

    const response = await fetch(url);
    const oscarsData = await response.json();
    
    return oscarsData;
}

function Search (Arr, year) {
    
    let ret = [];

    for(let i = 0; i < Arr.length; i++)

        if(Arr[i].year === year) ret.push(Arr[i]);

    return ret;
}

getOscarsData().then(data => console.log(Search(data, 1999)));
