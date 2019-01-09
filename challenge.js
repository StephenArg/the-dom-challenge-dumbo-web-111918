let counter = document.querySelector("#counter")
let resume = true


setInterval(function(){
    if (resume) {
    counter.innerText = parseInt(counter.innerText) + 1;
    count = 0}
}, 1000)

let minus = document.querySelector("#minus")
let plus = document.querySelector("#plus")
let heart = document.querySelector("#heart")
let pause = document.querySelector("#pause")
let form = document.querySelector("#comment-form")



function countFormat () {
    count += 1
    if (count === 1) {return "1 time"
} else {return `${count} times`}
}

function createLike () {
    let li = document.createElement("li")
    li.innerText = `${counter.innerText} has been liked ${countFormat()}.`
    return li
}

function clickedButton(event){
    if (event.target === minus) {
        counter.innerText = parseInt(counter.innerText) - 1
    } else if (event.target === plus) { counter.innerText = parseInt(counter.innerText) + 1
    } else if (event.target === heart) { 
        let likes = document.querySelector(".likes")
        if (count > 0) {
            likes.childNodes[(likes.childElementCount - 1)].innerText = `${counter.innerText} has been liked ${countFormat()}.`
        } else {likes.append(createLike())}
     } else if (event.target === pause) {
         if (pause.innerText == "pause") {
             resume = false
             pause.innerText = "resume"
         } else if (pause.innerText === "resume") {
             resume = true
             pause.innerText = "pause"
         }
    }
}

function submit (event) {
    event.preventDefault()
    let comments = document.querySelectorAll("#list")
    let li = document.createElement("li")
    li.innerText = event.target[0].value
    comments[0].append(li)
    event.target[0].value = ""
    
}


minus.addEventListener("click", clickedButton)
plus.addEventListener("click", clickedButton)
heart.addEventListener("click", clickedButton)
form.addEventListener("submit", submit)

