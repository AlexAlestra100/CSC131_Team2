var form = document.getElementById('acc');
var yearStart = document.getElementById('m_start');
var yearEnd = document.getElementById('m_end');
var mname = document.getElementById("m_name");
//var cat = document.getElementById("cats");
var bx = document.getElementById("wol");

function findYear(yearStart, yearEnd)
{
    var nstart = parseFloat(yearStart.value);
    var nend = parseFloat(yearEnd.value);

    /*if(nstart < 1927)
    {
        nstart = 1927;
    }
    else if(nend > 2017)
    {
        nend = 2017;
    }*/
     
    var years = [];
    
    for(var i = nstart; i <= nend; i++)
    {
        years.push(i);
    }
    return years;
}

function winOlose(bx)
{
    if(bx.value == "Win")
    {
        return true;
    }
    else if(bx.value == "Lose")
    {
        return false;
    }
    else
    {
        return null;
    }
}

//must do all coding within the below function and objects work now!

form.addEventListener('submit', function(event)
{
    var nstart = parseFloat(yearStart.value);
    var nend = parseFloat(yearEnd.value);
     
    var years = [];

    if(nstart < 1927 || !nstart)
    {
        nstart = 1927;
    }
    else if(nend > 2017 || !nend)
    {
        nend = 2017;
    }

    for(var i = nstart; i <= nend; i++)
    {
        years.push(i);
    }

    var movie ={dates: years};

    console.log(movie.dates);

    event.preventDefault();
});