let DATA = [];

window.addEventListener('load', () => {
    fetch("data.json")
        .then(res => {
            return res.json()
        })
        .then(Res => {
            DATA = (Res)
            SearchByName(title)

        })
        .catch(err => {
            console.log('cant fetch the JSON');
        })
})
let title = window.prompt("Enter Title Name");

let SearchByName = async(name) => {
    let FilteredData = DATA.filter(a => a.entity == name ? a : null)

    FilteredData.forEach(data => {
        console.log('Entity: ' + data.entity + " Year: " + data.year + " Category: " + data.category, " Winner " + data.winner);
    })
}