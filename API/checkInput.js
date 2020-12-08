function validate(queryOBJ) {
    if(queryOBJ.hasOwnProperty('year'))             queryOBJ.year           = yearValidate(queryOBJ.year); 
    if(queryOBJ.hasOwnProperty('winner'))           queryOBJ.winner         = winnerValidate(queryOBJ.winner);
    if(queryOBJ.hasOwnProperty('category'))         queryOBJ.category       = checkArr(queryOBJ.category);
    if(queryOBJ.hasOwnProperty('general_cat'))      queryOBJ.general_cat    = checkArr(queryOBJ.general_cat);
    if(queryOBJ.hasOwnProperty('entity'))           queryOBJ.entity         = checkArr(queryOBJ.entity);

    if(Object.values(queryOBJ).includes(undefined)) return null;
    
    else return queryOBJ;
}

function yearValidate(yearKey) {
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
    if (winnerKey < 0 || winnerKey > 1) return null;

    return winnerKey == 1; 
}

function checkArr(key){
    if(Array.isArray(key)) return key;
    
    else return null;
}

module.exports = validate;