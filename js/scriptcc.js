   // Get Params

   // Function for Parameters

   const values = window.location.search;

   const parameters = new URLSearchParams(values);
   const newcity = parameters.get('city');
   const oldlang = parameters.get('lang')


   var city = newcity
   var language = oldlang 
   
// Get Weather
   getWx();
   const api_url = `https://api.aerisapi.com/conditions/${city}?format=json&plimit=1&filter=1min&client_id=${client_id}&client_secret=${client_secret}&limit=5`;
   async function getWx() {
      const responsee = await fetch(api_url);
      const data = await responsee.json();
      const {response} = data;
      var lat = `${response[0].loc.lat}`;
      var lon = `${response[0].loc.long}`;
      cordinates = {
         "lat": `${lat}`,
         "lon": `${lon}`
      }
 state = response[0].place.state
 tempFarenheit = response[0].periods[0].tempF
tempC = response[0].periods[0].tempC
      const rainr = (response[0].periods[0].precipRateIN ).toFixed(3)
      document.getElementById('cityname').innerHTML = `<div class="city">Deluge - Weather for ${response[0].place.name}, ${state}</div>`;
      document.getElementById('temp').innerHTML = `${tempFarenheit}°F (${tempC}°C)`;
      document.getElementById('title').innerHTML = `Deluge - Weather for ${response[0].place.name}, ${response[0].place.state}`
      document.getElementById('icon').innerHTML = `<img src="https://raw.githubusercontent.com/JesseWx2011/weather-dashboard/main/icons/${response[0].periods[0].icon}" style="width: 10%; padding-left: 590px; display: flex;"></img>`;
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
    
          document.getElementById("LoadingScreen").style.display = "none"
      document.getElementById("weatherpage").style.display = "block"

      // Twitter Card
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
         uvvalue.innerHTML = "UV Index Unavailable"
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
   // Placeholder for if no matches for the if statements. 
  let riskphrase = ""
      var risktype = response[0].details.risk.name
      if (risktype === "general risk") {
         riskphrase = "Isolated Instances of Lightning."
         } if (risktype === "marginal risk") {
            riskphrase = "Severe Thunedrstorms Possible."
         } if (risktype === "slight risk") {
            riskphrase = "Severe Thunedrstorms Possible."
         }  if (risktype === "enhanced risk") {
            riskphrase = "Scattered Strong Storms Possible."
         } if (risktype === "moderate risk") {
            riskphrase = "Dangerous Thunderstorms Likely."
         }  if (risktype1 === "high risk") {
            riskphrase = "Dangerous Thunderstorms Likely."
         } 

   }
   severeweather() 
   severeweathertommorow()
   const severe1 = `https://data.api.xweather.com/convective/outlook/${city}?client_id=${client_id}&client_secret=${client_secret}&radius=0.5mi&from=+1day`;
   async function severeweathertommorow() {
      const responsee = await fetch(severe1);
      const data = await responsee.json();
      const {response} = data;
      console.log(data)
   // Placeholder for if no matches for the if statements. 
   riskphrase1 = ""
   risktype1 = response[0].details.risk.name
      // Use "|" instead of ","
      if (risktype1 === "general risk") {
      riskphrase1 = "Isolated Instances of Lightning."
      } if (risktype1 === "marginal risk") {
         riskphrase1 = "Severe Thunedrstorms Possible."
      } if (risktype1 === "slight risk") {
         riskphrase1 = "Severe Thunedrstorms Possible."
      }  if (risktype1 === "enhanced risk") {
         riskphrase1 = "Scattered Strong Storms Possible."
      } if (risktype1 === "moderate risk") {
         riskphrase1 = "Dangerous Thunderstorms Likely."
      }  if (risktype1 === "high risk") {
         riskphrase1 = "Dangerous Thunderstorms Likely."
      } 
   }
   severeweathertommorow();
   // Get The Weather Forecast based off of IP
   getForecast();
   async function getForecast() {
      const forecast_url = `https://api.aerisapi.com/forecasts/${city}?limit=30&client_id=${client_id}&client_secret=${client_secret}`;
      const responsee = await fetch(forecast_url);
      const data = await responsee.json();
      const { response } = data;
      console.log(data)
      // Day 1
      document.getElementById('temp0day').textContent = response[0].periods[0].maxTempF;
      document.getElementById('templow0day').textContent = response[0].periods[0].minTempF;
      document.getElementById('wxicon0').innerHTML = `<img src="https://raw.githubusercontent.com/JesseWx2011/weather-dashboard/main/icons/${response[0].periods[0].icon}"></img>`;
      document.getElementById('weather0').textContent = response[0].periods[0].weatherPrimary;
      document.getElementById('cloudcover0').innerHTML = `${response[0].periods[0].sky}% Cloud Cover`
      // Day 2
      document.getElementById('temp1day').textContent = response[0].periods[1].maxTempF;
      document.getElementById('templow1day').textContent = response[0].periods[1].minTempF;
      document.getElementById('wxicon1').innerHTML = `<img src="https://raw.githubusercontent.com/JesseWx2011/weather-dashboard/main/icons/${response[0].periods[1].icon}"></img>`;
      document.getElementById('weather1').textContent = response[0].periods[1].weatherPrimary;
      document.getElementById('cloudcover1').innerHTML = `${response[0].periods[1].sky}% Cloud Cover`
      // Day 3
      document.getElementById('temp2day').textContent = response[0].periods[2].maxTempF;
      document.getElementById('templow2day').textContent = response[0].periods[2].minTempF;
      document.getElementById('wxicon2').innerHTML = `<img src="https://raw.githubusercontent.com/JesseWx2011/weather-dashboard/main/icons/${response[0].periods[2].icon}"></img>`;
      document.getElementById('weather2').textContent = response[0].periods[2].weatherPrimary;
      document.getElementById('cloudcover2').innerHTML = `${response[0].periods[2].sky}% Cloud Cover`
      // Day 4
      document.getElementById('temp3day').textContent = response[0].periods[3].maxTempF;
      document.getElementById('templow3day').textContent = response[0].periods[3].minTempF;
      document.getElementById('wxicon3').innerHTML = `<img src="https://raw.githubusercontent.com/JesseWx2011/weather-dashboard/main/icons/${response[0].periods[3].icon}"></img>`;
      document.getElementById('weather3').textContent = response[0].periods[3].weatherPrimary;
      document.getElementById('cloudcover3').innerHTML = `${response[0].periods[3].sky}% Cloud Cover`
      // Day 5
      document.getElementById('temp4day').textContent = response[0].periods[4].maxTempF;
      document.getElementById('templow4day').textContent = response[0].periods[4].minTempF;
      document.getElementById('wxicon4').innerHTML = `<img src="https://raw.githubusercontent.com/JesseWx2011/weather-dashboard/main/icons/${response[0].periods[4].icon}"></img>`;
      document.getElementById('weather4').textContent = response[0].periods[4].weatherPrimary;
      document.getElementById('cloudcover4').innerHTML = `${response[0].periods[4].sky}% Cloud Cover`
      // Day 6
      document.getElementById('temp5day').textContent = response[0].periods[5].maxTempF;
      document.getElementById('templow5day').textContent = response[0].periods[5].minTempF;
      document.getElementById('wxicon5').innerHTML = `<img src="https://raw.githubusercontent.com/JesseWx2011/weather-dashboard/main/icons/${response[0].periods[5].icon}"></img>`;
      document.getElementById('weather5').textContent = response[0].periods[5].weatherPrimary;
      document.getElementById('cloudcover5').innerHTML = `${response[0].periods[5].sky}% Cloud Cover`
      // Day 7
      document.getElementById('temp6day').textContent = response[0].periods[6].maxTempF;
      document.getElementById('templow6day').textContent = response[0].periods[6].minTempF;
      document.getElementById('wxicon6').innerHTML = `<img src="https://raw.githubusercontent.com/JesseWx2011/weather-dashboard/main/icons/${response[0].periods[6].icon}"></img>`;
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
      // High Temperatures
      var maxtemp0 = response[0].periods[0].maxTempF
      var maxtemp1 = response[0].periods[1].maxTempF
      var maxtemp2 =  response[0].periods[2].maxTempF 
      // Low Temperatures
      var mintemp0 = response[0].periods[0].minTempF
      var mintemp1 = response[0].periods[1].minTempF
      var mintemp2 =  response[0].periods[2].minTempF 
      // Detailed Information Container 
      extraphrase = ""
      extraphrase1 = ""
      extraphrase2 = ""
      /* For the Heat Wave phrase, there should be a comma before the phrase, which is why for temperatures greater than or equal to 110, it starts with a lowercase 
      letter */ 
      if (maxtemp0 >= 80) {
         extraphrase = "Warm,"
      } if (maxtemp0 >= 90) {
         extraphrase = "Hot,"
      } if (maxtemp0 >= 100) {
         extraphrase = "Very Hot,"
      } if (maxtemp0 >= 110) {
         extraphrase =  "with a Heat Wave!"
      } 
      
   if (maxtemp1 >= 80) {
         extraphrase1 = "Warm,"
      } if (maxtemp1 >= 90) {
         extraphrase1 = "Hot,"
      } if (maxtemp1 >= 100) {
         extraphrase1 = "Very Hot,"
      } if (maxtemp1 >= 110) {
         extraphrase1 =  "with a Heat Wave!"
   } 
   if (maxtemp2 >= 80) {
      extraphrase2 = "Warm,"
   } if (maxtemp2 >= 90) {
      extraphrase2 = "Hot,"
   } if (maxtemp2 >= 100) {
      extraphrase2 = "Very Hot,"
   } if (maxtemp2 >= 110) {
      extraphrase2 =  "with a Heat Wave!"
   }
   // Phrases for minimum temperature if it is cold
   if (mintemp0 <= 40) {
      extraphrase = "Chilly,"
   } if (mintemp0 <= 32) {
      extraphrase = "Cold,"
   }  if (mintemp0 <= 25) {
      extraphrase = "Very Cold,"
   } if (mintemp0 <= 8) {
      extraphrase = "Bittery Cold,"
   } if (mintemp0 <= -5) {
      extraphrase = "Extreme Cold,"
   } if (mintemp0 <= -17) {
      extraphrase = "With an Arctic Blast,"
   }
   if (mintemp1 <= 40) {
      extraphrase1 = "Chilly,"
   } if (mintemp1 <= 32) {
      extraphrase1 = "Cold,"
   }  if (mintemp1 <= 25) {
      extraphrase1 = "Very Cold,"
   } if (mintemp1 <= 8) {
      extraphrase1 = "Bittery Cold,"
   } if (mintemp1 <= -5) {
      extraphrase1 = "Extreme Cold,"
   } if (mintemp1 <= -17) {
      extraphrase1 = "With an Arctic Blast,"
   }  
   if (mintemp2 <= 40) {
      extraphrase2 = "Chilly,"
   } if (mintemp2 <= 32) {
      extraphrase2 = "Cold,"
   }  if (mintemp2 <= 25) {
      extraphrase2 = "Very Cold,"
   } if (mintemp2 <= 8) {
      extraphrase2 = "Bittery Cold,"
   } if (mintemp2 <= -5) {
      extraphrase2 = "Extreme Cold,"
   } if (mintemp2 <= -17) {
      extraphrase2 = "With an Arctic Blast,"
   }
      // Day 1 (Today/Tonight)
      document.getElementById('temptoday').innerHTML = `High Temperature: ${maxtemp0}°F (${response[0].periods[0].maxTempC}°C) `;
      document.getElementById('tempmintoday').innerHTML = `Low Temperature: ${mintemp0}°F (${response[0].periods[0].minTempC}°C) `;
      document.getElementById('fullforecast0').innerHTML = `${riskphrase} ${response[0].periods[0].weather}, ${extraphrase} with a high of ${maxtemp0} and a low of ${mintemp0}. The Max UV will be ${response[0].periods[0].uvi}. Winds to the ${response[0].periods[0].windDir} from ${response[0].periods[0].windSpeedMinMPH} to ${response[0].periods[0].windGust80mMPH} mph. ${rainfall0}`;

      // Day 2 (Tommorow)
      document.getElementById('temptoday1').innerHTML = `High Temperature: ${maxtemp1}°F (${response[0].periods[1].maxTempC}°C) `;
      document.getElementById('tempmintoday1').innerHTML = `Low Temperature: ${mintemp1}°F (${response[0].periods[1].minTempC}°C) `
      document.getElementById('fullforecast1').innerHTML = `${riskphrase1} ${response[0].periods[1].weather}, ${extraphrase1} with a high of ${maxtemp1} and a low of ${mintemp1}. The Max UV will be ${response[0].periods[1].uvi}. Winds to the ${response[0].periods[1].windDir} from ${response[0].periods[1].windSpeedMinMPH} to ${response[0].periods[1].windGust80mMPH} mph. ${rainfall1}` 
      // Day 3 (Some day after tommorow).
      document.getElementById('temptoday2').innerHTML = `High Temperature: ${maxtemp2}°F (${response[0].periods[2].maxTempC}°C) `;
      document.getElementById('tempmintoday2').innerHTML = `Low Temperature: ${mintemp2}°F (${response[0].periods[2].minTempC}°C) `
      document.getElementById('fullforecast2').innerHTML = `${response[0].periods[2].weather}, ${extraphrase2} with a high of ${maxtemp2} and a low of ${mintemp2}. The Max UV will be ${response[0].periods[1].uvi}. Winds to the ${response[0].periods[2].windDir} from ${response[0].periods[2].windSpeedMinMPH} to ${response[0].periods[2].windGust80mMPH} mph. ${rainfall2}`
   }
   getForecast();
   setTimeout(getForecast, 1000)
   // This is the function to get the alerts.
   getAlert();
   const alert_url = `https://api.aerisapi.com/alerts/${city}?client_id=${client_id}&client_secret=${client_secret}`;
   async function getAlert() {
      const results = await fetch(alert_url);
      const data = await results.json();
      const { response } = data;
      
      alerts.innerHTML = "";

      if (response?.length > 0) {
         return;
      }

      const details = response[0].details;
      const place = response[0].place;

      if (details?.name) {
         alerts.innerHTML = `<div style="background-color: #${details.color};">Alert: ${details.name} in effect for ${place.name} ${place.state}.<a href="alertdetail.html?city=${city}">Click Here for more information on alerts</a></div>`
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
   function spcoutlook() {
   document.getElementById("spcbutton").addEventListener("click", function() {
         window.location = `spc.html?city=${city}`
});
   }
   spcoutlook()
   function homebutton() {
      window.location = `./index.html?city=${city}`
  }
  homebutton()
  
