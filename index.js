let input_text = document.querySelector("#input-text")
let add_button = document.querySelector("#add-button")
let main_box = document.querySelector(".main-box")
let view_box = document.querySelector("#view-box")
const clear_button = document.querySelector("#clear-button")

function add(){
    if (input_text.value == 0){
        alert("pls fill the input")
    }
    else {
        
        let div = document.createElement("div")
        div.setAttribute("id","view-box")
        div.innerHTML=`<div id="contend-box">${input_text.value}</div><button id='clear-button' onclick="remove(event)">Clear</button>`
        main_box.append(div)
        input_text.value=" "
    }}
    
function remove(event){
    event.target.parentElement.remove()
}

