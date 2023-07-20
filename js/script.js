// clicked  menu for the bar

const bars = document.querySelector(".bar");
const menu = document.querySelector("#click-menu");

bars.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});
