const toggleBtn = document.getElementById("toggleButton")
const body = document.getElementById("body")
const Status = document.getElementById("status")
const bulb = document.getElementById("bulb")

toggleBtn.addEventListener('click', () => {
    body.classList.toggle("dark-mode")
    bulb.classList.toggle("off")

    Status.innerText = "Status: On"
    toggleBtn.innerText = "Turn Off"
})