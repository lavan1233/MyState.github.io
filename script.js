let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
  loader.style.display = "none";
})
window.addEventListener("load", function() {
  setTimeout(
    function open(event) {
      document.querySelector(".popup").style.display = "block";
    },
    3000
  )
})
document.querySelector("#close").addEventListener
  ("click", function() {
    document.querySelector(".popup").style.display = "none";
  })
document.addEventListener('keydown', function(e) {
  if (e.key == 'q') { // Remember:- Small letters will only work with this
    document.getElementById('Piano').play()
  }
  else if (e.key == 'a') {
    document.getElementById('Piano').pause()
  }
})


