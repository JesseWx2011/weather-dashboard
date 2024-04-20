// Get Params

// Function for Parameters

const values = window.location.search;

const parameters = new URLSearchParams(values);
const newcity = parameters.get('city');


var city = newcity
 

// Start of GetWx function
getWx();
const api_url = `https://api.aerisapi.com/conditions/${city}?format=json&plimit=1&filter=1min&client_id=${client_id}&client_secret=${client_secret}&limit=5`;
async function getWx() {
   const responsee = await fetch(api_url);
   const data = await responsee.json();
   const {response} = data;
   var lat = `${response[0].loc.lat}`;
   var lon = `${response[0].loc.long}`;
   console.log(data)
    cordinates = {
      "lat": `${lat}`,
      "lon": `${lon}`
   }
   function error() {
      if (error.code === "maxhits_daily") {
          client_id = `wgE96YE3scTQLKjnqiMsv`; // This is your client id from aeris weather. 
         client_secret = `SVG2gQFV8y9DjKR0BRY9wPoSLvrMrIqF9Lq2IYaY` // This is your client secret from aeris weather.
      }};
   error()
// This is stuff for the logs.


   const rainr = (response[0].periods[0].precipRateIN ).toFixed(3)
   document.getElementById('cityname').innerHTML = `<div class="city">Deluge - Weather for ${response[0].place.name}, ${response[0].place.state}</div>`;
   document.getElementById('temp').innerHTML = `${response[0].periods[0].tempF}°F (${response[0].periods[0].tempC}°C)`;
   document.getElementById('title').innerHTML = `Deluge - Weather for ${response[0].place.name}, ${response[0].place.state}`
   document.getElementById('icon').innerHTML = `<img src="${response[0].periods[0].icon}" style="width: 10%; padding-left: 590px; display: flex;"></img>`;
   document.getElementById('weather').innerHTML = `${response[0].periods[0].weather}`
   document.getElementById('windvalue').innerHTML = ` ${response[0].periods[0].windDir} at ${response[0].periods[0].windSpeedMPH} mph`;
   document.getElementById('uvvalue').innerHTML = `${response[0].periods[0].uvi}`;
   document.getElementById('humvalue').innerHTML = `${response[0].periods[0].humidity}%`;
   document.getElementById('pressurevalue').innerHTML = `${response[0].periods[0].pressureIN} inHg`;
   document.getElementById('dewvalue').innerHTML = `${response[0].periods[0].dewpointF}°F`;
   document.getElementById('visibilityvalue').innerHTML = `${response[0].periods[0].visibilityMI} mi`;
   document.getElementById('snowdepthvalue').innerHTML = `${response[0].periods[0].snowDepthIN} in.`;
   document.getElementById('rainrvalue').innerHTML = `${rainr} in./hr`;
   document.getElementById('solarvalue').innerHTML = `${response[0].periods[0].solradWM2} watts/m²`;
   document.getElementById("windmetric").innerHTML = `${response[0].periods[0].windSpeedKPH} km/h</div>`;
   document.getElementById("radarimage").innerHTML = `<img style="width: 617px;" src="https://maps.aerisapi.com/${client_id}_${client_secret}/flat-dk,water-depth,satellite,radar,alerts-warnings-outlines,counties,lightning-strikes-15m-icons,roads,interstates,rivers,admin-cities-dk/1280x878/${city},9/current.png"/>`
   document.getElementById("windgust").innerHTML  = `Gusts to ${response[0].periods[0].windGustMPH} mph`
   // Function to get the UV Value
   if (response[0].periods[0].uvi === 0) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Very Low`
   } if (response[0].periods[0].uvi >= 1) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Low`
   } if (response[0].periods[0].uvi >= 3) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Medium`
   } if (response[0].periods[0].uvi >= 6) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - High`
   } if (response[0].periods[0].uvi >= 8) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Very High`
   } if (response[0].periods[0].uvi > 11) {
      uvvalue.innerHTML = `${response[0].periods[0].uvi} - Extreme`
   } if (response[0].periods[0].uvi === null) {
      uvvalue.innerHTML = "UV Index Unavaliable"
   }
   // Function to get the visibility
   function visibility() {
      var visibility = response[0].periods[0].visibilityMI
      if (visibility === 9.942) {
         visibilitytext.innerHTML = "Clear Skies";
         visibilityvalue.innerHTML = `10 mi`
      } if (visibility <= 7.5) {
         visibilitytext.innerHTML = "Light Haze, Patchy Clouds"
      } if (visibility <= 2.485) {
         visibilitytext.innerHTML = "Haze"
      } if (visibility <= 1.24) {
         visibilitytext.innerHTML = `Thin Fog`
      } if (visibility <= 0.621) {
         visibilitytext.innerHTML = `Light Fog`
      } if (visibility <= 0.310) {
         visibilitytext.innerHTML = `Moderate Fog`
      } if (visibility <= 0.124274) {
         visibilitytext.innerHTML = `Thick Fog`
      } if (visibility < 0.031) {
         visibilitytext.innerHTML = `Extremely Dense Fog`
      };}
   visibility()
   // Just get city name if it is set to :auto
function correctcity() {
if (city === `:auto`) {
   document.getElementById('cityname').innerHTML = `<div class="city">Weather for ${response[0].place.name}, ${response[0].place.state}</div>`;
} else {
   document.getElementById('cityname').innerHTML = `<div class="city" style="position: relative;">Weather for ${response[0].place.name}, ${response[0].place.state}</div>`;
}};
correctcity()
   // Function for UV
   if (response[0].periods[0].uvi >= 5) {
      uvvaluedesc.innerHTML = "Put on Sunscreen when outdoors."
   }
   document.getElementById('feelslike').innerHTML = `Feels Like ${response[0].periods[0].feelslikeF}°F (${response[0].periods[0].feelslikeC}°C)`;
}
getWx();



severeweather()
const severe = `https://data.api.xweather.com/convective/outlook/${city}?client_id=${client_id}&client_secret=${client_secret}&radius=1mi`;
async function severeweather() {
   const responsee = await fetch(severe);
   const data = await responsee.json();
   const {response} = data;
   console.log(data)
// Placeholder for if no matches for the if statements. 
riskphrase = ""
   var risktype = response[0].details.risk.type
   if (risktype === "general") {
      riskphrase = "Isolated Instances of Lightning."
   } 
   // Use "|" instead of ","
 if (risktype === "marginal" | "slight" | "enhanced") {
   riskphrase = "Severe Thunedrstorms Possible."
 }
 if (risktype === "moderate" | "high") {
   riskphrase = "Dangerous Thunderstorms Likely."
 }

}
severeweather()
setTimeout(severeweather, 2000)
// Get The Weather Forecast based off of IP
getForecast();
async function getForecast() {
   const forecast_url = `https://api.aerisapi.com/forecasts/${city}?limit=30&client_id=${client_id}&client_secret=${client_secret}`;
   const responsee = await fetch(forecast_url);
   const data = await responsee.json();
   const { response } = data;
   // Day 1
   document.getElementById('temp0day').textContent = response[0].periods[0].maxTempF;
   document.getElementById('templow0day').textContent = response[0].periods[0].minTempF;
   document.getElementById('wxicon0').innerHTML = `<img src="${response[0].periods[0].icon}"></img>`;
   document.getElementById('weather0').textContent = response[0].periods[0].weatherPrimary;
   document.getElementById('cloudcover0').innerHTML = `${response[0].periods[0].sky}% Cloud Cover`
   // Day 2
   document.getElementById('temp1day').textContent = response[0].periods[1].maxTempF;
   document.getElementById('templow1day').textContent = response[0].periods[1].minTempF;
   document.getElementById('wxicon1').innerHTML = `<img src="${response[0].periods[1].icon}"></img>`;
   document.getElementById('weather1').textContent = response[0].periods[1].weatherPrimary;
   document.getElementById('cloudcover1').innerHTML = `${response[0].periods[1].sky}% Cloud Cover`
   // Day 3
   document.getElementById('temp2day').textContent = response[0].periods[2].maxTempF;
   document.getElementById('templow2day').textContent = response[0].periods[2].minTempF;
   document.getElementById('wxicon2').innerHTML = `<img src="${response[0].periods[2].icon}"></img>`;
   document.getElementById('weather2').textContent = response[0].periods[2].weatherPrimary;
   document.getElementById('cloudcover2').innerHTML = `${response[0].periods[2].sky}% Cloud Cover`
   // Day 4
   document.getElementById('temp3day').textContent = response[0].periods[3].maxTempF;
   document.getElementById('templow3day').textContent = response[0].periods[3].minTempF;
   document.getElementById('wxicon3').innerHTML = `<img src="${response[0].periods[3].icon}"></img>`;
   document.getElementById('weather3').textContent = response[0].periods[3].weatherPrimary;
   document.getElementById('cloudcover3').innerHTML = `${response[0].periods[3].sky}% Cloud Cover`
   // Day 5
   document.getElementById('temp4day').textContent = response[0].periods[4].maxTempF;
   document.getElementById('templow4day').textContent = response[0].periods[4].minTempF;
   document.getElementById('wxicon4').innerHTML = `<img src="${response[0].periods[4].icon}"></img>`;
   document.getElementById('weather4').textContent = response[0].periods[4].weatherPrimary;
   document.getElementById('cloudcover4').innerHTML = `${response[0].periods[4].sky}% Cloud Cover`
   // Day 6
   document.getElementById('temp5day').textContent = response[0].periods[5].maxTempF;
   document.getElementById('templow5day').textContent = response[0].periods[5].minTempF;
   document.getElementById('wxicon5').innerHTML = `<img src="${response[0].periods[5].icon}"></img>`;
   document.getElementById('weather5').textContent = response[0].periods[5].weatherPrimary;
   document.getElementById('cloudcover5').innerHTML = `${response[0].periods[5].sky}% Cloud Cover`
   // Day 7
   document.getElementById('temp6day').textContent = response[0].periods[6].maxTempF;
   document.getElementById('templow6day').textContent = response[0].periods[6].minTempF;
   document.getElementById('wxicon6').innerHTML = `<img src="${response[0].periods[6].icon}"></img>`;
   document.getElementById('weather6').textContent = response[0].periods[6].weatherPrimary;
   document.getElementById('cloudcover6').innerHTML = `${response[0].periods[6].sky}% Cloud Cover`

    // Function Rainfall 
     if (response[0].periods[0].precipIN !== 0) {
       rainfall0 = "Rainfall amounts around " + response[0].periods[0].precipIN + " inches."
     } if (response[0].periods[0].precipIN === 0) {
      rainfall0 = "No Rainfall Accumulation Expected."
     } if (response[0].periods[1].precipIN !== 0) {
      rainfall1 = "Rainfall amounts around " + response[0].periods[1].precipIN + " inches."
    } if (response[0].periods[1].precipIN === 0) {
     rainfall1 = "No Rainfall Accumulation Expected."
    } if (response[0].periods[2].precipIN !== 0) {
      rainfall2 = "Rainfall amounts around " + response[0].periods[2].precipIN + " inches."
    } if (response[0].periods[2].precipIN === 0) {
     rainfall2 = "No Rainfall Accumulation Expected."
    } 
   // Detailed Information Container 
   // Day 1 (Today/Tonight)
   document.getElementById('temptoday').innerHTML = `High Temperature: ${response[0].periods[0].maxTempF}°F (${response[0].periods[0].maxTempC}°C) `;
   document.getElementById('tempmintoday').innerHTML = `Low Temperature: ${response[0].periods[0].minTempF}°F (${response[0].periods[0].minTempC}°C) `;
      document.getElementById('fullforecast0').innerHTML = `${riskphrase} ${response[0].periods[0].weather}, with a high of ${response[0].periods[0].maxTempF} and a low of ${response[0].periods[0].minTempF}. The Max UV will be ${response[0].periods[0].uvi}. Winds to the ${response[0].periods[0].windDir} from ${response[0].periods[0].windSpeedMinMPH} to ${response[0].periods[0].windGust80mMPH} mph. ${rainfall0}`;

   // Day 2 (Tommorow)
   document.getElementById('temptoday1').innerHTML = `High Temperature: ${response[0].periods[1].maxTempF}°F (${response[0].periods[1].maxTempC}°C) `;
   document.getElementById('tempmintoday1').innerHTML = `Low Temperature: ${response[0].periods[1].minTempF}°F (${response[0].periods[1].minTempC}°C) `
   document.getElementById('fullforecast1').innerHTML = `${response[0].periods[1].weather}, with a high of ${response[0].periods[1].maxTempF} and a low of ${response[0].periods[1].minTempF}. The Max UV will be ${response[0].periods[1].uvi}. Winds to the ${response[0].periods[1].windDir} from ${response[0].periods[1].windSpeedMinMPH} to ${response[0].periods[1].windGust80mMPH} mph. ${rainfall1}.` 
   // Day 3 (Some day after tommorow).
   document.getElementById('temptoday2').innerHTML = `High Temperature: ${response[0].periods[2].maxTempF}°F (${response[0].periods[2].maxTempC}°C) `;
   document.getElementById('tempmintoday2').innerHTML = `Low Temperature: ${response[0].periods[2].minTempF}°F (${response[0].periods[2].minTempC}°C) `
   document.getElementById('fullforecast2').innerHTML = `${response[0].periods[2].weather}, with a high of ${response[0].periods[2].maxTempF} and a low of ${response[0].periods[1].minTempF}. The Max UV will be ${response[0].periods[1].uvi}. Winds to the ${response[0].periods[2].windDir} from ${response[0].periods[2].windSpeedMinMPH} to ${response[0].periods[2].windGust80mMPH} mph. ${rainfall2}`
}
getForecast();
setTimeout(getForecast, 1000)
// This is the function to get the alerts.
getAlert();
const alert_url = `https://api.aerisapi.com/alerts/${city}?client_id=${client_id}&client_secret=${client_secret}`;
async function getAlert() {
   const responsee = await fetch(alert_url);
   const data = await responsee.json();
   const { response } = data;
   document.getElementById('alerts').innerHTML = `<div style="background-color: #${response[0].details.color};">Alert: ${response[0].details.name} in effect for ${response[0].place.name} ${response[0].place.state}.<a href="alertdetail.html?city=${city}">Click Here for more information on alerts</a></div>`

   if (response[1].details.name !== "undefined") {
      alerts.innerHTML = `<div style="background-color: #${response[0].details.color};">Alert: ${response[0].details.name} in effect for ${response[0].place.name} ${response[0].place.state}.<a href="alertdetail.html?city=${city}">Click Here for more information on alerts</a></div><div style="background-color: #${response[1].details.color};">Alert: ${response[1].details.name} in effect for ${response[0].place.name} ${response[0].place.state}.</div>`
   } else {
      alerts.innerHTML = `<div style="background-color: #${response[0].details.color};">Alert: ${response[0].details.name} in effect for ${response[0].place.name} ${response[0].place.state}.<a href="alertdetail.html?city=${city}">Click Here for more information on alerts</a></div>`
   }

}
getAlert();
setInterval(getAlert, 60000)

function getSearch() {
   const search = document.getElementById('searchButton')
   const searchForm = document.getElementById('searchInput');
   searchButton.addEventListener("click", function () {
      window.location = `./index.html?city=${searchInput.value}`


   });
   searchInput.addEventListener("input", function () {
      window.location = `./?city=${searchInput.value}`
   })
}
getSearch();
function lightningredirect() {
   window.location = `./lightning.html?city=${city}`
}
lightningredirect()
document.getElementById('searchInput').onkeyup = searchDropDown;

function updateveryminute() {
   setInterval(getWx, 10000)
   document.getElementById("linkd").innerHTML = `Change to archived updates.`
   document.getElementById("linkd").id = "changeme"

   changeme.addEventListener("click", function() {
      window.location = `./index.html?city=${city}`
   })
}
updateveryminute()
function extendedforecast() {
   window.location = `./fullextended.html?city=${city}`
}
extendedforecast()