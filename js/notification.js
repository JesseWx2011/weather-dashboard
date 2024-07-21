function notifyMe() {
  // Request acess to show notifications
  if (!("Notification" in window)) {
  } else if (Notification.permission === "granted") {
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // Do nothing
      }})};
  litening();
  const alerts = `https://api.aerisapi.com/lightning/flash/${city}?format=json&radius=25mi&minradius=0mi&limit=10&client_id=${client_id}&client_secret=${client_secret} `
  async function litening() {
     const responsee = await fetch(alerts)
     const data = await responsee.json()
     const {response} = data
     
     var liteningaudio = "lightning.mp3"
     if (response[0]?.relativeTo?.distanceMI !== null) {
      document.getElementById("lightningbutton").style.display = "block"
        const notification =  new Notification("Lightning Alert:", {
             body: `Lightning struck ${response[0].relativeTo.distanceMI} miles (${response[0].relativeTo.distanceKM} km) ${response[0].relativeTo.bearingENG} of this Location in ${city}.`,
             icon: "lightning.svg",
             audio: new Audio('lightning.mp3'),
           });
         
         
           alertaudio.innerHTML = `<audio controls autoplay><source src="${liteningaudio}"></audio>` 
           if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

          alert(`Lightning struck ${response[0].relativeTo.distanceMI} miles (${response[0].relativeTo.distanceKM} km) ${response[0].relativeTo.bearingENG} of this Location in ${city}.`)
          
        
        }}};  
  litening()
}
notifyMe()
alerts();
// Get Alerts
const wxalerts = `https://data.api.xweather.com/alerts/${city}?client_id=${client_id}&client_secret=${client_secret}`
async function alerts() {
 const responsee = await fetch(wxalerts)
 const data = await responsee.json()
 const {response} = data;
 
// JSON returns as ISO-8601
  alert = response[0].details.name
  starttimeold = response[0].timestamps.beginsISO // When Alert Started
  endtimeold = response[0].timestamps.expiresISO // When Alert Expires
  tz = response[0].profile.tz // Timezone
  /* Convert it to a string we are more familiar with
    Example: 2021-10-04T17:08:09.000Z
    String Conversion: October 4th, 2021 17:08:09 UTC
  */
 starttime = new Date(starttimeold).toLocaleString("en-US", {timeStyle: "short", timeZone: tz, }); //
 endtime = new Date(endtimeold).toLocaleString("en-US", {timeStyle: "short", timeZone: tz, });
  console.log(starttime)
  if (alert !== null) {
     alertnotificaton = new Notification("Weather Alert:", {
      body: `${alert} in effect from ${starttime} and ending at ${endtime}`,
      icon: "alert.svg",
    })};
    // Redirect to a web page when notification is clicked  
    alertnotificaton.addEventListener("click", (event) => {
      event.preventDefault();
      window.open(`./alertdetail.html?city=${city}`, "_blank");

    })
} 
alerts();