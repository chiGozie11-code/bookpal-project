const hamburger = document.querySelector(".ham");
const navsub = document.querySelector(".nav-sub");
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("change")
  navsub.classList.toggle("nav-change")
  navsub.style.display = "block";
});
function closeNav() {
  document.querySelector(".nav-sub").style.display = "none";
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  var tab1 = document.getElementById("tab-1");
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  tab1.style.display = "none";
}

window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});

var text = " our Mantra: Reading is fun and rewarding";
var i = 0;

function writeText() {
  if (i <= text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(writeText, 100);
  }
  else {
    setTimeout(function () {
      i = 0;
      document.getElementById("text").innerHTML = "";
      writeText();
    }, 5000); // repeat the process after 5 seconds
  }
}

writeText();


window.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  var winHeight = document.documentElement.clientHeight || window.innerHeight;
  var scrolled = (scrollTop / (scrollHeight - winHeight)) * 100;

  document.querySelector('.progress-line').style.width = scrolled + '%';
});




  var arry = ["images/banner1.png", "images/banner2.png", "images/banner3.png"];
  var index = 0;

  function baChange(dimg) {
    let bg = document.querySelector(".wrapper");
    bg.style.backgroundImage = "url(" + dimg + ")";
    setTimeout(() => {
      if (index >= arry.length) {
        index = 0;
      }
      baChange(arry[index])
      console.log('good');
    }, 5000);
    index++;
  }
  baChange(arry[index]);

// for image slider/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 900,
    autoplayHoverPause: true,

  });
});
// the end/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};


