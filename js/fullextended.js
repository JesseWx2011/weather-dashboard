// Get Params

// Function for Parameters
console.log(`URL:`, window.location);

const values = window.location.search;


const parameters = new URLSearchParams(values);
const newcity = parameters.get('city');


var city = newcity
getForecastFull();
async function getForecastFull() {
   const forecast_url = `https://api.aerisapi.com/forecasts/${city}?limit=30&client_id=${client_id}&client_secret=${client_secret}`;
   const responsee = await fetch(forecast_url);
   const data = await responsee.json();
   const { response } = data;
   console.log(data)
   document.getElementById("titleextended").innerHTML = `Extended Forecast for ${response[0].place.name}, ${response[0].place.state}`
   // Day 1
   document.getElementById('temp0day').textContent = response[0].periods[0].maxTempF;
   document.getElementById('templow0day').textContent = response[0].periods[0].minTempF;
   document.getElementById('wxicon0').innerHTML = `<img src="../icons/${response[0].periods[0].icon}"></img>`;
   document.getElementById('weather0').textContent = response[0].periods[0].weatherPrimary;
   document.getElementById('cloudcover0').innerHTML = `${response[0].periods[0].sky}% Cloud Cover`
   document.getElementById("wind0").innerHTML = `Wind ${response[0].periods[0].windDir} at ${response[0].periods[0].windSpeedMPH} mph`
   // Day 2
   document.getElementById('temp1day').textContent = response[0].periods[1].maxTempF;
   document.getElementById('templow1day').textContent = response[0].periods[1].minTempF;
   document.getElementById('wxicon1').innerHTML = `<img src="../icons/${response[0].periods[1].icon}"></img>`;
   document.getElementById('weather1').textContent = response[0].periods[1].weatherPrimary;
   document.getElementById('cloudcover1').innerHTML = `${response[0].periods[1].sky}% Cloud Cover`
   document.getElementById("wind1").innerHTML = `Wind ${response[0].periods[1].windDir} at ${response[0].periods[1].windSpeedMPH} mph`

   // Day 3
   document.getElementById('temp2day').textContent = response[0].periods[2].maxTempF;
   document.getElementById('templow2day').textContent = response[0].periods[2].minTempF;
   document.getElementById('wxicon2').innerHTML = `<img src="${response[0].periods[2].icon}"></img>`;
   document.getElementById('weather2').textContent = response[0].periods[2].weatherPrimary;
   document.getElementById('cloudcover2').innerHTML = `${response[0].periods[2].sky}% Cloud Cover`
   document.getElementById("wind2").innerHTML = `Wind ${response[0].periods[2].windDir} at ${response[0].periods[2].windSpeedMPH} mph`
   // Day 4
   document.getElementById('temp3day').textContent = response[0].periods[3].maxTempF;
   document.getElementById('templow3day').textContent = response[0].periods[3].minTempF;
   document.getElementById('wxicon3').innerHTML = `<img src="${response[0].periods[3].icon}"></img>`;
   document.getElementById('weather3').textContent = response[0].periods[3].weatherPrimary;
   document.getElementById('cloudcover3').innerHTML = `${response[0].periods[3].sky}% Cloud Cover`
   document.getElementById("wind3").innerHTML = `Wind ${response[0].periods[3].windDir} at ${response[0].periods[3].windSpeedMPH} mph`
   // Day 5
   document.getElementById('temp4day').textContent = response[0].periods[4].maxTempF;
   document.getElementById('templow4day').textContent = response[0].periods[4].minTempF;
   document.getElementById('wxicon4').innerHTML = `<img src="${response[0].periods[4].icon}"></img>`;
   document.getElementById('weather4').textContent = response[0].periods[4].weatherPrimary;
   document.getElementById('cloudcover4').innerHTML = `${response[0].periods[4].sky}% Cloud Cover`
   document.getElementById("wind4").innerHTML = `Wind ${response[0].periods[4].windDir} at ${response[0].periods[4].windSpeedMPH} mph`
   // Day 6
   document.getElementById('temp5day').textContent = response[0].periods[5].maxTempF;
   document.getElementById('templow5day').textContent = response[0].periods[5].minTempF;
   document.getElementById('wxicon5').innerHTML = `<img src="${response[0].periods[5].icon}"></img>`;
   document.getElementById('weather5').textContent = response[0].periods[5].weatherPrimary;
   document.getElementById('cloudcover5').innerHTML = `${response[0].periods[5].sky}% Cloud Cover`
   document.getElementById("wind5").innerHTML = `Wind ${response[0].periods[5].windDir} at ${response[0].periods[5].windSpeedMPH} mph`
   // Day 7
   document.getElementById('temp6day').textContent = response[0].periods[6].maxTempF;
   document.getElementById('templow6day').textContent = response[0].periods[1].minTempF;
   document.getElementById('wxicon6').innerHTML = `<img src="${response[0].periods[6].icon}"></img>`;
   document.getElementById('weather6').textContent = response[0].periods[6].weatherPrimary;
   document.getElementById('cloudcover6').innerHTML = `${response[0].periods[6].sky}% Cloud Cover`
   document.getElementById("wind6").innerHTML = `Wind ${response[0].periods[6].windDir} at ${response[0].periods[6].windSpeedMPH} mph`
      // Day 8
      document.getElementById('temp7day').textContent = response[0].periods[7].maxTempF;
      document.getElementById('templow7day').textContent = response[0].periods[7].minTempF;
      document.getElementById('wxicon7').innerHTML = `<img src="${response[0].periods[7].icon}"></img>`;
      document.getElementById('weather7').textContent = response[0].periods[7].weatherPrimary;
      document.getElementById('cloudcover7').innerHTML = `${response[0].periods[7].sky}% Cloud Cover`
      document.getElementById("wind7").innerHTML = `Wind ${response[0].periods[0].windDir} at ${response[0].periods[7].windSpeedMPH} mph`
      // Day 9
      document.getElementById('temp8day').textContent = response[0].periods[8].maxTempF;
      document.getElementById('templow8day').textContent = response[0].periods[8].minTempF;
      document.getElementById('wxicon8').innerHTML = `<img src="${response[0].periods[8].icon}"></img>`;
      document.getElementById('weather8').textContent = response[0].periods[8].weatherPrimary;
      document.getElementById('cloudcover8').innerHTML = `${response[0].periods[8].sky}% Cloud Cover`
      document.getElementById("wind8").innerHTML = `Wind ${response[0].periods[8].windDir} at ${response[0].periods[8].windSpeedMPH} mph`
      // Day 10
      document.getElementById('temp9day').textContent = response[0].periods[9].maxTempF;
      document.getElementById('templow9day').textContent = response[0].periods[9].minTempF;
      document.getElementById('wxicon9').innerHTML = `<img src="${response[0].periods[9].icon}"></img>`;
      document.getElementById('weather9').textContent = response[0].periods[9].weatherPrimary;
      document.getElementById('cloudcover9').innerHTML = `${response[0].periods[9].sky}% Cloud Cover`
      document.getElementById("wind9").innerHTML = `Wind ${response[0].periods[9].windDir} at ${response[0].periods[9].windSpeedMPH} mph`
      // Day 11
      document.getElementById('temp10day').textContent = response[0].periods[10].maxTempF;
      document.getElementById('templow10day').textContent = response[0].periods[10].minTempF;
      document.getElementById('wxicon10').innerHTML = `<img src="${response[0].periods[10].icon}"></img>`;
      document.getElementById('weather10').textContent = response[0].periods[10].weatherPrimary;
      document.getElementById('cloudcover10').innerHTML = `${response[0].periods[10].sky}% Cloud Cover`
      document.getElementById("wind10").innerHTML = `Wind ${response[0].periods[10].windDir} at ${response[0].periods[10].windSpeedMPH} mph`
      // Day 12
      document.getElementById('temp11day').textContent = response[0].periods[11].maxTempF;
      document.getElementById('templow11day').textContent = response[0].periods[11].minTempF;
      document.getElementById('wxicon11').innerHTML = `<img src="${response[0].periods[11].icon}"></img>`;
      document.getElementById('weather11').textContent = response[0].periods[11].weatherPrimary;
      document.getElementById('cloudcover11').innerHTML = `${response[0].periods[11].sky}% Cloud Cover`
      document.getElementById("wind11").innerHTML = `Wind ${response[0].periods[11].windDir} at ${response[0].periods[11].windSpeedMPH} mph`
      // Day 13
      document.getElementById('temp12day').textContent = response[0].periods[12].maxTempF;
      document.getElementById('templow12day').textContent = response[0].periods[12].minTempF;
      document.getElementById('wxicon12').innerHTML = `<img src="${response[0].periods[12].icon}"></img>`;
      document.getElementById('weather12').textContent = response[0].periods[12].weatherPrimary;
      document.getElementById('cloudcover12').innerHTML = `${response[0].periods[12].sky}% Cloud Cover`
      document.getElementById("wind12").innerHTML = `Wind ${response[0].periods[12].windDir} at ${response[0].periods[12].windSpeedMPH} mph`
      // Day 14
      document.getElementById('temp13day').textContent = response[0].periods[13].maxTempF;
      document.getElementById('templow13day').textContent = response[0].periods[13].minTempF;
      document.getElementById('wxicon13').innerHTML = `<img src="${response[0].periods[13].icon}"></img>`;
      document.getElementById('weather13').textContent = response[0].periods[13].weatherPrimary;
      document.getElementById('cloudcover13').innerHTML = `${response[0].periods[13].sky}% Cloud Cover`
      document.getElementById("wind13").innerHTML = `Wind ${response[0].periods[13].windDir} at ${response[0].periods[13].windSpeedMPH} mph`
}
getForecastFull()