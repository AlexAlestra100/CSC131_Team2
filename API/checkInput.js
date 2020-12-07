function validate(queryOBJ) { //Checks if queryOBJ contains arrays within obj
    queryOBJ.year       = yearValidate(queryOBJ.year); 
    queryOBJ.winner     = winnerValidate(queryOBJ.winner);
    
    return queryOBJ;
}

function yearValidate(yearKey) {
    // var i is set to one to skip first obj in queryOBJ (winner)
    if(!Array.isArray(yearKey)) return null;

    let yrArrLen = yearKey.length;

    if(yrArrLen > 2) return null;
    
    yearKey = Array.from(yearKey, element => parseInt(element));

    const endYr = yearKey[yrArrLen - 1];

    yrArrLen = Math.abs(endYr - yearKey[0]);

    yrArr = [];

    for(let i = 0; i < yrArrLen; i++) yrArr.push(yearKey[0] + i);

    yrArr.push(endYr);

    return yrArr;
}

function winnerValidate(winnerKey){
    winnerKey = 1 + parseInt(winnerKey);
    
   
    if (winnerKey < 1 || winnerKey > 2){
        return null;
    }
    else {
        return winnerKey; //this is now an int
    }
}

module.exports = validate;