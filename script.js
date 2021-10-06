// switch between different portfolio tabs-----------------------------------------------------------------------
let webDevTab = document.getElementById("tab-webdev");
let projTab = document.getElementById("tab-proj");
let researchTab = document.getElementById("tab-res");

let webdevCont = document.getElementById("cont-webdev");
let projCont = document.getElementById("cont-proj");
let researchCont = document.getElementById("cont-res");

let webdevTabRad = document.getElementById("radio-t-webdev");
let projTabRad = document.getElementById("radio-t-proj");
let resTabRad = document.getElementById("radio-t-res");

showTab();

function showTab() {
    if (webdevTabRad.checked == true) {
        projCont.style.display = "none";
        researchCont.style.display = "none";
        webdevCont.style.display = "block";
    }
    if (projTabRad.checked == true) {
        researchCont.style.display = "none";
        webdevCont.style.display = "none";
        projCont.style.display = "block";
    }
    if (resTabRad.checked == true) {
        projCont.style.display = "none";
        webdevCont.style.display = "none";
        researchCont.style.display = "block";
    }
}
webDevTab.addEventListener("click", () => {
    webdevTabRad.checked = true;
    showTab();
})
projTab.addEventListener("click", () => {
    projTabRad.checked = true;
    showTab();
})
researchTab.addEventListener("click", () => {
    resTabRad.checked = true;
    showTab();
})


// Show splash screen-------------------------------------------------------------------------------------------
window.addEventListener("load", () => {
    let loader = document.querySelector(".load-container");
    let main = document.querySelector(".main-content");
    loader.style.display = "none";
   main.style.display = "block";
 });


// Highlight different menu items when scroll to corresponding section -------------------------------------------
let sections = document.querySelectorAll("section")
let navLi = document.querySelectorAll(".navbar ul li")
function changeFocus() {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop-sectionHeight /4) {
            current = section.getAttribute("id");
        }
    });
    
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
}
window.onscroll = () => {
    changeFocus();
};


// Open and close menu--------------------------------------------------------------------------------------------
let menuButton = document.getElementById("btn-menu");
let navBar = document.getElementById("navbar");
let links = document.querySelectorAll('.nav-item');

function toggleMenu() {
    if (menuButton.classList) {
        menuButton.classList.toggle("menu-opened");
        navBar.classList.toggle("menu-opened");
    } else {
        // For IE9
        let classes = menuButton.className.split(" ");
        let i = classes.indexOf("menu-opened");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("menu-opened");
        menuButton.className = classes.join(" ");

        classes = navBar.className.split(" ");
        i = classes.indexOf("menu-opened");
        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("menu-opened");
        navBar.className = classes.join(" ");
    }

}
links.forEach(el => el.addEventListener('click', () => {
    toggleMenu();
}));
menuButton.addEventListener("click", () => {
    toggleMenu();
})



// Open and close tab item dropdown in mobile view----------------------------------------------------------------
let tabItemSelector = document.getElementById("item-selector");
let tabItemsCont =document.getElementById("tab-i-inner-cont");
let tabItems = document.querySelectorAll('.tab-item');
let tabItemsChck = document.getElementById("chk-tab-item");
let selectorText = document.getElementById("tab-item-text");

function toggleTabItems() {
    if (tabItemsChck.checked == true) {
        tabItemsChck.checked=false;
    }
    else{
        tabItemsChck.checked=true;
    }
}

tabItemSelector.addEventListener("click", () => {
    toggleTabItems();
})
tabItems.forEach(el => el.addEventListener('click', () => {
    selectorText.innerHTML = el.innerHTML;
    toggleTabItems();
}));
