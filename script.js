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





