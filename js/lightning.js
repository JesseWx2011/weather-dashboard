// Get Params

// Function for Parameters

const values = window.location.search;


const parameters = new URLSearchParams(values);
const newcity = parameters.get('city');
var city = newcity;
const url = `https://data.api.xweather.com/places/${city}?format=json&limit=10&client_id=${client_id}&client_secret=${client_secret}`
  async function placename() {
      const responsee = await fetch(url)
      const data = await responsee.json()
      const {response} = data;
      console.log(data) 


      mainroot = response
country = mainroot.place.country
state = mainroot.place.state.toUpperCase()

// Default to USA if country string is "US"
 if (country === "US") {
   country = "USA"
 } else {
 }
placename = mainroot.place.name
      document.getElementById('caption').innerHTML = `Closest Lightning strike to ${mainroot.place.name}, ${state}`;

   }
   placename();
litening();
const alerts = `https://data.api.xweather.com/lightning/flash/closest?p=${city}&format=json&radius=25mi&minradius=0mi&limit=1&client_id=${client_id}&client_secret=${client_secret} `
async function litening() {
  const responsee = await fetch(alerts)
  const data = await responsee.json()
  const {response} = data
  console.log(data)
  var locs = {
    lat: response[0].loc.lat,
    lon: response[0].loc.long
  }
    document.getElementById("caption").style.textTransform = "capitalize"
    document.getElementById("lightninglocator").innerHTML = `<img style="width: 707px;margin-left: 0px;" src="https://maps.aerisapi.com/${client_id}_${client_secret}/flat-dk,radar,counties,roads,interstates,admin-cities-dk/1500x878/${locs.lat},${locs.lon},10/current.png"/>`
    document.getElementById("lightning").innerHTML = `Lightning Struck ${response[0].relativeTo.distanceMI} miles (${response[0].relativeTo.distanceKM} km) ${response[0].relativeTo.bearingENG} from ${placename}. Struck ${response[0].ob.age} seconds ago. (${response[0].ob.age / 60} minutes ago.)`;
    document.getElementById("zoomedimage").innerHTML = `<img style="width: 707px;margin-top: 30px;" src="https://maps.aerisapi.com/${client_id}_${client_secret}/flat-dk,radar,counties,roads,interstates,admin-cities-dk/1500x878/${locs.lat},${locs.lon},12/current.png"/>`
}  
litening()
setInterval(litening, 1000)
function homepagelite() {
  window.location = `./index.html?city=${city}`
}
async function loadingscreen() {
    document.getElementById("box").style.display = "block",
    document.getElementById("loadingboxm").style.display = "none"

}
loadingscreen()
setInterval(loadingscreen, 3008)