    // To hide the message dialog box on clicking cross 
let dismissal = document.querySelectorAll(".cross_button")
        dismissal[0].addEventListener("click",(e)=>{
            let positive_dismissal = document.getElementsByClassName("positive_alert")
            positive_dismissal[0].style.display = "none"
        })

        dismissal[1].addEventListener("click",(e)=>{
            let negative_dismissal = document.getElementsByClassName("negative_alert")
            negative_dismissal[0].style.display = "none"
    
        })
let addbutton = document.getElementById("addListButton")
let removebutton = document.getElementById("removeListButton")
addbutton.addEventListener("click",(e) =>{
    let listTitle = texttitle.value
    let listDes = textdesc.value
    
    let task_el = document.createElement('div')
    task_el.classList.add('list_styling')
    toDo.appendChild(task_el)
    task_el.innerHTML = `&rarr; <h4>${listTitle}</h4>:
    <p>${listDes}</p>`
    texttitle.value = ""
    textdesc.value = ""
    let notaskmsg = document.getElementById("toDo").childElementCount
        console.log(notaskmsg)
        if (notaskmsg != 0){
            let Emptyinfo = document.getElementById("Empty_info")
            Emptyinfo.style.display = "none"
        }
        removebutton.addEventListener("click",(e) =>{
            toDo.removeChild(task_el)
        })
})