function onClickMenu() {
  var navbarElement = document.getElementById("nav-menu");
  if(!navbarElement.className.includes("active")) {
    navbarElement.classList.add("active");
  } else {
    navbarElement.classList.remove("active");
  }
}
