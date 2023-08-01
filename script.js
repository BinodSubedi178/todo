let dismissal = document.querySelectorAll(".cross_button")
        dismissal[0].addEventListener("click",(e)=>{
            let positive_dismissal = document.getElementsByClassName("positive_alert")
            positive_dismissal[0].style.display = "none"
            console.log(positive_dismissal)
        })