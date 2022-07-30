let prevScrollpos = window.scrollY;
window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("top-nav-bar").style.top = "0";
    } else {
        document.getElementById("top-nav-bar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}