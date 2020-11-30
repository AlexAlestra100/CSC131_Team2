const redundant = ["OUTSTANDING MOTION PICTURE","WRITING (Screenplay Written Directly for the Screen--based on material or on story material not previously published or produced)", "WRITING (Screenplay--Adapted)","WRITING (Original Motion Picture Story)", "MUSIC (Scoring: Adaptation and Original Song Score)","SHORT FILM (Dramatic Live Action)"]
 
var fs  = require('fs');
// var gracefulFs = require('graceful-fs');
// gracefulFs.gracefulify(fs);
var data= require("./RemoveData.json");


function groupCategories()
{
    
    let increment = 0;
    //var genCategory = "cat";
    for(var j = 0; j < redundant.length; j++)
    {

    for(var i= 0; i < data.length; i++  )
    {
        const newkey = {"general_cat": redundant[j]};

        if(data[i].category === redundant[j])
        {
        Object.assign(data[i], newkey);
       
        fs.writeFile("./groupedData.json", JSON.stringify(data), (err) => {     // adds more content then needed but manualy deleted it 
            if (err) {                                                          
                console.error(err);
                return;
            };
        });
        }
   
    
     
        }
    }
    //console.log(data)
return data;
}
console.log(groupCategories());
