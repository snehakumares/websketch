

window.onload = function(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

function openPage(pageName, elmnt, name) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    if(tabcontent.display=="none"){
        elmnt="topnav";
    }
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    if(pageName=="Errorpage"){
        document.getElementById(pageName).style.display = "flex";
    }
    if (elmnt == "topnav") {
        var topnav = document.getElementById("myTopnav");
        var i;
        topnav.className = "topnav";
    }
    show = document.getElementById("show");
    show.innerHTML = name;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("clientSlides");
    if (n > slides.length) { slideIndex1 = 1 }
    if (n < 1) { slideIndex1 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1 - 1].style.display = "flex";
}

var enqueryclick = document.getElementById("enquiryclick");
var cq = document.getElementById("closequery");
var querymodal = document.getElementById("query");
enqueryclick.onclick = function() {
    querymodal.style.display = "flex";
}
cq.onclick = function() {
    querymodal.style.display = "none";
}
