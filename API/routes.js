//Anytime there is a GET request to the root app
//It will print out the test code
var cors            = require("cors");
let validate        = require("./checkInput.js");
let search          = require("./database/oscarsData_search.js");

var appRouter = function(app){
    app.get("/", cors(), async function(req,res){
        if(req.query.ID){ 
            let ID = req.query.ID;

            ID = {'ID' : parseInt(ID)};

            res.status(200).send(await search(ID));
        }

        else
            res.status(404).send('ID Not Found');
    });
    
    app.get('/search/', cors(), async function(req,res){
      
        let queryOBJ = {};

        if(req.query.w)     queryOBJ.winner         = req.query.w;
        if(req.query.yr)    queryOBJ.year           = req.query.yr;     
        if(req.query.gc)    queryOBJ.general_cat    = req.query.gc;
        if(req.query.c)     queryOBJ.category       = req.query.c;
        if(req.query.e)     queryOBJ.entity         = req.query.e;

        queryOBJ = validate(queryOBJ);

        if(queryOBJ) res.status(200).send(await search(queryOBJ));

        else res.status(400).send('Invalid Request');
    });
}

module.exports = appRouter;