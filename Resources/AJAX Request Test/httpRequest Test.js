var httpRequest =  new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        var Arr = JSON.parse(this.responseText);
        console.log(Search(Arr, 1989));
    }
}
const url = './data.json';

httpRequest.open('GET', url);
httpRequest.send();



function Search (Arr, year) {
    
    let ret = [];

    for(let i = 0; i < Arr.length; i++){
        if(Arr[i].year == year) ret.push(Arr[i]);
    }

    return ret;
}