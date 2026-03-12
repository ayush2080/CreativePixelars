document.getElementById('menuToggle').addEventListener('click', function () {
  const navbarContent = document.getElementById('navbarContent');
  navbarContent.classList.toggle('show');
  document.getElementById('menuToggle').classList.toggle('hide');
  document.body.classList.add('lock-scroll');
});

document.getElementById('closeMenu').addEventListener('click', function () {
  const navbarContent = document.getElementById('navbarContent');
  navbarContent.classList.remove('show');
  document.getElementById('menuToggle').classList.remove('hide');
  document.body.classList.remove('lock-scroll');
});

window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});


// Lock scroll
document.body.classList.add('lock-scroll');


// Unlock scroll
document.body.classList.remove('lock-scroll');




// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);


})


// Function to open a webpage when button is clicked
function openWebPage() {
  window.open("Contact.html", "_blank");
}

function openAboutPage() {
  window.open("About.html", "_blank");
}
function openServices() {
  window.open("Services.html", "_blank");
}

function openWork() {
  window.open("Work.html", "_blank");
}

function openQuoteForm() {
  window.open("Quote.html", "_blank");
}


// JavaScript to type the text
const text = "Your Brand, Our Canvas";
let index = 0;
const speed = 100; // typing speed in ms
const waitTime = 2000; // wait before resetting

function typewriter() {
  const typewriterElement = document.getElementById('typewriter');

  // Only proceed if the element exists
  if (!typewriterElement) return;

  if (index < text.length) {
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typewriter, speed);
  } else {
    setTimeout(() => {
      typewriterElement.innerHTML = ''; // Clear text
      index = 0;
      typewriter(); // Start again
    }, waitTime);
  }
}

// Start typing **after DOM is fully loaded
document.addEventListener('DOMContentLoaded', typewriter);



window.onload = function () {
  // Prevent scroll while loading
  document.body.classList.add('no-scroll');

  // Show loader (optional since it's already shown by default)
  document.getElementById('loader').style.display = 'flex';

  // Simulate fetching data (e.g., from an API)
  setTimeout(function () {
    // Fade out loader
    const loaderWrapper = document.getElementById('loaderWrapper');
    loaderWrapper.style.opacity = '0';
    loaderWrapper.style.visibility = 'hidden';

    // Re-enable scrolling after loader is gone
    document.body.classList.remove('no-scroll');

    // Show your main content
    document.getElementById('content').classList.add('visible');
  }, 2200); // Adjust time as needed
};


/* Script for Image scaling (Zoom in and Zoom out effect) animation*/

document.addEventListener("DOMContentLoaded", function () {
  // Image hover effects
  const imageContainers = document.querySelectorAll(".responsive-image-container img");

  imageContainers.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transition = "transform 0.5s ease-out";
      img.style.transform = "scale(1.1)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transition = "transform 0.7s ease-in-out";
      img.style.transform = "scale(1)";
    });
  });

  // Video hover effects
  const videoContainers = document.querySelectorAll(".video-container video");

  videoContainers.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.style.transition = "transform 0.5s ease-out";
      video.style.transform = "scale(1.1)";
    });

    video.addEventListener("mouseleave", () => {
      video.style.transition = "transform 0.7s ease-in-out";
      video.style.transform = "scale(1)";
    });
  });
});

/* Work Page Script */



const motionVideos = document.querySelectorAll(".card.motion video");
const editVideos = document.querySelectorAll(".card.video video");

const allTab = document.getElementById("all");
const filters = document.querySelectorAll('input[name="filter"]');

function updateVideos(){

  if(allTab.checked){

    // autoplay both types in ALL tab
    motionVideos.forEach(video => video.play());
    editVideos.forEach(video => video.play());

  } else {

    // pause everything when not ALL
    motionVideos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

    editVideos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });

  }

}

filters.forEach(filter=>{
  filter.addEventListener("change", updateVideos);
});

updateVideos();

/* Hover Play (for individual tabs) */

function hoverPlay(selector){

  document.querySelectorAll(selector).forEach(card=>{

    const video = card.querySelector("video");

    card.addEventListener("mouseenter", ()=>{
      if(!allTab.checked){
        video.play();
      }
    });

    card.addEventListener("mouseleave", ()=>{
      if(!allTab.checked){
        video.pause();
        video.currentTime = 0;
      }
    });

  });

}

hoverPlay(".card.motion");
hoverPlay(".card.video");


/* COUNTER SCRIPT */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});



