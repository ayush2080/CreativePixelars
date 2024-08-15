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