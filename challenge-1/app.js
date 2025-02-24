const toggleBtn = document.getElementById("toggleButton")
const body = document.getElementById("body")
const Status = document.getElementById("status")
const bulb = document.getElementById("bulb")

toggleBtn.addEventListener('click', () => {
    body.classList.toggle("dark-mode")
    bulb.classList.toggle("off")
    // in above statement : this checks if "off" class exist, if yes then it removes the "off" class meaning only "bulb" class exist so, it add the style of yellow and glow 
    // and when clicked again, it check if "off" exist, which donot exist so it add the "off" class.

    Status.innerText = "Status: On"
    toggleBtn.innerText = "Turn Off"
})