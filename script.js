document.getElementById('menuToggle').addEventListener('click', function () {
  var navbarContent = document.getElementById('navbarContent');
  navbarContent.classList.toggle('show');
  document.getElementById('menuToggle').classList.toggle('hide');
});

document.getElementById('closeMenu').addEventListener('click', function () {
  var navbarContent = document.getElementById('navbarContent');
  navbarContent.classList.remove('show');
  document.getElementById('menuToggle').classList.remove('hide');
});

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
  window.open("Contact Us.html", "_blank");
}

function openAboutPage() {
  window.open("About Us.html", "_blank");
}
function openServices() {
  window.open("Our Services.html", "_blank");
}

function openWork() {
  window.open("Our Work.html", "_blank");
}

function openQuoteForm() {
  window.open("Quote.html", "_blank");
}


// JavaScript to type the text
const text = "Creative Pixelars !";
let index = 0;
const speed = 100; // Speed of typing in milliseconds
const waitTime = 2000; // Time to wait before resetting

// Get the element where text will be displayed
const typewriterElement = document.getElementById('typewriter');

// Function to type out the text
function type() {
  if (index < text.length) {
    // Add the next character to the content
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed); // Call the function again after the delay
  } else {
    // Reset after the full text is typed
    setTimeout(() => {
      typewriterElement.innerHTML = ''; // Clear the text
      index = 0; // Reset the index
      type(); // Start typing again
    }, waitTime); // Wait for the specified time before starting over
  }
}

// Start typing when the page loads
window.onload = () => {
  type();
};

document.addEventListener('DOMContentLoaded', function () {
  type(); // Call the typewriter effect when the DOM is ready
});





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