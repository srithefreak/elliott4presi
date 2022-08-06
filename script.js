function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "top-nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "top-nav-bar";
    }
}