function findYear()
{
    var yearStart = document.getElementById('m_start');
    var yearEnd = document.getElementById('m_end');
    
    for(var i = yearStart; i <= yearEnd; i++)
    {
        years.push(i);
    }
}

fucntion result()
{
    var name = document.getElementById('m_name');
    var categories = document.getElementById('cars');
    var year = findYear();
    var wol = document.getElementById('wol');
}