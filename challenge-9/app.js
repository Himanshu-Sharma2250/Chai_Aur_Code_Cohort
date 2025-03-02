const toggleButton = document.querySelector(".toggle-btn")
const panelDiv = document.querySelector(".panel")
const contentDiv = document.querySelector(".content")

toggleButton.addEventListener('click', (event) => {
    panelDiv.classList.add("active")
    console.log("in toggle")

    const closeButton = document.querySelector(".close-btn")
    closeButton.addEventListener('click', () => {
        panelDiv.classList.remove("active")
    })

    const menuItems = document.querySelectorAll(".menu-item")
    menuItems.forEach( (menuItem) => {
        menuItem.addEventListener('click', () => {
            event.stopPropagation()
            alert(menuItem.innerHTML)
        })
    } )

    // for when click outside the panel, it closes the panel
    event.stopPropagation()

    document.addEventListener('click', (event) => {
        if (!panelDiv.contains(event.target) && !toggleButton.contains(event.target)) {
            panelDiv.classList.remove("active")
        }
    })
})

