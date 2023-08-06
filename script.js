// To hide the message dialog box on clicking cross 
const confirmation_pos = document.getElementsByClassName("positive_alert")
const confirmation_neg = document.getElementsByClassName("negative_alert")
let addedTasks = [];

let dismissal = document.querySelectorAll(".cross_button")
dismissal[0].addEventListener("click", (e) => {
    let positive_dismissal = document.getElementsByClassName("positive_alert")
    confirmation_pos[0].style.top = "-50px"
})

dismissal[1].addEventListener("click", (e) => {
    let negative_dismissal = document.getElementsByClassName("negative_alert")
    confirmation_neg[0].style.top = "-50px"
})

const addbutton = document.getElementById("addListButton")
const removebutton = document.getElementById("removeListButton")

addbutton.addEventListener("click", (e) => {
    let task_el = document.createElement('div')
    e.preventDefault()
    const pos_alert_msg_value = 1
    let listTitle = texttitle.value
    let listDes = textdesc.value
    addedTasks.push(task_el);

    task_el.classList.add('list_styling')
    toDo.appendChild(task_el)
    task_el.innerHTML = `&rarr; <h4>${listTitle}</h4>:
    <p>${listDes}</p>`
    texttitle.value = ""
    textdesc.value = ""

    let notaskmsg = document.getElementById("toDo").childElementCount
    if (notaskmsg != 0) {
        let Emptyinfo = document.getElementById("Empty_info")
        Emptyinfo.style.display = "none"
    }
    task_el.addEventListener("dblclick", (e) => {
        e.preventDefault()
        toDo.removeChild(task_el)
    })
    task_el.addEventListener("click", (e) => {
        e.preventDefault()
        task_el.style.textDecoration = "line-through"
    })
    if (pos_alert_msg_value == 1) {
        setTimeout(() => {
            confirmation_pos[0].style.top = "10px"
        }, 200);
        setTimeout(() => {
            confirmation_pos[0].style.top = "-50px"
        }, 2500)
    }
})
removebutton.addEventListener("click", (e) => {
    if (addedTasks.length > 0) {
        e.preventDefault()
        let task_el = addedTasks.pop();
        toDo.removeChild(task_el)
        setTimeout(() => {
            confirmation_neg[0].style.top = "10px"
        }, 200);
        setTimeout(() => {
            confirmation_neg[0].style.top = "-50px"
        }, 2500)
        console.log("Binod")
    }
})
