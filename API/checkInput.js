function validate(queryOBJ) { //Checks if queryOBJ contains arrays within obj
    
     // var i is set to one to skip first obj in queryOBJ (winner)
        if (queryOBJ.entity.isArray) {
            
            return true;
        
    }

    var nstart  = queryOBJ.year;
    if(queryOBJ.year < 1927 )
    {
        nstart = 1927;
    }
    else if(queryOBJ.year > 2017  )
    {
        nend = 2017;
    }

    for(var i = queryOBJ.year; i <= nend; i++)
    {
        years.push(i);
    }
}

module.exports = validate;
//1 + parseInt(req.query.w);