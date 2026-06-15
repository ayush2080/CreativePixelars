const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function detectSystemTheme() {
  return mediaQuery.matches ? 'dark' : 'light';
}

// Initial load (safe)
window.addEventListener('DOMContentLoaded', () => {
  applyTheme(detectSystemTheme());
});

// Listener (cross-browser)
if (mediaQuery.addEventListener) {
  mediaQuery.addEventListener('change', (e) => {
    applyTheme(e.matches ? 'dark' : 'light');
  });
} else {
  mediaQuery.addListener((e) => {
    applyTheme(e.matches ? 'dark' : 'light');
  });
}

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
function openWorkpage() {
  window.open("Work.html", "#web");
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

function updateVideos() {

  // ✅ guard (prevents crash)
  if (!allTab) return;

  if (allTab.checked) {

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

filters.forEach(filter => {
  filter.addEventListener("change", updateVideos);
});

updateVideos();

/* Hover Play (for individual tabs) */

function hoverPlay(selector) {

  document.querySelectorAll(selector).forEach(card => {

    const video = card.querySelector("video");

    card.addEventListener("mouseenter", () => {
      if (!allTab.checked) {
        video.play();
      }
    });

    card.addEventListener("mouseleave", () => {
      if (!allTab.checked) {
        video.pause();
        video.currentTime = 0;
      }
    });

  });

}

function clickPlay(selector) {

  document.querySelectorAll(selector).forEach(card => {

    const video = card.querySelector("video");
    const btn = card.querySelector(".play-btn");

    card.addEventListener("click", () => {

      // ❗ ignore clicks in ALL tab
      if (allTab && allTab.checked) return;

      if (video.paused) {
        video.play();
        if (btn) btn.innerText = "❚❚";
      } else {
        video.pause();
        video.currentTime = 0;
        if (btn) btn.innerText = "▶";
      }

    });

  });

}

clickPlay(".card.motion");
clickPlay(".card.video");


/* COUNTER SCRIPT */

const counters = document.querySelectorAll(".counter");
const section = document.querySelector(".stats-section");

function runCounters() {

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const increment = target / 100;

    const updateCount = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });

}

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      counters.forEach(counter => counter.innerText = "0"); // reset
      runCounters();
    }

  });

}, { threshold: 0.5 });

if (section) {
  observer.observe(section);
}

// Tab filter logic for Services Page
const buttons = document.querySelectorAll('.tab-btn');
const cards = document.querySelectorAll('.service-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.tab-btn.active').classList.remove('active');
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');
    cards.forEach(card => {
      if (filter === 'all') {
        card.classList.remove('hide');
      } else {
        card.classList.toggle('hide', !card.classList.contains(filter));
      }
    });
  });
});

/*Work Page */

const workItems = document.querySelectorAll(".work-item");

workItems.forEach(item => {
  item.addEventListener("mousemove", (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    item.style.setProperty("--x", `${x}px`);
    item.style.setProperty("--y", `${y}px`);
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


window.addEventListener('DOMContentLoaded', () => {
    const tab = location.hash.replace('#', '').trim();

    if (!tab) return;

    const radio = document.getElementById(tab);

    if (radio) {
        radio.checked = true;
    } else {
        console.warn("No radio found for:", tab);
    }
});
