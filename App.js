//Mobile
//Variables
let yourName = document.getElementById("yourName")
const hide = document.getElementById("hideButton")
const hidePlayers = document.getElementById("addedPlayers")
const refresh = document.getElementById("refresh")
const info = document.getElementById("info")
const addMe = document.getElementById("addMe")
const courtSelect = document.querySelectorAll(".courtItems")
const courtSelectDesktop = document.querySelectorAll(".courtsContent")
const addedPlayers = document.getElementById("addedPlayers")
const mainBorderTop = document.getElementById("mainBorderTop")
const showOtherInfo = document.getElementById("showOtherInfo")
const accouncement = document.getElementById("announcement")
const images = document.querySelectorAll(".courtsContent");
//

hide.addEventListener("click", () =>{
    hide.classList.toggle("rotate");
    hidePlayers.classList.toggle("hide");
    mainBorderTop.classList.toggle("hide")
})

//Refresh the Page

refresh.addEventListener("click", () =>{
    location.reload();
})

//Create New Waiting List

addMe.addEventListener("click", () =>{
if (addedPlayers.childElementCount === 8) {
    return;
}else{
    div = document.createElement("div")
    div.classList.add("dark")
    div.classList.add("border-top")
    div.classList.add("mainPlayerList")
    div.innerHTML =     `
<div class="gameType"><img src="./img/icons/racketone.svg" alt=""></div>
<div class="gameRating">
    3.5
</div>
<div class="leftPlayers">
    <p>Lynn Tanner</p>
    <p>Roderick Flich</p>
</div>
<div class="rightPlayers">
    <p>Sledge Hammer</p>
    <p>Willie Tanner</p>
</div>
<div class="timer"><span>19</span> mins</div>
<i class="trashCan"><img src="./img/icons/trash-can.svg" alt="" /></i>
                        `
    addedPlayers.appendChild(div);
    addMeDisabled()
}
})

//Court Selection

courtSelect.forEach(button => {
    button.addEventListener("click", (e) => {
      e.target.closest(".courtItems").classList.toggle("selected");
      const previousImg = e.target.closest(".courtItems").previousElementSibling;
      if (previousImg) {
        previousImg.classList.toggle("selected");
      }
    });
  });

  courtSelectDesktop.forEach(button => {
    button.addEventListener("click", (e) => {
      e.target.closest(".courtsContent").classList.toggle("selected");
      const nextImg = e.target.closest(".courtsContent").nextElementSibling;
      if (nextImg) {
        nextImg.classList.toggle("selected");
      }
    });
  });

//Court Removal

document.addEventListener("click", (event) => {
    if (event.target.closest(".trashCan")) {
      event.target.closest(".mainPlayerList").remove();
      addMeDisabled()
    }
  });

//Show Other Info

showOtherInfo.addEventListener("click", () =>{
    if (accouncement.classList.contains("hide")){
        accouncement.classList.toggle("hide");
        showOtherInfo.innerHTML = `Hide other info`
    }else{
        accouncement.classList.toggle("hide");
        showOtherInfo.innerHTML = `Show other info`
    }
})

//Disable if there are 8 items

function addMeDisabled() {  
if (addedPlayers.childElementCount === 8){
    addMe.classList.add("addMeDisabled")
    addMe.textContent = "Your waiting list is full"
}else{
    addMe.classList.remove("addMeDisabled")
    if (window.innerWidth > 767){
        addMe.textContent = "Add to the waiting list"
    }else{
        addMe.textContent = "Add me";
    }
}
}

//! Disable Right Click

// document.addEventListener("contextmenu", function(e){
//     e.preventDefault();
// }, false);

//Desktop Reponsive Add Me Button

const addMeDesktop = window.matchMedia("(min-width: 768px)");

addMeDesktop.addListener(handleDeviceChange);

function handleDeviceChange(e) {
    if (addMe.classList.contains("addMeDisabled")){
        addMe.textContent = "Your waiting list is full";
    }else if (e.matches){addMe.textContent = "Add to the waiting list";} 
    else if (window.innerWidth < 767){ addMe.textContent = "Add me"}
}
handleDeviceChange(addMeDesktop);