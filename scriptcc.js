getWx();  
const api_url = `https://api.aerisapi.com/conditions/:auto?format=json&plimit=1&filter=1min&client_id=DZLMGEFxCvfbQRG7aSN3c&client_secret=N63dulcmKzQTrWjIrTe2aGKmOw5AhERWWUmjHQKt`;
  async function getWx() {   
      const responsee = await fetch(api_url);
      const data = await responsee.json(); 
      const {response} = data;
      console.log(response);    


       document.getElementById('cityname').innerHTML = `Weather for ${response[0].place.name}, ${response[0].place.state}, ${response[0].place.country}`;
       document.getElementById('temp').innerHTML = `${response[0].periods[0].tempF}°F (${response[0].periods[0].tempC}°C)`;
       document.getElementById('title').innerHTML = `Weather for ${response[0].place.name}, ${response[0].place.state}`
       document.getElementById('icon').innerHTML = `<img src="${response[0].periods[0].icon}" style="width: 10%; padding-left: 590px; display: flex;"></img>`;
       document.getElementById('weather').innerHTML = `${response[0].periods[0].weather}`
       document.getElementById('feelslike').innerHTML = `Feels Like ${response[0].periods[0].feelslikeF}°F (${response[0].periods[0].feelslikeC}°C)`
       document.getElementById('windvalue').innerHTML = `${response[0].periods[0].windSpeedMPH} mph`;
       document.getElementById('uvvalue').innerHTML = `${response[0].periods[0].uvi}`;
       document.getElementById('humvalue').innerHTML = `${response[0].periods[0].humidity}%`;
       document.getElementById('pressurevalue').innerHTML = `${response[0].periods[0].pressureIN} inHg`;
       document.getElementById('dewvalue').innerHTML = `${response[0].periods[0].dewpointF}°F`;
       document.getElementById('visibilityvalue').innerHTML = `${response[0].periods[0].visibilityMI} mi`;
    
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
setInterval(getWx, 15000)
getForecast(); 
async function getForecast() {   
    const forecast_url = `https://api.aerisapi.com/forecasts/:auto?limit=7&client_id=DZLMGEFxCvfbQRG7aSN3c&client_secret=N63dulcmKzQTrWjIrTe2aGKmOw5AhERWWUmjHQKt`;
    const responsee = await fetch(forecast_url);
    const data = await responsee.json(); 
    const {response} = data;
    console.log(response);    
    
    // Day 1
    document.getElementById('temp0day').textContent = response[0].periods[0].maxTempF;
    document.getElementById('wxicon0').innerHTML = `<img src="${response[0].periods[0].icon}"></img>`;
    // Day 2
    document.getElementById('temp1day').textContent = response[0].periods[1].maxTempF;
    document.getElementById('wxicon1').innerHTML = `<img src="${response[0].periods[1].icon}"></img>`;
    // Day 3
    document.getElementById('temp2day').textContent = response[0].periods[2].maxTempF;
    document.getElementById('wxicon2').innerHTML = `<img src="${response[0].periods[2].icon}"></img>`;
    // Day 4
    document.getElementById('temp3day').textContent = response[0].periods[3].maxTempF;
    document.getElementById('wxicon3').innerHTML = `<img src="${response[0].periods[3].icon}"></img>`;
    // Day 5
    document.getElementById('temp4day').textContent = response[0].periods[4].maxTempF;
    document.getElementById('wxicon4').innerHTML = `<img src="${response[0].periods[4].icon}"></img>`;
    // Day 6
    document.getElementById('temp5day').textContent = response[0].periods[5].maxTempF;
    document.getElementById('wxicon5').innerHTML = `<img src="${response[0].periods[5].icon}"></img>`;
    // Day 7
    document.getElementById('temp6day').textContent = response[0].periods[6].maxTempF;
    document.getElementById('wxicon6').innerHTML = `<img src="${response[0].periods[6].icon}"></img>`;
}
getForecast();