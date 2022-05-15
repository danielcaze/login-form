const elems = document.querySelectorAll(".active")

let state = false;

showPassword.addEventListener("click", () => {
  if (state) {
    for (i = 0; i < elems.length; i++) {
      elems[i].style.stroke = "#AFB6C2";
    }
    password.focus()
    password.setAttribute("type", "password");
    state = false;
  } else {
    for (i = 0; i < elems.length; i++) {
      elems[i].style.stroke = "#FFC632";
    }
    password.focus()
    password.setAttribute("type", "text");
    state = true;
  }
});