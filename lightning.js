// Get Params

// Function for Parameters
console.log(`URL:`, window.location);

const values = window.location.search;
console.log(values);


const parameters = new URLSearchParams(values);
const newcity = parameters.get('city');

console.log(newcity);

var city = newcity;
litening();
const alerts = `https://api.aerisapi.com/lightning/flash/${city}?format=json&radius=5000mi&minradius=0mi&limit=500&client_id=${client_id}&client_secret=${client_secret} `
async function litening() {
  const responsee = await fetch(alerts)
  const data = await responsee.json()
  const {response} = data
  console.log(data)

  var locs = {
    lat: response[0].loc.lat,
    lon: response[0].loc.long
  }
    console.log(locs)
    document.getElementById('caption').innerHTML = `Closest Lightning strike to ${city}`
    document.getElementById("caption").style.textTransform = "capitalize"
    document.getElementById("lightninglocator").innerHTML = `<img style="width: 707px;margin-left: 0px;" src="https://maps.aerisapi.com/${client_id}_${client_secret}/flat-dk,radar,counties,roads,interstates,admin-cities-dk/1500x878/${locs.lat},${locs.lon},11/current.png"/>`
    document.getElementById("lightning").innerHTML = `Lightning Struck ${response[0].relativeTo.distanceMI} miles (${response[0].relativeTo.distanceKM} km) ${response[0].relativeTo.bearingENG} from ${city}`;

}  
litening()
function homepagelite() {
  window.location = `./index.html?city=${city}`
}