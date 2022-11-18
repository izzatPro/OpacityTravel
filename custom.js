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
// Smooth Scrolling Start
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){     
      window.location.hash = hash;
        });
      } 
    });
  });
  // Smooth Scrolling End