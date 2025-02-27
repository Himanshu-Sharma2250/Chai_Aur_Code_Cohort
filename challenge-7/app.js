const accordionButton1 = document.getElementById("accordion-btn-1")
const accordionButton2 = document.getElementById("accordion-btn-2")
const accordionButton3 = document.getElementById("accordion-btn-3")

const accordionItem1 = document.getElementById("accordion-item-1")
const accordionItem2 = document.getElementById("accordion-item-2")
const accordionItem3 = document.getElementById("accordion-item-3")

accordionButton1.addEventListener('click', () => {
    if (accordionItem1.classList.contains("active")) {
        accordionItem1.classList.remove("active")
    }
    else {
        accordionItem1.classList.add("active")
    }
})

accordionButton2.addEventListener('click', () => {
    if (accordionItem2.classList.contains("active")) {
        accordionItem2.classList.remove("active")
    }
    else {
        accordionItem2.classList.add("active")
    }
})

accordionButton3.addEventListener('click', () => {
    if (accordionItem3.classList.contains("active")) {
        accordionItem3.classList.remove("active")
    }
    else {
        accordionItem3.classList.add("active")
    }
})
