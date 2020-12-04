//Anytime there is a GET request to the root app
//It will print out the test code
//let validate    = require("./");
let search      = require("./database/oscarsData_search.js")

var appRouter = function(app){
    app.get("/",function(req,res){
        if(req.query.ID){ 
            let ID = req.query.ID;

            ID = {'ID' : parseInt(ID)};

            res.status(200).send(search(ID));
        }

        else
            res.status(200).send(req.query);
    });
    
    app.get('/search/',function(req,res){
      
        let queryOBJ = {};

        queryOBJ.winner             = 1 + parseInt(req.query.w);
        queryOBJ.year               = req.query.yr;     
        queryOBJ.general_cat        = req.query.gc;
        queryOBJ.category           = req.query.c;
        queryOBJ.entity             = req.query.e;

        //queryOBJ = validate(queryOBJ);
        
        res.status(200).send(search(queryOBJ));
    });
}

module.exports = appRouter;