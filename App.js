let yourName = document.getElementById("yourName")
const hide = document.getElementById("hideButton")
const hidePlayers = document.getElementById("addedPlayers")
const refresh = document.getElementById("refresh")
const info = document.getElementById("info")
const addMe = document.getElementById("addMe")
const courtSelect = document.querySelectorAll(".courtItems")
const addedPlayers = document.getElementById("addedPlayers")
const mainBorderTop = document.getElementById("mainBorderTop")
const showOtherInfo = document.getElementById("showOtherInfo")
const accouncement = document.getElementById("announcement")

hide.addEventListener("click", () =>{
    hide.classList.toggle("rotate");
    hidePlayers.classList.toggle("hide");
    mainBorderTop.classList.toggle("hide")
})

refresh.addEventListener("click", () =>{
    location.reload();
})

addMe.addEventListener("click", () =>{
    div = document.createElement("div")
    div.classList.add("dark")
    div.classList.add("border-top")
    div.classList.add("mainPlayerList")
    div.innerHTML =     `
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
})

courtSelect.forEach(button => {
    button.addEventListener("click", (e) => {
    e.target.closest(".courtItems").classList.toggle("selected");})
});

document.addEventListener("click", (event) => {
    if (event.target.closest(".trashCan")) {
      event.target.closest(".mainPlayerList").remove();
    }
  });

showOtherInfo.addEventListener("click", () =>{
    if (accouncement.classList.contains("hide")){
        accouncement.classList.toggle("hide");
        showOtherInfo.innerHTML = `Hide other info`
    }else{
        accouncement.classList.toggle("hide");
        showOtherInfo.innerHTML = `Show other info`
    }
})