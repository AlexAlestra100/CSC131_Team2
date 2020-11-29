//Anytime there is a GET request to the root app
//It will print out the test code
let search = require("./database/oscarsData_search.js")

let testObj = {'winner' : 1, 'year' : [1999, 1992]};

var appRouter = function(app){
    app.get("/",function(req,res){
        res.status(200).send("This is the restful check");
    });
    
    app.get("/test",function(req,res){
        res.status(200).send(search(testObj));
    });

    
}

module.exports = appRouter;
