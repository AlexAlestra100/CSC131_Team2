//Anytime there is a GET request to the root app
//It will print out the test code
require("naderSearch.js");
var appRouter = function(app){
    app.get("/",function(req,res){
        res.status(200).send("This is the restful check");
    });
    app.get("/",function(req,res){
        let testInputJSON = {"winner" : 1,"year": [1997], "entity": ['To JAMES F. FOLEY, CHARLES E. CONVERSE and F. EDWARD GARDNER of UCISCO; and to ROBERT W. STOKER, JR. and MATT SWEENEY for the development and realization of Liquid Synthetic Air.']};//the key for year item has to be 
        //testing
        console.log(combinedSearch(testInputJSON));
        
    res.status(200).send(console.log(combinedSearch(testInputJSON)));
});
}



module.exports = appRouter;
