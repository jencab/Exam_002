function fetchData() {

    return fetch('https://data.cityofnewyork.us/resource/tg4x-b46p.json') //pull the data
        .then(response => response.json())
        .then(json => renderDatas(json)) 

}

function renderDatas(json) {
    const h2 = document.querySelector('h2')
    
    json.forEach(data => {
        const p = document.createElement('p') 
        p.innerHTML = '${data.event_id}, ${data.event_type}, ${data.borough}, ${data.zip_code} '
        h2.appendChild(p)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    fetchData()
})
