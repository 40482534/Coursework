//Call Function when user scrolls
window.onscroll = function () { stickNavBar() };

//Get required elements by their IDs
var navbar = document.getElementById("navbar");

//Get element where first className where is close
var sticky = navbar.offsetTop;

//Function keeps navigation bar at the top of the page when scrolling: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
function stickNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
