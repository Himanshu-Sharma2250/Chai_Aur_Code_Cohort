const mainHeading = document.getElementById("mainHeading")
const redBtn = document.getElementById("redButton")
const greenBtn = document.getElementById("greenButton")
const blueBtn = document.getElementById("blueButton")
const purpleBtn = document.getElementById("purpleButton")
const resetBtn = document.getElementById("resetButton")

redBtn.addEventListener('click', () => {
    mainHeading.style.color = "red"
    mainHeading.style.fontFamily = "Gill Sans MT"
})
greenBtn.addEventListener('click', () => {
    mainHeading.style.color = "green"
    mainHeading.style.fontFamily = " Calibri"
})
blueBtn.addEventListener('click', () => {
    mainHeading.style.color = "blue"
    mainHeading.style.fontFamily = "Trebuchet MS"
})
purpleBtn.addEventListener('click', () => {
    mainHeading.style.color = "purple"
    mainHeading.style.fontFamily = "Courier New"
})
resetBtn.addEventListener('click', () => {
    mainHeading.style.color = "black"
    mainHeading.style.fontFamily = "Arial, sans-serif"    
})