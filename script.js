const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
const home = document.querySelector(".homebtn");
const about =document.querySelector(".ab");
// footer
const foot =document.querySelector(".footer");

home.addEventListener("click", ()=>{
    window.scrollTo({
        top : 0,
        behavior: "smooth",
    });

})
// function about
about.addEventListener("click", ()=>{
    let pos = foot.getBoundingClientRect().top;
    window.scrollTo({
        top : pos,
        behavior: "smooth",
    });
})

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let del = document.createElement("img");
   
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    del.className = "del";
    del.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(del);
    addToBegginning(notesContainer, inputBox)  // calling the function to creat an element on the top
})

notesContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
onload = function(){

}

// function insert before
function addToBegginning(parent, toInsert){
    const firstChild = parent.firstChild;
    parent.insertBefore(toInsert, firstChild);
}

// To clear the storage
//localStorage.clear();

