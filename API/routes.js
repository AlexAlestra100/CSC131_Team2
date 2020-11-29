<<<<<<< HEAD:API/routes.js
//Anytime there is a GET request to the root app
//It will print out the test code

var appRouter = function(app){
    app.get("/",function(req,res){
        res.status(200).send("This is the restful check");
    });
}

module.exports = appRouter;
=======
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
>>>>>>> 6611cb4d6bd6b93a4fc9b1b147415debd1769510:rest.api/routes.js
