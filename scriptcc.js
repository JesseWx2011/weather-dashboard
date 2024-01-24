// Configuration Area
city = `:auto` // :auto for your estimated location (default)
// Types are zipcode, cityname, and geocode.
client_id = `DZLMGEFxCvfbQRG7aSN3c`; // This is your client id from aeris weather. 
client_secret = `N63dulcmKzQTrWjIrTe2aGKmOw5AhERWWUmjHQKt` // This is your client secret from aeris weather.
getWx();  
const api_url = `https://api.aerisapi.com/conditions/${city}?format=json&plimit=1&filter=1min&client_id=${client_id}&client_secret=${client_secret}`;
  async function getWx() {   
      const responsee = await fetch(api_url);
      const data = await responsee.json(); 
      const {response} = data;
      console.log(response);    
let lat = `${response[0].loc.lat}`
let lon = `${response[0].loc.long}`
       document.getElementById('cityname').innerHTML = `Weather for <div class="cityn" style="display: flex;"> ${response[0].place.name}</div>, <div class="state" style="flex;">${response[0].place.state}</div>, <div class="country" style="display: flex;">${response[0].place.country}</div>`;
       document.getElementById('temp').innerHTML = `${response[0].periods[0].tempF}°F (${response[0].periods[0].tempC}°C)`;
       document.getElementById('title').innerHTML = `Weather for ${response[0].place.name}, ${response[0].place.state}`
       document.getElementById('icon').innerHTML = `<img src="${response[0].periods[0].icon}" style="width: 10%; padding-left: 590px; display: flex;"></img>`;
       document.getElementById('weather').innerHTML = `${response[0].periods[0].weather}`
       document.getElementById('feelslike').innerHTML = `Feels Like ${response[0].periods[0].feelslikeF}°F (${response[0].periods[0].feelslikeC}°C)`
       document.getElementById('windvalue').innerHTML = ` ${response[0].periods[0].windDir} at ${response[0].periods[0].windSpeedMPH} mph`;
       document.getElementById('uvvalue').innerHTML = `${response[0].periods[0].uvi}`;
       document.getElementById('humvalue').innerHTML = `${response[0].periods[0].humidity}%`;
       document.getElementById('pressurevalue').innerHTML = `${response[0].periods[0].pressureIN} inHg`;
       document.getElementById('dewvalue').innerHTML = `${response[0].periods[0].dewpointF}°F`;
       document.getElementById('visibilityvalue').innerHTML = `${response[0].periods[0].visibilityMI} mi`;
       document.getElementById('snowdepthvalue').innerHTML = `${response[0].periods[0].snowDepthIN} in.`;
       document.getElementById('rainrvalue').innerHTML = `${response[0].periods[0].precipRateIN} in./hr`;
       document.getElementById('solarvalue').innerHTML =  `${response[0].periods[0].solradWM2} watts/m²`;
       document.getElementById('radar').innerHTML = `<img style="margin-top: 100px;" src="https://maps.aerisapi.com/${client_id}_${client_secret}/flat-dk,water-depth,roads,counties,interstates,rivers,radar,admin-dk/988x400/${lat},${lon},7/current.png"></img>`;
       
    
       // Function to get the UV Value
   if (response[0].periods[0].uvi <=1) {
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
    }
  // Function to get the visibility
  if (visibilityvalue = response[0].periods[0].visibilityMI >= 15) {
   visibilitytext.innerHTML = `Clear Skies`;
  } if (visibilityvalue = response[0].periods[0].visibilityMI <= 10) {
    visibilitytext.innerHTML = `Nearly Clear Skies`
} if (visibilityvalue = response[0].periods[0].visibilityMI <= 7.5) {
    visibilitytext.innerHTML = `Near Clear Skies with patchy haze`
} if (visibilityvalue = response[0].periods[0].visibilityMI <= 3.5) {
    visibilitytext.innerHTML = `Patchy Fog or Haze`
} if (visibilityvalue = response[0].periods[0].visibilityMI <= 1.5) {
    visibilitytext.innerHTML = `Blowing Snow, Blowing Dust, Fog, Snowfall, or Haze`
} if (visibilityvalue = response[0].periods[0].visibilityMI <= 0.875) {
    visibilitytext.innerHTML = `Fog or Haze`
} if (visibilityvalue = response[0].periods[0].visibilityMI <= 0.5) {
    visibilitytext.innerHTML = `Very Dense Fog or Haze`
} if (visibilityvalue = response[0].periods[0].visibilityMI <= 0.25) {
    visibilitytext.innerHTML = `Extremely Dense Fog/Haze`
  }
 
  }
getWx();

  // Get The Weather Forecast based off of IP
  getForecast(); 
async function getForecast() {   
    const forecast_url = `https://api.aerisapi.com/forecasts/${city}?limit=7&client_id=${client_id}&client_secret=${client_secret}`;
    const responsee = await fetch(forecast_url);
    const data = await responsee.json(); 
    const {response} = data;
    console.log(response);    
    
    // Day 1
    document.getElementById('temp0day').textContent = response[0].periods[0].maxTempF;
    document.getElementById('wxicon0').innerHTML = `<img src="${response[0].periods[0].icon}"></img>`;
    document.getElementById('weather0').textContent = response[0].periods[0].weatherPrimary;
    // Day 2
    document.getElementById('temp1day').textContent = response[0].periods[1].maxTempF;
    document.getElementById('wxicon1').innerHTML = `<img src="${response[0].periods[1].icon}"></img>`;
    document.getElementById('weather1').textContent = response[0].periods[1].weatherPrimary;
    // Day 3
    document.getElementById('temp2day').textContent = response[0].periods[2].maxTempF;
    document.getElementById('wxicon2').innerHTML = `<img src="${response[0].periods[2].icon}"></img>`;
    document.getElementById('weather2').textContent = response[0].periods[2].weatherPrimary;
    // Day 4
    document.getElementById('temp3day').textContent = response[0].periods[3].maxTempF;
    document.getElementById('wxicon3').innerHTML = `<img src="${response[0].periods[3].icon}"></img>`;
    document.getElementById('weather3').textContent = response[0].periods[3].weatherPrimary;
    // Day 5
    document.getElementById('temp4day').textContent = response[0].periods[4].maxTempF;
    document.getElementById('wxicon4').innerHTML = `<img src="${response[0].periods[4].icon}"></img>`;
    document.getElementById('weather4').textContent = response[0].periods[4].weatherPrimary;
    // Day 6
    document.getElementById('temp5day').textContent = response[0].periods[5].maxTempF;
    document.getElementById('wxicon5').innerHTML = `<img src="${response[0].periods[5].icon}"></img>`;
    document.getElementById('weather5').textContent = response[0].periods[5].weatherPrimary;
    // Day 7
    document.getElementById('temp6day').textContent = response[0].periods[6].maxTempF;
    document.getElementById('wxicon6').innerHTML = `<img src="${response[0].periods[6].icon}"></img>`;
    document.getElementById('weather6').textContent = response[0].periods[6].weatherPrimary;
  // Detailed Information Container 
  // Day 1 (Today/Tonight)
  document.getElementById('temptoday').innerHTML = `High Temperature: ${response[0].periods[0].maxTempF}°F (${response[0].periods[0].maxTempC}°C) `;
  document.getElementById('tempmintoday').innerHTML = `High Temperature: ${response[0].periods[0].minTempF}°F (${response[0].periods[0].minTempC}°C) `;
  document.getElementById('fullforecast0').innerHTML = `It will be ${response[0].periods[0].weatherPrimary} Today (or Tonight) with a high of ${response[0].periods[0].maxTempF} and a low of ${response[0].periods[0].minTempF}. The Max UV will be ${response[0].periods[0].uvi}. Winds to the ${response[0].periods[0].windDir} from ${response[0].periods[0].windSpeed80mMPH} to ${response[0].periods[0].windGustMPH} mph with peak gusts around ${response[0].periods[0].windGustMPH} mph.`;
  // Day 2 (Tommorow)
  document.getElementById('temptoday1').innerHTML = `High Temperature: ${response[0].periods[1].maxTempF}°F (${response[0].periods[1].maxTempC}°C) `;
  document.getElementById('tempmintoday1').innerHTML = `High Temperature: ${response[0].periods[1].minTempF}°F (${response[0].periods[1].minTempC}°C) `
  document.getElementById('fullforecast1').innerHTML = `Tommrows Weather will be ${response[0].periods[1].weatherPrimary} with a high of ${response[0].periods[1].maxTempF} and a low of ${response[0].periods[1].minTempF}. The Max UV will be ${response[0].periods[1].uvi}. Winds to the ${response[0].periods[1].windDir} from ${response[0].periods[1].windSpeed80mMPH} to ${response[0].periods[1].windGustMPH} mph with peak gusts around ${response[0].periods[1].windGustMPH * 1.6/0.8 - 0.00000000000001} mph.`
}
getForecast();
// This is the function to get the alerts.
getAlert();
const alert_url = `https://api.aerisapi.com/alerts/${city}?query=sigp:1;sigp:3&client_id=${client_id}&client_secret=${client_secret}`;
  async function getAlert() {   
      const responsee = await fetch(alert_url);
      const data = await responsee.json(); 
      const {response, error} = data;
      console.log(response, error);  
      
      document.getElementById('alerts').innerHTML = `<div style="background-color: #${response[0].details.color};">Alert: ${response[0].details.name} in effect for ${city}.</div><div style="background-color: #${response[1].details.color};">${response[1].details.name} in effect for ${city}.</div><div style="background-color: #${response[2].details.color};">${response[2].details.name} in effect for ${city}.</div><div style="background-color: #${response[3].details.color};">${response[3].details.name} in effect for ${city}.</div><div style="background-color: #${response[3].details.color};">${response[3].details.name} in effect for ${city}.</div>`

      setInterval(getAlert, 300000)
  }
getAlert();
function getRadar() {
}
getRadar();