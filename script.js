window.onscroll = function(){stickyFunc()};
var tabnav = document.getElementById("myTabnav");
var sticky = tabnav.offsetTop;
function stickyFunc(){
    if (window.pageYOffset >= sticky) {
        tabnav.classList.add("sticky")
      } else {
        tabnav.classList.remove("sticky");
      }   
}

function openPage(pageName, elmnt, name) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    if (pageName == "Contact" || pageName == "Category_1") {
        document.getElementById(pageName).style.display = "flex";
    }
    if (elmnt == "topnav") {
        var topnav = document.getElementById("myTopnav");
        var i;
        topnav.className = "topnav";
        show = document.getElementById("show");
        show.innerHTML = name;
    }
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
