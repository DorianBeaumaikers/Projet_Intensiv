let test = document.querySelector(".header1");
let test2 = document.querySelector(".header2");

let test3 = document.querySelector(".hamburger");
let sideNav = document.querySelector(".sideNav");
let navClose = document.querySelector(".sideNav-close");

window.onscroll = function() {
    console.log(window.scrollY);
    if(window.scrollY >= 200) {
        test.classList.add("hidden");
        test2.classList.remove("hidden");
    }
    else {
        test.classList.remove("hidden");
        test2.classList.add("hidden");
    }

    if(window.scrollY >= 640) {
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



