const taskInput = document.getElementById("taskInput")
const addButton = document.getElementById("addButton")
const taskList = document.getElementById("taskList")
const emptyList = document.querySelector(".empty-list")
const totalTasks = document.getElementById("totalTasks")
const completedTasks = document.getElementById("completedTasks")

function updateTotalTasks(task) { 
    if (task == "add") {
        const totalTask = totalTasks.innerText
        // console.log(totalTask)
        const totalTaskValue = totalTask.slice(totalTask.length-1)
        // console.log(totalTaskValue)
        const updateTotalTaskValue = parseInt(totalTaskValue) + 1
        // console.log(updateTotalTaskValue)
        let totalTaskText = totalTask.slice(0, totalTask.length-1)
        // console.log(totalTaskText)
        const updateTotalTaskValueString = updateTotalTaskValue.toString()
        // console.log(updateTotalTaskValueString)
        totalTaskText += updateTotalTaskValueString
        // console.log(totalTaskText)
        totalTasks.innerText = totalTaskText
    }
    else {
        const totalTask = totalTasks.innerText
        // console.log(totalTask)
        const totalTaskValue = totalTask.slice(totalTask.length-1)
        // console.log(totalTaskValue)
        const updateTotalTaskValue = parseInt(totalTaskValue) - 1
        // console.log(updateTotalTaskValue)
        let totalTaskText = totalTask.slice(0, totalTask.length-1)
        // console.log(totalTaskText)
        const updateTotalTaskValueString = updateTotalTaskValue.toString()
        // console.log(updateTotalTaskValueString)
        totalTaskText += updateTotalTaskValueString
        // console.log(totalTaskText)
        totalTasks.innerText = totalTaskText

        if (updateTotalTaskValue == 0) {
            return "reset"
        }
    }
}

function updateCompleteTasks() {
    const completedTask = completedTasks.innerText
    const completedTaskValue = completedTask.slice(completedTask.length-1)
    const updateCompleteTaskvalue = parseInt(completedTaskValue) + 1
    let completedTaskText = completedTask.slice(0, completedTask.length-1)
    completedTaskText += updateCompleteTaskvalue.toString()
    completedTasks.innerText = completedTaskText
}

addButton.addEventListener('click', () => {
    const value = taskInput.value
    emptyList.remove()

    // new list 
    const li = document.createElement('li')
    li.className = "task-item"
    // new list child - input[type: "checkbox"]
    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.className = "complete-checkbox"
    // new list child - span
    const span = document.createElement("span")
    span.className = "task-text"
    span.innerText = value
    // new list child - button
    const removeButton = document.createElement('button')
    removeButton.className = "delete-button"
    removeButton.innerHTML = "Delete"

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(removeButton)

    taskList.appendChild(li)

    updateTotalTasks("add")

    checkbox.addEventListener('click', () => {
        span.style.textDecoration = "line-through"
        span.style.color = "#95a5a6"

        updateCompleteTasks()
    })

    removeButton.addEventListener('click', () => {
        li.remove()

        const ifReset = updateTotalTasks("remove")

        if (ifReset == "reset") {
            li.innerText = "No tasks yet. Add one above!"
            li.className = "empty-list"
            taskList.appendChild(li)
        }
    })
})
