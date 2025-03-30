document.getElementById('menuToggle').addEventListener('click', function() {
            var navbarContent = document.getElementById('navbarContent');
            navbarContent.classList.toggle('show');
            document.getElementById('menuToggle').classList.toggle('hide');
        });

        document.getElementById('closeMenu').addEventListener('click', function() {
            var navbarContent = document.getElementById('navbarContent');
            navbarContent.classList.remove('show');
            document.getElementById('menuToggle').classList.remove('hide');
        });

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

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


const bubbles = document.querySelectorAll('.bubble');

// Store bubble data (position and velocity for each bubble)
let bubbleData = [];

// Initialize bubbles with random positions and velocities
function initializeBubbles() {
  bubbles.forEach((bubble, index) => {
    // Random initial positions within the viewport
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Random velocities for movement (X and Y direction)
    const dx = (Math.random() - 0.5) * 2;  // Random horizontal velocity
    const dy = (Math.random() - 0.5) * 2;  // Random vertical velocity

    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    // Store bubble's initial position and velocity
    bubbleData.push({ x, y, dx, dy });
  });
}

// Function to move the bubbles and check for collisions
function moveBubbles() {
  bubbles.forEach((bubble, index) => {
    const data = bubbleData[index];

    // Update bubble position based on its velocity
    data.x += data.dx;
    data.y += data.dy;

    // Boundary detection: Reverse velocity if the bubble hits the edges
    if (data.x <= 0 || data.x >= window.innerWidth - 60) {
      data.dx = -data.dx;  // Reverse horizontal velocity if the bubble hits the edge
    }

    if (data.y <= 0 || data.y >= window.innerHeight - 60) {
      data.dy = -data.dy;  // Reverse vertical velocity if the bubble hits the edge
    }

    // Update bubble's position in the DOM
    bubble.style.left = `${data.x}px`;
    bubble.style.top = `${data.y}px`;

    // Check for collisions with other bubbles
    for (let i = 0; i < bubbles.length; i++) {
      if (i !== index) {
        const otherBubble = bubbles[i];
        const otherData = bubbleData[i];

        // Calculate the distance between two bubbles
        const distance = Math.sqrt(Math.pow(data.x - otherData.x, 2) + Math.pow(data.y - otherData.y, 2));

        // If bubbles collide, reverse their velocities
        if (distance < 60) { // 60 is the diameter of a bubble
          data.dx = -data.dx;
          data.dy = -data.dy;

          otherData.dx = -otherData.dx;
          otherData.dy = -otherData.dy;
        }
      }
    }
  });
}

// Start the animation loop
function animateBubbles() {
  moveBubbles();
  requestAnimationFrame(animateBubbles); // Continuously animate the bubbles
}

// Initialize bubbles and start the animation
initializeBubbles();
animateBubbles();


