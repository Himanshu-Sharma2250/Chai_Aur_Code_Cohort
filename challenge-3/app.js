const nameInput = document.getElementById("nameInput")
const jobInput = document.getElementById("jobInput")
const ageInput = document.getElementById("ageInput")
const bioInput = document.getElementById("bioInput")
const nameDisplay = document.getElementById("nameDisplay")
const jobDisplay = document.getElementById('jobDisplay')
const ageDisplay = document.getElementById('ageDisplay')
const bioDisplay = document.getElementById('bioDisplay')
const letters = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" , "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"];

function displayRealTime(event, target) {
    if (event.key == 'Backspace') {
        const value = target.innerText;
        const newValue = value.slice(0, -1)
        // console.log(newValue)
        target.innerText = newValue
    } 
    else if (letters.includes(event.key)) {
        target.textContent += "" + `${event.key}`
        console.log(`${event.key}`)
    }
}

nameInput.addEventListener('click', () => {
    nameDisplay.innerText = ""
})

nameInput.addEventListener('keydown', (event) => {
    displayRealTime(event, nameDisplay)
})

jobInput.addEventListener('click', () => {
    jobDisplay.innerText = ""
})

jobInput.addEventListener('keydown', (event) => {
    displayRealTime(event, jobDisplay)
})

ageInput.addEventListener('click', () => {
    ageDisplay.innerText = ""
})

ageInput.addEventListener('keydown', (event) => {
    displayRealTime(event, ageDisplay)
})

bioInput.addEventListener('click', () => {
    bioDisplay.innerText = ""
})

bioInput.addEventListener('keydown', (event) => {
    displayRealTime(event, bioDisplay)
})
