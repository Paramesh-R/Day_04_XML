var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

request.onload = function () {
    var data = JSON.parse(request.response);

    const country_details = data.map(country => {
        return {
            name: country.name.common,
            region: country.region,
            subregion: country.subregion,
            population: country.population
        }
    })

    const list = document.createElement('ol');
    country_details.forEach((country) => {
        console.log(country)
        const list_item = document.createElement('li');
        list_item.innerHTML = "<span> Name: " + country.name + " <br> Region: " + country.region + "  <br> Sub Region: " + country.subregion + "  <br> Population: " + country.population + "</span>"
        list.appendChild(list_item);
    })

    document.getElementById("task3-result").appendChild(list)
}