function notifyMe() {
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
     console.log(data)
     var liteningaudio = "lightning.mp3"
     if (response[0].relativeTo.distanceMI !== null) {
        const notification =  new Notification("Lightning Alert:", {
             body: `Lightning struck ${response[0].relativeTo.distanceMI} miles (${response[0].relativeTo.distanceKM} km) ${response[0].relativeTo.bearingENG} of this Location in ${city}.`,
             icon: "lightning.svg",
             audio: new Audio('lightning.mp3'),
           });
           document.getElementById("lightningbutton").style.display = "block"
           alertaudio.innerHTML = `<audio controls autoplay><source src="${liteningaudio}"></audio>` 
           if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
          alert(`Lightning struck ${response[0].relativeTo.distanceMI} miles (${response[0].relativeTo.distanceKM} km) ${response[0].relativeTo.bearingENG} of this Location in ${city}.`)
          }}};  
  litening()
}
notifyMe()