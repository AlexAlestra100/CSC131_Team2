//Anytime there is a GET request to the root app
//It will print out the test code

var appRouter = function(app){
    app.get("/",function(req,res){
        res.status(200).send("This is the restful check");
    });
}

module.exports = appRouter;