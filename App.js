let yourName = document.getElementById("yourName")
const hide = document.getElementById("hideButton")
const hidePlayers = document.querySelectorAll(".mainPlayerList")
const refresh = document.getElementById("refresh")
const info = document.getElementById("info")
const remove = document.querySelectorAll(".fa-trash-can")
const addMe = document.getElementById("addMe")
const courtSelect = document.querySelectorAll(".courtItems")

hide.addEventListener("click", () =>{
    hide.classList.toggle("rotate");
    hidePlayers.forEach(hidePlayers => hidePlayers.classList.toggle("hide"));
})

refresh.addEventListener("click", () =>{
    location.reload();
})

remove.forEach(button => {
    button.addEventListener("click", (e) => {
      e.target.closest(".mainPlayerList").remove();
    })
  });

addMe.addEventListener("click", () =>{
    return;
})

courtSelect.forEach(button => {
    button.addEventListener("click", (e) => {
    e.target.closest(".courtItems").classList.toggle("selected");})
});