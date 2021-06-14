let header1 = document.querySelector(".header1");
let header2 = document.querySelector(".header2");

let hamburger = document.querySelector(".hamburger");
let sideNav = document.querySelector(".sideNav");
let navClose = document.querySelector(".sideNav-close");

window.onscroll = function() {
    if(window.scrollY >= 200) {
        header1.classList.add("hidden");
        header2.classList.remove("hidden");
    }
    else {
        header1.classList.remove("hidden");
        header2.classList.add("hidden");
    }

    if(window.scrollY >= 640) {
        hamburger.classList.add("onTop");
    }
    else {
        hamburger.classList.remove("onTop");
    }
}

hamburger.onclick = function(e) {
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



