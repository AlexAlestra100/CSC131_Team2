var form = document.getElementById('acc');
var yearStart = document.getElementById('m_start');
var yearEnd = document.getElementById('m_end');
var mname = document.getElementById("m_name");
var cat = document.getElementById("cats");
var bx = document.getElementById("wol");

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

    var wlose;

    if(bx.value == "Win")
    {
        wlose = true;
    }
    else if(bx.value == "Lose")
    {
        wlose = false;
    }



    var movie =
    {
        name: mname.value,
        actor: mname.value,
        dates: years,
        win_lose: wlose,
        categ: 
    };

    console.log(movie.categ);

    event.preventDefault();
});