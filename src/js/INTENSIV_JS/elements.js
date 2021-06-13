let test3 = document.querySelector(".hamburger");
let sideNav = document.querySelector(".sideNav");
let navClose = document.querySelector(".sideNav-close");

window.onscroll = function() {

    if(window.scrollY >= 240) {
        test3.classList.add("onTop");
    }
    else {
        test3.classList.remove("onTop");
    }
}

test3.onclick = function(e) {
    e.stopPropagation();

    sideNav.style.right = "0";
}

sideNav.onclick = function(e) {
    e.stopPropagation()
}

document.onclick = function() {
    sideNav.style.right = "-300px";
}

navClose.onclick = function() {
    sideNav.style.right = "-300px";
}
