/* Q2 - Using Rest API Display all countries flag in console*/
var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/all', true)
request.send()

request.onload = function () {
    
    var data = JSON.parse(request.response)
    var country_flag = data.filter(
        (country) =>
            console.log(country.flags)
    )
}