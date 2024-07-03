Twitter()
const tapi_url = `https://api.aerisapi.com/forecasts/del+rio,tx?limit=30&client_id=${client_id}&client_secret=${client_secret}`;
async function Twitter() {
   const responsee = await fetch(tapi_url)
   const data = await responsee.json()
   const { response } = data
   console.log(data)
document.getElementById('twittercardtemperature').innerHTML = `${response[0].periods[0].maxTempF}°F`
document.getElementById("icon").innerHTML = `<img src="${response[0].periods[0].icon}"></img>`
document.getElementById("weather").innerHTML = `${response[0].periods[0].weather}` 
}
Twitter()