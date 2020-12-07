function validate(queryOBJ) { //Checks if queryOBJ contains arrays within obj
    queryOBJ.year = yearValidate(queryOBJ.year); 
    
    return queryOBJ;
}

function yearValidate(yearKey) {
    // var i is set to one to skip first obj in queryOBJ (winner)
    if(!Array.isArray(yearKey)) return null;

    let yrArrLen = yearKey.length;

    if(yrArrLen > 2) return null;
    
    yearKey = Array.from(yearKey, element => parseInt)

    console.log(yearKey);
}

function winnerValidate(winnerKey){
    winnerKey =1+ parseInt(winnerKey);
    
   
    if (winnerKey <1 || winnerKey>2){
        return null;
    }
    else {
        return winnerKey; //this is now an int
    }
}
module.exports = validate;
//1 + parseInt(req.query.w);
