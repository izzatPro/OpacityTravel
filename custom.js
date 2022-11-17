// Navbar Sticky

// When the user scrolls the page, execute myFunction
window.onscroll = function(){
    myFunction();
};

// Get the navbar
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
console.log(sticky);
console.log(navbar);
function myFunction() {
    if(window.pageYOffset >= sticky){
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }