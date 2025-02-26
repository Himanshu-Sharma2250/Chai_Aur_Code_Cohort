// const digitClockElement = document.querySelector(".digit-clock")
const digitClockElement = document.getElementById("digitClock")
const dateElement = document.getElementById("dates")

function updateTime() {
    const now = new Date()
    const Hour = now.getHours()
    const Minute = now.getMinutes()
    const Second = now.getSeconds()

    const currentHour = Hour % 12 || 12
    const currentMinute = Minute > 9 ? `${Minute}` : `0${Minute}`
    const currentSecond = Second > 9 ? `${Second}` : `0${Second}`

    digitClockElement.innerText = `${currentHour}:${currentMinute}:${currentSecond}`
}

updateTime()

setInterval(updateTime, 1000)

function displayDate() {
    const now = new Date()
    const day = now.getDay()
    const date = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    dateElement.innerText = `${days[day]} ${date} ${months[month]} ${year}`
}

displayDate()

const hourHand = document.querySelector(".hour")
const minuteHand = document.querySelector(".minute")
const secondHand = document.querySelector(".second")

function updateSecondHand() {
    const now = new Date()
    const second = now.getSeconds()
    let secondDegree = 6 * second
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegree}deg)`
}
updateSecondHand()

function updateMinuteHand() {
    const now = new Date()
    const minute = now.getMinutes()
    let minuteDegree = 6 * minute
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`
}
updateMinuteHand()

function updateHourHand() {
    const now = new Date()
    const hour = now.getHours()
    const currentHour = hour % 12 || 12
    const minute = now.getMinutes()
    // ye niche wala formula syd sahi ho sakta hai ya galat bhi ho sakta hai par jo kaam mein karwana chahta tha wo ho raha hai
    let hourDegree = (30 * currentHour) + 0.5 * minute
    // console.log(hourDegree)
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegree}deg)`
}
updateHourHand()

setInterval(updateSecondHand, 1000)
setInterval(updateMinuteHand, 1000)
setInterval(updateHourHand, 1000)

const clockDiv = document.querySelector(".clock")

function displayNumber(degree, number) {
    const numberElement = document.createElement('div')
    numberElement.className = "number"
    numberElement.style.setProperty("--rotation", `${degree}deg`)
    clockDiv.appendChild(numberElement)

    const span = document.createElement('span')
    span.innerText = `${number}`
    numberElement.appendChild(span)
}

displayNumber(0, 12)
displayNumber(30, 1)
displayNumber(60, 2)
displayNumber(90, 3)
displayNumber(120, 4)
displayNumber(150, 5)
displayNumber(180, 6)
displayNumber(210, 7)
displayNumber(240, 8)
displayNumber(270, 9)
displayNumber(300, 10)
displayNumber(330, 11)