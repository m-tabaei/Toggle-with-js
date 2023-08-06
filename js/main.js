let user = document.querySelector("i.karim");
let menuLeft = document.querySelector("div.menuLeft");
let cover = document.querySelector("div.cover");
let flag = true;
user.addEventListener("click", function () {
  this.classList.remove("fa", "fa-user");
  this.classList.add("fa", "fa-user-o");

  cover.classList.add("coverShow");
  menuLeft.classList.add("Left");
});
cover.addEventListener("click", function () {
  menuLeft.classList.remove("Left");
  cover.classList.remove("coverShow");

  user.classList.remove("fa", "fa-user-o");

  user.classList.add("fa", "fa-user");
});
