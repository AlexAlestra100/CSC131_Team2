class User
{
    this.name = name;
    this.years = years;
    this.cat = cat.
    this.win = win;
}

var name = "Dave";
var years = [12, 13, 14];
var cat = ["Saab", "Volvo", "BMW"];
var win = false;

function findYear()
{
    var yearStart = 1927;
    var yearEnd = 1934;
    
    for(var i = yearStart; i <= yearEnd; i++)
    {
        years.push(i);
    }
}