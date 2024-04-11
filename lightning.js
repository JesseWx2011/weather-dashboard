// Get Params

// Function for Parameters

const values = window.location.search;


const parameters = new URLSearchParams(values);
const newcity = parameters.get('city');
var city = newcity;
litening();
const alerts = `https://api.aerisapi.com/lightning/flash/${city}?format=json&radius=5000mi&minradius=0mi&limit=500&client_id=${client_id}&client_secret=${client_secret} `
async function litening() {
  const responsee = await fetch(alerts)
  const data = await responsee.json()
  const {response} = data

  var locs = {
    lat: response[0].loc.lat,
    lon: response[0].loc.long
  }
    document.getElementById('caption').innerHTML = `Closest Lightning strike to ${city}`
    document.getElementById("caption").style.textTransform = "capitalize"
    document.getElementById("lightninglocator").innerHTML = `<img style="width: 707px;margin-left: 0px;" src="https://maps.aerisapi.com/${client_id}_${client_secret}/flat-dk,radar,counties,roads,interstates,admin-cities-dk/1500x878/${locs.lat},${locs.lon},10/current.png"/>`
    document.getElementById("lightning").innerHTML = `Lightning Struck ${response[0].relativeTo.distanceMI} miles (${response[0].relativeTo.distanceKM} km) ${response[0].relativeTo.bearingENG} from ${city}`;
    document.getElementById("zoomedimage").innerHTML = `<img style="width: 707px;margin-top: 30px;" src="https://maps.aerisapi.com/${client_id}_${client_secret}/flat-dk,radar,counties,roads,interstates,admin-cities-dk/1500x878/${locs.lat},${locs.lon},12/current.png"/>`
}  
litening()
function homepagelite() {
  window.location = `./index.html?city=${city}`
}
async function loadingscreen() {
    document.getElementById("box").style.display = "block",
    document.getElementById("loadingboxm").style.display = "none"
    
}
loadingscreen()
setInterval(loadingscreen, 3008)
function adjustwidth() {
  var width = screen.width

  const loadingscreen = document.getElementById("loadingboxm")
  const mainbox = document.getElementById("box")
   if (width >= "430px") {
   loadingscreen.style.height = 3000
   mainbox.style.width = 1532
   mainbox.style.height = 1532
   mainbox.style.font-size === "34px"

   }
}